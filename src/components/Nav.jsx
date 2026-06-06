import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.brand}>The Blockyz Codex</a>
      <ul className={styles.links}>
        <li><a href="#eras">The Eras</a></li>
        <li><a href="#classes">Classes</a></li>
        <li><a href="#relational">Relational Map</a></li>
        <li><a href="#codex">Codex</a></li>
      </ul>
    </nav>
  )
}
