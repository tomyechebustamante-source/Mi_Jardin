/**
 * ============================================
 * Portfolio Minimalista - Main JavaScript
 * ============================================
 * Funciones esenciales:
 * - Navegación suave
 * - Accesibilidad
 * - Hover efectos
 * ============================================
 */

// ===== SMOOTH SCROLLING =====
document.documentElement.style.scrollBehavior = 'smooth';

// ===== NAVIGATION CLEANUP =====
// Elimina clase 'active' y previene comportamientos de scroll heredados
document.addEventListener('DOMContentLoaded', () => {
	// Remove scroll progress indicator if it exists
	const infoOverlay = document.querySelector('.info-overlay');
	if (infoOverlay) {
		infoOverlay.remove();
	}

	// Remove any data-observe attributes
	document.querySelectorAll('[data-observe]').forEach((el) => {
		el.removeAttribute('data-observe');
	});

	// Remove story-section classes and animations
	document.querySelectorAll('.story-section, .parallax-section, .final-section').forEach((el) => {
		el.classList.remove('story-section', 'parallax-section', 'final-section', 'visible');
	});
});

// ===== HEADER SCROLL EFFECT =====
let lastScrollTop = 0;
const header = document.querySelector('.header');

if (header) {
	window.addEventListener('scroll', () => {
		const scrollTop = window.scrollY;

		// Add small shadow when scrolled
		if (scrollTop > 10) {
			header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
		} else {
			header.style.boxShadow = 'none';
		}

		lastScrollTop = scrollTop;
	});
}

// ===== ACTIVE NAV LINK =====
// Destaca el link activo según la posición del scroll
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
	const sections = document.querySelectorAll('section[id]');
	let current = '';

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (window.scrollY >= sectionTop - 200) {
			current = section.getAttribute('id');
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove('active');
		if (link.getAttribute('href').includes(current)) {
			link.classList.add('active');
		}
	});
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== RESPETA PREFERENCIA DE MOVIMIENTO REDUCIDO =====
// Accesibilidad: desactiva animaciones si el usuario lo prefiere
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	document.body.classList.add('reduce-motion');
	document.body.style.scrollBehavior = 'auto';
}

console.log('✅ Scrollytelling initialized');
console.log(`📊 Observing ${document.querySelectorAll('[data-observe]').length} sections`);
