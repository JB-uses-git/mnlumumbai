import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome, FaArrowLeft, FaPenFancy, FaListUl, FaUpload, FaClock, FaCheckCircle, FaExclamationCircle, FaEnvelope, FaBook } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Footer from './Footer'

const SubmissionGuidelines = memo(() => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="p-2.5 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary transition-colors flex items-center justify-center">
              <FaHome size={18} />
            </button>
            <button onClick={() => navigate('/blogs')} className="p-2.5 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary transition-colors flex items-center justify-center">
              <FaArrowLeft size={18} />
            </button>
          </div>
          <h1 className="text-xl font-serif font-bold text-primary">Submission Guidelines</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full overflow-hidden bg-primary py-24 sm:py-32 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-30 blur-2xl"></div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl flex flex-col items-center">
          <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-secondary/20 shadow-xl">
            <FaBook className="text-secondary text-4xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white mb-6 tracking-tight">Publication Submission Guidelines</h1>
          <p className="text-lg md:text-2xl text-primary-foreground/90 max-w-2xl font-medium">
            Guidelines for submitting your research to CALSTAR's Blog and Journal
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-16 max-w-5xl">
        <motion.div 
          className="grid gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Themes Section */}
          <motion.section variants={fadeInUp} className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-border/50 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-primary/10 text-primary items-center justify-center flex-shrink-0">
                <FaPenFancy size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">Themes</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The submission should deal with a relevant and contemporaneous issue concerning any area of the law or government policy. <strong className="text-foreground font-semibold">Only original content will be accepted.</strong>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Guidelines Section */}
          <motion.section variants={fadeInUp} className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-border/50 relative hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <FaListUl size={28} />
              </div>
              <div className="pt-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">Guidelines for Content</h2>
              </div>
            </div>
            <div className="grid gap-6">
              {[
                { title: 'Originality', desc: 'Submission should be the original work of the author/authors.' },
                { title: 'Citations', desc: 'References must be in the form of hyperlinks, linked to keywords and phrases in the body of the submission. Use of footnotes/endnotes should be limited. For footnotes/endnotes, the OSCOLA (4th edition) must be adhered to.' },
                { title: 'Co-authorship', desc: 'Co-authorship of up to 2 authors is permitted.' },
                { title: 'Format', desc: 'Submissions will be accepted if they are in the form of articles, opinions, case comments, and short notes. We encourage the submission to be analytical and solution oriented.' },
                { title: 'Word Limit', desc: 'The submission should preferably be between 1200 to 2000 words.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="mt-1 flex-shrink-0 text-primary hidden sm:block"><FaCheckCircle size={20} /></div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1 sm:mb-2 flex items-center gap-2">
                      <span className="sm:hidden text-primary"><FaCheckCircle size={16} /></span>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Submission Process */}
          <motion.section variants={fadeInUp} className="bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-primary/20 relative hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
               <div className="w-16 h-16 rounded-2xl bg-secondary/20 text-secondary-foreground flex items-center justify-center flex-shrink-0 shadow-sm border border-secondary/30">
                <FaUpload size={28} />
              </div>
              <div className="pt-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">Submission Process</h2>
              </div>
            </div>
            
            <div className="grid gap-6 mb-12">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                <div className="mt-1 flex-shrink-0 text-primary hidden sm:block"><FaCheckCircle size={20} /></div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
                      <span className="sm:hidden text-primary"><FaCheckCircle size={16} /></span>
                      Submit via Google Form
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">Submissions to be made by creating a Google Form. The manuscript should be a <strong>Microsoft Word document (.docx)</strong> and must <strong>not contain any personal information</strong>. Any submission through mail will not be accepted.</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col sm:flex-row gap-4 items-start">
                <div className="mt-1 flex-shrink-0 text-primary hidden sm:block"><FaCheckCircle size={20} /></div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
                      <span className="sm:hidden text-primary"><FaCheckCircle size={16} /></span>
                      Confirmation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">Authors will receive a confirmation mail within 24 hours. If not received, contact <a href="mailto:calstar@mnlumumbai.edu.in" className="text-primary hover:underline font-semibold">calstar@mnlumumbai.edu.in</a>.</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-red-100 shadow-sm flex flex-col sm:flex-row gap-4 items-start bg-red-50/30">
                <div className="mt-1 flex-shrink-0 text-red-500 hidden sm:block"><FaExclamationCircle size={20} /></div>
                <div>
                  <h3 className="font-bold text-red-800 text-lg mb-2 flex items-center gap-2">
                      <span className="sm:hidden text-red-500"><FaExclamationCircle size={16} /></span>
                      Important
                  </h3>
                  <p className="text-red-900/80 leading-relaxed">Please do not send pieces that have already been submitted elsewhere for review.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-card rounded-3xl border border-primary/20 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 relative z-10">Ready to Submit?</h3>
              <p className="text-muted-foreground mb-10 max-w-lg relative z-10 text-lg">Make sure your manuscript follows all guidelines and is stripped of personal information before uploading.</p>
              <a
                href="https://forms.gle/o8wBRxLiuGm6aftUA"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 font-semibold w-full sm:w-auto text-center"
              >
                <FaUpload size={20} /> Submit Your Manuscript via Google Form
              </a>
            </div>
          </motion.section>

          {/* Tentative Timeline */}
          <motion.section variants={fadeInUp} className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-border/50 relative hover:shadow-md transition-shadow mb-12">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <FaClock size={28} />
              </div>
              <div className="pt-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">Review Timeline</h2>
                <p className="text-muted-foreground text-lg max-w-3xl">In order to uphold the highest standards of academic integrity and quality, all submissions undergo a rigorous <strong className="text-foreground font-semibold">three-tier review process</strong>.</p>
              </div>
            </div>

            <div className="relative border-l-4 border-primary/20 ml-4 sm:ml-6 md:ml-8 space-y-12 pb-8 mt-12">
              {[
                { stage: 'Stage I', title: 'Preliminary Review', desc: 'Checks for adherence to basic editorial requirements. Includes a plagiarism check, AI check, and an assessment of grammar, sentence structure, coherence, and overall readability.' },
                { stage: 'Stage II', title: 'Substantive Review', desc: 'Evaluated for depth of analysis, originality of argumentation, and novelty of the topic. Reviewers assess whether the piece contributes meaningfully to existing discourse.' },
                { stage: 'Stage III', title: 'Final Editorial Review', desc: 'Reviewed by the Distinguished Board of Editors, comprising eminent academicians and practitioners. The Board makes the final determination regarding publication.' }
              ].map((item, i) => (
                <div key={i} className="relative pl-8 sm:pl-10 md:pl-12">
                  <div className="absolute -left-[1.65rem] sm:-left-[1.9rem] md:-left-[2.3rem] top-0 md:top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary border-4 border-card flex items-center justify-center shadow-md">
                    <div className="hidden md:block w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded-full mb-3">{item.stage}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-muted/40 p-6 sm:p-8 rounded-2xl border border-border/50">
              <ul className="space-y-5 text-muted-foreground text-lg">
                <li className="flex gap-4 items-start"><FaClock className="text-primary mt-1.5 flex-shrink-0" size={18} /> <span>The Editorial Board is committed to reverting with the final decision within <strong className="text-foreground">two-three weeks</strong> of receiving the submission.</span></li>
                <li className="flex gap-4 items-start"><FaEnvelope className="text-primary mt-1.5 flex-shrink-0" size={18} /> <span>In case of no update, the author can raise their complaint through <a href="mailto:calstar@mnlumumbai.edu.in" className="text-primary hover:underline font-semibold">calstar@mnlumumbai.edu.in</a></span></li>
                <li className="flex gap-4 items-start"><FaCheckCircle className="text-primary mt-1.5 flex-shrink-0" size={18} /> <span>Certain submissions may require additional time for review, in which case the author will be promptly informed via email.</span></li>
              </ul>
            </div>
          </motion.section>

        </motion.div>
      </main>

      <Footer />
    </div>
  )
})

SubmissionGuidelines.displayName = 'SubmissionGuidelines'
export default SubmissionGuidelines
