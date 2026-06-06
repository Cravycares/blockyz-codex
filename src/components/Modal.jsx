import { useEffect } from 'react'
import styles from './Modal.module.css'

const ERA_COLORS = { archaic: '#c9a84c', machine: '#aaaaaa', digital: '#00c8ff' }
const ERA_SYMBOLS = { archaic: '𓂀', machine: '⚙', digital: '◈' }
const ERA_BG = { archaic: '#1e1508', machine: '#111111', digital: '#060d18' }

export default function Modal({ blocky, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!blocky) return null

  const eraColor = ERA_COLORS[blocky.era]
  const eraBg = ERA_BG[blocky.era]
  const symbol = ERA_SYMBOLS[blocky.era]

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

        {/* Image panel */}
        <div className={styles.imgPanel} style={{ background: eraBg }}>
          {blocky.img
            ? <img src={blocky.img} alt={blocky.name} className={styles.img} />
            : (
              <div className={styles.placeholder}>
                <span className={styles.placeholderSymbol}>{symbol}</span>
                <span className={styles.placeholderHint}>Add image to public/images/</span>
              </div>
            )
          }
          <div className={styles.imgOverlay} />
        </div>

        {/* Content panel */}
        <div className={styles.content}>
          <div>
            <div className={styles.era} style={{ color: eraColor }}>{blocky.eraLabel}</div>
            <h2 className={styles.name}>{blocky.name}</h2>
          </div>

          <div className={styles.divider} />

          <div>
            <div className={styles.sectionLabel}>Origin Lore</div>
            <p className={styles.lore}>{blocky.lore}</p>
          </div>

          <div>
            <div className={styles.sectionLabel}>Trait Breakdown</div>
            <div className={styles.traits}>
              {blocky.traits.map((t, i) => (
                <div key={i} className={styles.traitRow}>
                  <span className={styles.traitKey}>{t.key}</span>
                  <span className={styles.traitValue}>{t.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={styles.classPill}
            style={{ borderColor: blocky.classColor, color: blocky.classColor }}
          >
            Class: {blocky.classBadge}
          </div>
        </div>
      </div>
    </div>
  )
}
