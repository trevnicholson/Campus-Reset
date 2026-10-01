const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

function closeMenu() {
  if (!menuToggle || !siteNav) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
  siteNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  if (!menuToggle || !siteNav) return;
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  siteNav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
}

menuToggle?.addEventListener('click', toggleMenu);

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 820) closeMenu();
});

document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    const answer = document.getElementById(question.getAttribute('aria-controls'));

    question.setAttribute('aria-expanded', String(!isExpanded));
    if (answer) answer.hidden = isExpanded;
  });
});
