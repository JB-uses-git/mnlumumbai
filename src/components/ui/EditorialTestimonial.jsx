import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './EditorialTestimonial.css'

const EditorialTestimonial = ({ testimonials }) => {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [active])

  const handleChange = (index) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1
    handleChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1
    handleChange(newIndex)
  }

  const current = testimonials[active]

  return (
    <div className="testimonials-editorial">
      {/* Large index number */}
      <div className="editorial-content">
        <span className="editorial-number">
          {String(active + 1).padStart(2, '0')}
        </span>

        <div className="editorial-text-container">
          {/* Quote */}
          <blockquote className={`editorial-quote ${isTransitioning ? 'transitioning' : ''}`}>
            {current.quote}
          </blockquote>

          {/* Author info with hover reveal */}
          <div className={`editorial-author ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="author-content">
              <div className="author-avatar-wrapper">
                <img
                  src={current.image}
                  alt={current.author}
                  className="author-avatar-image"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="author-name">{current.author}</p>
                <p className="author-meta">
                  {current.role}
                  <span className="author-separator">/</span>
                  <span className="author-company">{current.company}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - vertical line selector */}
      <div className="editorial-navigation">
        <div className="nav-left">
          <div className="nav-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleChange(index)}
                className="nav-indicator-btn"
                aria-label={`View testimonial ${index + 1}`}
              >
                <span className={`nav-indicator-line ${index === active ? 'active' : ''}`} />
              </button>
            ))}
          </div>
          <span className="nav-counter">
            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>

        <div className="nav-arrows">
          <button onClick={handlePrev} className="nav-arrow-btn" aria-label="Previous testimonial">
            <ChevronLeft className="nav-icon" />
          </button>
          <button onClick={handleNext} className="nav-arrow-btn" aria-label="Next testimonial">
            <ChevronRight className="nav-icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditorialTestimonial
