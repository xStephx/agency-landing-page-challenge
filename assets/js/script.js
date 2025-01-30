// DOM elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const triangleMenu = document.getElementById('triangle-menu');
const hamburgerMenu = document.getElementById('hamburger-menu');

// EventListener for hamburger menu
hamburgerIcon.addEventListener('click', () => {
    triangleMenu.classList.toggle('hidden');
    hamburgerMenu.classList.toggle('hidden');
});