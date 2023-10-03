document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.navbar-menu');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});