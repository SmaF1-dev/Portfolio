'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { categories, findPortfolioItems, identity, portfolioItems } from '../data/portfolio';
import Icon from './Icon';
import SiteHeader from './SiteHeader';
import styles from './SearchExperience.module.scss';

const suggestedQueries = ['Go', 'Smart-Crawler', 'Kafka', 'Достижения'];
const AUTO_QUERY = 'SmaF1';

function SearchCard({ item, index }) {
  const isProfile = item.kind === 'profile';
  return (
    <Link
      href={`/explore/${item.slug}`}
      className={`${styles.resultCard} ${styles[`tone_${item.accent}`]} ${isProfile ? styles.profileCard : ''} ${item.featured && !isProfile ? styles.featureCard : ''}`}
      style={{ '--card-index': index }}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardIcon}><Icon name={item.icon} size={21} /></span>
        <span className={styles.cardArrow}><Icon name="arrowUp" size={20} /></span>
      </div>
      {isProfile && (
        <div className={styles.profilePicture}>
          <Image src="/avatar.jpg" alt="Фото Никиты Лютого" width={88} height={88} priority />
          <span className={styles.profileOnline} />
        </div>
      )}
      <div className={styles.cardBody}>
        <span className={styles.cardEyebrow}>{item.overline}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.tagRow}>{item.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
        {item.stat && <span className={styles.cardStat}>{item.stat}</span>}
      </div>
    </Link>
  );
}

export default function SearchExperience() {
  const [query, setQuery] = useState('');
  const [phase, setPhase] = useState('typing');
  const [category, setCategory] = useState('all');
  const editedByUser = useRef(false);
  const searchInput = useRef(null);
  const resultsRef = useRef(null);
  const [animationDisabled, setAnimationDisabled] = useState(false);

  useEffect(() => {
    // Respect reduced-motion preferences: show the complete query and results immediately.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      const immediateReveal = window.setTimeout(() => {
        setAnimationDisabled(true);
        setQuery(AUTO_QUERY);
        setPhase('ready');
      }, 0);
      return () => window.clearTimeout(immediateReveal);
    }
    let cursor = 0;
    let revealTimeout;
    const typingTimer = window.setInterval(() => {
      if (editedByUser.current) {
        window.clearInterval(typingTimer);
        return;
      }
      cursor += 1;
      setQuery(AUTO_QUERY.slice(0, cursor));
      if (cursor === AUTO_QUERY.length) {
        window.clearInterval(typingTimer);
        revealTimeout = window.setTimeout(() => {
          if (!editedByUser.current) setPhase('ready');
        }, 430);
      }
    }, 150);
    return () => {
      window.clearInterval(typingTimer);
      window.clearTimeout(revealTimeout);
    };
  }, []);

  const results = findPortfolioItems(query, category);
  const showResults = phase === 'ready';

  function changeQuery(value) {
    editedByUser.current = true;
    setQuery(value);
    setPhase('ready');
  }

  function submitSearch(event) {
    event.preventDefault();
    editedByUser.current = true;
    setPhase('ready');
    if (resultsRef.current) resultsRef.current.scrollIntoView({ behavior: animationDisabled ? 'auto' : 'smooth', block: 'start' });
  }

  function chooseQuery(value) {
    changeQuery(value);
    setCategory('all');
    searchInput.current?.focus();
  }

  function resetSearch() {
    changeQuery(AUTO_QUERY);
    setCategory('all');
    searchInput.current?.focus();
  }

  return (
    <div className={styles.page}>
      <div className={styles.ambientOne} aria-hidden="true" />
      <div className={styles.ambientTwo} aria-hidden="true" />
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.eyebrow}><span className={styles.eyebrowIcon}><Icon name="sparkle" size={13} /></span> НЕ ПРОСТО ПОРТФОЛИО · ИНТЕРАКТИВНЫЙ ПОИСК</div>
          <h1 id="hero-title">За каждым ником<br />стоит <span className={styles.gradientText}>история.</span></h1>
          <p className={styles.heroLead}>Моя — про код, сложные системы и желание делать вещи, которые действительно работают.</p>
          <form onSubmit={submitSearch} className={styles.searchForm} role="search">
            <div className={styles.searchBox}>
              <Icon name="search" size={24} className={styles.searchIcon} />
              <label htmlFor="portfolio-search" className={styles.srOnly}>Поиск по портфолио</label>
              <input
                id="portfolio-search"
                ref={searchInput}
                type="search"
                enterKeyHint="search"
                autoComplete="off"
                spellCheck="false"
                value={query}
                onChange={(event) => changeQuery(event.target.value)}
                placeholder="Введите ник или запрос..."
                className={styles.searchInput}
              />
              {phase === 'typing' && <span className={styles.typingIndicator} aria-hidden="true" />}
              {query && phase === 'ready' && <button type="button" className={styles.clearButton} onClick={() => changeQuery('')} aria-label="Очистить поиск"><Icon name="close" size={18} /></button>}
              <button type="submit" className={styles.searchButton} aria-label="Найти"><span>Найти</span><Icon name="arrow" size={18} /></button>
            </div>
          </form>
          <div className={styles.suggestions}>
            <span>Попробуй найти:</span>
            {suggestedQueries.map((item) => (
              <button className={styles.suggestion} type="button" key={item} onClick={() => chooseQuery(item)}>{item}<Icon name="arrowUp" size={12} /></button>
            ))}
          </div>
          <div className={styles.heroFootnote}>
            <span className={styles.statusDot} />
            {phase === 'typing' ? 'Ищу SmaF1 в базе данных...' : 'Профиль найден · данные актуальны на ноябрь 2026'}
          </div>
        </section>

        <section ref={resultsRef} className={`${styles.resultsSection} ${showResults ? styles.revealed : ''}`} aria-labelledby="results-title" aria-live="polite">
          {showResults && (
            <>
              <div className={styles.sectionHeading}>
                <div>
                  <p className={styles.sectionKicker}>01 / РЕЗУЛЬТАТЫ ПОИСКА</p>
                  <h2 id="results-title">{query.trim() === 'SmaF1' || !query.trim() ? 'Всё, что обо мне стоит знать.' : `Результаты: «${query}»`}</h2>
                </div>
                <span className={styles.resultCount}><span>{results.length.toString().padStart(2, '0')}</span> / {portfolioItems.length.toString().padStart(2, '0')} найдено</span>
              </div>
              <div className={styles.tabs} role="group" aria-label="Фильтр результатов">
                {categories.map((tab) => (
                  <button type="button" key={tab.id} aria-pressed={category === tab.id} onClick={() => setCategory(tab.id)} className={`${styles.tab} ${category === tab.id ? styles.activeTab : ''}`}>{tab.label}</button>
                ))}
              </div>
              {results.length ? (
                <div className={styles.resultsGrid}>
                  {results.map((item, index) => <SearchCard key={item.slug} item={item} index={index} />)}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <Icon name="search" size={35} />
                  <h3>По этому запросу ничего не нашлось</h3>
                  <p>Попробуй «Go», «Kafka», «Smart-Crawler» или верни полный список.</p>
                  <button type="button" onClick={resetSearch}>Показать всё <Icon name="arrow" size={18} /></button>
                </div>
              )}
            </>
          )}
        </section>

        <section className={styles.bottomCta} aria-label="Контакты">
          <div>
            <span className={styles.sectionKicker}>ЕСТЬ ИДЕЯ?</span>
            <h2>Давай обсудим <span>её вместе.</span></h2>
            <p>Можем поговорить о Go, архитектуре или интересном проекте.</p>
          </div>
          <a href={identity.telegram} target="_blank" rel="noopener noreferrer" className={styles.contactButton}>Написать в Telegram <Icon name="arrowUp" size={18} /></a>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© 2026 SmaF1</span>
        <div><a href={identity.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={identity.telegram} target="_blank" rel="noopener noreferrer">Telegram</a><a href={`mailto:${identity.email}`}>Email</a></div>
        <Link href="/explore/about">Никита Лютый <Icon name="arrowUp" size={13} /></Link>
      </footer>
    </div>
  );
}
