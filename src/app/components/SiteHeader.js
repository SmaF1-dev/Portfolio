import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import styles from './SiteHeader.module.scss';

export default function SiteHeader({ compact = false }) {
  return (
    <header className={`${styles.header} ${compact ? styles.compact : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="SmaF1 — на главную">
          <Image src="/main.png" width={44} height={44} alt="" className={styles.mark} priority />
          <span className={styles.brandName}>SmaF1</span>
        </Link>
        <div className={styles.centerMark}>OPEN TO INTERESTING PROJECTS</div>
        <nav className={styles.nav} aria-label="Основная навигация">
          <Link href="/explore/about" className={styles.navText}>Обо мне</Link>
          <Link href="/explore/about#contacts" className={styles.navText}>Контакты</Link>
          <a className={styles.github} href="https://github.com/SmaF1-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub — откроется в новой вкладке">
            <Icon name="github" size={19} /> <span>GitHub</span> <Icon name="arrowUp" size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}
