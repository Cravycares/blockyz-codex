import { COMBINATIONS } from '../data/blockyz'
import styles from './RelationalMap.module.css'

export default function RelationalMap() {
  return (
    <section id="relational" className={styles.section}>
      <div className={styles.glow} />

      <div className={styles.header}>
        <span className="section-tag">Chapter III</span>
        <h2 className="section-title">The Relational Map</h2>
        <div className="section-line" />
      </div>

      <p className={styles.intro}>
        A Relational Blocky is not a choice — it is a consequence. When a Common walks too
        close to a Seeker's orbit, or stands in a Maker's forge long enough, something irreversible
        occurs. What follows is what has been documented so far.
      </p>

      <div className={styles.grid}>
        {COMBINATIONS.map((combo, i) => (
          <div key={i} className={`${styles.card} ${combo.confirmed ? styles.confirmed : styles.sealed}`}>
            {combo.confirmed && <div className={styles.confirmedBadge}>Confirmed</div>}
            <div className={styles.inputBlock}>
              <div className={styles.comboClass}>{combo.inputA.class}</div>
              <div className={styles.comboName}>{combo.inputA.name}</div>
            </div>
            <div className={styles.plus}>+</div>
            <div className={styles.inputBlock}>
              <div className={styles.comboClass}>{combo.inputB.class}</div>
              <div className={styles.comboName}>{combo.inputB.name}</div>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={`${styles.inputBlock} ${styles.result}`}>
              <div className={styles.comboClass}>{combo.result.class}</div>
              <div className={styles.comboName} style={{ color: combo.confirmed ? 'var(--ember)' : 'rgba(212,200,154,0.2)' }}>
                {combo.result.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.sealed}>
        The Codex is incomplete. More combinations remain sealed.
      </p>
    </section>
  )
}
