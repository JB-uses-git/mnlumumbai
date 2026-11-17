import React, { memo } from 'react'
import './Faculty.css'
import EditorialTestimonial from './ui/EditorialTestimonial'

const Faculty = memo(() => {
  const facultyMembers = [
    {
      name: 'Mr. Suraj Karande',
      image: '/images/faculty/1777.jpeg',
      title: 'Assistant Professor of Economics'
    }
  ]

  const testimonials = [
    {
      id: 1,
      quote: "Mr. Suraj Karande's expertise in corporate law and his passion for research make him an invaluable asset to our institution and students.",
      author: "Mr. Suraj Karande",
      role: "Assistant Professor of Economics",
      company: "Economics",
      image: "/images/faculty/1777.jpeg",
    }
  ]

  return (
    <section className="section faculty" id="people">
      <span id="faculty" style={{ display: 'block', position: 'relative', top: '-100px', visibility: 'hidden' }} />
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
          <div className="office-bearers-placeholder">
            <p>Office bearers list and photographs will be updated soon.</p>
          </div>
        </div>

        <EditorialTestimonial testimonials={testimonials} />
      </div>
    </section>
  )
})

export default Faculty
