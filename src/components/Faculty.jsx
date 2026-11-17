import React, { memo, useState, useEffect } from 'react'
import './Faculty.css'
import EditorialTestimonial from './ui/EditorialTestimonial'
import { supabase } from '../lib/supabaseClient'

const DEFAULT_FACULTY = [
  {
    name: 'Mr. Suraj Karande',
    image: '/images/faculty/1777.jpeg',
    title: 'Assistant Professor of Economics'
  }
]

const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Mr. Suraj Karande's expertise in corporate law and his passion for research make him an invaluable asset to our institution and students.",
    author: 'Mr. Suraj Karande',
    role: 'Assistant Professor of Economics',
    company: 'Economics',
    image: '/images/faculty/1777.jpeg'
  }
]

const Faculty = memo(() => {
  const [facultyMembers, setFacultyMembers] = useState(DEFAULT_FACULTY)
  const [officeBearers, setOfficeBearers] = useState([])
  const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS)

  useEffect(() => {
    let isMounted = true

    async function loadPeople() {
      try {
        const { data, error } = await supabase
          .from('people')
          .select('*')
          .order('order_index', { ascending: true })
          .order('created_at', { ascending: true })

        if (error) throw error

        if (isMounted && data && data.length > 0) {
          const facultyList = data
            .filter((p) => p.category === 'faculty')
            .map((p) => ({
              name: p.name,
              image: p.image_url || '/images/faculty/1777.jpeg',
              title: p.role
            }))

          const bearerList = data
            .filter((p) => p.category === 'office_bearer')
            .map((p) => ({
              name: p.name,
              image: p.image_url || '/images/faculty/1777.jpeg',
              title: p.role
            }))

          if (facultyList.length > 0) {
            setFacultyMembers(facultyList)
          }

          setOfficeBearers(bearerList)

          // Extract testimonials from people with quotes
          const dynamicTestimonials = data
            .filter((p) => Boolean(p.quote && p.quote.trim()))
            .map((p) => ({
              id: p.id,
              quote: p.quote,
              author: p.name,
              role: p.role,
              company: p.category === 'faculty' ? 'Faculty Mentor' : 'Student Leadership',
              image: p.image_url || '/images/faculty/1777.jpeg'
            }))

          if (dynamicTestimonials.length > 0) {
            setTestimonials(dynamicTestimonials)
          }
        }
      } catch (err) {
        // Silently fallback to defaults if database is not yet ready or offline
        console.warn('[Faculty] Using fallback static data:', err.message)
      }
    }

    loadPeople()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="section faculty" id="people">
      <span
        id="faculty"
        style={{ display: 'block', position: 'relative', top: '-100px', visibility: 'hidden' }}
      />
      <div className="container">
        <h2 className="section-title">People</h2>
        <p className="section-subtitle">
          Meet our dedicated faculty mentors and student leadership guiding CALSTAR
        </p>

        {/* Faculty Section */}
        <div className="people-category">
          <h3 className="people-category-title">Faculty</h3>
          <div className="faculty-grid">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-image-wrapper">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="faculty-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="faculty-name">{faculty.name}</h3>
                {faculty.title && <p className="faculty-title">{faculty.title}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Office Bearers Section */}
        <div className="people-category office-bearers-category">
          <h3 className="people-category-title">Office Bearers</h3>
          {officeBearers.length > 0 ? (
            <div className="faculty-grid">
              {officeBearers.map((bearer, index) => (
                <div key={index} className="faculty-card">
                  <div className="faculty-image-wrapper">
                    <img
                      src={bearer.image}
                      alt={bearer.name}
                      className="faculty-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="faculty-name">{bearer.name}</h3>
                  {bearer.title && <p className="faculty-title">{bearer.title}</p>}
                </div>
              ))}
            </div>
          ) : (
            <div className="office-bearers-placeholder">
              <p>Office bearers list and photographs will be updated soon.</p>
            </div>
          )}
        </div>

        {testimonials.length > 0 && <EditorialTestimonial testimonials={testimonials} />}
      </div>
    </section>
  )
})

export default Faculty
