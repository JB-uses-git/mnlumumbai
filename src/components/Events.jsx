import React, { memo } from 'react'
import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Events.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Events = memo(() => {
  const allEvents = [
    {
      title: 'Call for Blogs',
      date: 'Submissions Open Throughout the Year (Reviewed on a rolling basis)',
      time: '',
      location: 'Online Submission',
      category: 'Publication',
      description: "CALSTAR invites original blog submissions on contemporary legal issues, policy developments, and emerging areas of law. Selected entries will be published on the Centre's official blog platform."
    },
    {
      title: 'National Blog Writing Competition',
      date: 'Dates to be Announced Soon',
      time: '',
      location: 'Online',
      category: 'Competition',
      description: 'A national-level blog writing competition aimed at encouraging legal research, critical analysis, and academic writing among students and young scholars.'
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Competition': '#ef4444',
      'Publication': '#6366f1'
    }
    return colors[category] || '#6b7280'
  }

  return (
    <section className="section events" id="events">
      <div className="container">
        <h2 className="section-title">Events & Initiatives</h2>
        <p className="section-subtitle">
          Stay updated with our latest events, workshops, and academic activities
        </p>

        <div className="events-grid grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {allEvents.map((event, index) => (
            <div key={index} className="event-card card">
              <span 
                className="event-category" 
                style={{ background: getCategoryColor(event.category) }}
              >
                {event.category}
              </span>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-details">
                <div className="event-detail">
                  <FaCalendar />
                  <span>{event.date}</span>
                </div>
                {event.time && (
                  <div className="event-detail">
                    <FaClock />
                    <span>{event.time}</span>
                  </div>
                )}
                <div className="event-detail">
                  <FaMapMarkerAlt />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Events
