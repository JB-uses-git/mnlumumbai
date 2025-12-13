import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaCheckCircle, FaClipboardList, FaUpload, FaClock, FaArrowLeft } from 'react-icons/fa'
import './SubmissionGuidelines.css'
import Footer from './Footer'

const SubmissionGuidelines = memo(() => {
  const navigate = useNavigate()

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
          <h1 className="guidelines-nav-title">Submission Guidelines</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="guidelines-hero">
        <div className="container">
          <h1 className="guidelines-hero-title">Publication Submission Guidelines</h1>
          <p className="guidelines-hero-subtitle">
            Guidelines for submitting your research to CALSTAR's Blog and Journal
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
                  References must be in the form of <strong>hyperlinks</strong>, linked to keywords and phrases in the body of the submission. Use of footnotes/endnotes should be limited to circumstances where a hyperlink reference is not available. For footnotes/endnotes, the <strong>Oxford University Standard for Citation of Legal Authorities (OSCOLA) (4th edition)</strong> must be adhered to.
                </li>
                <li>Co-authorship of up to <strong>2 authors</strong> is permitted.</li>
                <li>
                  Submissions will be accepted if they are in the form of <strong>articles, opinions, case comments, and short notes</strong> on the aforementioned themes. We encourage the submission should be <strong>analytical and solution oriented</strong> rather than descriptive.
                </li>
                <li>The submission should preferably be between <strong>1200 to 2000 words</strong>.</li>
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
                  Submissions to be made by creating a <strong>Google Form</strong> (link to be provided), where the manuscript should be in the form of a <strong>Microsoft Word document (.docx)</strong>. The Word document title and body must <strong>not contain any personal information</strong> of the author such as name and institution. Any submission through mail will not be accepted.
                </li>
                <li>
                  Author/authors will receive a <strong>confirmation mail within 24 hours</strong> of their submission. In case where no confirmation mail is received, the authors are requested to mail at <strong>submissions.calstar@mnlumumbai.edu.in</strong>
                </li>
                <li>
                  Please do not send pieces that have already been submitted elsewhere for review.
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
                  The Editorial Board is committed to reverting with the final decision within <strong>two-three weeks</strong> of receiving the submission. In case of no update regarding the submission, the author can raise their complaint through <strong>queries.calstar@mnlumumbai.edu.in</strong>
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

export default SubmissionGuidelines
