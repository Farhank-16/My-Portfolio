import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const stats = [
  { num: '3+',    label: 'Full Stack Projects Shipped' },
  { num: '3',     label: 'HackerRank Certifications'   },
  { num: 'MERN',  label: 'Primary Tech Stack'           },
  { num: '∞',     label: 'Passion for Learning'         },
]

const education = [
  {
    title: 'Master of Computer Application (MCA)',
    sub:   'JECRC University · 2024 – 2026',
  },
  {
    title: 'Bachelor of Computer Application (BCA)',
    sub:   'University of Rajasthan · 2021 – 2024',
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className={styles.about}>
      <div className={`sec-header reveal ${styles.header}`} ref={ref}>
        <span className="sec-num">01</span>
        <div className="sec-line" />
        <h2>About <span>Me</span></h2>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.text} reveal`}>
          <p>
            I'm a <strong>Full Stack MERN Developer</strong> with a strong foundation
            in building end-to-end web applications — from intuitive front-end
            interfaces to robust back-end APIs.
          </p>
          <p>
            I specialize in the <strong>MongoDB, Express.js, React.js, and Node.js</strong>{' '}
            ecosystem. I enjoy solving real-world problems through clean, efficient code
            and user-first design.
          </p>
          <p>
            Currently pursuing my <strong>MCA at JECRC University</strong>, I'm actively
            looking for opportunities to apply my skills, contribute to meaningful
            projects, and grow alongside a passionate team.
          </p>

          <div className={styles.eduBlock}>
            {education.map((e) => (
              <div key={e.title} className={styles.eduItem}>
                <div className={styles.eduDot} />
                <div>
                  <div className={styles.eduTitle}>{e.title}</div>
                  <div className={styles.eduSub}>{e.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.statsGrid} reveal`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
