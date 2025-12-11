import React, { useEffect, useState } from 'react'
import { FaHome, FaInfoCircle, FaBook, FaCalendarAlt, FaImages, FaEnvelope, FaUserGraduate } from 'react-icons/fa'
import TubelightNavbar from './ui/TubelightNavbar'

const SECTION_CONFIG = [
  { name: 'Home', id: 'home', icon: FaHome },
  { name: 'About', id: 'about', icon: FaInfoCircle },
  { name: 'Faculty', id: 'faculty', icon: FaBook },
  { name: 'Events', id: 'events', icon: FaCalendarAlt },
  { name: 'Gallery', id: 'gallery', icon: FaImages },
  { name: 'Contact', id: 'contact', icon: FaEnvelope }
]

const APPLY_ITEM = { name: 'Apply Now', icon: FaUserGraduate, targetId: 'contact' }

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(SECTION_CONFIG[0].name)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (id, name) => {
    scrollToSection(id)
    setActiveSection(name)
  }

  useEffect(() => {
    const headerOffset = 140

    const handleScroll = () => {
      let currentSection = SECTION_CONFIG[0].name
      let maxNegativeOffset = -Infinity
      let minPositiveOffset = Infinity

      SECTION_CONFIG.forEach(({ id, name }) => {
        const sectionEl = document.getElementById(id)
        if (!sectionEl) return

        const rect = sectionEl.getBoundingClientRect()
        const offsetTop = rect.top - headerOffset

        if (offsetTop <= 0 && offsetTop > maxNegativeOffset) {
          maxNegativeOffset = offsetTop
          currentSection = name
        } else if (offsetTop > 0 && maxNegativeOffset === -Infinity && offsetTop < minPositiveOffset) {
          minPositiveOffset = offsetTop
          currentSection = name
        }
      })

      // ensure the last section is highlighted near the bottom of the page
      const atPageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      if (atPageBottom) {
        currentSection = SECTION_CONFIG[SECTION_CONFIG.length - 1].name
      }

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    ...SECTION_CONFIG.map(({ id, name, icon }) => ({
      name,
      icon,
      onClick: () => handleNavClick(id, name)
    })),
    {
      name: APPLY_ITEM.name,
      icon: APPLY_ITEM.icon,
      onClick: () => handleNavClick(APPLY_ITEM.targetId, SECTION_CONFIG[SECTION_CONFIG.length - 1].name)
    }
  ]

  return <TubelightNavbar items={navItems} activeItem={activeSection} />
}

export default Navbar
