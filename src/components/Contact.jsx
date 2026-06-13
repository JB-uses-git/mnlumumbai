import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Contact = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const firstName = formData.get('first_name') || '';
    const lastName = formData.get('last_name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const subject = formData.get('subject') || 'Contact Form Submission';
    const message = formData.get('message') || '';

    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    // Redirect to default email client
    window.location.href = `mailto:calstar@mnlumumbai.edu.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="first_name" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="last_name" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="john.doe@example.com" required />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+91 98765 43210" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="How can we help you?" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Your message here..." required></textarea>
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
