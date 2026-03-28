# Farhan Khan — Portfolio

A fully responsive dark-themed portfolio built with **React + Vite (JSX)**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
farhan-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── hooks/
    │   └── useReveal.js
    ├── styles/
    │   └── global.css
    └── components/
        ├── Cursor.jsx / .module.css
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx   / .module.css
        ├── About.jsx  / .module.css
        ├── Skills.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Contact.jsx  / .module.css
        └── Footer.jsx   / .module.css
```

## 🎨 Features
- Dark black/purple theme with glowing blobs & noise texture
- Custom animated cursor
- Smooth scroll reveal animations
- Sticky navbar with blur-on-scroll
- Fully responsive with mobile hamburger menu
- Contact form with toast notification
- Google Fonts: **Syne** (headings) + **DM Sans** (body)

## 🛠 Tech Stack
- React 18
- Vite 5
- CSS Modules
- No external UI libraries — pure CSS & vanilla JS hooks
