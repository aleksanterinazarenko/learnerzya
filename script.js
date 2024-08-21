document.addEventListener('DOMContentLoaded', function() {
    // Funkcja do obsługi rozwijanego menu
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('open');
        });
    }

    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Opcjonalna korekta pozycji
                    behavior: 'smooth'
                });
            }
        });
    });

    function loadMorePosts() {
        const loadMoreButton = document.querySelector('#load-more');
        if (!loadMoreButton) return;

        loadMoreButton.addEventListener('click', function() {
            // Tutaj możesz zaimplementować ładowanie większej ilości postów
            // np. za pomocą Fetch API lub AJAX
            console.log('Ładowanie większej ilości postów...');
        });
    }

    loadMorePosts();

    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                console.log('Sukces:', data);
            })
            .catch((error) => {
                console.error('Błąd:', error);
            });
        });
    }
});
