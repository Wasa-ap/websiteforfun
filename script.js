// Animations et interactions

// Animation d'apparition au scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section, .card, .hero').forEach(el => {
    observer.observe(el);
});

// Animation du titre principal
const heroTitle = document.querySelector('.hero h2');
if (heroTitle) {
    heroTitle.innerHTML = heroTitle.textContent
        .split('')
        .map(letter => `<span>${letter}</span>`)
        .join('');

    const letters = heroTitle.querySelectorAll('span');
    letters.forEach((span, i) => {
        span.style.animationDelay = `${i * 0.05}s`;
        span.classList.add('letter');
    });
}

// Effet hover dynamique sur les boutons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('hovered');
    });
    btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hovered');
    });
});

console.log('Animations JS chargées');
```javascript
// JS simple pour évolutions futures
console.log("AoE IV site chargé");
