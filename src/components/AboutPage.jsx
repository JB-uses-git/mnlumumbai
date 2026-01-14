import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaBook, FaShareAlt, FaCalendarAlt, FaLightbulb, FaBullseye, FaEye } from 'react-icons/fa'
import './AboutPage.css'
import Footer from './Footer'

const AboutPage = memo(() => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const wings = [
    {
      icon: <FaBook />,
      title: 'Research and Publication Wing',
      description: 'Dedicated to producing quality legal scholarship through research projects, reports, alternative judgments, and editorial activities. It also oversees the Centre\'s Blog and Newsletter, providing a space for students and scholars to publish their work and engage with current legal issues.'
    },
    {
      icon: <FaShareAlt />,
      title: 'Social Media and Marketing Wing',
      description: 'Handles the Centre\'s online presence across Instagram, LinkedIn, Twitter, and Facebook. This team designs promotional content such as flyers and brochures, markets events, and ensures that CALSTAR\'s activities reach a wider audience.'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Events and Public Relations Wing',
      description: 'This wing oversees all external communication, managing correspondence with relevant authorities, responding to participant queries, and leading promotional outreach. It also plays a key role in conceptualizing, proposing, and organizing events, ensuring seamless coordination and successful execution of workshops, conferences, and symposiums.'
    }
  ]

  const pastEvents = [
    'Training Workshop on Child Care and Protection with special emphasis on the POCSO Act',
    'Workshop on "Mastering Civil Advocacy: A Journey from E-Filing to Execution"',
    'Workshop on Emerging Technologies and Cybercrimes',
    'Colloquium on AI, Fintech, Metaverse, and Human Rights',
    'Session on "Rights of Indigenous People and the SC/ST Community"',
    'Expert Discussion and Conference on "Child Independent Lawyer"',
    'National Symposium on AI: Privacy, Security, and IPR'
  ]

  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="about-navbar">
        <div className="about-nav-container">
          <button className="home-btn" onClick={() => navigate('/')} aria-label="Go to home">
            <FaHome />
          </button>
          <h1 className="about-nav-title">About CALSTAR</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title">Centre for Advanced Legal Studies, Training and Research</h1>
          <p className="about-hero-subtitle">Maharashtra National Law University, Mumbai</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          
          {/* Introduction */}
          <div className="about-section">
            <div className="section-icon">
              <FaLightbulb />
            </div>
            <h2 className="about-section-title">Introduction</h2>
            <div className="about-text">
              <p>
                The Centre for Advanced Legal Studies, Training and Research [CALSTAR] at Maharashtra National Law University, Mumbai, established in 2022, is dedicated to bringing all academic, research, and training activities relating to existing, contemporary, and futuristic law within a unique and independent department. The Centre serves as a platform for students, academicians, and professionals to engage in meaningful discussions, research, and participate in action-oriented learning.
              </p>
            </div>
          </div>

          {/* Our Structure */}
          <div className="about-section">
            <div className="section-icon">
              <FaShareAlt />
            </div>
            <h2 className="about-section-title">Our Structure</h2>
            <div className="about-text">
              <p className="structure-intro">
                CALSTAR functions through three wings, each focusing on a specific area of contribution and growth:
              </p>
              <div className="wings-grid">
                {wings.map((wing, index) => (
                  <div key={index} className="wing-card">
                    <div className="wing-icon">{wing.icon}</div>
                    <h3 className="wing-title">{wing.title}</h3>
                    <p className="wing-description">{wing.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Objectives */}
          <div className="about-section">
            <div className="section-icon">
              <FaBullseye />
            </div>
            <h2 className="about-section-title">Our Objectives</h2>
            <div className="about-text">
              <p>
                Our primary objective is to facilitate advanced legal studies for students, professionals, research scholars, laypersons, and all stakeholders in society. We achieve this through various academic programs, including short-term and long-term certificate courses, diplomas, and degrees. Additionally, the Centre aims to provide both theoretical and practical training to students, professionals, research scholars, corporate executives, investigating agencies, and others by collaborating with experts and luminaries in the field. By integrating classroom learning with hands-on research experience, the Centre seeks to bridge the gap between academic knowledge and practical understanding of the law.
              </p>
            </div>
          </div>

          {/* Research, Initiatives, and Events */}
          <div className="about-section">
            <div className="section-icon">
              <FaCalendarAlt />
            </div>
            <h2 className="about-section-title">Research, Initiatives, and Events</h2>
            <div className="about-text">
              <p>
                The Centre actively promotes high-quality legal research through a wide range of activities, including seminars, webinars, symposiums, and conferences. It invites paper submissions and publications on diverse legal topics to foster a culture of learning, innovation, and academic excellence.
              </p>
              <p>
                In addition, CALSTAR provides consultancy, support, and guidance to individuals and institutions, with a strong focus on social justice and legal awareness. Through its socio-legal outreach programs, the Centre engages with educational institutions, professional organizations, government departments, and the broader community, making law a tool for empowerment and positive change.
              </p>
              <p className="events-intro">
                Since its inception, CALSTAR has successfully organized several impactful events and training programs, such as:
              </p>
              <ul className="events-list">
                {pastEvents.map((event, index) => (
                  <li key={index} className="event-item">
                    <span className="event-bullet">•</span>
                    <span className="event-text">{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Vision */}
          <div className="about-section vision-section">
            <div className="section-icon">
              <FaEye />
            </div>
            <h2 className="about-section-title">Our Vision</h2>
            <div className="about-text">
              <p>
                Our vision is to create a space where curiosity meets scholarship through empowering students and researchers to explore, learn, and produce impactful legal work that influences thought and practice in society. Under the distinguished guidance of Ms. Aastha Tiwari along with the active participation of all the members, the Centre contributes to the expanding field of legal scholarship and promotes socially relevant legal education.
              </p>
              <p>
                Through its research and outreach, the Centre aims to make law a tool for empowerment, awareness, and lasting change. With every research initiative and publication, the Centre strives to turn ideas into impact and inspire a new generation of thinkers and reformers in law.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
})

export default AboutPage
