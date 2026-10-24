const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../language.js'), 'utf8');
function run({path = '/', lang = 'en', saved, blocked = false} = {}) {
  const events = {};
  const clicks = {};
  const writes = [];
  const redirects = [];
  const links = ['en', 'de'].map(language => ({
    dataset: {language},
    href: language === 'en' ? '/index.html' : '/de/',
    getAttribute() { return this.href; },
    addEventListener(name, callback) { clicks[language] = callback; }
  }));
  const location = {pathname: path, origin: 'https://example.test', search: '?preview=1', hash: '#games', replace(url) { redirects.push(url); }};
  vm.runInNewContext(source, {
    URL, location,
    document: {documentElement: {lang}, querySelectorAll() { return links; }},
    window: {addEventListener(name, callback) { events[name] = callback; }},
    localStorage: {
      getItem() { if (blocked) throw new Error('Storage disabled'); return saved; },
      setItem(key, value) { if (blocked) throw new Error('Storage disabled'); writes.push([key, value]); }
    }
  });
  return {events, clicks, writes, redirects, links, location};
}
test('language links preserve section and query, including after navigation', () => {
  const r = run();
  assert.equal(r.links[1].href, 'https://example.test/de/?preview=1#games');
  r.location.hash = '#about'; r.events.hashchange();
  assert.equal(r.links[0].href, 'https://example.test/index.html?preview=1#about');
});
test('explicit choice is remembered', () => {
  const r = run(); r.clicks.de();
  assert.deepEqual(r.writes, [['potatisspel.language', 'de']]);
});
test('neutral entry restores saved German preference', () => {
  assert.deepEqual(run({saved: 'de'}).redirects, ['https://example.test/de/?preview=1#games']);
});
test('direct locale URLs override older preferences', () => {
  assert.deepEqual(run({path: '/de/', lang: 'de', saved: 'en'}).redirects, []);
  assert.deepEqual(run({path: '/index.html', saved: 'de'}).redirects, []);
});
test('blocked storage leaves language links usable', () => {
  const r = run({blocked: true});
  assert.doesNotThrow(() => r.clicks.de());
  assert.equal(r.links[1].href, 'https://example.test/de/?preview=1#games');
  assert.deepEqual(r.redirects, []);
});
test('unknown stored locales do not redirect', () => {
  assert.deepEqual(run({saved: 'unknown'}).redirects, []);
});
