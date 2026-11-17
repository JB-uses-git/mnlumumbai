import React, { memo, useState, useEffect } from 'react'
import { FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import './Events.css'
import { supabase } from '../lib/supabaseClient'

const DEFAULT_EVENTS = [
  {
    id: 'default-1',
    title: 'Call for Blogs',
    date: 'Submissions Open Throughout the Year (Reviewed on a rolling basis)',
    location: 'Online Submission',
    category: 'Publication',
    status: 'upcoming',
    description:
      "CALSTAR invites original blog submissions on contemporary legal issues, policy developments, and emerging areas of law. Selected entries will be published on the Centre's official blog platform.",
    link: '/submissions'
  },
  {
    id: 'default-2',
    title: 'National Blog Writing Competition',
    date: 'Dates to be Announced Soon',
    location: 'Online',
    category: 'Competition',
    status: 'upcoming',
    description:
      'A national-level blog writing competition aimed at encouraging legal research, critical analysis, and academic writing among students and young scholars.',
    link: ''
  }
]

const Events = memo(() => {
  const [eventsList, setEventsList] = useState(DEFAULT_EVENTS)
  const [activeTab, setActiveTab] = useState('upcoming') // 'upcoming' | 'completed' | 'all'

  useEffect(() => {
    let isMounted = true

    async function loadEvents() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error

        if (isMounted && data && data.length > 0) {
          setEventsList(data)
        }
      } catch (err) {
        console.warn('[Events] Using fallback static events:', err.message)
      }
    }

    loadEvents()

    return () => {
      isMounted = false
    }
  }, [])

  const getCategoryColor = (category) => {
    const colors = {
      Competition: '#ef4444',
      Publication: '#6366f1',
      Workshop: '#0ea5e9',
      Seminar: '#8b5cf6',
      Conference: '#f59e0b'
    }
    return colors[category] || '#6b7280'
  }

  const filteredEvents = eventsList.filter((event) => {
    if (activeTab === 'all') return true
    return (event.status || 'upcoming') === activeTab
  })

  return (
    <section className="section events" id="events">
      <div className="container">
        <h2 className="section-title">Events & Initiatives</h2>
        <p className="section-subtitle">
          Stay updated with our latest events, workshops, and academic activities
        </p>

        {/* Tab Switcher */}
        <div className="events-tabs">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`events-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          >
            Upcoming Initiatives
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`events-tab ${activeTab === 'completed' ? 'active' : ''}`}
          >
            Past Events
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`events-tab ${activeTab === 'all' ? 'active' : ''}`}
          >
            All
          </button>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>No {activeTab === 'completed' ? 'past' : 'upcoming'} events to display right now.</p>
          </div>
        ) : (
          <div className="events-grid grid grid-2">
            {filteredEvents.map((event, index) => (
              <div key={event.id || index} className="event-card card">
                {event.image_url && (
                  <div className="w-full h-48 rounded-lg overflow-hidden -mt-2 mb-2">
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                <span
                  className="event-category"
                  style={{ background: getCategoryColor(event.category) }}
                >
                  {event.category || 'General'}
                </span>

                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-details">
                  <div className="event-detail">
                    <FaCalendar />
                    <span>{event.date}</span>
                  </div>

                  {event.location && (
                    <div className="event-detail">
                      <FaMapMarkerAlt />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>

                {event.link && (
                  <div className="mt-4">
                    <a
                      href={event.link}
                      target={event.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#43302E] text-[#FFE8A3] text-xs font-bold hover:bg-[#2e211f] transition-all"
                    >
                      <span>Participate / Details</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
})

export default Events
