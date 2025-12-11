import React, { memo } from 'react'
import { FaCalendar, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa'
import './Events.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Events = memo(() => {
  const events = [
    {
      title: 'National Moot Court Competition',
      date: 'March 15-17, 2025',
      time: '9:00 AM',
      location: 'MNLU Mumbai Campus',
      category: 'Competition',
      description: 'Annual inter-university moot court competition featuring teams from leading law schools'
    },
    {
      title: 'Guest Lecture: Contemporary Legal Issues',
      date: 'March 22, 2025',
      time: '2:00 PM',
      location: 'Conference Hall',
      category: 'Lecture',
      description: 'Distinguished legal expert discussing contemporary challenges in Indian legal system'
    },
    {
      title: 'CALSTAR Research Workshop',
      date: 'March 28, 2025',
      time: '10:00 AM',
      location: 'CALSTAR Centre',
      category: 'Workshop',
      description: 'Advanced workshop on legal research methodology and academic writing skills'
    },
    {
      title: 'Legal Aid & Social Justice Seminar',
      date: 'April 5, 2025',
      time: '11:00 AM',
      location: 'Seminar Hall',
      category: 'Academic',
      description: 'Seminar on providing legal aid and promoting access to justice for marginalized communities'
    },
    {
      title: 'International Law Conference',
      date: 'April 12, 2025',
      time: '9:00 AM',
      location: 'Main Auditorium',
      category: 'Academic',
      description: 'Two-day conference on emerging trends in international law and global legal frameworks'
    },
    {
      title: 'Legal Career Fair 2025',
      date: 'April 20, 2025',
      time: '10:00 AM',
      location: 'MNLU Campus',
      category: 'Career',
      description: 'Meet with leading law firms, corporate legal departments, and judiciary representatives'
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Competition': '#ef4444',
      'Lecture': '#3b82f6',
      'Workshop': '#8b5cf6',
      'Cultural': '#f59e0b',
      'Academic': '#10b981',
      'Career': '#6366f1'
    }
    return colors[category] || '#6b7280'
  }

  return (
    <section className="section events" id="events">
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">
          Stay updated with our latest events, workshops, and academic activities
        </p>

        <div className="events-grid grid grid-3">
          {events.map((event, index) => (
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
                <div className="event-detail">
                  <FaClock />
                  <span>{event.time}</span>
                </div>
                <div className="event-detail">
                  <FaMapMarkerAlt />
                  <span>{event.location}</span>
                </div>
              </div>
              <InteractiveHoverButton className="btn btn-secondary event-btn">
                Register Now <FaArrowRight />
              </InteractiveHoverButton>
            </div>
          ))}
        </div>

        <div className="events-footer">
          <InteractiveHoverButton className="btn btn-primary">View All Events</InteractiveHoverButton>
        </div>
      </div>
    </section>
  )
})

export default Events
