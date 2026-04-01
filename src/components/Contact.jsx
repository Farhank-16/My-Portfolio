import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

const SERVICE_ID  = 'service_wkpj3fr'    
const TEMPLATE_ID = 'template_u0pfte3' 
const PUBLIC_KEY  = 'dGC5vbsQXURFVowpG'  

const contacts = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'shaikhfarhank94@gmail.com',
    href: 'mailto:shaikhfarhank94@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    href: 'https://github.com/Farhank-16',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/farhan-khan-aba312226',
  },
]

const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form,    setForm]    = useState(EMPTY)
  const [loading, setLoading] = useState(false)
  const [toast,   setToast]   = useState({ show: false, success: true })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const showToast = (success) => {
    setToast({ show: true, success })
    setTimeout(() => setToast({ show: false, success }), 4000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject || 'No Subject',
          message:    form.message,
        },
        PUBLIC_KEY
      )
      setForm(EMPTY)
      showToast(true)
    } catch (err) {
      console.error('EmailJS Error:', err)
      showToast(false)
    } finally {
      setLoading(false)
    }
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

        {/* Social / Contact Cards */}
        <div className={`${styles.cards} reveal`}>
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className={styles.card}>
              <span className={styles.contactIcon}>{c.icon}</span> {c.label}
            </a>
          ))}
        </div>

        {/* Contact Form */}
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

          <button
            type="submit"
            className={`btn btn-primary ${styles.submit}`}
            disabled={loading}
          >
            {loading ? <span className={styles.spinner}>Sending…</span> : 'Send Message →'}
          </button>
        </form>
      </div>

      {/* Toast Notification */}
      <div className={`${styles.toast} ${toast.show ? styles.toastShow : ''} ${!toast.success ? styles.toastError : ''}`}>
        {toast.success
          ? "✅ Message sent! I'll get back to you soon."
          : '❌ Something went wrong. Please try again!'}
      </div>
    </section>
  )
}
