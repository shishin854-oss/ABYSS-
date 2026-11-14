
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const year = document.getElementById('year');

  // Menu mobile
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');

      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.textContent = open ? '×' : '☰';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Ano automático no rodapé
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
