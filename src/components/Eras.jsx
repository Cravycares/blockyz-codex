import { ERAS } from '../data/blockyz'
import styles from './Eras.module.css'

export default function Eras() {
  return (
    <section id="eras" className={styles.section}>
      <div className={styles.header}>
        <span className="section-tag">Chapter I</span>
        <h2 className="section-title">The Three Eras</h2>
        <div className="section-line" />
      </div>

      <div className={styles.track}>
        {ERAS.map((era) => (
          <div key={era.id} className={`${styles.card} ${styles[era.id]}`}>
            <span className={styles.number}>{era.number}</span>
            <div className={styles.dot} style={{ background: era.color, boxShadow: `0 0 20px ${era.color}` }} />
            <div className={styles.label}>{era.label}</div>
            <div className={styles.name} style={{ color: era.color }}>{era.name}</div>
            <p className={styles.desc}>{era.desc}</p>
            <div className={styles.pieces}>{era.pieces}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
