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
    for (const link of item.links ?? []) assert.match(link.href, /^(https:\/\/|mailto:)/);
  }
});
