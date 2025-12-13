import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaUserTie, FaEnvelope, FaArrowLeft } from 'react-icons/fa'
import './BoardOfEditors.css'
import Footer from './Footer'

const BoardOfEditors = memo(() => {
  const navigate = useNavigate()

  // Placeholder for board members - to be updated with actual data
  const boardMembers = [
    {
      name: 'To Be Updated',
      role: 'Chairperson',
      affiliation: 'MNLU Mumbai',
      image: null
    },
    {
      name: 'To Be Updated',
      role: 'Faculty Editor',
      affiliation: 'MNLU Mumbai',
      image: null
    },
    {
      name: 'To Be Updated',
      role: 'Faculty Editor',
      affiliation: 'MNLU Mumbai',
      image: null
    },
    {
      name: 'To Be Updated',
      role: 'External Advisor',
      affiliation: 'Legal Practitioner',
      image: null
    }
  ]

  return (
    <div className="board-of-editors-page">
      {/* Navbar */}
      <nav className="board-navbar">
        <div className="board-nav-container">
          <div className="nav-buttons">
            <button className="home-btn" onClick={() => navigate('/')} aria-label="Go to home">
              <FaHome />
            </button>
            <button className="back-btn" onClick={() => navigate('/blogs')} aria-label="Back to blogs">
              <FaArrowLeft />
            </button>
          </div>
          <h1 className="board-nav-title">Board of Editors</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="board-hero">
        <div className="container">
          <h1 className="board-hero-title">Distinguished Board of Editors</h1>
          <p className="board-hero-subtitle">
            Comprising eminent academicians, practitioners, and professionals in the field
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="board-content">
        <div className="container">
          
          <div className="board-intro">
            <div className="intro-icon">
              <FaUserTie />
            </div>
            <p className="intro-text">
              The Editorial Board of CALSTAR comprises distinguished members from academia, legal practice, and research. They ensure the highest standards of academic integrity, quality, and relevance in all publications. The Board reviews submissions at the final stage, making determinations on publication based on analytical rigour and contribution to legal discourse.
            </p>
          </div>

          {/* Board Members Grid */}
          <div className="board-grid">
            {boardMembers.map((member, index) => (
              <div key={index} className="board-member-card">
                <div className="member-image-wrapper">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="member-image" />
                  ) : (
                    <div className="member-placeholder">
                      <FaUserTie />
                    </div>
                  )}
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-affiliation">{member.affiliation}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="board-contact">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h2 className="contact-title">Contact the Editorial Board</h2>
            <p className="contact-text">
              For editorial queries, manuscript submissions, or general inquiries, please contact us at:
            </p>
            <a href="mailto:editorial.calstar@mnlumumbai.edu.in" className="contact-email">
              editorial.calstar@mnlumumbai.edu.in
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
})

export default BoardOfEditors
