import React, { useState, useEffect } from 'react'
import './TubelightNavbar.css'

const TubelightNavbar = ({ items, className = '' }) => {
  const [activeTab, setActiveTab] = useState(items[0]?.name || '')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClick = (item) => {
    setActiveTab(item.name)
    if (item.onClick) {
      item.onClick()
    }
  }

  return (
    <div className={`tubelight-navbar-wrapper ${className}`}>
      {/* Logo and branding section */}
      <div className="navbar-brand">
        <img src="/calstar-logo.svg" alt="CALSTAR Logo" className="navbar-logo-img" />
        <div className="navbar-brand-text">
          <h2>MNLU Mumbai</h2>
          <span className="navbar-tagline">Excellence in Legal Education</span>
        </div>
      </div>

      {/* Tubelight navigation */}
      <div className="tubelight-navbar">
        <div className="tubelight-navbar-container">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={`tubelight-nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="nav-item-text">{item.name}</span>
                {Icon && (
                  <span className="nav-item-icon">
                    <Icon size={18} />
                  </span>
                )}
                {isActive && (
                  <div className="tubelight-lamp">
                    <div className="lamp-light">
                      <div className="glow glow-1" />
                      <div className="glow glow-2" />
                      <div className="glow glow-3" />
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TubelightNavbar
