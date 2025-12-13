import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaArrowLeft, FaCheckCircle, FaClipboardList, FaUpload, FaClock, FaBlog } from 'react-icons/fa'
import './SubmissionGuidelines.css'
import Footer from './Footer'

const SubmissionGuidelinesBlog = memo(() => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="submission-guidelines-page">
      {/* Navbar */}
      <nav className="guidelines-navbar">
        <div className="guidelines-nav-container">
          <div className="nav-buttons">
            <button className="home-btn" onClick={() => navigate('/')} aria-label="Go to home">
              <FaHome />
            </button>
            <button className="back-btn" onClick={() => navigate('/blogs')} aria-label="Back to blogs">
              <FaArrowLeft />
            </button>
          </div>
          <h1 className="guidelines-nav-title">Submission Guidelines - Blog</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="guidelines-hero">
        <div className="container">
          <div className="hero-icon">
            <FaBlog />
          </div>
          <h1 className="guidelines-hero-title">Blog Submission Guidelines</h1>
          <p className="guidelines-hero-subtitle">
            Guidelines for submitting blog posts to CALSTAR's Blog
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="guidelines-content">
        <div className="container">
          
          {/* Themes Section */}
          <div className="guidelines-section">
            <div className="section-icon">
              <FaClipboardList />
            </div>
            <h2 className="guidelines-section-title">Themes</h2>
            <div className="guidelines-text">
              <p>
                The CALSTAR blog publishes the latest updates on developments relating to law and government policy. The submission should deal with a relevant and contemporaneous issue concerning any area of the law. <strong>Only original content will be accepted.</strong>
              </p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="guidelines-section">
            <div className="section-icon">
              <FaBlog />
            </div>
            <h2 className="guidelines-section-title">Categories</h2>
            <div className="guidelines-text">
              <p>The categories of submissions are as follows:</p>
              <ul className="category-simple-list">
                <li><strong>Articles</strong></li>
                <li><strong>Case Comments</strong></li>
                <li><strong>Legislative Notes</strong></li>
                <li><strong>Opinions/Columns</strong></li>
              </ul>
              <p className="note">
                <strong>Note:</strong> The word limit of all submissions shall ideally be between <strong>1200-2000 words</strong>. Furthermore, the title of the submission shall not exceed <strong>15 words</strong>.
              </p>
            </div>
          </div>

          {/* Formatting Guidelines */}
          <div className="guidelines-section">
            <div className="section-icon">
              <FaCheckCircle />
            </div>
            <h2 className="guidelines-section-title">Formatting and Style Guidelines</h2>
            <div className="guidelines-text">
              <ul className="guidelines-list">
                <li>
                  <strong>Font:</strong> Times New Roman, <strong>Size:</strong> 12, <strong>Line spacing:</strong> 1.5
                </li>
                <li>
                  <strong>Justify all text.</strong> Use sub-headings where required.
                </li>
                <li>
                  All sources must be <strong>hyperlinked (compulsorily)</strong>, linked to keywords and phrases in the body of the submission. If necessary, authors may use endnotes. Use of footnotes/endnotes should be limited to circumstances where a hyperlink reference is not available. For footnotes/endnotes, the <strong>Oxford University Standard for Citation of Legal Authorities (OSCOLA) (4th edition)</strong> must be adhered to.
                </li>
                <li>
                  Language should be <strong>formal, neutral, and precise</strong>. Avoid overuse of legalese.
                </li>
                <li>
                  Submissions should be <strong>analytical and solution oriented</strong> rather than descriptive.
                </li>
              </ul>
            </div>
          </div>

          {/* Submission Process */}
          <div className="guidelines-section">
            <div className="section-icon">
              <FaUpload />
            </div>
            <h2 className="guidelines-section-title">Submission Policy</h2>
            <div className="guidelines-text">
              <ol className="guidelines-list">
                <li>
                  Submissions shall be made via our <strong>Google Form</strong> (link to be provided). The manuscript should be in the form of a <strong>Microsoft Word document (.docx)</strong>. The Word document title and body must <strong>not contain any personal information</strong> of the author such as name and institution. <strong>Kindly do not send submissions via email.</strong>
                </li>
                <li>
                  Author/authors will receive a <strong>confirmation mail within 24 hours</strong> of their submission. In case where no confirmation mail is received, the authors are requested to mail at <strong>submissions.calstar@mnlumumbai.edu.in</strong>
                </li>
                <li>
                  Submissions must be <strong>original and unpublished</strong>. Co-authorship of up to <strong>2 authors</strong> is allowed.
                </li>
                <li>
                  <strong>Plagiarism above 10% will lead to rejection.</strong>
                </li>
                <li>
                  All submissions will undergo a <strong>blind peer-review</strong> by the Editorial Board.
                </li>
                <li>
                  The Editorial Board reserves the right to suggest edits or reject submissions without detailed feedback.
                </li>
                <li>
                  Once published, the piece cannot be republished elsewhere without express permission.
                </li>
                <li>
                  Please do not send pieces that have already been submitted elsewhere for review.
                </li>
              </ol>
              <div className="submission-action">
                <a href="#" className="btn btn-primary submission-btn">
                  Submit Your Blog Post
                </a>
                <p className="submission-note">Google Form link will be available soon</p>
              </div>
            </div>
          </div>

          {/* Review Timeline */}
          <div className="guidelines-section">
            <div className="section-icon">
              <FaClock />
            </div>
            <h2 className="guidelines-section-title">Review Timeline</h2>
            <div className="guidelines-text">
              <p className="timeline-intro">
                In order to uphold the highest standards of academic integrity and quality, all submissions shall undergo a <strong>three-tier review process</strong>. The author shall be informed of the decision taken at the conclusion of each stage of the review process.
              </p>

              <div className="review-stages">
                <div className="review-stage">
                  <div className="stage-number">Stage I</div>
                  <h3 className="stage-title">Preliminary Review</h3>
                  <p className="stage-description">
                    Each submission will undergo a preliminary evaluation to ensure adherence to the basic editorial requirements. This includes a <strong>plagiarism check, AI check</strong> as well as an assessment of grammar, sentence structure, coherence, and overall readability.
                  </p>
                </div>

                <div className="review-stage">
                  <div className="stage-number">Stage II</div>
                  <h3 className="stage-title">Substantive Review</h3>
                  <p className="stage-description">
                    Submissions that successfully clear the preliminary review will be evaluated for the <strong>depth of analysis, originality of argumentation, and novelty of the topic</strong>. The reviewers at this stage shall assess whether the piece contributes meaningfully to existing discourse and aligns with the thematic focus of the Blog.
                  </p>
                </div>

                <div className="review-stage">
                  <div className="stage-number">Stage III</div>
                  <h3 className="stage-title">Final Editorial Review</h3>
                  <p className="stage-description">
                    In the final stage, the submission will be reviewed by the <strong>Distinguished Board of Editors</strong>, comprising eminent academicians, practitioners, and professionals in the field. The Board shall make the final determination regarding publication, taking into consideration the overall quality, analytical rigour, and relevance of the submission.
                  </p>
                </div>
              </div>

              <div className="timeline-footer">
                <p>
                  The review process generally takes around <strong>2-3 weeks</strong>. In case of delays, authors may seek updates through our official email address <strong>queries.calstar@mnlumumbai.edu.in</strong>
                </p>
                <p>
                  However, certain submissions may require additional time for review, in which case the author will be promptly informed of the extension on a case-to-case basis via email.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
})

export default SubmissionGuidelinesBlog
