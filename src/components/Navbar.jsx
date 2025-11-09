import React from 'react'
import { FaHome, FaInfoCircle, FaBook, FaCalendarAlt, FaImages, FaEnvelope, FaUserGraduate } from 'react-icons/fa'
import TubelightNavbar from './ui/TubelightNavbar'

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    {
      name: 'Home',
      icon: FaHome,
      onClick: () => scrollToSection('home')
    },
    {
      name: 'About',
      icon: FaInfoCircle,
      onClick: () => scrollToSection('about')
    },
    {
      name: 'Programs',
      icon: FaBook,
      onClick: () => scrollToSection('programs')
    },
    {
      name: 'Events',
      icon: FaCalendarAlt,
      onClick: () => scrollToSection('events')
    },
    {
      name: 'Gallery',
      icon: FaImages,
      onClick: () => scrollToSection('gallery')
    },
    {
      name: 'Contact',
      icon: FaEnvelope,
      onClick: () => scrollToSection('contact')
    },
    {
      name: 'Apply Now',
      icon: FaUserGraduate,
      onClick: () => scrollToSection('contact')
    }
  ]

  return <TubelightNavbar items={navItems} />
}

export default Navbar
