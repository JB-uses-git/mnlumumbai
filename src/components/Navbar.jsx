import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaBook, FaCalendarAlt, FaBlog, FaEnvelope } from 'react-icons/fa'
import TubelightNavbar from './ui/TubelightNavbar'

const SECTION_CONFIG = [
  { name: 'Home', id: 'home', icon: FaHome },
  { name: 'About', id: 'about', icon: FaInfoCircle },

  { name: 'Faculty', id: 'faculty', icon: FaBook },

  { name: 'Events', id: 'events', icon: FaCalendarAlt },
  {
    name: 'Blog',
    id: 'blog',
    icon: FaBlog,
    subItems: [
      { name: 'Editorial board', isRoute: true, route: '/board-of-editors' },
      { name: 'Guidelines', isRoute: true, route: '/submission-guidelines-blog' },
      { name: 'Blogs', isRoute: true, route: '/blogs' }
    ]
  },
  { name: 'Contact', id: 'contact', icon: FaEnvelope }
]



const Navbar = () => {
  const [activeSection, setActiveSection] = useState(SECTION_CONFIG[0].name)
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (item, name) => {
    if (item.isRoute && item.route) {
      navigate(item.route)
    } else {
      scrollToSection(item.id)
      setActiveSection(name)
    }
  }

  useEffect(() => {
    const headerOffset = 140
    let ticking = false

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
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', requestTick, { passive: true })
    return () => window.removeEventListener('scroll', requestTick)
  }, [])

  const navItems = [
    ...SECTION_CONFIG.map((item) => ({
      name: item.name,
      icon: item.icon,
      onClick: () => handleNavClick(item, item.name),
      subItems: item.subItems?.map(sub => ({
        name: sub.name,
        onClick: () => handleNavClick(sub, item.name) // Use item name to keep main section active or handle separately
      }))
    }))
  ]

  return <TubelightNavbar items={navItems} activeItem={activeSection} />
}

export default Navbar
