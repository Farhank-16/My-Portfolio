import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(0)
  const my = useRef(0)
  const rx = useRef(0)
  const ry = useRef(0)
  const rafId = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    if (isMobile) return

    const onMouseMove = (e) => {
      mx.current = e.clientX
      my.current = e.clientY
    }
    document.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mx.current + 'px'
        cursorRef.current.style.top  = my.current + 'px'
      }
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top  = ry.current + 'px'
      }
      rafId.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={ringRef}   className={styles.ring}   />
    </>
  )
}
