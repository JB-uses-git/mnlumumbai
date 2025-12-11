import React from 'react'
import './Faculty.css'

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Aastha Ma\'am',
      image: '/images/faculty/1728539134550.jpeg'
    },
    {
      name: 'Shweta Ma\'am',
      image: '/images/faculty/1740245639117.jpeg'
    },
    {
      name: 'Suraj Sir',
      image: '/images/faculty/IMG_8815.JPG'
    }
  ]

  return (
    <section className="section faculty" id="faculty">
      <div className="container">
        <h2 className="section-title">Faculty</h2>
        <p className="section-subtitle">
          Meet our dedicated team of educators
        </p>

        <div className="faculty-grid">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="faculty-card">
              <div className="faculty-image-wrapper">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="faculty-image"
                />
              </div>
              <h3 className="faculty-name">{faculty.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faculty
