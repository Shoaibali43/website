document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles-container');


    function generateParticles() {
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
            particle.style.opacity = Math.random();
            particlesContainer.appendChild(particle);
        }
    }

    
    generateParticles();

    
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 8000);
});

