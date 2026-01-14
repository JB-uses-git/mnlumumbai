import React, { memo } from 'react'
import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Events.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Events = memo(() => {
  const allEvents = [
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

  const pastEvents = [
    {
      title: 'Training Workshop on Child Care and Protection',
      date: 'Completed',
      time: '',
      location: 'MNLU Mumbai',
      category: 'Workshop',
      description: 'Comprehensive training workshop with special emphasis on the POCSO Act and child protection mechanisms'
    },
    {
      title: 'Mastering Civil Advocacy Workshop',
      date: 'Completed',
      time: '',
      location: 'CALSTAR Centre',
      category: 'Workshop',
      description: 'A Journey from E-Filing to Execution - practical insights into civil advocacy procedures'
    },
    {
      title: 'Workshop on Emerging Technologies and Cybercrimes',
      date: 'Completed',
      time: '',
      location: 'MNLU Mumbai',
      category: 'Workshop',
      description: 'Exploring the intersection of emerging technologies, cybersecurity, and legal frameworks'
    },
    {
      title: 'Colloquium on AI, Fintech, Metaverse, and Human Rights',
      date: 'Completed',
      time: '',
      location: 'Main Auditorium',
      category: 'Academic',
      description: 'Interdisciplinary discussion on the impact of cutting-edge technologies on human rights'
    },
    {
      title: 'Session on Rights of Indigenous People and SC/ST Community',
      date: 'Completed',
      time: '',
      location: 'Conference Hall',
      category: 'Lecture',
      description: 'Expert session addressing the legal rights and protections for indigenous communities'
    },
    {
      title: 'Expert Discussion and Conference on Child Independent Lawyer',
      date: 'Completed',
      time: '',
      location: 'CALSTAR Centre',
      category: 'Academic',
      description: 'Conference exploring the role and significance of independent legal representation for children'
    },
    {
      title: 'National Symposium on AI: Privacy, Security, and IPR',
      date: 'Completed',
      time: '',
      location: 'Main Auditorium',
      category: 'Academic',
      description: 'Comprehensive symposium examining the legal challenges of AI in privacy, security, and intellectual property'
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
        <h2 className="section-title">Events & Initiatives</h2>
        <p className="section-subtitle">
          Stay updated with our latest events, workshops, and academic activities
        </p>

        <div className="events-grid grid grid-3">
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

        <div className="events-footer">
          <InteractiveHoverButton className="btn btn-primary">View All Events</InteractiveHoverButton>
        </div>
      </div>
    </section>
  )
})

export default Events
