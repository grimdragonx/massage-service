document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const revealTargets = document.querySelectorAll(
    '.about, .services, .why-choose-us, .testimonials, .contact, .price-list, .blog, .blog-post'
  );

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (hamburger && nav) {
    hamburger.addEventListener('click', (event) => {
      event.stopPropagation();
      nav.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('active');
      }
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('active'));
    });
  }

  if (revealTargets.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealTargets.forEach((section) => observer.observe(section));
  }
});

