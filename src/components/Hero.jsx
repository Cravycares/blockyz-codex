import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const RUNE_SYMBOLS = ['𓂀', '𓃭', '⬡', '◈', '⬥', '◎', '⬙', '𓆣', '𓅓']

export default function Hero() {
  const runesRef = useRef(null)

  useEffect(() => {
    const container = runesRef.current
    let interval

    const spawnRune = () => {
      const el = document.createElement('div')
      el.className = styles.rune
      el.textContent = RUNE_SYMBOLS[Math.floor(Math.random() * RUNE_SYMBOLS.length)]
      el.style.left = Math.random() * 100 + '%'
      el.style.fontSize = (3 + Math.random() * 5) + 'rem'
      el.style.animationDuration = (16 + Math.random() * 18) + 's'
      el.style.animationDelay = (Math.random() * 3) + 's'
      container.appendChild(el)
      setTimeout(() => el.remove(), 38000)
    }

    for (let i = 0; i < 5; i++) setTimeout(spawnRune, i * 1800)
    interval = setInterval(spawnRune, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} />
      <div ref={runesRef} className={styles.runes} />

      <span className={styles.eyebrow}>OriginalBlockyz · The Archive · Est. Genesis Block</span>

      <h1 className={styles.title}>
        THE<br />BLOCKYZ<br />CODEX
      </h1>

      <div className={styles.subtitle}>A Living Archive of All Eras</div>
      <div className={styles.divider} />

      <p className={styles.lore}>
        Before the chain was forged, there were the Eras.<br />
        Before the Eras, there were the Archetypes.<br />
        Before the Archetypes — there was a single Block,<br />
        unnamed, unformed, watching the oldest times unfold.
      </p>

      <div className={styles.cta}>
        <a href="#codex" className={styles.btnPrimary}>Enter the Codex</a>
        <a href="#eras" className={styles.btnSecondary}>Read the Lore</a>
      </div>
    </section>
  )
}
