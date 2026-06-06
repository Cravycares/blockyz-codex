import { CLASSES } from '../data/blockyz'
import styles from './Classes.module.css'

export default function Classes() {
  return (
    <section id="classes" className={styles.section}>
      <div className={styles.header}>
        <span className="section-tag">Chapter II</span>
        <h2 className="section-title">The Five Classes</h2>
        <div className="section-line" />
        <p className={styles.sub}>Every Blocky belongs to one. Some are born into it. Some are forged by encounter.</p>
      </div>

      <div className={styles.grid}>
        {CLASSES.map((cls) => (
          <div key={cls.id} className={styles.card}>
            <div
              className={styles.accent}
              style={{ background: cls.color }}
            />
            <span className={styles.icon}>{cls.icon}</span>
            <div className={styles.name} style={{ color: cls.color }}>{cls.name}</div>
            <p className={styles.desc}>{cls.desc}</p>
            <div className={styles.rarity}>{cls.rarity}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
