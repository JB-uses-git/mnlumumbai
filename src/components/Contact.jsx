import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h4>Email</h4>
              <p>calstar@mnlumumbai.edu.in</p>
            </div>

            <div className="info-card card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h4>Address</h4>
              <p>2nd and 6th Floor, MTNL Building</p>
              <p>Technology St, Hiranandani Gardens</p>
              <p>Powai, Mumbai, Maharashtra - 400076</p>
            </div>
          </div>

          <div className="contact-form-wrapper card">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john.doe@example.com" />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="How can we help you?" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Your message here..."></textarea>
              </div>

              <InteractiveHoverButton type="submit" className="btn btn-primary form-submit">
                <FaPaperPlane /> Send Message
              </InteractiveHoverButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
