// Skrypt do obsługi rozwijanego menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});

// Skrypt do prostych animacji przewijania
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    for (let link of scrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
