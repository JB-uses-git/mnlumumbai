import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './Hero.css'
import InteractiveHoverButton from './ui/interactive-hover-button'
import AnimatedHero from './ui/AnimatedHero'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text fade-in-up">
          <span 
  className="hero-badge"
  style={{ 
    fontSize: '1.5rem',
    fontWeight: '600',
    marginLeft: '-40px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px'
  }}
>
  🎓 Maharashtra National Law University, Mumbai
</span>
          <h1 className="hero-title">
            Centre for <br />
            <span className="gradient-text">Advanced Legal Studies, Training and Research</span>
          </h1>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '800', 
            color: 'var(--accent)', 
            marginTop: '1rem',
            letterSpacing: '0.15em',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase'
          }}>
            CALSTAR
          </h2>
          {/* Animated phrase inserted under the title */}
          <div style={{ marginTop: '8px' }}>
            <AnimatedHero words={["Empowering Students", "Advancing Research", "Shaping Legal Discourse"]} interval={2200} />
          </div>
          <p className="hero-description">
            Empowering students and researchers to explore, learn, and produce impactful legal work that influences thought and practice in society.
          </p>
          <div className="hero-buttons">
            <InteractiveHoverButton className="btn btn-primary">
              Explore Our Research <FaArrowRight />
            </InteractiveHoverButton>
          </div>
          {/* hero stats removed per request */}
        </div>
      </div>
    </section>
  )
}

export default Hero
