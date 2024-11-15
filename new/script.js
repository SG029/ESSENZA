// JavaScript functionality for the Bowery website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('.menu-opener');
    const navWrap = document.querySelector('.nav-wrap');

    menuButton.addEventListener('click', () => {
        navWrap.classList.toggle('open');
        menuButton.textContent = navWrap.classList.contains('open') ? "Close" : "Menu";
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    console.log("JavaScript loaded successfully.");
});
