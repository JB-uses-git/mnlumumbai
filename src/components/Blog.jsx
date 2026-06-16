import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'
import InteractiveHoverButton from './ui/interactive-hover-button'

const Blog = memo(() => {
  const navigate = useNavigate()

  const blogs = []

  return (
    <section className="section blog" id="blog">
      <div className="container">
        <h2 className="section-title">Latest Blogs</h2>
        <p className="section-subtitle">
          Explore analytical pieces on contemporary law, government policy, and legal discourse
        </p>
        <div className="blog-submissions-banner">
          <p>
            <strong>Share Your Insights:</strong> Submit your analytical work on contemporary legal issues.{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/submissions'); }} className="banner-link">Submit Now</a>
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="empty-blogs-state">
            <h3 className="empty-blogs-title">No Blogs Published Yet</h3>
            <p className="empty-blogs-description">
              We are currently open for submissions! Share your legal insights, research papers, or case comments with us.
            </p>
            <InteractiveHoverButton className="btn btn-primary" onClick={() => navigate('/submissions')}>
              Submit a Blog
            </InteractiveHoverButton>
          </div>
        ) : (
          <>
            <div className="blog-grid">
              {blogs.map((blog) => (
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

            <div className="blog-footer">
              <InteractiveHoverButton
                className="btn btn-primary"
                onClick={() => navigate('/blogs')}
              >
                View All Blogs
              </InteractiveHoverButton>
            </div>
          </>
        )}

      </div>
    </section >
  )
})

export default Blog
