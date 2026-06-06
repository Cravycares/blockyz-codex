import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.brand}>The Blockyz Codex</div>
      <p className={styles.note}>
        A fan-made lore archive · OriginalBlockyz · All art belongs to the project
      </p>
    </footer>
  )
}
