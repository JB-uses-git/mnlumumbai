import React, { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaChevronDown } from 'react-icons/fa'
import './BlogsPage.css'
import Footer from './Footer'

const BlogsPage = memo(() => {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const allBlogs = [
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
    },
    {
      id: 4,
      title: 'Intellectual Property Rights in Digital Age',
      excerpt: 'Navigating copyright, patents, and trademarks in the era of digital transformation.',
      author: 'Adv. Vikram Singh',
      date: 'December 3, 2025',
      category: 'IP Law',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Criminal Justice Reform: A Critical Assessment',
      excerpt: 'Examining recent reforms in criminal procedure and their implications for justice delivery.',
      author: 'Dr. Anita Desai',
      date: 'December 1, 2025',
      category: 'Criminal Law',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'International Trade Law and WTO Agreements',
      excerpt: 'Understanding global trade regulations and dispute resolution mechanisms.',
      author: 'Prof. Suresh Menon',
      date: 'November 28, 2025',
      category: 'International Law',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Family Law Reforms and Social Change',
      excerpt: 'How evolving family structures are reshaping legal frameworks and jurisprudence.',
      author: 'Adv. Kavita Reddy',
      date: 'November 25, 2025',
      category: 'Family Law',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      title: 'Taxation Law: Recent Amendments and Impact',
      excerpt: 'Analyzing the latest changes in tax legislation and their effects on businesses.',
      author: 'CA Amit Joshi',
      date: 'November 22, 2025',
      category: 'Tax Law',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
    },
    {
      id: 9,
      title: 'Cyber Law and Data Protection',
      excerpt: 'Protecting digital rights and privacy in an increasingly connected world.',
      author: 'Dr. Rahul Verma',
      date: 'November 20, 2025',
      category: 'Cyber Law',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop'
    },
    {
      id: 10,
      title: 'Alternative Dispute Resolution Mechanisms',
      excerpt: 'The growing importance of mediation and arbitration in modern legal practice.',
      author: 'Justice (Retd.) S.K. Gupta',
      date: 'November 18, 2025',
      category: 'ADR',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop'
    },
    {
      id: 11,
      title: 'Human Rights and Social Justice',
      excerpt: 'Examining the intersection of law, rights, and social equity in contemporary society.',
      author: 'Prof. Shalini Rao',
      date: 'November 15, 2025',
      category: 'Human Rights',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop'
    }
  ]

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
            <li 
              className="blogs-nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="dropdown-trigger">
                Submission Guidelines <FaChevronDown className="dropdown-icon" />
              </span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Submission Guideline for Journal</li>
                  <li className="dropdown-item">Submission Guideline for Blog</li>
                </ul>
              )}
            </li>
            <li className="blogs-nav-item">
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
        </div>
      </section>

      <Footer />
    </div>
  )
})

export default BlogsPage
