import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Faculty from './components/Faculty'
import BoardOfDirectors from './components/BoardOfDirectors'
import Events from './components/Events'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogsPage from './components/BlogsPage'
import SubmissionGuidelinesJournal from './components/SubmissionGuidelinesJournal'
import SubmissionGuidelinesBlog from './components/SubmissionGuidelinesBlog'
import BoardOfEditors from './components/BoardOfEditors'
import AboutPage from './components/AboutPage'
import BlogSubmissions from './components/BlogSubmissions'
import NotFound from './components/NotFound'
import './App.css'

// Main Page Component
function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Faculty />
      <BoardOfDirectors />
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/submissions" element={<BlogSubmissions />} />
          <Route path="/submission-guidelines-journal" element={<SubmissionGuidelinesJournal />} />
          <Route path="/submission-guidelines-blog" element={<SubmissionGuidelinesBlog />} />
          <Route path="/board-of-editors" element={<BoardOfEditors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
