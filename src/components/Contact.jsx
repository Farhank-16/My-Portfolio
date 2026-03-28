import { useState } from 'react'
import styles from './Contact.module.css'

const contacts = [
  { icon: '✉️', label: 'shaikhfarhank94@gmail.com', href: 'mailto:shaikhfarhank94@gmail.com' },
  { icon: '🐙', label: 'GitHub',   href: 'https://github.com/Farhank-16' },
  { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/farhan-khan-aba312226' },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [toastVisible, setToast] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setToast(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setToast(false), 3500)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className="sec-header reveal" style={{ justifyContent: 'center' }}>
          <span className="sec-num">04</span>
          <div className="sec-line" />
          <h2>Get In <span>Touch</span></h2>
        </div>

        <p className={`${styles.sub} reveal`}>
          I'm open to full-time roles, freelance work, and exciting collaborations.
          Drop me a message!
        </p>

        <div className={`${styles.cards} reveal`}>
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className={styles.card}>
              <span>{c.icon}</span> {c.label}
            </a>
          ))}
        </div>

        <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.group}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name" name="name" type="text"
                placeholder="John Doe" required
                value={form.name} onChange={handleChange}
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="email">Your Email</label>
              <input
                id="email" name="email" type="email"
                placeholder="john@example.com" required
                value={form.email} onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.group}>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject" name="subject" type="text"
              placeholder="Opportunity / Collaboration"
              value={form.subject} onChange={handleChange}
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message"
              placeholder="Hi Farhan, I'd love to connect…"
              required
              value={form.message} onChange={handleChange}
            />
          </div>

          <button type="submit" className={`btn btn-primary ${styles.submit}`}>
            Send Message →
          </button>
        </form>
      </div>

      {/* Toast */}
      <div className={`${styles.toast} ${toastVisible ? styles.toastShow : ''}`}>
        ✅ Message sent! I'll get back to you soon.
      </div>
    </section>
  )
}
