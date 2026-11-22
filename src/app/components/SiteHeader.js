import Link from 'next/link';
import Icon from './Icon';
import styles from './SiteHeader.module.scss';

export default function SiteHeader({ compact = false }) {
  return (
    <header className={`${styles.header} ${compact ? styles.compact : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="SmaF1 — на главную">
          <span className={styles.mark}>s<span>·</span></span>
          <span className={styles.brandName}>SmaF1<span className={styles.brandPeriod}>.</span></span>
        </Link>
        <div className={styles.centerMark}><span className={styles.dot} /> Open to interesting projects</div>
        <nav className={styles.nav} aria-label="Основная навигация">
          <Link href="/explore/about" className={styles.navText}>Обо мне</Link>
          <Link href="/explore/contacts" className={styles.navText}>Контакты</Link>
          <a className={styles.github} href="https://github.com/SmaF1-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub — откроется в новой вкладке">
            <Icon name="github" size={19} /> <span>GitHub</span> <Icon name="arrowUp" size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}
