# MNLU Mumbai - Modern National Law University Website

A clean, modern, and responsive college website built with React and Vite.

## 🎨 Features

- **Modern UI Design** - Clean and sleek interface with gradient backgrounds, smooth animations, and hover effects
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Multiple Sections**:
  - Hero section with statistics
  - About section with features
  - Programs showcase
  - Upcoming events
  - Campus gallery
  - Contact form
  - Footer with newsletter signup
- **Interactive Elements** - Smooth scrolling navigation, mobile menu, and engaging button styles
- **Dummy Data** - Pre-filled with sample content for easy customization

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
college-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Programs.jsx & Programs.css
│   │   ├── Events.jsx & Events.css
│   │   ├── Gallery.jsx & Gallery.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: #2563eb;
  --secondary: #7c3aed;
  --accent: #f59e0b;
  /* ... more variables */
}
```

### Updating Content
- **College Name**: Update in `Navbar.jsx` and `Footer.jsx`
- **Programs**: Edit the `programs` array in `Programs.jsx`
- **Events**: Edit the `events` array in `Events.jsx`
- **Contact Info**: Update in `Contact.jsx`

### Adding Images
Replace the Unsplash URLs in components with your own images.

## 🛠️ Built With

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with modern features (Grid, Flexbox, Gradients)
- **Google Fonts (Inter)** - Typography

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 🎯 Key Features Implemented

✅ Responsive navbar with mobile menu  
✅ Hero section with gradient background and statistics  
✅ About section with feature cards  
✅ Programs section with detailed cards  
✅ Events calendar with category badges  
✅ Image gallery with hover effects  
✅ Contact form with validation-ready inputs  
✅ Footer with social links and newsletter  
✅ Smooth scrolling navigation  
✅ Modern button styles with hover animations  
✅ Card components with shadow and transform effects  
✅ Mobile-first responsive design  

## 📝 License

Free to use and customize for your college website.

## 🤝 Contributing

Feel free to customize and enhance the website according to your needs!

---

Made with ❤️ for MNLU
