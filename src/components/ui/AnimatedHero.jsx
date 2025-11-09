import React, { useEffect, useState } from 'react'
import './AnimatedHero.css'

const AnimatedHero = ({ words = ['Legal Studies', 'Training', 'Research'], interval = 2200 }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(t)
  }, [words.length, interval])

  return (
    <span className="animated-hero" aria-hidden="false">
      <span className="ah-prefix">Centre for Advanced&nbsp;</span>

      <span className="ah-words" aria-live="polite">
        {/* translate by (index * 100/words.length)% so each step moves by one word */}
        <span
          className="ah-words-inner"
          style={{ transform: `translateY(-${(index * 100) / words.length}%)` }}
        >
          {words.map((w, i) => (
            <span className="ah-word" key={i} aria-hidden={i !== index}>
              {w}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}

export default AnimatedHero
