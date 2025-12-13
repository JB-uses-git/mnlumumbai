import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaArrowLeft, FaCheckCircle, FaClipboardList, FaUpload, FaClock, FaBook } from 'react-icons/fa'
import './SubmissionGuidelines.css'
import Footer from './Footer'

const SubmissionGuidelinesJournal = memo(() => {
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
          <h1 className="guidelines-nav-title">Submission Guidelines - Journal</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="guidelines-hero">
        <div className="container">
          <div className="hero-icon">
            <FaBook />
          </div>
          <h1 className="guidelines-hero-title">Journal Submission Guidelines</h1>
          <p className="guidelines-hero-subtitle">
            Guidelines for submitting academic articles to CALSTAR's Journal
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
                The submission should deal with a relevant and contemporaneous issue concerning any area of the law or government policy. <strong>Only original content will be accepted.</strong>
              </p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="guidelines-section">
            <div className="section-icon">
              <FaBook />
            </div>
            <h2 className="guidelines-section-title">Categories</h2>
            <div className="guidelines-text">
              <div className="category-list">
                <div className="category-item">
                  <h3>Long Form Articles (6,000 – 10,000 words)</h3>
                  <p>Submissions in this category are expected to engage with the topic, its theme, and available literature comprehensively so as to offer a novel and original reassessment.</p>
                </div>
                <div className="category-item">
                  <h3>Essays (4,000 – 6,000 words)</h3>
                  <p>Comparatively more concise and limited in scope. Essays usually deal with a very specific topic as compared to Long Form Articles.</p>
                </div>
                <div className="category-item">
                  <h3>Case/Legislative Comments (1,500 – 3,000 words)</h3>
                  <p>Expected to critically analyse a recent judicial/quasi-judicial decision or legislative/policy proposal and comment on its implications.</p>
                </div>
                <div className="category-item">
                  <h3>Book Reviews (2,000 – 3,000 words)</h3>
                  <p>Expected to critically analyse and engage with a recent academic book that falls under our mandate.</p>
                </div>
              </div>
              <p className="note"><strong>Note:</strong> These word limits are merely indicative and we retain a reasonable level of flexibility. Word limits are exclusive of footnotes.</p>
            </div>
          </div>

          {/* Content Guidelines */}
          <div className="guidelines-section">
            <div className="section-icon">
              <FaCheckCircle />
            </div>
            <h2 className="guidelines-section-title">Guidelines for Content</h2>
            <div className="guidelines-text">
              <ol className="guidelines-list">
                <li>Submission should be the <strong>original work</strong> of the author/authors.</li>
                <li>
                  All submissions must include an <strong>abstract of not more than 300 words</strong>, explaining the main idea, the objective of the article and the conclusions drawn from it.
                </li>
                <li>
                  The manuscript should be on <strong>A4-sized paper, in Times New Roman, font size 12, 1.5 line spacing, justified and 1-inch margins</strong> on each side. Footnotes should be in Times New Roman, font size 10 with single line spacing.
                </li>
                <li>
                  References must be in the form of <strong>hyperlinks</strong>, linked to keywords and phrases in the body of the submission. Use of footnotes/endnotes should be limited to circumstances where a hyperlink reference is not available. For footnotes/endnotes, the <strong>Oxford University Standard for Citation of Legal Authorities (OSCOLA) (4th edition)</strong> must be adhered to.
                </li>
                <li>Co-authorship of up to <strong>2 authors</strong> is permitted.</li>
                <li>
                  The manuscript should <strong>not contain any identification</strong> of the author/s, which shall be a ground for rejection. Authors should provide their contact details, designation, institutional affiliation and address in the covering letter.
                </li>
                <li>
                  Submissions should be <strong>analytical and solution oriented</strong> rather than descriptive.
                </li>
              </ol>
            </div>
          </div>

          {/* Submission Process */}
          <div className="guidelines-section">
            <div className="section-icon">
              <FaUpload />
            </div>
            <h2 className="guidelines-section-title">Submission Process</h2>
            <div className="guidelines-text">
              <ol className="guidelines-list">
                <li>
                  Submissions to be made through our <strong>Google Form</strong> (link to be provided). The manuscript should be in the form of a <strong>Microsoft Word document (.docx)</strong>. The Word document title and body must <strong>not contain any personal information</strong> of the author such as name and institution. Any submission through mail will not be accepted.
                </li>
                <li>
                  Author/authors will receive a <strong>confirmation mail within 24 hours</strong> of their submission. In case where no confirmation mail is received, the authors are requested to mail at <strong>submissions.calstar@mnlumumbai.edu.in</strong>
                </li>
                <li>
                  Please do not send pieces that have already been submitted elsewhere for review.
                </li>
                <li>
                  Any form of <strong>plagiarism will lead to direct rejection</strong>. The relevant sources should be duly acknowledged.
                </li>
              </ol>
              <div className="submission-action">
                <a href="#" className="btn btn-primary submission-btn">
                  Submit Your Manuscript
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
                    Submissions that successfully clear the preliminary review will be evaluated for the <strong>depth of analysis, originality of argumentation, and novelty of the topic</strong>. The reviewers at this stage shall assess whether the piece contributes meaningfully to existing discourse and aligns with the thematic focus of the Journal.
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
                  The Editorial Board is committed to reverting with the final decision within <strong>8-10 weeks</strong> of receiving the submission. In case of no update regarding the submission, the author can raise their complaint through <strong>queries.calstar@mnlumumbai.edu.in</strong>
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

export default SubmissionGuidelinesJournal
