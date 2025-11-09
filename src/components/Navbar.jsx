import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          <img src="/calstar-logo.svg" alt="CALSTAR Logo" className="nav-logo-img" />
          <div>
            <h2>MNLU Mumbai</h2>
            <span className="logo-tagline">Excellence in Legal Education</span>
          </div>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('programs')}>Programs</a>
          <a onClick={() => scrollToSection('events')}>Events</a>
          <a onClick={() => scrollToSection('gallery')}>Gallery</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
          <InteractiveHoverButton className="btn btn-primary nav-cta">Apply Now</InteractiveHoverButton>
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
