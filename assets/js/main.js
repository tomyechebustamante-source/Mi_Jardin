// main.js – minimal navigation and accessibility logic
// build step: minify to main.min.js

// smooth scroll (fallback handled via CSS for modern browsers)
document.documentElement.style.scrollBehavior = 'smooth';

// highlight active section in nav
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('main section[id]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const id = e.target.id;
    navLinks.forEach(l => l.classList.remove('is-active'));
    const a = document.querySelector(`.nav__link[href="#${id}"]`);
    if (a) a.classList.add('is-active');
  });
}, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
sections.forEach(s => observer.observe(s));

// smooth scroll for nav clicks
navLinks.forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
}));

// respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.style.scrollBehavior = 'auto';
}
