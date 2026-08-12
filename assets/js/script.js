// SPINCRUSH.US - JavaScript Foundation

(function () {
    'use strict';

    const navbarToggle = document.querySelector('.navbar__toggle');
    const navbarNav = document.querySelector('.navbar__nav');

    function toggleMobileMenu() {
        const expanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        navbarToggle.setAttribute('aria-expanded', !expanded);
        navbarNav.classList.toggle('is-open');
    }

    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', toggleMobileMenu);
    }
})();

// Carousel
(function () {
    'use strict';

    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel__track');
    const slides = Array.from(track.querySelectorAll('.carousel__slide'));
    const prevBtn = carousel.querySelector('.carousel__control--prev');
    const nextBtn = carousel.querySelector('.carousel__control--next');
    const indicatorsContainer = carousel.querySelector('.carousel__indicators');
    let currentIndex = 0;
    let autoplayTimer = null;
    let isPaused = false;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function createIndicators() {
        slides.forEach((_, index) => {
            const btn = document.createElement('button');
            btn.className = 'carousel__indicator';
            btn.setAttribute('aria-label', `Go to slide ${index + 1}`);
            btn.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(btn);
        });
    }

    function updateIndicators() {
        const indicators = indicatorsContainer.querySelectorAll('.carousel__indicator');
        indicators.forEach((ind, index) => {
            ind.classList.toggle('is-active', index === currentIndex);
            ind.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
        });
    }

    function goToSlide(index) {
        slides[currentIndex].classList.remove('is-active');
        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].classList.add('is-active');
        updateIndicators();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startAutoplay() {
        stopAutoplay();
        if (!prefersReducedMotion && !isPaused) {
            autoplayTimer = setInterval(nextSlide, 5000);
        }
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    function pauseAutoplay() {
        isPaused = true;
        stopAutoplay();
    }

    function resumeAutoplay() {
        isPaused = false;
        startAutoplay();
    }

    if (slides.length > 1) {
        createIndicators();
        slides[0].classList.add('is-active');
        updateIndicators();

        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoplay();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoplay();
        });

        carousel.addEventListener('mouseenter', pauseAutoplay);
        carousel.addEventListener('mouseleave', resumeAutoplay);
        carousel.addEventListener('focusin', pauseAutoplay);
        carousel.addEventListener('focusout', resumeAutoplay);

        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
                startAutoplay();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
                startAutoplay();
            }
        });

        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                startAutoplay();
            }
        }, { passive: true });

        startAutoplay();
    }
})();