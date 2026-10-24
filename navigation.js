// Native hash URLs keep links, browser history and shared URLs working.
(() => {
  const panels = [...document.querySelectorAll('[data-view]')];
  const main = document.getElementById('main');
  const links = [...document.querySelectorAll('header a')];
  function showView(moveFocus = false) {
    const hash = window.location.hash.slice(1);
    const name = hash === 'towercellar' ? 'games' : hash;
    const selected = (hash === 'main'
      ? panels.find(panel => !panel.hidden)
      : panels.find(panel => panel.dataset.view === name)) || panels[0];
    panels.forEach(panel => { panel.hidden = panel !== selected; });
    links.forEach(link => {
      if (link.hash === '#' + selected.dataset.view) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.body.classList.add('view-layout');
    if (moveFocus) {
      if (hash === 'main') main.focus({ preventScroll: true });
      else {
        const heading = selected.querySelector('h1,h2');
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
      window.scrollTo(0, 0);
    }
  }
  window.addEventListener('hashchange', () => showView(true));
  showView();
})();
