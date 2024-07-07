document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinksItems.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Typewriter effect
    const text = "I'm Abdirashid Mohamed Haji, a Full Stack Developer";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.querySelector('.typewriter').textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Smooth scroll and active link highlighting
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            navLinksItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Highlighting the current section on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
