/* ============================================
   NAVIGATION
   Mobile menu and navigation functionality
   ============================================ */

(function () {
  'use strict';

  // Get DOM elements
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  // Toggle mobile navigation
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Close mobile navigation when a link is clicked
  if (nav) {
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        if (navToggle) {
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Close mobile navigation when clicking outside
  document.addEventListener('click', function (event) {
    if (navToggle && !navToggle.contains(event.target) && !nav.contains(event.target)) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Set active navigation link based on current page
  function setActiveNavLink() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      let href = link.getAttribute('href');
      
      // Handle root index
      if (currentLocation === '/' || currentLocation.endsWith('index.html')) {
        if (href === '/' || href === '/index.html' || href === 'index.html') {
          link.classList.add('active');
        }
      } else if (currentLocation.includes(href)) {
        link.classList.add('active');
      }
    });
  }

  // Set active link on page load
  document.addEventListener('DOMContentLoaded', setActiveNavLink);

  // Handle keyboard accessibility for mobile menu
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    }
  });

})();
