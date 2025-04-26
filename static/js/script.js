// Custom JavaScript for My Website

document.addEventListener('DOMContentLoaded', function () {
    // Add active class to navbar links based on current page
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Initialize form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Allow authentication forms to submit normally to the server
                const formAction = form.getAttribute('action') || '';
                const authPages = ['/login', '/register', '/reset_password', '/profile', '/reset_password/'];

                // Check if this is an authentication-related form
                const isAuthForm = authPages.some(path => formAction.includes(path) ||
                    currentLocation.includes(path));

                if (!isAuthForm) {
                    // For demo purposes only - for non-auth forms
                    event.preventDefault();
                    alert('Form submitted successfully! This is a demo, so no data was actually sent.');
                    form.reset();
                }
                // Auth forms will submit normally to the server
            }
            form.classList.add('was-validated');
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize tooltips if Bootstrap JS is available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});