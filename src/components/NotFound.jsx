import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaExclamationTriangle } from 'react-icons/fa'
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-icon">
          <FaExclamationTriangle />
        </div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button className="home-btn-404" onClick={() => navigate('/')}>
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
