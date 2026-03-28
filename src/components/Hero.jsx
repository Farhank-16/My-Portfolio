import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          Available for opportunities
        </div>

        <h1 className={styles.h1}>
          Hi, I'm <br />
          <span className={styles.gradient}>Farhan Khan</span>
        </h1>

        <p className={styles.desc}>
          A passionate Full Stack MERN Developer crafting responsive, performant
          web applications with clean code and thoughtful user experiences.
        </p>

        <div className={styles.cta}>
          <a href="#projects" className="btn btn-primary">View My Work ↓</a>
          <a href="#contact"  className="btn btn-ghost">Get In Touch</a>
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        scroll
      </div>
    </section>
  )
}
