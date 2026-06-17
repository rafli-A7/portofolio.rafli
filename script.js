// ============================================================
// 1. HAMBURGER TOGGLE
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close menu when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// Close menu when clicking outside (optional)
document.addEventListener('click', (e) => {
    const isNav = e.target.closest('.navbar');
    if (!isNav && navLinks.classList.contains('open')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    }
});

// ============================================================
// 2. SMOOTH SCROLL (enhancement)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offset = 80; // navbar height
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ============================================================
// 3. CONTACT FORM (simple demo)
// ============================================================
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message, Rafli will get back to you soon! 🙌');
    contactForm.reset();
});

// ============================================================
// 4. NAVBAR SHADOW ON SCROLL
// ============================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.style.boxShadow = '0 4px 30px rgba(15,23,42,0.06)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

console.log('🚀 Portfolio Rafli Akram Fakhir siap!');