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
            <img src="/calstar-logo.svg" alt="CALSTAR Logo" className="footer-logo-img" />
            <p className="footer-description">
              Maharashtra National Law University, Mumbai is committed to excellence 
              in legal education, research, and service to society.
            </p>
            <div className="social-links">
              <a href="https://www.youtube.com/MNLUMumbai" className="social-link"><FaYoutube /></a>
              <a href="https://www.linkedin.com/in/centre-for-advanced-legal-studies-training-and-research-a8447a267" className="social-link"><FaLinkedin /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaFacebook /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Academic Programs</a></li>
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
          <p>© 2025 Maharashtra National Law University, Mumbai. All rights reserved.</p>
          <p>
            Made with <FaHeart className="heart-icon" /> for excellence in legal education
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
