import { useEffect } from 'react'
import Cursor   from './components/Cursor'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  /* Global scroll-reveal watcher */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Background blobs */}
      <div style={{
        position: 'fixed', width: 500, height: 500,
        borderRadius: '50%', background: 'rgba(124,58,237,0.13)',
        filter: 'blur(90px)', top: -100, right: -100,
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'fixed', width: 400, height: 400,
        borderRadius: '50%', background: 'rgba(168,85,247,0.08)',
        filter: 'blur(90px)', bottom: 100, left: -80,
        pointerEvents: 'none', zIndex: 0,
      }} />

      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
