document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.getElementById('menu-icon');
  
    // Alterna a visibilidade do navbar no clique do menu
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('activate');
    });
  
    // Fecha o navbar ao clicar em um link
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('activate');
      });
    });
  
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      // Oculta o navbar ao rolar para baixo
      if (window.scrollY > lastScrollY) {
        navbar.classList.remove('activate');
      }
      lastScrollY = window.scrollY;
  
      // Destaca a seção ativa na Navbar
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => link.classList.remove('active'));
          document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
      });
    });
  });
