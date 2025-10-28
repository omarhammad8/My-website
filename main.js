// main.js – basic interactivity for the City Events Guide website

/* eslint-env browser */

// Filter events on the events listing page.
function initEventFilters() {
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
    const cards = document.querySelectorAll('.event-card');

    function filter() {
        const search = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categorySelect ? categorySelect.value : '';
        cards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const cat = card.dataset.category;
            const matchesSearch = title.includes(search);
            const matchesCategory = category === '' || cat === category;
            if (matchesSearch && matchesCategory) {
                card.classList.remove('d-none');
            } else {
                card.classList.add('d-none');
            }
        });
    }

    if (searchInput) searchInput.addEventListener('input', filter);
    if (categorySelect) categorySelect.addEventListener('change', filter);
}

// Validate contact form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();
        const alertContainer = document.getElementById('formAlert');
        // Basic validation
        if (name === '' || email === '' || message === '' || !email.includes('@')) {
            alertContainer.innerHTML = '<div class="alert alert-danger" role="alert">يرجى تعبئة جميع الحقول بشكل صحيح.</div>';
            return;
        }
        // On success
        alertContainer.innerHTML = '<div class="alert alert-success" role="alert">تم إرسال رسالتك بنجاح!</div>';
        // Optionally clear the form
        form.reset();
    });
}

// Scroll to top button functionality
function initScrollToTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initEventFilters();
    initContactForm();
    initScrollToTop();
});