document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // 1. On prépare le départ
    // On réduit le mouvement à 15px (au lieu de 30px) pour que ce soit subtil
    body.style.opacity = "0";
    body.style.transform = "translateY(15px)";
    
    // 2. On allonge la durée à 1.2s et on utilise 'ease-out' qui est très naturel
    body.style.transition = "opacity 1.2s ease-out, transform 1.4s cubic-bezier(0.2, 0.8, 0.2, 1)";

    // 3. Petit délai de 100ms pour laisser le navigateur respirer avant de lancer
    setTimeout(() => {
        body.style.opacity = "1";
        body.style.transform = "translateY(0)";
    }, 100);
});