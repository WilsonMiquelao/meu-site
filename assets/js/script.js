const navbar = document.querySelector('.navbar');
const menuIcon = document.getElementById('menu-icon');

// Função para alternar a visibilidade do navbar
function toggleNavbar() {
    navbar.classList.toggle('activate');
}

// Evento de clique no ícone do menu
menuIcon.addEventListener('click', toggleNavbar);

// Fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('activate');
    });
});

// Evento de scroll para ocultar o navbar ao rolar para baixo
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.remove('activate'); // Oculta o navbar ao rolar para baixo
    }
    lastScrollY = window.scrollY;
});

// Evento para destacar a seção ativa no navbar
window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};