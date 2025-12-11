import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Faculty from './components/Faculty'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Faculty />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
