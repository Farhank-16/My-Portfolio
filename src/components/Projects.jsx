import styles from './Projects.module.css'

const projects = [
  {
    icon:  '💬',
    title: 'Chit-Chat',
    desc:  'A full-stack real-time chat application with instant messaging via WebSockets, JWT authentication, online status tracking, Cloudinary media storage, and Arcjet-powered bot protection & rate limiting.',
    tags:  ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Cloudinary', 'Tailwind'],
    github: 'https://github.com/Farhank-16/Chit-Chat',
    live:   'https://chit-chat-zeta-weld.vercel.app/',
  },
  {
    icon:  '🔐',
    title: 'MERN Auth',
    desc:  'A secure full-stack authentication system featuring OTP-based email verification, password reset flow, JWT sessions in HTTP-only cookies, protected routes, and styled email templates via Nodemailer.',
    tags:  ['React.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'Nodemailer'],
    github: 'https://github.com/Farhank-16/Authentication',
    live:   'https://mern-auth-delta.vercel.app/',
  },
  {
    icon:  '💼',
    title: 'JobNest',
    desc:  'A mobile-first job portal for India\'s blue-collar & grey-collar workforce. Features proximity-based job matching (up to 100 km), three role types (Seeker, Employer, Admin), subscription tiers, and Razorpay integration.',
    tags:  ['React 18', 'Vite', 'Node.js', 'MySQL', 'Razorpay', 'JWT', 'Tailwind'],
    github: 'https://github.com/Farhank-16/Job_Project',
    live:   null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="sec-header reveal">
        <span className="sec-num">03</span>
        <div className="sec-line" />
        <h2>My <span>Projects</span></h2>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.title} className={`${styles.card} reveal`}>
            <div className={styles.cardTop}>
              <div className={styles.cardIcon}>{p.icon}</div>
              <div className={styles.cardLinks}>
                <a href={p.github} target="_blank" rel="noreferrer" className={styles.link} title="GitHub">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className={styles.link} title="Live Demo">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <div className={styles.cardTitle}>{p.title}</div>
            <div className={styles.cardDesc}>{p.desc}</div>

            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
