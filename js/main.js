// =========================================================
// Hexaros — main.js
// =========================================================

// segnala che JS è attivo — abilita animazioni reveal
document.documentElement.classList.add('js');

// mobile nav toggle
(function() {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute(
      'aria-expanded',
      links.classList.contains('open') ? 'true' : 'false'
    );
  });
})();

// intersection-based reveal
(function() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => io.observe(el));
})();

// Anno footer
(function() {
  const y = document.querySelectorAll('[data-year]');
  const now = new Date().getFullYear();
  y.forEach(e => e.textContent = now);
})();
