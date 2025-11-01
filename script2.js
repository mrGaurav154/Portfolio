
        // Create animated particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // Typing effect
        const text = "Welcome to my ethical hacker portfolio. Let's secure the digital world...";
        let index = 0;
        const typedTextElement = document.getElementById("typed-text");

        function typeWriter() {
            if (index < text.length) {
                typedTextElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 80);
            }
        }

        // Hamburger menu
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Blur reveal on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.blur-reveal').forEach(el => {
            observer.observe(el);
        });

        // Start typing effect on load
        window.onload = typeWriter;
