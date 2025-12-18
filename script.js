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
    btn.addEventListener('mouseenter', () => btn.classList.add('hovered'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('hovered'));

    // Redirection si le bouton a la classe .contact-btn
    btn.addEventListener('click', () => {
        if (btn.classList.contains('contact-btn')) {
            window.location.href = 'contact.html';
        }
    });
});

console.log('Animations JS chargées');
console.log("AoE IV site chargé");
Ici, tous les boutons avec la classe contact-btn redirigeront vers contact.html au clic.

contact.html (exemple simple)
html
Copier le code
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - AoE IV</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Contactez-nous</h1>
        <nav>
            <a href="index.html">Accueil</a>
        </nav>
    </header>

    <main>
        <section class="contact-section">
            <h2>Formulaire de contact</h2>
            <form action="#" method="post">
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message :</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit" class="btn">Envoyer</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 AoE IV - Tous droits réservés</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
