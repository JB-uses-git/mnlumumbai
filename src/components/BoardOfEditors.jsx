import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaUserTie, FaEnvelope, FaArrowLeft } from 'react-icons/fa'
import './BoardOfEditors.css'
import Footer from './Footer'

const BoardOfEditors = memo(() => {
  const navigate = useNavigate()

  // Group board members by role
  const boardGroups = [
    {
      title: 'Peer Reviewers',
      members: [
        { name: 'Ms. Aastha Tiwari', affiliation: '', image: '/images/faculty/1728539134550.jpeg' },
        { name: 'Mr. Suraj Karande', affiliation: '', image: '/images/faculty/1777.jpeg' },
      ]
    },
    {
      title: 'Editors-in-Chief',
      members: [
        { name: 'Om Chandak', affiliation: 'MNLU Mumbai', image: '/images/calstar board/Om Chandak- ASSOCIATE CONVENOR.jpg' },
        { name: 'Revant Sinha', affiliation: 'MNLU Mumbai', image: '/images/calstar board/Screenshot_20250913_180357 - Revant Sinha-M-P.jpg' },
      ]
    },
    {
      title: 'Advisors',
      members: [
        { name: 'Yashvardhan Kshirsagar', affiliation: '', image: '/images/calstar board/yashwardhan kshirsagar- CONVENOR.png' },
        { name: 'Parth', affiliation: '', image: null },
      ]
    },
    {
      title: 'Managing Editors',
      members: [
        { name: 'Rashi Nayak', affiliation: '', image: '/images/calstar board/Rashi Nayak- HEAD- R.jpg' },
        { name: 'Radhika Agrawal', affiliation: '', image: '/images/calstar board/RADHIKA AGRAWAL- HEAD- P.jpeg' },
      ]
    },
    {
      title: 'Content Editors',
      members: [
        { name: 'Ravi Hrudya', affiliation: '', image: '/images/calstar board/pic - Ravi Hrudya-M-R.jpeg' },
        { name: 'Astha Tamgade', affiliation: '', image: '/images/calstar board/ASTHA TAMGADE- H- PR.jpeg' },
        { name: 'Sanskar Chandak', affiliation: '', image: '/images/calstar board/Sanskar Chandak- M- R.jpeg' },
      ]
    },
    {
      title: 'Technical Editors',
      members: [
        { name: 'Yashika Paraswani', affiliation: '', image: '/images/calstar board/YASHIKA PARASWANI- M- P.jpg' },
        { name: 'Rishith Garg', affiliation: '', image: '/images/calstar board/rgarg horse - RISHITH GARG- M- PR.png' },
        { name: 'Rajnandini Pawar', affiliation: '', image: '/images/calstar board/RAJNANDINI PAWAR- M- R.jpg' },
        { name: 'Anamika Jaiswal', affiliation: '', image: '/images/calstar board/semi formal phoro  - Anamika Jaiswal-M-R.jpg' },
        { name: 'Shubhi Gupta', affiliation: '', image: '/images/calstar board/Shubhi Gupta- M- R.jpg' },
        { name: 'Madhura Vedang', affiliation: '', image: '/images/calstar board/Madhura Vedang- M- R.jpg' },
        { name: 'Divija Manaktala', affiliation: '', image: '/images/calstar board/Divija Manaktala- M- R.jpeg' },
        { name: 'Vaishnavi Tyagi', affiliation: '', image: '/images/calstar board/Vaishnavi Tyagi- M-R.jpg' },
        { name: 'Siddhi Bhosale', affiliation: '', image: '/images/calstar board/Siddhi Bhosale- M- P.jpg' },
      ]
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

          {/* Board Members Groups */}
          <div className="board-groups-container">
            {boardGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="board-group">
                <h2 className="group-title">{group.title}</h2>
                <div className="board-grid">
                  {group.members.map((member, index) => (
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
                      <p className="member-role">{group.title.endsWith('s') ? group.title.slice(0, -1) : group.title}</p>
                      {member.affiliation && <p className="member-affiliation">{member.affiliation}</p>}
                    </div>
                  ))}
                </div>
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
