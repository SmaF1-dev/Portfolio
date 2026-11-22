import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// Import browser-independent portfolio data without depending on Node's .js ESM detection.
const source = await readFile(new URL('../src/app/data/portfolio.js', import.meta.url), 'utf8');
const portfolio = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const { categories, identity, findPortfolioItems, getPortfolioItem, portfolioItems } = portfolio;

test('every result has a unique slug and a complete detail page', () => {
  const slugs = portfolioItems.map((item) => item.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.ok(slugs.length >= 8);
  for (const item of portfolioItems) {
    assert.match(item.slug, /^[a-z0-9-]+$/);
    assert.ok(item.title && item.description && item.intro);
    assert.ok(item.sections?.length > 0);
    assert.equal(getPortfolioItem(item.slug), item);
  }
});

test('only approved public pages are present', () => {
  const approvedSlugs = [
    'about',
    'smart-crawler',
    'maintenance-regulations',
    'matchmaking',
    'orders-payments',
    'experience',
    'stack',
    'achievements',
    'education',
    'contacts',
  ];
  assert.deepEqual(
    portfolioItems.map(({ slug }) => slug).sort(),
    approvedSlugs.sort(),
  );
  assert.equal(getPortfolioItem('not-a-public-page'), undefined);
});

test('automatically typed nickname displays all results', () => {
  assert.equal(findPortfolioItems('SmaF1').length, portfolioItems.length);
  assert.equal(findPortfolioItems('smaf1').length, portfolioItems.length);
  assert.equal(findPortfolioItems('').length, portfolioItems.length);
});

test('search matches technologies, projects and Russian keywords', () => {
  assert.ok(findPortfolioItems('Kafka').some(({ slug }) => slug === 'smart-crawler'));
  assert.ok(findPortfolioItems('Smart-Crawler').some(({ slug }) => slug === 'smart-crawler'));
  assert.ok(findPortfolioItems('Электроника').some(({ slug }) => slug === 'maintenance-regulations'));
  assert.ok(findPortfolioItems('Gio').some(({ slug }) => slug === 'maintenance-regulations'));
  assert.ok(findPortfolioItems('достижения').some(({ slug }) => slug === 'achievements'));
  assert.equal(findPortfolioItems('nonexistent-super-keyword').length, 0);
});

test('filters only include their own category', () => {
  for (const { id } of categories.filter(({ id }) => id !== 'all')) {
    const items = findPortfolioItems('', id);
    assert.ok(items.length > 0);
    assert.ok(items.every((item) => item.category === id));
  }
});

test('public links use safe URL schemes', () => {
  assert.match(identity.github, /^https:\/\//);
  assert.match(identity.telegram, /^https:\/\//);
  for (const item of portfolioItems) {
    for (const link of item.links ?? []) assert.match(link.href, /^(https:\/\/|mailto:|\/(?!\/)evidence\/[a-z0-9-]+\.pdf#page=[1-9][0-9]*$)/);
  }
});

test('company experience and published evidence are present', async () => {
  const company = getPortfolioItem('experience');
  const app = getPortfolioItem('maintenance-regulations');
  assert.match(JSON.stringify(company), /ПСЦ Электроника/);
  assert.match(JSON.stringify(app), /WebAssembly/);
  assert.match(JSON.stringify(app), /Алексея Израилева/);
  const fullPdf = '/evidence/electronika-news-2023-full.pdf#page=7';
  assert.ok(app.links.some(({ href }) => href === fullPdf));
  assert.ok(company.links.some(({ href }) => href === fullPdf));
  assert.ok(!('preview' in app), 'The screenshot preview must not appear in the project');
  assert.ok(!/фриланс/i.test(JSON.stringify(portfolioItems)));
  const proof = new URL('../public/evidence/electronika-news-2023-full.pdf', import.meta.url);
  const { stat, readFile } = await import('node:fs/promises');
  const buffer = await readFile(proof);
  assert.ok(buffer.subarray(0, 5).equals(Buffer.from('%PDF-')));
  assert.ok(buffer.length > 1_000_000, 'The original full issue should be included, not an excerpt');
  await assert.rejects(stat(new URL('../public/evidence/electronika-news-2023-pp7-8.pdf', import.meta.url)), { code: 'ENOENT' });
  await assert.rejects(stat(new URL('../public/evidence/maintenance-app-2023.webp', import.meta.url)), { code: 'ENOENT' });
});

test('education has no graduation dates and footer has no removed slogan', async () => {
  const education = getPortfolioItem('education');
  assert.doesNotMatch(JSON.stringify(education), /2028|ожидаем(ый|ого) (год|выпуск)/i);
  const footerSource = await readFile(new URL('../src/app/components/SearchExperience.js', import.meta.url), 'utf8');
  assert.doesNotMatch(footerSource, /Made with curiosity & code/);
});

test('technology stack expands from three tags to the complete public list', async () => {
  const stack = getPortfolioItem('stack');
  assert.deepEqual(stack.tags, ['Go', 'PostgreSQL', 'Kafka']);
  assert.ok(stack.fullStack.length > stack.tags.length);
  assert.equal(new Set(stack.fullStack).size, stack.fullStack.length);
  assert.deepEqual(stack.fullStack.slice(0, stack.tags.length), stack.tags);
  for (const technology of ['gRPC', 'Qdrant', 'Docker', 'Gio', 'WebAssembly', 'Next.js']) {
    assert.ok(stack.fullStack.includes(technology));
    assert.ok(findPortfolioItems(technology).some(({ slug }) => slug === 'stack'));
  }
  assert.doesNotMatch(JSON.stringify(stack.tags), /\+ ещё/);

  const component = await readFile(new URL('../src/app/components/SearchExperience.js', import.meta.url), 'utf8');
  assert.match(component, /<button[\s\S]*?aria-expanded=\{expanded\}[\s\S]*?onClick=\{\(\) => setExpanded/);
  assert.match(component, /<article className=\{cardClassName\}/);
  assert.match(component, /<Link href=\{`\/explore\/\$\{item.slug\}`\} className=\{styles.cardMainLink\}/);
});
