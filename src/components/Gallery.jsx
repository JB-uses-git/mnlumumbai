import React, { memo } from 'react'
import './Gallery.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Gallery = memo(() => {
  const images = [
    {
      url: '/images/graduation.jpg',
      title: 'Graduation Ceremony',
      category: 'Events'
    },
    {
      url: '/images/moot-court.jpg',
      title: 'Moot Court Event',
      category: 'Events'
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
      title: 'Library',
      category: 'Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      title: 'Seminar Hall',
      category: 'Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
      title: 'Campus Building',
      category: 'Campus'
    },
    {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      title: 'Student Activities',
      category: 'Campus'
    }
  ]

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Campus Gallery</h2>
        <p className="section-subtitle">
          Explore our state-of-the-art facilities and vibrant campus life
        </p>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category}</span>
                <h4>{image.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <InteractiveHoverButton className="btn btn-primary">View Full Gallery</InteractiveHoverButton>
        </div>
      </div>
    </section>
  )
})

export default Gallery
