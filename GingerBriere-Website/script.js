(function () {
  var header = document.querySelector('.site-header');
  var progress = document.getElementById('scroll-progress');
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function onScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (header) header.classList.toggle('is-scrolled', scrollTop > 10);
    if (progress) progress.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var revealTargets = document.querySelectorAll(
    '.product-card, .section-title, .histoire-text, .histoire-illustration, .gallery-grid figure, .video-teaser-frame, .process-steps li, .map-frame, .stat'
  );

  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Animated stat counters
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var duration = 1200;
    var start = performance.now();

    function tick(now) {
      var progressRatio = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progressRatio, 3);
      el.textContent = Math.round(eased * target);
      if (progressRatio < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window && statNumbers.length) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach(function (el) { statObserver.observe(el); });
  } else {
    statNumbers.forEach(function (el) { el.textContent = el.getAttribute('data-target'); });
  }

  // Scrollspy: highlight the nav link matching the section in view
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.main-nav a'));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = '#' + entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle('is-active', link.getAttribute('href') === id);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach(function (section) { spyObserver.observe(section); });
  }
})();
