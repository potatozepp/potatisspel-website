// Static translations work without JavaScript. Storage only remembers a choice.
(() => {
  const key = 'potatisspel.language';
  const current = document.documentElement.lang;
  const links = [...document.querySelectorAll('[data-language]')];
  function updateLinks() {
    links.forEach(link => {
      const destination = new URL(link.getAttribute('href'), location.origin);
      destination.search = location.search;
      destination.hash = location.hash;
      link.href = destination.href;
    });
  }
  updateLinks();
  window.addEventListener('hashchange', updateLinks);
  links.forEach(link => link.addEventListener('click', () => {
    try { localStorage.setItem(key, link.dataset.language); } catch { /* Storage may be disabled. */ }
  }));
  let saved;
  try { saved = localStorage.getItem(key); } catch { return; }
  const destination = links.find(link => link.dataset.language === saved);
  // A direct locale URL takes precedence; only the neutral entry point
  // applies a returning visitor's saved choice.
  if (location.pathname === '/' && destination && saved !== current) {
    location.replace(destination.href);
  }
})();
