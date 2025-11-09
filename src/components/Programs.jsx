import React from 'react'
import { FaBook, FaCertificate, FaUserGraduate, FaBriefcase } from 'react-icons/fa'
import './Programs.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Programs = () => {
  const programs = [
    {
      icon: <FaUserGraduate />,
      title: 'B.A. LL.B (Hons.)',
      duration: '5 Years',
      description: 'Integrated undergraduate program combining arts and law, preparing students for diverse legal careers',
      highlights: ['Constitutional Law', 'Criminal Law', 'Corporate Law']
    },
    {
      icon: <FaCertificate />,
      title: 'LL.M',
      duration: '1 Year',
      description: 'Advanced postgraduate program for specialization in various fields of law and legal research',
      highlights: ['International Law', 'Intellectual Property', 'Human Rights']
    },
    {
      icon: <FaBook />,
      title: 'Ph.D. in Law',
      duration: '3-5 Years',
      description: 'Research-oriented program for scholars pursuing advanced legal research and academic excellence',
      highlights: ['Research Methodology', 'Legal Theory', 'Dissertation']
    },
    {
      icon: <FaBriefcase />,
      title: 'Legal Training & Research',
      duration: 'Variable',
      description: 'CALSTAR offers advanced training programs in legal research, writing, and professional development',
      highlights: ['Legal Research', 'Legal Writing', 'Moot Court Training']
    }
  ]

  return (
    <section className="section programs" id="programs">
      <div className="container">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">
          Choose from our diverse range of programs designed to meet the needs 
          of aspiring legal professionals at every stage of their career
        </p>

        <div className="programs-grid grid grid-2">
          {programs.map((program, index) => (
            <div key={index} className="program-card card">
              <div className="program-header">
                <div className="program-icon">{program.icon}</div>
                <div className="program-info">
                  <h3>{program.title}</h3>
                  <span className="program-duration">{program.duration}</span>
                </div>
              </div>
              <p className="program-description">{program.description}</p>
              <div className="program-highlights">
                {program.highlights.map((highlight, idx) => (
                  <span key={idx} className="highlight-tag">{highlight}</span>
                ))}
              </div>
              <InteractiveHoverButton className="btn btn-secondary">View Details</InteractiveHoverButton>
            </div>
          ))}
        </div>

        <div className="programs-cta">
          <h3>Ready to Start Your Legal Journey?</h3>
          <p>Join MNLU Mumbai and be part of creating legal excellence through research and training</p>
          <InteractiveHoverButton className="btn btn-primary">Apply for Admission</InteractiveHoverButton>
        </div>
      </div>
    </section>
  )
}

export default Programs
