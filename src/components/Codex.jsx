import { useState } from 'react'
import { BLOCKYZ } from '../data/blockyz'
import Modal from './Modal'
import styles from './Codex.module.css'

const ERA_BG = { archaic: '#1e1508', machine: '#111111', digital: '#060d18' }
const ERA_SYMBOLS = { archaic: '𓂀', machine: '⚙', digital: '◈' }

const FILTERS = [
  { id: 'all', label: 'All Entries' },
  { id: 'archaic', label: 'Era I · Archaic' },
  { id: 'machine', label: 'Era II · Machine' },
  { id: 'digital', label: 'Era III · Digital' },
]

export default function Codex() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = filter === 'all' ? BLOCKYZ : BLOCKYZ.filter(b => b.era === filter)

  return (
    <section id="codex" className={styles.section}>
      <div className={styles.header}>
        <span className="section-tag">The Archive</span>
        <h2 className="section-title">The Codex</h2>
        <div className="section-line" />
      </div>

      <div className={styles.filterRow}>
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`${styles.filterBtn} ${filter === f.id ? styles.active : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(b => (
          <div
            key={b.id}
            className={styles.entry}
            onClick={() => setSelected(b)}
          >
            <div
              className={styles.entryBg}
              style={{ background: ERA_BG[b.era] }}
            >
              {b.img
                ? <img src={b.img} alt={b.name} className={styles.entryImg} />
                : (
                  <div className={styles.entrySymbol}>{ERA_SYMBOLS[b.era]}</div>
                )
              }
            </div>

            <div className={styles.entryOverlay}>
              <div className={styles.entryBottom}>
                <div className={styles.entryTitle}>{b.name}</div>
              </div>
            </div>

            <div className={styles.entryHover}>
              <span
                className={styles.eraBadge}
                style={{ borderColor: b.era === 'archaic' ? 'var(--gold)' : b.era === 'machine' ? '#888' : 'var(--cyber-blue)', color: b.era === 'archaic' ? 'var(--gold)' : b.era === 'machine' ? '#aaa' : 'var(--cyber-blue)' }}
              >
                {b.eraLabel}
              </span>
              <div className={styles.hoverName}>{b.name}</div>
              <div className={styles.hoverClass} style={{ color: b.classColor }}>{b.classBadge}</div>
              <p className={styles.hoverLore}>{b.lore.slice(0, 110)}…</p>
              <div className={styles.hoverCta}>Read Entry →</div>
            </div>
          </div>
        ))}
      </div>

      {selected && <Modal blocky={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
