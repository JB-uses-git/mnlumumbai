import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase, uploadSiteMedia } from '../../lib/supabaseClient'
import {
  Users,
  Calendar,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  ExternalLink,
  Upload,
  CheckCircle2,
  AlertCircle,
  X,
  Loader2,
  Image as ImageIcon,
  Check,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState('')
  const [activeTab, setActiveTab] = useState('people') // 'people' | 'events'

  // Toast Notification State
  const [toast, setToast] = useState(null) // { type: 'success' | 'error', message: string }
  const showToast = (message, type = 'success') => {
    setToast({ type, message })
    setTimeout(() => {
      setToast(null)
    }, 4000)
  }

  // --- PEOPLE STATE ---
  const [people, setPeople] = useState([])
  const [peopleLoading, setPeopleLoading] = useState(true)
  const [peopleCategoryFilter, setPeopleCategoryFilter] = useState('all') // 'all' | 'faculty' | 'office_bearer'
  const [personModalOpen, setPersonModalOpen] = useState(false)
  const [editingPersonId, setEditingPersonId] = useState(null)
  const [personForm, setPersonForm] = useState({
    name: '',
    role: '',
    category: 'faculty',
    image_url: '',
    quote: '',
    order_index: 0
  })
  const [personImageFile, setPersonImageFile] = useState(null)
  const [personImagePreview, setPersonImagePreview] = useState('')
  const [personSubmitting, setPersonSubmitting] = useState(false)
  const personFileInputRef = useRef(null)

  // --- EVENTS STATE ---
  const [events, setEvents] = useState([])
  const [eventsLoading, setEventsLoading] = useState(true)
  const [eventStatusFilter, setEventStatusFilter] = useState('all') // 'all' | 'upcoming' | 'completed'
  const [eventModalOpen, setEventModalOpen] = useState(false)
  const [editingEventId, setEditingEventId] = useState(null)
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    description: '',
    image_url: '',
    link: '',
    category: 'General',
    status: 'upcoming'
  })
  const [eventImageFile, setEventImageFile] = useState(null)
  const [eventImagePreview, setEventImagePreview] = useState('')
  const [eventSubmitting, setEventSubmitting] = useState(false)
  const eventFileInputRef = useRef(null)

  // Load User Info
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserEmail(user.email || 'Admin')
      }
    })
  }, [])

  // Fetch People
  const fetchPeople = async () => {
    try {
      setPeopleLoading(true)
      const { data, error } = await supabase
        .from('people')
        .select('*')
        .order('order_index', { ascending: true })
        .order('created_at', { ascending: true })

      if (error) throw error
      setPeople(data || [])
    } catch (err) {
      console.error('Error fetching people:', err)
      showToast(err.message || 'Could not load people records.', 'error')
    } finally {
      setPeopleLoading(false)
    }
  }

  // Fetch Events
  const fetchEvents = async () => {
    try {
      setEventsLoading(true)
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setEvents(data || [])
    } catch (err) {
      console.error('Error fetching events:', err)
      showToast(err.message || 'Could not load events records.', 'error')
    } finally {
      setEventsLoading(false)
    }
  }

  useEffect(() => {
    fetchPeople()
    fetchEvents()
  }, [])

  // Logout Handler
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      navigate('/admin/login', { replace: true })
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  // --- PEOPLE HANDLERS ---
  const handleOpenAddPerson = () => {
    setEditingPersonId(null)
    setPersonForm({
      name: '',
      role: '',
      category: 'faculty',
      image_url: '',
      quote: '',
      order_index: people.length
    })
    setPersonImageFile(null)
    setPersonImagePreview('')
    setPersonModalOpen(true)
  }

  const handleOpenEditPerson = (person) => {
    setEditingPersonId(person.id)
    setPersonForm({
      name: person.name || '',
      role: person.role || '',
      category: person.category || 'faculty',
      image_url: person.image_url || '',
      quote: person.quote || '',
      order_index: person.order_index ?? 0
    })
    setPersonImageFile(null)
    setPersonImagePreview(person.image_url || '')
    setPersonModalOpen(true)
  }

  const handlePersonFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setPersonImageFile(file)
      setPersonImagePreview(URL.createObjectURL(file))
    }
  }

  const handlePersonSubmit = async (e) => {
    e.preventDefault()
    if (!personForm.name.trim() || !personForm.role.trim()) {
      showToast('Name and Role are required.', 'error')
      return
    }

    setPersonSubmitting(true)
    try {
      let finalImageUrl = personForm.image_url

      // Upload image if a new file was chosen
      if (personImageFile) {
        finalImageUrl = await uploadSiteMedia(personImageFile, 'people')
      }

      const payload = {
        name: personForm.name.trim(),
        role: personForm.role.trim(),
        category: personForm.category,
        image_url: finalImageUrl,
        quote: personForm.quote?.trim() || null,
        order_index: Number(personForm.order_index) || 0
      }

      if (editingPersonId) {
        const { error } = await supabase
          .from('people')
          .update(payload)
          .eq('id', editingPersonId)
        if (error) throw error
        showToast('Member updated successfully!')
      } else {
        const { error } = await supabase.from('people').insert([payload])
        if (error) throw error
        showToast('New member added successfully!')
      }

      setPersonModalOpen(false)
      fetchPeople()
    } catch (err) {
      console.error('Error saving person:', err)
      showToast(err.message || 'Failed to save member.', 'error')
    } finally {
      setPersonSubmitting(false)
    }
  }

  const handleDeletePerson = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return

    try {
      const { error } = await supabase.from('people').delete().eq('id', id)
      if (error) throw error
      showToast(`Deleted ${name}`)
      fetchPeople()
    } catch (err) {
      console.error('Error deleting person:', err)
      showToast(err.message || 'Failed to delete member.', 'error')
    }
  }

  // --- EVENTS HANDLERS ---
  const handleOpenAddEvent = () => {
    setEditingEventId(null)
    setEventForm({
      title: '',
      date: '',
      description: '',
      image_url: '',
      link: '',
      category: 'General',
      status: 'upcoming'
    })
    setEventImageFile(null)
    setEventImagePreview('')
    setEventModalOpen(true)
  }

  const handleOpenEditEvent = (event) => {
    setEditingEventId(event.id)
    setEventForm({
      title: event.title || '',
      date: event.date || '',
      description: event.description || '',
      image_url: event.image_url || '',
      link: event.link || '',
      category: event.category || 'General',
      status: event.status || 'upcoming'
    })
    setEventImageFile(null)
    setEventImagePreview(event.image_url || '')
    setEventModalOpen(true)
  }

  const handleEventFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setEventImageFile(file)
      setEventImagePreview(URL.createObjectURL(file))
    }
  }

  const handleEventSubmit = async (e) => {
    e.preventDefault()
    if (!eventForm.title.trim() || !eventForm.date.trim()) {
      showToast('Title and Date are required.', 'error')
      return
    }

    setEventSubmitting(true)
    try {
      let finalImageUrl = eventForm.image_url

      if (eventImageFile) {
        finalImageUrl = await uploadSiteMedia(eventImageFile, 'events')
      }

      const payload = {
        title: eventForm.title.trim(),
        date: eventForm.date.trim(),
        description: eventForm.description?.trim() || null,
        image_url: finalImageUrl,
        link: eventForm.link?.trim() || null,
        category: eventForm.category?.trim() || 'General',
        status: eventForm.status
      }

      if (editingEventId) {
        const { error } = await supabase
          .from('events')
          .update(payload)
          .eq('id', editingEventId)
        if (error) throw error
        showToast('Event updated successfully!')
      } else {
        const { error } = await supabase.from('events').insert([payload])
        if (error) throw error
        showToast('New event created successfully!')
      }

      setEventModalOpen(false)
      fetchEvents()
    } catch (err) {
      console.error('Error saving event:', err)
      showToast(err.message || 'Failed to save event.', 'error')
    } finally {
      setEventSubmitting(false)
    }
  }

  const handleDeleteEvent = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete event "${title}"?`)) return

    try {
      const { error } = await supabase.from('events').delete().eq('id', id)
      if (error) throw error
      showToast(`Deleted "${title}"`)
      fetchEvents()
    } catch (err) {
      console.error('Error deleting event:', err)
      showToast(err.message || 'Failed to delete event.', 'error')
    }
  }

  const handleToggleEventStatus = async (event) => {
    const nextStatus = event.status === 'upcoming' ? 'completed' : 'upcoming'
    try {
      const { error } = await supabase
        .from('events')
        .update({ status: nextStatus })
        .eq('id', event.id)
      if (error) throw error
      showToast(`Marked "${event.title}" as ${nextStatus}`)
      fetchEvents()
    } catch (err) {
      console.error('Error toggling status:', err)
      showToast(err.message || 'Failed to toggle status.', 'error')
    }
  }

  // Filtered lists
  const filteredPeople = people.filter((p) => {
    if (peopleCategoryFilter === 'all') return true
    return p.category === peopleCategoryFilter
  })

  const filteredEvents = events.filter((e) => {
    if (eventStatusFilter === 'all') return true
    return e.status === eventStatusFilter
  })

  return (
    <div className="min-h-screen bg-[#FEFDF5] text-[#43302E]">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border text-sm font-semibold transition-all transform animate-bounce ${
            toast.type === 'error'
              ? 'bg-red-50 border-red-300 text-red-800'
              : 'bg-emerald-50 border-emerald-300 text-emerald-800'
          }`}
        >
          {toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-red-600" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#43302E]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#43302E] text-[#FFE8A3] flex items-center justify-center font-bold text-lg shadow-sm">
              C
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#43302E] text-base sm:text-lg">CALSTAR CMS</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FFE8A3] text-[#43302E]">
                  Admin
                </span>
              </div>
              <p className="text-xs text-[#43302E]/60 hidden sm:block">MNLU Mumbai Content Management</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-xs font-medium text-[#43302E]/70 hidden md:inline-block">
              Logged in as <strong className="text-[#43302E]">{userEmail}</strong>
            </span>

            <Link
              to="/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#43302E]/20 text-xs font-semibold text-[#43302E] hover:bg-[#43302E]/5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Live Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#43302E]/10 pb-5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('people')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'people'
                  ? 'bg-[#43302E] text-[#FFE8A3] shadow-md shadow-[#43302E]/10'
                  : 'bg-white text-[#43302E]/70 hover:text-[#43302E] border border-[#43302E]/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>People Management</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 ml-1">
                {people.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-[#43302E] text-[#FFE8A3] shadow-md shadow-[#43302E]/10'
                  : 'bg-white text-[#43302E]/70 hover:text-[#43302E] border border-[#43302E]/10'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Events Management</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 ml-1">
                {events.length}
              </span>
            </button>
          </div>

          <div>
            {activeTab === 'people' ? (
              <button
                onClick={handleOpenAddPerson}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#43302E] hover:bg-[#2e211f] text-[#FFE8A3] text-sm font-bold shadow-md shadow-[#43302E]/10 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Member</span>
              </button>
            ) : (
              <button
                onClick={handleOpenAddEvent}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#43302E] hover:bg-[#2e211f] text-[#FFE8A3] text-sm font-bold shadow-md shadow-[#43302E]/10 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Event</span>
              </button>
            )}
          </div>
        </div>

        {/* ----------------- TAB 1: PEOPLE ----------------- */}
        {activeTab === 'people' && (
          <div className="mt-6 space-y-6">
            {/* Filter pills */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-[#43302E]/10">
                <button
                  onClick={() => setPeopleCategoryFilter('all')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    peopleCategoryFilter === 'all'
                      ? 'bg-[#43302E] text-[#FFE8A3]'
                      : 'text-[#43302E]/70 hover:text-[#43302E]'
                  }`}
                >
                  All ({people.length})
                </button>
                <button
                  onClick={() => setPeopleCategoryFilter('faculty')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    peopleCategoryFilter === 'faculty'
                      ? 'bg-[#43302E] text-[#FFE8A3]'
                      : 'text-[#43302E]/70 hover:text-[#43302E]'
                  }`}
                >
                  Faculty ({people.filter((p) => p.category === 'faculty').length})
                </button>
                <button
                  onClick={() => setPeopleCategoryFilter('office_bearer')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    peopleCategoryFilter === 'office_bearer'
                      ? 'bg-[#43302E] text-[#FFE8A3]'
                      : 'text-[#43302E]/70 hover:text-[#43302E]'
                  }`}
                >
                  Office Bearers ({people.filter((p) => p.category === 'office_bearer').length})
                </button>
              </div>

              <p className="text-xs text-[#43302E]/60 hidden md:block">
                Drag or order index controls placement on the public Faculty page.
              </p>
            </div>

            {/* People Cards Grid */}
            {peopleLoading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 animate-spin text-[#43302E]" />
                <p className="text-xs font-medium text-[#43302E]/70">Loading team members...</p>
              </div>
            ) : filteredPeople.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-[#43302E]/20 p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[#FFE8A3]/50 mx-auto flex items-center justify-center text-[#43302E] mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#43302E]">No members found</h3>
                <p className="text-xs text-[#43302E]/70 mt-1 max-w-sm mx-auto">
                  {peopleCategoryFilter === 'all'
                    ? 'Get started by adding your faculty mentors or student office bearers.'
                    : `No members listed under "${peopleCategoryFilter}".`}
                </p>
                <button
                  onClick={handleOpenAddPerson}
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#43302E] text-[#FFE8A3] text-xs font-bold shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add First Member
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPeople.map((person) => (
                  <div
                    key={person.id}
                    className="bg-white rounded-2xl border border-[#43302E]/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#FEFDF5] border border-[#43302E]/10 shrink-0 flex items-center justify-center text-[#43302E]">
                          {person.image_url ? (
                            <img
                              src={person.image_url}
                              alt={person.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Users className="w-8 h-8 text-[#43302E]/40" />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                person.category === 'faculty'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-indigo-100 text-indigo-800'
                              }`}
                            >
                              {person.category === 'faculty' ? 'Faculty' : 'Office Bearer'}
                            </span>
                            <span className="text-[10px] text-[#43302E]/50 font-mono">
                              #{person.order_index ?? 0}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-[#43302E] truncate mt-1">
                            {person.name}
                          </h4>
                          <p className="text-xs text-[#43302E]/70 line-clamp-1">{person.role}</p>
                        </div>
                      </div>

                      {person.quote && (
                        <div className="mt-3.5 p-3 rounded-xl bg-[#FEFDF5] border border-[#43302E]/10 text-xs italic text-[#43302E]/80 line-clamp-2">
                          “{person.quote}”
                        </div>
                      )}
                    </div>

                    <div className="px-5 py-3 bg-[#FEFDF5] border-t border-[#43302E]/10 flex items-center justify-between">
                      <span className="text-[11px] text-[#43302E]/60">
                        {person.quote ? 'Quotes in Carousel' : 'Profile Only'}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenEditPerson(person)}
                          className="p-1.5 rounded-lg hover:bg-white text-[#43302E]/80 hover:text-[#43302E] border border-transparent hover:border-[#43302E]/10 transition-colors"
                          title="Edit Member"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeletePerson(person.id, person.name)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-red-600 border border-transparent hover:border-red-200 transition-colors"
                          title="Delete Member"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ----------------- TAB 2: EVENTS ----------------- */}
        {activeTab === 'events' && (
          <div className="mt-6 space-y-6">
            {/* Filter pills */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-[#43302E]/10">
                <button
                  onClick={() => setEventStatusFilter('all')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    eventStatusFilter === 'all'
                      ? 'bg-[#43302E] text-[#FFE8A3]'
                      : 'text-[#43302E]/70 hover:text-[#43302E]'
                  }`}
                >
                  All ({events.length})
                </button>
                <button
                  onClick={() => setEventStatusFilter('upcoming')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    eventStatusFilter === 'upcoming'
                      ? 'bg-[#43302E] text-[#FFE8A3]'
                      : 'text-[#43302E]/70 hover:text-[#43302E]'
                  }`}
                >
                  Upcoming ({events.filter((e) => e.status === 'upcoming').length})
                </button>
                <button
                  onClick={() => setEventStatusFilter('completed')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    eventStatusFilter === 'completed'
                      ? 'bg-[#43302E] text-[#FFE8A3]'
                      : 'text-[#43302E]/70 hover:text-[#43302E]'
                  }`}
                >
                  Past ({events.filter((e) => e.status === 'completed').length})
                </button>
              </div>

              <p className="text-xs text-[#43302E]/60 hidden md:block">
                Toggle status at any time without deleting historical records.
              </p>
            </div>

            {/* Events Cards Grid */}
            {eventsLoading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 animate-spin text-[#43302E]" />
                <p className="text-xs font-medium text-[#43302E]/70">Loading events...</p>
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-[#43302E]/20 p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[#FFE8A3]/50 mx-auto flex items-center justify-center text-[#43302E] mb-3">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#43302E]">No events found</h3>
                <p className="text-xs text-[#43302E]/70 mt-1 max-w-sm mx-auto">
                  {eventStatusFilter === 'all'
                    ? 'Add competitions, conferences, call for blogs, and workshops.'
                    : `No events currently marked as "${eventStatusFilter}".`}
                </p>
                <button
                  onClick={handleOpenAddEvent}
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#43302E] text-[#FFE8A3] text-xs font-bold shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add First Event
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="bg-white rounded-2xl border border-[#43302E]/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {evt.image_url && (
                        <div className="w-full h-44 overflow-hidden bg-zinc-100">
                          <img
                            src={evt.image_url}
                            alt={evt.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              evt.status === 'upcoming'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {evt.status === 'upcoming' ? 'Upcoming' : 'Past'}
                          </span>

                          {evt.category && (
                            <span className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[#FFE8A3] text-[#43302E]">
                              {evt.category}
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-[#43302E]">{evt.title}</h3>

                        <div className="mt-2.5 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#43302E]/75">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#43302E]/50" />
                            <span>{evt.date}</span>
                          </div>
                          {evt.link && (
                            <a
                              href={evt.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-[#43302E] font-medium underline underline-offset-2 hover:opacity-80"
                            >
                              <span>Registration Link</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        {evt.description && (
                          <p className="mt-3 text-xs leading-relaxed text-[#43302E]/80 line-clamp-3">
                            {evt.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="px-5 py-3 bg-[#FEFDF5] border-t border-[#43302E]/10 flex items-center justify-between">
                      <button
                        onClick={() => handleToggleEventStatus(evt)}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                          evt.status === 'upcoming'
                            ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                            : 'border-emerald-300 text-emerald-800 bg-emerald-50 hover:bg-emerald-100'
                        }`}
                      >
                        {evt.status === 'upcoming' ? 'Mark as Completed' : 'Mark as Upcoming'}
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenEditEvent(evt)}
                          className="p-1.5 rounded-lg hover:bg-white text-[#43302E]/80 hover:text-[#43302E] border border-transparent hover:border-[#43302E]/10 transition-colors"
                          title="Edit Event"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(evt.id, evt.title)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-red-600 border border-transparent hover:border-red-200 transition-colors"
                          title="Delete Event"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* ============================================================== */}
      {/* MODAL: ADD / EDIT PERSON */}
      {/* ============================================================== */}
      {personModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#43302E]/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#43302E]/15 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#43302E]/10">
              <h3 className="text-lg font-bold text-[#43302E]">
                {editingPersonId ? 'Edit Team Member' : 'Add Team Member'}
              </h3>
              <button
                onClick={() => setPersonModalOpen(false)}
                className="p-1 rounded-lg text-[#43302E]/50 hover:text-[#43302E] hover:bg-[#FEFDF5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePersonSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={personForm.name}
                  onChange={(e) => setPersonForm({ ...personForm, name: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Kumar"
                  className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                  Role / Title *
                </label>
                <input
                  type="text"
                  required
                  value={personForm.role}
                  onChange={(e) => setPersonForm({ ...personForm, role: e.target.value })}
                  placeholder="e.g. Assistant Professor of Economics / Student Convener"
                  className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                    Category *
                  </label>
                  <select
                    value={personForm.category}
                    onChange={(e) => setPersonForm({ ...personForm, category: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                  >
                    <option value="faculty">Faculty</option>
                    <option value="office_bearer">Office Bearer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                    Order Index
                  </label>
                  <input
                    type="number"
                    value={personForm.order_index}
                    onChange={(e) => setPersonForm({ ...personForm, order_index: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                  />
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                  Profile Photo
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#FEFDF5] border border-[#43302E]/20 shrink-0 flex items-center justify-center text-[#43302E]">
                    {personImagePreview ? (
                      <img
                        src={personImagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-[#43302E]/40" />
                    )}
                  </div>

                  <div className="flex-1">
                    <input
                      type="file"
                      ref={personFileInputRef}
                      accept="image/*"
                      onChange={handlePersonFileSelect}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => personFileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FEFDF5] hover:bg-[#FFE8A3]/30 border border-[#43302E]/20 rounded-lg text-xs font-semibold text-[#43302E] cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      {personImageFile ? 'Change Selected Image' : 'Upload Photo'}
                    </button>
                    <p className="text-[11px] text-[#43302E]/60 mt-1">
                      JPG, PNG or WEBP. Uploads to Supabase storage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote / Testimonial */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                  Quote / Testimonial (Optional)
                </label>
                <textarea
                  rows={3}
                  value={personForm.quote}
                  onChange={(e) => setPersonForm({ ...personForm, quote: e.target.value })}
                  placeholder="Words or testimonial to showcase on the editorial carousel..."
                  className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t border-[#43302E]/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setPersonModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-[#43302E]/20 text-xs font-bold text-[#43302E] hover:bg-[#FEFDF5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={personSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#43302E] hover:bg-[#2e211f] text-[#FFE8A3] text-xs font-bold shadow-sm disabled:opacity-50 cursor-pointer"
                >
                  {personSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  {editingPersonId ? 'Update Member' : 'Save Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: ADD / EDIT EVENT */}
      {/* ============================================================== */}
      {eventModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#43302E]/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#43302E]/15 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#43302E]/10">
              <h3 className="text-lg font-bold text-[#43302E]">
                {editingEventId ? 'Edit Event' : 'Add New Event'}
              </h3>
              <button
                onClick={() => setEventModalOpen(false)}
                className="p-1 rounded-lg text-[#43302E]/50 hover:text-[#43302E] hover:bg-[#FEFDF5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleEventSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                  Event Title *
                </label>
                <input
                  type="text"
                  required
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  placeholder="e.g. National Blog Writing Competition"
                  className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                    Date / Schedule *
                  </label>
                  <input
                    type="text"
                    required
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    placeholder="e.g. March 25, 2026 or Dates to be announced"
                    className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                    Status *
                  </label>
                  <select
                    value={eventForm.status}
                    onChange={(e) => setEventForm({ ...eventForm, status: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed / Past</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={eventForm.category}
                    onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })}
                    placeholder="e.g. Competition / Publication"
                    className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                    Registration / Info Link
                  </label>
                  <input
                    type="url"
                    value={eventForm.link}
                    onChange={(e) => setEventForm({ ...eventForm, link: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                  />
                </div>
              </div>

              {/* Event Poster Upload */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                  Poster / Header Image
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-14 rounded-xl overflow-hidden bg-[#FEFDF5] border border-[#43302E]/20 shrink-0 flex items-center justify-center text-[#43302E]">
                    {eventImagePreview ? (
                      <img
                        src={eventImagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-[#43302E]/40" />
                    )}
                  </div>

                  <div className="flex-1">
                    <input
                      type="file"
                      ref={eventFileInputRef}
                      accept="image/*"
                      onChange={handleEventFileSelect}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => eventFileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FEFDF5] hover:bg-[#FFE8A3]/30 border border-[#43302E]/20 rounded-lg text-xs font-semibold text-[#43302E] cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      {eventImageFile ? 'Change Poster' : 'Upload Poster Image'}
                    </button>
                    <p className="text-[11px] text-[#43302E]/60 mt-1">
                      Event flyers, banners, or graphic announcements.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#43302E] mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={eventForm.description}
                  onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                  placeholder="Details, eligibility, submission guidelines, prizes..."
                  className="w-full px-3 py-2 bg-[#FEFDF5] border border-[#43302E]/20 rounded-lg text-sm text-[#43302E] focus:ring-2 focus:ring-[#43302E] focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t border-[#43302E]/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEventModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-[#43302E]/20 text-xs font-bold text-[#43302E] hover:bg-[#FEFDF5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={eventSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#43302E] hover:bg-[#2e211f] text-[#FFE8A3] text-xs font-bold shadow-sm disabled:opacity-50 cursor-pointer"
                >
                  {eventSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  {editingEventId ? 'Update Event' : 'Save Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
