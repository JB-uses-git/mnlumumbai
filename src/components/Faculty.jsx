import React, { memo } from 'react'
import './Faculty.css'
import EditorialTestimonial from './ui/EditorialTestimonial'

const Faculty = memo(() => {
  const facultyMembers = [
    {
      name: 'Suraj Sir',
      image: '/images/faculty/IMG_8815.JPG',
      title: ''
    },
    {
      name: 'Aastha Ma\'am',
      image: '/images/faculty/1728539134550.jpeg',
      title: 'Director, CALSTAR'
    },
    {
      name: 'Shweta Ma\'am',
      image: '/images/faculty/1740245639117.jpeg',
      title: ''
    }
  ]

  const testimonials = [
    {
      id: 1,
      quote: "Suraj Sir's expertise in corporate law and his passion for research make him an invaluable asset to our institution and students.",
      author: "Suraj Sir",
      role: "Assistant Professor",
      company: "Corporate Law",
      image: "/images/faculty/IMG_8815.JPG",
    },
    {
      id: 2,
      quote: "Under the distinguished guidance of Aastha Ma'am, CALSTAR contributes to the expanding field of legal scholarship and promotes socially relevant legal education.",
      author: "Aastha Ma'am",
      role: "Director, CALSTAR",
      company: "Constitutional Law",
      image: "/images/faculty/1728539134550.jpeg",
    },
    {
      id: 3,
      quote: "Shweta Ma'am brings a perfect blend of academic rigor and practical insights. Her mentorship has shaped countless successful legal careers.",
      author: "Shweta Ma'am",
      role: "Associate Professor",
      company: "Criminal Law",
      image: "/images/faculty/1740245639117.jpeg",
    },
  ]

  return (
    <section className="section faculty" id="faculty">
      <div className="container">
        <h2 className="section-title">Distinguished Faculty & Mentors</h2>
        <p className="section-subtitle">
          Meet our dedicated team of educators guiding CALSTAR
        </p>

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

        <EditorialTestimonial testimonials={testimonials} />
      </div>
    </section>
  )
})

export default Faculty
