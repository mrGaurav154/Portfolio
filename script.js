// Typing effect for intro
const text = "Welcome to my ethical hacker portfolio. Let's secure the digital world...";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Speed of typing
    }
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

window.onload = typeWriter;
