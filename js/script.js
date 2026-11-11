/**
 * Personal Portfolio Website - Core Interactions & Hardened Scripts
 * Features: Dark/Light Mode Theme Machine, Reading Progress, Sanitized Smooth Scroll, Fluid Filter, Toast
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. Theme State Machine (Dark / Light Mode)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('themeToggle');

    function updateThemeUI(theme) {
        if (themeToggleBtn) {
            themeToggleBtn.setAttribute('title', theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
            themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeUI(newTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // 시스템 선호 테마 변경 실시간 감지
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeUI(newTheme);
        }
    });

    const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateThemeUI(initialTheme);

    // ==========================================================================
    // 2. Reading Scroll Progress Bar
    // ==========================================================================
    const scrollProgressBar = document.getElementById('scrollProgressBar');

    window.addEventListener('scroll', () => {
        if (!scrollProgressBar) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgressBar.style.width = `${Math.min(100, Math.max(0, scrollPercentage))}%`;
    }, { passive: true });

    // ==========================================================================
    // 3. Mobile Navigation Menu Toggle
    // ==========================================================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        if (!navMenu || !menuToggle) return;
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }

    function closeMenu() {
        if (!navMenu || !menuToggle) return;
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        const isClickInside = navMenu && navMenu.contains(event.target);
        const isToggle = menuToggle && menuToggle.contains(event.target);
        if (!isClickInside && !isToggle && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // ==========================================================================
    // 4. Sanitized Smooth Scroll (Selector Injection 방어)
    // ==========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // ID 셀렉터 정규식 검증
            if (href && /^#[a-zA-Z0-9_-]+$/.test(href) && href !== '#' && href !== '#hero') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==========================================================================
    // 5. Projects Category Filtering (Fluid Animation)
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.core-card, .lab-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category') || '';
                    const isMatch = filterValue === 'all' || cardCategory.includes(filterValue);

                    if (isMatch) {
                        card.style.display = card.classList.contains('core-card') ? 'grid' : 'flex';
                        void card.offsetWidth; // Force Reflow
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(10px) scale(0.98)';
                        setTimeout(() => {
                            const currentActiveFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter');
                            if (currentActiveFilter !== 'all' && !cardCategory.includes(currentActiveFilter)) {
                                card.style.display = 'none';
                            }
                        }, 220);
                    }
                });
            });
        });
    }

    // ==========================================================================
    // 6. Email Copy Button & Toast Notification
    // ==========================================================================
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const toast = document.getElementById('toastNotification');

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'doffl9737@gmail.com';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast('✓ 이메일 주소가 복사되었습니다: doffl9737@gmail.com');
                }).catch(() => {
                    showToast('이메일: doffl9737@gmail.com');
                });
            } else {
                showToast('이메일: doffl9737@gmail.com');
            }
        });
    }

    // Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
