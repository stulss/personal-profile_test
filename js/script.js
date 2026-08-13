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

// ============================================
// Scroll Animation with Intersection Observer
// ============================================

/**
 * Intersection Observer: Trigger animations when elements become visible
 * This creates smooth fade-in and slide-in effects as user scrolls
 */
const observerOptions = {
    threshold: 0.1,  // Trigger when 10% of element is visible
    rootMargin: '0px 0px -100px 0px'  // Start animation 100px before element reaches bottom
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add appropriate animation class based on element type
            const element = entry.target;

            if (element.classList.contains('section-title')) {
                element.classList.add('slide-in-top');
            } else if (element.classList.contains('about__text')) {
                element.classList.add('fade-in');
            } else if (element.classList.contains('skill-tag')) {
                element.classList.add('scale-up');
            } else if (element.classList.contains('timeline__item')) {
                // Alternate left and right slide for timeline items
                if (element.parentElement.children.length > 0) {
                    const index = Array.from(element.parentElement.children).indexOf(element);
                    if (index % 2 === 0) {
                        element.classList.add('slide-in-left');
                    } else {
                        element.classList.add('slide-in-right');
                    }
                }
            } else if (element.classList.contains('project-card')) {
                element.classList.add('fade-in');
            } else if (element.classList.contains('contact-button')) {
                element.classList.add('bounce-in');
            } else {
                // Default fade-in for other elements
                element.classList.add('fade-in');
            }

            // Stop observing this element after animation is added
            observer.unobserve(element);
        }
    });
}, observerOptions);

/**
 * Initialize scroll animations on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should have scroll animations
    const elementsToAnimate = document.querySelectorAll(
        '.section-title, ' +
        '.about__text, ' +
        '.skill-tag, ' +
        '.timeline__item, ' +
        '.project-card, ' +
        '.contact-button, ' +
        '.hero__name, ' +
        '.hero__tagline, ' +
        '.hero__social'
    );

    // Observe each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// ============================================
// Page Load Animation
// ============================================

/**
 * Animate hero section on page load
 */
window.addEventListener('load', () => {
    const heroName = document.querySelector('.hero__name');
    const heroTagline = document.querySelector('.hero__tagline');
    const heroImage = document.querySelector('.hero__image');

    if (heroName) {
        heroName.style.animation = 'slideInTop 0.8s ease-out';
    }
    if (heroTagline) {
        heroTagline.style.animation = 'fadeIn 0.8s ease-out 0.2s both';
    }
    if (heroImage) {
        heroImage.style.animation = 'scaleUp 0.8s ease-out 0.1s both';
    }
});

console.log('✓ Portfolio website loaded successfully!');
