// PAGE Africa Initiative - Main JS

// ── Scroll fade-up animation ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Hamburger menu ──
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const hamLines   = document.querySelectorAll('.ham-line');

function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  hamLines[0].style.transform = '';
  hamLines[1].style.opacity   = '';
  hamLines[2].style.transform = '';
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    hamLines[0].style.transform = 'translateY(8px) rotate(45deg)';
    hamLines[1].style.opacity   = '0';
    hamLines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    hamburger.setAttribute('aria-expanded', 'true');
  }
});

// Close when clicking outside nav
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});
