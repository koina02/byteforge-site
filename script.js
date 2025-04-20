// Smooth Scroll Behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Theme Toggle (Dark/Light Mode)
let isDark = true;

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  isDark = !isDark;
  console.log(`Theme switched to: ${isDark ? 'Dark' : 'Light'}`);
}

// Event Listener for Theme Toggle Button
const themeButton = document.getElementById('theme-toggle');
if (themeButton) {
  themeButton.addEventListener('click', toggleTheme);
}

// Scroll Reveal Effect for Sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Responsive Navbar (Hamburger Menu)
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
}

// Add a feature to show the active link on scroll
const sectionsToTrack = document.querySelectorAll('section');
const navLinksList = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const link = document.querySelector(`a[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}, { threshold: 0.6 });

sectionsToTrack.forEach(section => {
  sectionObserver.observe(section);
});
