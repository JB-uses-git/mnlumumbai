import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaHeart } from 'react-icons/fa'
import './Footer.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 style={{ color: 'var(--dark)', marginBottom: '1rem' }}>CALSTAR</h3>
            <p className="footer-description">
              Centre for Advanced Legal Studies, Training and Research at Maharashtra National Law University, Mumbai - Established 2022
            </p>
            <p className="footer-description" style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--gray)' }}>
              Affiliated with Maharashtra National Law University, Mumbai
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Instagram - @calstar_mnlu"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/centre-for-advanced-legal-studies-training-and-research-a8447a267" className="social-link" title="LinkedIn"><FaLinkedin /></a>
              <a href="#" className="social-link" title="Twitter/X"><FaTwitter /></a>
              <a href="#" className="social-link" title="Facebook"><FaFacebook /></a>
              <a href="https://www.youtube.com/MNLUMumbai" className="social-link" title="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#faculty">Faculty</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><a href="#">B.A. LL.B (Hons.)</a></li>
              <li><a href="#">LL.M</a></li>
              <li><a href="#">Ph.D.</a></li>
              <li><a href="#">Executive Programs</a></li>
              <li><a href="#">Research Centers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Library</a></li>
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Faculty Portal</a></li>
              <li><a href="#">Alumni Network</a></li>
              <li><a href="#">Career Services</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on latest events and news</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <InteractiveHoverButton type="submit" className="btn btn-primary">Subscribe</InteractiveHoverButton>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 CALSTAR - Centre for Advanced Legal Studies, Training and Research, Maharashtra National Law University, Mumbai. All rights reserved.</p>
          <p>
            Made with <FaHeart className="heart-icon" /> for excellence in legal education
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
