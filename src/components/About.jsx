import React, { memo } from 'react'
import { FaBook, FaShareAlt, FaCalendarAlt, FaLightbulb } from 'react-icons/fa'
import './About.css'

const About = memo(() => {
  const wings = [
    {
      icon: <FaBook />,
      title: 'Research & Publication Wing',
      description: 'Dedicated to producing quality legal scholarship through research projects, reports, alternative judgments, and editorial activities. Oversees the Centre\'s Blog and Newsletter.'
    },
    {
      icon: <FaShareAlt />,
      title: 'Social Media & Marketing Wing',
      description: 'Handles the Centre\'s online presence across Instagram, LinkedIn, Twitter, and Facebook. Designs promotional content and markets events to reach a wider audience.'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Events & Public Relations Wing',
      description: 'Oversees external communication, manages correspondence with authorities, and leads promotional outreach. Conceptualizes and organizes workshops, conferences, and symposiums.'
    }
  ]

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About CALSTAR</h2>
        <p className="section-subtitle">
          The Centre for Advanced Legal Studies, Training and Research at Maharashtra National Law University, Mumbai - Established 2022
        </p>

        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <picture>
                <source type="image/webp" srcSet="/images/optimized/IMG_6008-scaled-800.webp 800w, /images/optimized/IMG_6008-scaled-400.webp 400w" />
                <img src="/images/optimized/IMG_6008-scaled-800.jpg" srcSet="/images/optimized/IMG_6008-scaled-800.jpg 800w, /images/optimized/IMG_6008-scaled-400.jpg 400w" alt="CALSTAR Centre" loading="lazy" />
              </picture>
            </div>
          </div>

          <div className="about-text">
            <h3>Introduction</h3>
            <p>
              The Centre for Advanced Legal Studies, Training and Research [CALSTAR] at Maharashtra National Law University, Mumbai, established in 2022, is dedicated to bringing all academic, research, and training activities relating to existing, contemporary, and futuristic law within a unique and independent department. The Centre serves as a platform for students, academicians, and professionals to engage in meaningful discussions, research, and participate in action-oriented learning.
            </p>
            <h3 style={{ marginTop: '1.5rem' }}>Our Objectives</h3>
            <p>
              Our primary objective is to facilitate advanced legal studies for students, professionals, research scholars, laypersons, and all stakeholders in society. We achieve this through various academic programs, including short-term and long-term certificate courses, diplomas, and degrees. Additionally, the Centre aims to provide both theoretical and practical training by collaborating with experts and luminaries in the field, bridging the gap between academic knowledge and practical understanding of the law.
            </p>
            <h3 style={{ marginTop: '1.5rem' }}>Our Vision</h3>
            <p>
              Our vision is to create a space where curiosity meets scholarship through empowering students and researchers to explore, learn, and produce impactful legal work that influences thought and practice in society. Under the distinguished guidance of Ms. Aastha Tiwari along with the active participation of all the members, the Centre contributes to the expanding field of legal scholarship and promotes socially relevant legal education. Through its research and outreach, the Centre aims to make law a tool for empowerment, awareness, and lasting change.
            </p>
          </div>
        </div>

        <h3 className="section-title" style={{ marginTop: '3rem', fontSize: '1.8rem' }}>Our Structure</h3>
        <p className="section-subtitle">CALSTAR functions through three wings, each focusing on a specific area of contribution and growth</p>
        
        <div className="features-grid grid grid-3">
          {wings.map((wing, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon">{wing.icon}</div>
              <h4>{wing.title}</h4>
              <p>{wing.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default About
