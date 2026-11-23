import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import Icon from '../../components/Icon';
import { getPortfolioItem, portfolioItems, identity } from '../../data/portfolio';
import styles from './detail.module.scss';

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) return { title: 'SmaF1' };
  return { title: 'SmaF1', description: item.description };
}

export default async function DetailPage({ params }) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (slug === 'contacts') redirect('/explore/about#contacts');
  if (!item) notFound();
  const otherItems = portfolioItems.filter((entry) => entry.slug !== slug && entry.category === item.category).slice(0, 3);
  const related = otherItems.length ? otherItems : portfolioItems.filter((entry) => entry.slug !== slug).slice(0, 3);

  return (
    <div className={`${styles.page} ${styles[`tone_${item.accent}`]}`}>
      <div className={styles.glow} aria-hidden="true" />
      <SiteHeader compact />
      <main className={styles.main}>
        <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
          <Link href="/">Главная</Link><span>/</span><span>{item.overline}</span>
        </nav>
        <div className={styles.headLayout}>
          <div className={styles.intro}>
            <div className={styles.topline}><span className={styles.sectionNum}>SMAF1 / EXPLORE</span></div>
            <div className={styles.overline}><Icon name={item.icon} size={17} /> {item.overline}</div>
            <h1>{item.title}</h1>
            <p>{item.intro}</p>
            <div className={styles.tags}>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className={styles.actions}>
              <Link className={styles.backLink} href="/"><Icon name="back" size={18} /> Вернуться к поиску</Link>
              {item.links?.[0] && <a className={styles.externalLink} href={item.links[0].href} target={item.links[0].href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">{item.links[0].label}<Icon name="arrowUp" size={16} /></a>}
            </div>
          </div>
          <aside className={styles.identityCard}>
            <div className={styles.identityCardTop}><span>PERSONAL INDEX / 2026</span></div>
            <div className={styles.avatarWrap}><Image src="/avatar.jpg" width={104} height={104} alt="Никита Лютый" priority /></div>
            <h2>{identity.name}</h2>
            <p>{identity.role}</p>
            <div className={styles.identityDivider} />
            <div className={styles.infoRow}><span>Ник</span><strong>@{identity.nickname}</strong></div>
            <div className={styles.infoRow}><span>Город</span><strong>{identity.city}</strong></div>
            <div className={styles.infoRow}><span>Направление</span><strong>Backend / Go</strong></div>
          </aside>
        </div>

        {item.metrics?.length > 0 && (
          <div className={styles.metrics}>
            {item.metrics.map((metric) => <div className={styles.metric} key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        )}

        {item.preview && (
          <figure className={styles.projectPreview}>
            <Image src={item.preview.src} alt={item.preview.alt} width={950} height={540} className={styles.projectPreviewImage} sizes="(max-width: 780px) 100vw, 900px" />
            <figcaption>{item.preview.caption}</figcaption>
          </figure>
        )}

        <div className={styles.contentLayout}>
          <div className={styles.sections}>
            {item.sections.map((section, index) => (
              <section className={styles.contentSection} key={section.title}>
                <div className={styles.sectionTitle}><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.title}</h2></div>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}><span className={styles.bulletIcon}><Icon name="check" size={13} /></span>{bullet}</li>)}</ul>}
              </section>
            ))}
            {item.links?.length > 0 && (
              <section className={styles.contentSection} id={item.slug === 'about' ? 'contacts' : undefined} style={item.slug === 'about' ? { scrollMarginTop: 40 } : undefined}>
                <div className={styles.sectionTitle}><span>{String(item.sections.length + 1).padStart(2, '0')}</span><h2>{item.slug === 'about' ? 'Контакты' : 'Ссылки'}</h2></div>
                <div className={styles.linkList}>
                  {item.links.map((link) => <a key={link.href} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">{link.label}<Icon name="arrowUp" size={19} /></a>)}
                </div>
              </section>
            )}
          </div>
          <aside className={styles.sideNote}>
            <span className={styles.sideNum}>{"// NOTE"}</span>
            <Icon name="code" size={25} />
            <p>Мне нравится, когда за красивым интерфейсом стоит продуманная и надёжная система.</p>
            <a href={identity.telegram} target="_blank" rel="noopener noreferrer">Обсудим проект? <Icon name="arrowUp" size={15} /></a>
          </aside>
        </div>

        <section className={styles.related}>
          <div className={styles.relatedHead}><div><span>ПРОДОЛЖИТЬ ИЗУЧАТЬ</span><h2>Другие результаты</h2></div><Link href="/">К поиску <Icon name="arrow" size={17} /></Link></div>
          <div className={styles.relatedGrid}>
            {related.map((entry) => <Link className={styles.relatedCard} key={entry.slug} href={`/explore/${entry.slug}`}><span className={styles.relatedCardTop}><Icon name={entry.icon} size={21} /><Icon name="arrowUp" size={17} /></span><span className={styles.relatedOverline}>{entry.overline}</span><strong>{entry.title}</strong><p>{entry.description}</p></Link>)}
          </div>
        </section>
      </main>
      <footer className={styles.footer}><Link href="/"><Icon name="back" size={15} /> Назад к поиску SmaF1</Link><span>© 2026 SmaF1</span></footer>
    </div>
  );
}
