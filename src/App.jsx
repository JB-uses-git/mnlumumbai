import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Faculty from './components/Faculty'
import Events from './components/Events'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogsPage from './components/BlogsPage'
import './App.css'

// Main Page Component
function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Faculty />
      <Events />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
