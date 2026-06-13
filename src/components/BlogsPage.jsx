import React, { useState, useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaChevronDown } from 'react-icons/fa'
import './BlogsPage.css'
import Footer from './Footer'

const BlogsPage = memo(() => {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownTimer = React.useRef(null)

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setDropdownOpen(true)
  }

  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 150)
  }

  const allBlogs = []

  useEffect(() => {
    // Ensure the blogs page opens scrolled to top when navigated to
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch (e) {
      // fallback for older browsers
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="blogs-page">
      {/* Blogs Page Navbar */}
      <nav className="blogs-navbar">
        <div className="blogs-nav-container">
          <button className="home-btn" onClick={() => navigate('/')} aria-label="Go to home">
            <FaHome />
          </button>
          
          <ul className="blogs-nav-menu">
            <li className="blogs-nav-item active">
              <span>Blogs</span>
            </li>
            <li className="blogs-nav-item" onClick={() => navigate('/submissions')}>
              <span>Submit to Blog</span>
            </li>
            <li 
              className={`blogs-nav-item dropdown ${dropdownOpen ? 'open' : ''}`}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <div className="dropdown-trigger">
                Submission Guidelines <FaChevronDown className="dropdown-icon" />
              </div>
              {dropdownOpen && (
                <ul 
                  className="dropdown-menu"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <li 
                    className="dropdown-item" 
                    onClick={() => {
                      setDropdownOpen(false)
                      navigate('/submission-guidelines-journal')
                    }}
                  >
                    Submission Guideline for Journal
                  </li>
                  <li 
                    className="dropdown-item" 
                    onClick={() => {
                      setDropdownOpen(false)
                      navigate('/submission-guidelines-blog')
                    }}
                  >
                    Submission Guideline for Blog
                  </li>
                </ul>
              )}
            </li>
            <li className="blogs-nav-item" onClick={() => navigate('/board-of-editors')}>
              <span>Board of Editors</span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Blogs Content */}
      <section className="blogs-content">
        <div className="container">
          <h1 className="blogs-page-title">All Blogs</h1>
          <p className="blogs-page-subtitle">
            Explore our complete collection of legal insights and analysis
          </p>

          {allBlogs.length === 0 ? (
            <div className="empty-blogs-state" style={{ textAlign: 'center', padding: '4rem 2rem', background: '#f8fafc', borderRadius: '16px', border: '1px dashed #cbd5e1', margin: '3rem auto', maxWidth: '600px' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: '600' }}>No Blogs Published Yet</h3>
              <p style={{ color: '#64748b', marginBottom: '1.75rem', fontSize: '0.975rem', lineHeight: '1.6' }}>
                Our blog is currently open for submissions. Share your analytical work, research papers, or legal insights to get featured.
              </p>
              <button 
                className="submit-btn" 
                onClick={() => navigate('/submissions')} 
                style={{ 
                  background: 'var(--primary)', 
                  color: 'var(--white)', 
                  padding: '0.75rem 2rem', 
                  borderRadius: '30px', 
                  border: 'none', 
                  fontWeight: '600', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                }}
              >
                Submit to Blog
              </button>
            </div>
          ) : (
            <div className="blogs-page-grid">
              {allBlogs.map((blog) => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-image-wrapper">
                    <img src={blog.image} alt={blog.title} loading="lazy" />
                    <span className="blog-category">{blog.category}</span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-author">{blog.author}</span>
                      <span className="blog-separator">•</span>
                      <span className="blog-date">{blog.date}</span>
                      <span className="blog-separator">•</span>
                      <span className="blog-read-time">{blog.readTime}</span>
                    </div>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
})

export default BlogsPage
