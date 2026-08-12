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