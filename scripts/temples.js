// scripts/temples.js
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-visible');
        navToggle.textContent = navMenu.classList.contains('nav-visible') ? 'X' : '☰';
    });
});









// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.getElementById('menu-toggle');
//     const navMenu = document.getElementById('nav-menu');

//     menuToggle.addEventListener('click', () => {
//         if (navMenu.style.display === 'block') {
//             navMenu.style.display = 'none';
//             menuToggle.textContent = '☰';
//         } else {
//             navMenu.style.display = 'block';
//             menuToggle.textContent = '✖';
//         }
//     });
// });
