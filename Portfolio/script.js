document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu').querySelector('ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');
    let currentTestimonial = 0;

    function updateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            if (index === currentTestimonial) {
                testimonial.style.transform = 'translateX(0)';
            } else if (index < currentTestimonial) {
                testimonial.style.transform = 'translateX(-100%)';
            } else {
                testimonial.style.transform = 'translateX(100%)';
            }
        });
    }

    nextButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonials();
    });

    prevButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonials();
    });

    updateTestimonials();
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        }, 500);
    });
});
