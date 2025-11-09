import React from 'react'
import { FaAward, FaUsers, FaGlobe, FaLightbulb } from 'react-icons/fa'
import './About.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const About = () => {
  const features = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Recognized globally for academic excellence and innovation in legal education'
    },
    {
      icon: <FaUsers />,
      title: 'Community',
      description: 'A diverse community of scholars, practitioners, and thought leaders'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Reach',
      description: 'International partnerships and exchange programs across 50+ countries'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Cutting-edge research facilities and modern teaching methodologies'
    }
  ]

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About MNLU Mumbai</h2>
        <p className="section-subtitle">
          Maharashtra National Law University, Mumbai is committed to creating legal 
          excellence through research and training, advancing the legal discourse in India.
        </p>

        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <picture>
                <source type="image/webp" srcSet="/images/optimized/IMG_6008-scaled-800.webp 800w, /images/optimized/IMG_6008-scaled-400.webp 400w" />
                <img src="/images/optimized/IMG_6008-scaled-800.jpg" srcSet="/images/optimized/IMG_6008-scaled-800.jpg 800w, /images/optimized/IMG_6008-scaled-400.jpg 400w" alt="MNLU Mumbai" loading="lazy" />
              </picture>
            </div>
          </div>

          <div className="about-text">
            <h3>Centre for Advanced Legal Studies, Training and Research</h3>
            <p>
              CALSTAR is a single, unique, independent flagship centre at Maharashtra 
              National Law University Mumbai that envisions bringing all academic, research 
              and training activities and its confluence with existing, contemporary and 
              futuristic law.
            </p>
            <p>
              CALSTAR aims to participate in, contribute to, and endeavour to mould the 
              legal discourse in the best possible way. Like a star, we at the centre wish 
              to be the beacon of light for all the present and future endeavours in the 
              field of law.
            </p>
            <InteractiveHoverButton className="btn btn-primary">Learn More About Us</InteractiveHoverButton>
          </div>
        </div>

        <div className="features-grid grid grid-4">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
