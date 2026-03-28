import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© 2025 Farhan Khan. Crafted with 💜</span>
      <div className={styles.links}>
        <a href="https://github.com/Farhank-16" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/farhan-khan-aba312226" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:shaikhfarhank94@gmail.com">Email</a>
      </div>
    </footer>
  )
}
