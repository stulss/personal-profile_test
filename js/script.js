/**
 * Personal Portfolio Website
 * Interactive features: mobile menu toggle, scroll effects, year insertion
 */

// ============================================
// DOM Elements
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');
const yearSpan = document.getElementById('year');

// ============================================
// Mobile Menu Toggle
// ============================================

/**
 * Toggle mobile menu visibility
 */
function toggleMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

/**
 * Close mobile menu
 */
function closeMenu() {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}

// Event listener for menu toggle button
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu && navMenu.contains(event.target);
    const isClickOnToggle = menuToggle && menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle && navMenu) {
        closeMenu();
    }
});

// ============================================
// Header Scroll Effect
// ============================================

/**
 * Add shadow to header on scroll
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// Current Year in Footer
// ============================================

/**
 * Insert current year in footer
 */
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

/**
 * Smooth scroll to section when nav link is clicked
 * (CSS scroll-behavior: smooth should handle this,
 *  but this adds extra handling for older browsers)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#hero') {
            e.preventDefault();

            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// Additional Interactions
// ============================================

/**
 * Hamburger animation on toggle
 */
function updateHamburgerStyle() {
    const hamburgers = document.querySelectorAll('.hamburger');

    if (navMenu && navMenu.classList.contains('active')) {
        // Transform hamburger to X
        hamburgers[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
        hamburgers[1].style.opacity = '0';
        hamburgers[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        // Reset hamburger
        hamburgers[0].style.transform = 'none';
        hamburgers[1].style.opacity = '1';
        hamburgers[2].style.transform = 'none';
    }
}

// Update hamburger style when menu is toggled
if (menuToggle) {
    menuToggle.addEventListener('click', updateHamburgerStyle);
}

// Update hamburger style on page load (in case it was remembered from before)
document.addEventListener('DOMContentLoaded', updateHamburgerStyle);

console.log('✓ Portfolio website loaded successfully!');
