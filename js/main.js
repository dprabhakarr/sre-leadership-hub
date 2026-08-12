/* ============================================
   MAIN
   General page functionality
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // NEWSLETTER FORM HANDLING
  // ============================================

  const newsletterForms = document.querySelectorAll('.newsletter-form');

  if (newsletterForms.length > 0) {
    newsletterForms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        const submitBtn = this.querySelector('button[type="submit"]');
        const messageContainer = this.querySelector('.newsletter-form-message');

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
          showMessage('Please enter a valid email address', 'error', form);
          return;
        }

        // Disable submit button temporarily
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Subscribing...';

        // Simulate API call (currently frontend only)
        setTimeout(() => {
          showMessage('Thank you for subscribing! Check your email for confirmation.', 'success', form);
          emailInput.value = '';
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }, 1000);
      });
    });
  }

  function showMessage(message, type, form) {
    let messageContainer = form.querySelector('.newsletter-form-message');
    
    if (!messageContainer) {
      messageContainer = document.createElement('div');
      messageContainer.className = `newsletter-form-message ${type}`;
      form.appendChild(messageContainer);
    } else {
      messageContainer.className = `newsletter-form-message ${type}`;
    }

    messageContainer.textContent = message;
    messageContainer.style.display = 'block';

    // Auto-hide success message after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        messageContainer.style.display = 'none';
      }, 5000);
    }
  }

  // ============================================
  // CONTACT FORM HANDLING
  // ============================================

  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.querySelector('input[name="name"]').value.trim();
      const email = this.querySelector('input[name="email"]').value.trim();
      const organization = this.querySelector('input[name="organization"]').value.trim();
      const subject = this.querySelector('input[name="subject"]').value.trim();
      const message = this.querySelector('textarea[name="message"]').value.trim();
      const submitBtn = this.querySelector('button[type="submit"]');

      // Basic validation
      if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all required fields', 'error', this);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address', 'error', this);
        return;
      }

      // Disable submit button
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Simulate form submission (frontend only)
      setTimeout(() => {
        showFormMessage('Thank you for your message. We will be in touch shortly.', 'success', this);
        this.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1500);
    });
  }

  function showFormMessage(message, type, form) {
    let messageContainer = form.querySelector('.form-message');
    
    if (!messageContainer) {
      messageContainer = document.createElement('div');
      messageContainer.className = `form-message ${type}`;
      form.insertBefore(messageContainer, form.firstChild);
    } else {
      messageContainer.className = `form-message ${type}`;
    }

    messageContainer.textContent = message;
    messageContainer.style.display = 'block';

    // Auto-hide success message after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        messageContainer.style.display = 'none';
      }, 5000);
    }
  }

  // ============================================
  // ARTICLE FILTERING
  // ============================================

  const filterButtons = document.querySelectorAll('[data-filter]');
  const articleCards = document.querySelectorAll('[data-category]');

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter articles
        articleCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = '';
          } else {
            const category = card.getAttribute('data-category');
            card.style.display = category === filter ? '' : 'none';
          }
        });
      });
    });

    // Set "all" as active by default
    const allButton = document.querySelector('[data-filter="all"]');
    if (allButton) {
      allButton.classList.add('active');
    }
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // SKIP NAVIGATION
  // ============================================

  const skipLink = document.querySelector('.skip-navigation');
  if (skipLink) {
    skipLink.addEventListener('click', function (e) {
      e.preventDefault();
      const mainContent = document.querySelector('main') || document.querySelector('.section');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    });
  }

  // ============================================
  // LAZY LOAD IMAGES (when applicable)
  // ============================================

  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // ============================================
  // PAGE READY EVENT
  // ============================================

  console.log('The SRE Leadership Hub - Loaded and ready');

})();
