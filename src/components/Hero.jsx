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
    fontSize: '1.5rem',           // or 2.2rem / 32px if you want it even bigger
    fontWeight: '600',
    marginLeft: '-40px',        // adjust this value until it feels perfect
                                // try: -8px, -12px, -16px, -20px
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px'
  }}
>
  🎓 Maharashtra National Law University
</span>
          <h1 className="hero-title">
            Welcome to <br />
            <span className="gradient-text">MNLU Mumbai</span>
          </h1>
          {/* Animated phrase inserted under the title */}
          <div style={{ marginTop: '8px' }}>
            <AnimatedHero words={["Legal Studies", "Training", "Research"]} interval={2200} />
          </div>
          <p className="hero-description">
            Creating Legal Excellence Through Research and Training <br  />
            Join a community of scholars dedicated to advancing legal discourse 
            and academic excellence.
          </p>
          <div className="hero-buttons">
            <InteractiveHoverButton className="btn btn-primary">
              Explore Programs <FaArrowRight />
            </InteractiveHoverButton>
          </div>
          {/* hero stats removed per request */}
        </div>
      </div>
    </section>
  )
}

export default Hero
