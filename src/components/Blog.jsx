import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'
import InteractiveHoverButton from './ui/interactive-hover-button'
import BoardOfEditorsContent from './BoardOfEditorsContent'

const Blog = memo(() => {
  const navigate = useNavigate()

  const blogs = [
    {
      id: 1,
      title: 'Understanding Constitutional Rights in Modern India',
      excerpt: 'An in-depth analysis of fundamental rights and their evolution in contemporary legal frameworks.',
      author: 'Dr. Rajesh Kumar',
      date: 'December 10, 2025',
      category: 'Constitutional Law',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Corporate Governance and Compliance in 2025',
      excerpt: 'Exploring the latest regulatory changes and their impact on corporate legal practices.',
      author: 'Adv. Priya Sharma',
      date: 'December 8, 2025',
      category: 'Corporate Law',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Environmental Law and Climate Justice',
      excerpt: 'How environmental legislation is shaping the future of climate action and sustainability.',
      author: 'Prof. Meera Patel',
      date: 'December 5, 2025',
      category: 'Environmental Law',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop'
    }
  ]

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

      </div>
      <BoardOfEditorsContent />
    </section >
  )
})

export default Blog
