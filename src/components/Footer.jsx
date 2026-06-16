import React from 'react'
import { FaLinkedin, FaYoutube, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 style={{ color: 'var(--dark)', marginBottom: '1rem' }}>CALSTAR</h3>
            <p className="footer-description">
              Centre for Advanced Legal Studies, Training and Research at Maharashtra National Law University, Mumbai — Established 2022
            </p>
            <p className="footer-description" style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--gray)' }}>
              Affiliated with Maharashtra National Law University, Mumbai
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/centre-for-advanced-legal-studies-training-and-research-a8447a267" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.youtube.com/MNLUMumbai" className="social-link" title="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#faculty">Faculty</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get in Touch</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:calstar@mnlumumbai.edu.in">calstar@mnlumumbai.edu.in</a>
              </li>
              <li>
                <span className="footer-address">2nd and 6th Floor, MTNL Building, Technology St, Hiranandani Gardens, Powai, Mumbai — 400076</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CALSTAR — Centre for Advanced Legal Studies, Training and Research, Maharashtra National Law University, Mumbai. All rights reserved.</p>
          <p>
            Made with <FaHeart className="heart-icon" /> for excellence in legal education
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
