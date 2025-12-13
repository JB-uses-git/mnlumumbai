# CALSTAR - Centre for Advanced Legal Studies, Training and Research

Official website for CALSTAR at Maharashtra National Law University (MNLU), Mumbai. A modern, responsive platform for legal scholarship, research, and academic engagement.

## � About CALSTAR

CALSTAR (Centre for Advanced Legal Studies, Training and Research) was established in 2022 at Maharashtra National Law University, Mumbai. The Centre serves as a platform for students, academicians, and professionals to engage in meaningful discussions, research, and participate in action-oriented learning.

### Our Wings

1. **Research & Publication Wing** - Legal scholarship, research projects, blog, and newsletter
2. **Social Media & Marketing Wing** - Digital presence across Instagram, LinkedIn, Twitter, and Facebook
3. **Events & Public Relations Wing** - Workshops, conferences, symposiums, and external communication

## ✨ Features

### Core Pages
- **Homepage** - Hero section, About CALSTAR, Faculty showcase, Events, Blog teasers, Contact
- **About Page** (`/about`) - Comprehensive CALSTAR information, structure, objectives, vision
- **Blogs Page** (`/blogs`) - Complete blog listing with search and categories
- **Blog Submissions** (`/submissions`) - Call for submissions with Google Form integration
- **Submission Guidelines** - Separate pages for Journal and Blog submissions
- **Board of Editors** (`/board-of-editors`) - Editorial board information

### Technical Features
- **Modern React 18 + Vite** - Fast development and optimized builds
- **Code Splitting** - Vendor chunks separated for optimal loading
- **SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards
- **Mobile Responsive** - Breakpoints at 768px and 1024px
- **404 Handling** - Custom not-found page with navigation
- **Sitemap & Robots.txt** - Full search engine indexing support

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd college-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: **http://localhost:5173/**

## 📁 Project Structure

```
MNLU/
├── public/
│   ├── robots.txt              # SEO: Search engine crawler rules
│   ├── sitemap.xml             # SEO: All routes indexed
│   └── calstar-logo.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Main navigation
│   │   ├── Hero.jsx            # Landing hero section
│   │   ├── About.jsx           # Homepage About section
│   │   ├── AboutPage.jsx       # Dedicated /about page
│   │   ├── Faculty.jsx         # Faculty showcase
│   │   ├── Events.jsx          # Events with Past/Upcoming tabs
│   │   ├── Blog.jsx            # Homepage blog teasers
│   │   ├── BlogsPage.jsx       # Full blogs listing at /blogs
│   │   ├── BlogSubmissions.jsx # Submissions page at /submissions
│   │   ├── SubmissionGuidelinesJournal.jsx
│   │   ├── SubmissionGuidelinesBlog.jsx
│   │   ├── BoardOfEditors.jsx  # Editorial board page
│   │   ├── Contact.jsx         # Contact form and info
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── NotFound.jsx        # 404 error page
│   │   └── ui/                 # Reusable UI components
│   ├── App.jsx                 # Main routing configuration
│   ├── App.css
│   ├── main.jsx
│   └── index.css               # Global styles and variables
├── index.html                  # SEO meta tags, Open Graph
├── vercel.json                 # Deployment config for SPA routing
├── vite.config.js              # Build optimization, code splitting
└── package.json
```

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --page-bg: #FAF0CA;     /* Cream background */
  --header-bg: #0D3B66;   /* Dark blue */
  --accent: #0D3B66;      /* Accent color */
  --dark: #1a1a1a;        /* Text color */
}
```

### Content Updates
- **Events**: Edit `upcomingEvents` and `pastEvents` arrays in `Events.jsx`
- **Faculty**: Update `facultyMembers` array in `Faculty.jsx`
- **Blog Posts**: Modify blog data in `BlogsPage.jsx` and `Blog.jsx`
- **Contact Info**: Update email and address in `Contact.jsx`
- **Social Links**: Update URLs in `Footer.jsx`

### SEO Configuration
- **Meta Tags**: Update in `index.html` (title, description, Open Graph)
- **Sitemap**: Update URLs and dates in `public/sitemap.xml`
- **Canonical URL**: Change domain in `index.html` and sitemap

## 🛠️ Tech Stack

- **React 18.3.1** - UI library with hooks
- **React Router DOM 7.10.1** - Client-side routing
- **Vite 5.4.2** - Fast build tool and dev server
- **React Icons 5.0.1** - Comprehensive icon library
- **Lucide React** - Additional modern icons
- **CSS3** - Modern styling (Grid, Flexbox, Custom Properties)
- **Google Fonts (Inter)** - Typography

## 📦 Build & Deploy

### Production Build
```bash
npm run build
```

Optimized files will be in the `dist/` folder. Build includes:
- Code splitting (React vendor: ~174KB, Icons: ~5KB)
- Minified assets (~262KB total, ~89KB gzipped)
- Optimized CSS (~43KB)

### Deployment
Configured for **Vercel** deployment with SPA routing support via `vercel.json`. Simply:
```bash
git push origin main
```

Vercel will automatically build and deploy from the main branch.

## 🔍 SEO Features

✅ Comprehensive meta tags (title, description, keywords)  
✅ Open Graph tags for social media sharing  
✅ Twitter Card support  
✅ Sitemap.xml with all 7 routes  
✅ Robots.txt for search engine crawlers  
✅ Canonical URLs configured  
✅ Mobile-responsive viewport meta tags  

## 🎯 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with Hero, About, Faculty, Events, Blog, Contact |
| `/about` | Comprehensive About CALSTAR page |
| `/blogs` | All blog posts listing |
| `/submissions` | Blog submission form and guidelines |
| `/submission-guidelines-journal` | Academic journal submission guidelines |
| `/submission-guidelines-blog` | Blog post submission guidelines |
| `/board-of-editors` | Editorial board information |
| `/*` | 404 Not Found page (catch-all) |

## 📱 Mobile Responsive

All pages include responsive breakpoints:
- **Desktop**: Full layout (>1024px)
- **Tablet**: Optimized grid (768px - 1024px)
- **Mobile**: Single column (<768px)

## 🔐 Content Guidelines

### Blog Submissions
- **Word Limit**: 1,200-2,000 words
- **Review Time**: 2-3 weeks
- **Categories**: Articles, Case Comments, Legislative Notes, Opinions

### Journal Submissions
- **Word Limit**: 6,000-10,000 words
- **Review Time**: 8-10 weeks
- **Categories**: Long Form Articles, Essays, Case Comments, Book Reviews

## 📧 Contact

- **Email**: calstar@mnlumumbai.edu.in
- **Submissions**: submissions.calstar@mnlumumbai.edu.in
- **Queries**: queries.calstar@mnlumumbai.edu.in
- **Social**: @calstar_mnlu (Instagram)

## 📝 License

© 2025 CALSTAR - Centre for Advanced Legal Studies, Training and Research, Maharashtra National Law University, Mumbai. All rights reserved.

---

**Director**: Ms. Aastha Tiwari  
**Established**: 2022  
**Affiliation**: Maharashtra National Law University, Mumbai
