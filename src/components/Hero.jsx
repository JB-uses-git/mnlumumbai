import React from 'react'
import { FaGraduationCap, FaArrowRight, FaPlay } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text fade-in-up">
          <span className="hero-badge">🎓 Maharashtra National Law University</span>
          <h1 className="hero-title">
            Welcome to <br />
            <span className="gradient-text">MNLU Mumbai</span>
          </h1>
          <p className="hero-description">
            Creating Legal Excellence Through Research and Training. 
            Join a community of scholars dedicated to advancing legal discourse 
            and academic excellence.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Explore Programs <FaArrowRight />
            </button>
            <button className="btn btn-outline">
              <FaPlay /> Watch Video
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>5000+</h3>
              <p>Students</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Faculty Members</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
