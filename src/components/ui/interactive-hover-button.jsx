import React from 'react'
import './interactive-hover-button.css'

const InteractiveHoverButton = ({ children, className = '', href, type = 'button', onClick, ...props }) => {
  const classes = `interactive-hover-button ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        <span className="ihb-text">{children}</span>
        <span className="ihb-text-hover">{children}</span>
        <span className="ihb-bg"></span>
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      <span className="ihb-text">{children}</span>
      <span className="ihb-text-hover">{children}</span>
      <span className="ihb-bg"></span>
    </button>
  )
}

export default InteractiveHoverButton
