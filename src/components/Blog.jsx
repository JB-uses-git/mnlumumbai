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
        <div className="blog-submissions-banner" style={{ background: 'linear-gradient(135deg, rgba(13, 59, 102, 0.1) 0%, rgba(13, 59, 102, 0.05) 100%)', padding: '1rem 2rem', borderRadius: '8px', textAlign: 'center', margin: '1rem auto 2rem', maxWidth: '700px', border: '2px solid var(--accent)' }}>
          <p style={{ margin: '0', fontSize: '1.05rem', color: 'var(--dark)' }}>
            <strong>Share Your Insights:</strong> Submit your analytical work on contemporary legal issues. <a href="#" onClick={(e) => { e.preventDefault(); navigate('/submissions'); }} style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: '600' }}>Submit Now</a>
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="empty-blogs-state" style={{ textAlign: 'center', padding: '3.5rem 2rem', background: '#f8fafc', borderRadius: '16px', border: '1px dashed #cbd5e1', margin: '2rem auto', maxWidth: '600px' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: '600' }}>No Blogs Published Yet</h3>
            <p style={{ color: '#64748b', marginBottom: '1.75rem', fontSize: '0.975rem', lineHeight: '1.6' }}>
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
