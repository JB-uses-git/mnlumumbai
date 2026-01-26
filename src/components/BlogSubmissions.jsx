import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaArrowLeft, FaPenFancy, FaListUl, FaUpload, FaClock } from 'react-icons/fa'
import './BlogSubmissions.css'
import Footer from './Footer'

const BlogSubmissions = memo(() => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="blog-submissions-page">
      {/* Navbar */}
      <nav className="submissions-navbar">
        <div className="submissions-nav-container">
          <div className="nav-buttons">
            <button className="home-btn" onClick={() => navigate('/')} aria-label="Go to home">
              <FaHome />
            </button>
            <button className="back-btn" onClick={() => navigate('/blogs')} aria-label="Back to blogs">
              <FaArrowLeft />
            </button>
          </div>
          <h1 className="submissions-nav-title">Call for Submissions</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="submissions-hero">
        <div className="container">
          <div className="hero-icon">
            <FaPenFancy />
          </div>
          <h1 className="submissions-hero-title">Call for Submissions: CALSTAR Blog</h1>
          <p className="submissions-hero-subtitle">
            Share your insights on contemporary legal issues with our community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="submissions-content">
        <div className="container">

          {/* Themes Section */}
          <div className="submissions-section">
            <div className="section-icon">
              <FaPenFancy />
            </div>
            <h2 className="submissions-section-title">Themes</h2>
            <div className="submissions-text">
              <p>
                The CALSTAR blog publishes the latest updates on developments relating to law and government policy. The submission should deal with a relevant and contemporaneous issue concerning any area of the law. <strong>Only original content will be accepted.</strong>
              </p>
            </div>
          </div>

          {/* Guidelines for the Content */}
          <div className="submissions-section">
            <div className="section-icon">
              <FaListUl />
            </div>
            <h2 className="submissions-section-title">Guidelines for the Content</h2>
            <div className="submissions-text">
              <ol className="submissions-numbered-list">
                <li>
                  <strong>Word Limit:</strong> All submissions shall ideally be between <strong>1,200-2,000 words</strong>. The title of the submission shall not exceed <strong>15 words</strong>.
                </li>
                <li>
                  <strong>Formatting:</strong> Font: Times New Roman, Size: 12, Line spacing: 1.5. <strong>Justify all text.</strong> Use sub-headings where required.
                </li>
                <li>
                  <strong>Citations:</strong> All sources must be <strong>hyperlinked (compulsorily)</strong>, linked to keywords and phrases in the body of the submission. If necessary, authors may use endnotes. Use of footnotes/endnotes should be limited to circumstances where a hyperlink reference is not available. For footnotes/endnotes, the <strong>Oxford University Standard for Citation of Legal Authorities (OSCOLA) (4th edition)</strong> must be adhered to.
                </li>
                <li>
                  <strong>Language:</strong> Language should be <strong>formal, neutral, and precise</strong>. Avoid overuse of legalese.
                </li>
                <li>
                  <strong>Approach:</strong> Submissions should be <strong>analytical and solution-oriented</strong> rather than descriptive.
                </li>
              </ol>
            </div>
          </div>

          {/* Submission Process */}
          <div className="submissions-section highlight-section">
            <div className="section-icon">
              <FaUpload />
            </div>
            <h2 className="submissions-section-title">Submission Process</h2>
            <div className="submissions-text">
              <ol className="submissions-numbered-list">
                <li>
                  <strong>Submit via Google Form:</strong> All submissions must be made through our official Google Form (see below). The manuscript should be in the form of a <strong>Microsoft Word document (.docx)</strong>. The Word document title and body must <strong>not contain any personal information</strong> of the author such as name and institution. <strong>Kindly do not send submissions via email.</strong>
                </li>
                <li>
                  <strong>Confirmation:</strong> Author/authors will receive a <strong>confirmation mail within 24 hours</strong> of their submission. In case no confirmation mail is received, please contact us at <strong><a href="mailto:calstar@mnlumumbai.edu.in">calstar@mnlumumbai.edu.in</a></strong>
                </li>
                <li>
                  <strong>Requirements:</strong> Submissions must be <strong>original and unpublished</strong>. Co-authorship of up to <strong>2 authors</strong> is allowed. <strong>Plagiarism above 10% will lead to rejection.</strong>
                </li>
              </ol>

              {/* Google Form Embed Section */}
              <div className="google-form-container">
                <h3 className="form-heading">Submit Your Blog Post</h3>
                <div className="form-instructions">
                  <p><strong>Required Information:</strong></p>
                  <ul>
                    <li>Author Name(s)</li>
                    <li>Institution/Affiliation</li>
                    <li>Email Address</li>
                    <li>Short Bio (50-100 words)</li>
                    <li>Manuscript Upload (Anonymous .docx file - no personal info in document)</li>
                  </ul>
                </div>

                {/* Placeholder for Google Form */}
                <div className="form-placeholder">
                  <div className="placeholder-content">
                    <FaUpload className="placeholder-icon" />
                    <h4>Ready to Submit?</h4>
                    <p>Please use the button below to access our submission form.</p>
                    <p>For any issues, contact us at:</p>
                    <a href="mailto:calstar@mnlumumbai.edu.in" className="email-link">
                      calstar@mnlumumbai.edu.in
                    </a>
                  </div>
                </div>

                {/* Uncomment below when Google Form is ready
                <div className="form-embed">
                  <iframe 
                    src="YOUR_GOOGLE_FORM_URL_HERE"
                    width="100%" 
                    height="800" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    title="CALSTAR Blog Submission Form"
                  >
                    Loading…
                  </iframe>
                </div>
                */}

                <div className="submission-cta">
                  <a
                    href="https://forms.gle/o8wBRxLiuGm6aftUA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary submit-btn"
                  >
                    Submit Your Blog
                  </a>
                  <p className="cta-note">Click above to submit your work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tentative Timeline */}
          <div className="submissions-section">
            <div className="section-icon">
              <FaClock />
            </div>
            <h2 className="submissions-section-title">Tentative Timeline</h2>
            <div className="submissions-text">
              <p className="timeline-intro">
                In order to uphold the highest standards of academic integrity and quality, all submissions shall undergo a <strong>three-tier review process</strong>. The author shall be informed of the decision taken at the conclusion of each stage of the review process.
              </p>

              <ol className="submissions-numbered-list timeline-list">
                <li>
                  <strong>Stage I - Preliminary Review:</strong> Each submission will undergo a preliminary evaluation to ensure adherence to the basic editorial requirements. This includes a <strong>plagiarism check, AI check</strong> as well as an assessment of grammar, sentence structure, coherence, and overall readability.
                </li>
                <li>
                  <strong>Stage II - Substantive Review:</strong> Submissions that successfully clear the preliminary review will be evaluated for the <strong>depth of analysis, originality of argumentation, and novelty of the topic</strong>. The reviewers at this stage shall assess whether the piece contributes meaningfully to existing discourse and aligns with the thematic focus of the Blog.
                </li>
                <li>
                  <strong>Stage III - Final Editorial Review:</strong> In the final stage, the submission will be reviewed by the <strong>Distinguished Board of Editors</strong>, comprising eminent academicians, practitioners, and professionals in the field. The Board shall make the final determination regarding publication, taking into consideration the overall quality, analytical rigour, and relevance of the submission.
                </li>
                <li>
                  <strong>Duration:</strong> The review process generally takes around <strong>2-3 weeks</strong>.
                </li>
                <li>
                  <strong>Updates:</strong> In case of delays, authors may seek updates through our official email address <strong><a href="mailto:calstar@mnlumumbai.edu.in">calstar@mnlumumbai.edu.in</a></strong>
                </li>
                <li>
                  <strong>Extensions:</strong> Certain submissions may require additional time for review, in which case the author will be promptly informed of the extension on a case-to-case basis via email.
                </li>
              </ol>

              <div className="timeline-footer">
                <p className="important-note">
                  <strong>Important:</strong> All submissions will undergo a <strong>blind peer-review</strong> by the Editorial Board. The Editorial Board reserves the right to suggest edits or reject submissions without detailed feedback. Once published, the piece cannot be republished elsewhere without express permission.
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

BlogSubmissions.displayName = 'BlogSubmissions'

export default BlogSubmissions
