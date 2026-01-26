/* =========================================
   ANIMATION DU RIDEAU ET CHANGEMENT D'IMAGE
   ========================================= */

   document.addEventListener("DOMContentLoaded", () => {
    // 1. On récupère les éléments du HTML
    const slider = document.getElementById("work-slider");       // Le cadre du rideau
    const categoryText = document.getElementById("category-text"); // Le texte (ex: "Design graphique")
    const sliderImage = document.querySelector(".project-img");    // L'image qui doit changer

    // 2. CONFIGURATION : La liste de tes catégories et des images associées
    const contentMap = {
        "Design graphique": "IMAGE/design-graphique/Lady3.png",
        "UI/UX design": "IMAGE/UIUXdesign/kerAmorR.png",
        "Photographie": "IMAGE/photographie/photoR.png",
        "Vidéo": "IMAGE/audiovisuel/aco-R.png"
    };

    // On transforme notre liste en un tableau pour pouvoir tourner dedans (0, 1, 2, 3...)
    const categories = Object.keys(contentMap);
    let currentIndex = 0;

    // --- FONCTION 1 : Initialisation ---
    // Sert à afficher la bonne image tout de suite au chargement (sécurité)
    function initSlider() {
        if (!categoryText || !sliderImage) return; // Sécurité si le HTML n'est pas prêt
        
        const firstCategory = categories[0];
        categoryText.innerText = firstCategory;
        sliderImage.src = contentMap[firstCategory];
    }

    // --- FONCTION 2 : L'Animation en boucle ---
    function animateCurtain() {
        // A. On ouvre le rideau
        slider.classList.add("open");

        // B. On attend que le spectateur ait bien vu l'image (3 secondes)
        setTimeout(() => {
            // C. On ferme le rideau
            slider.classList.remove("open");

            // D. On attend que le rideau soit totalement fermé (1.2 secondes)
            setTimeout(() => {
                
                // --- C'est ICI que la magie opère (en coulisses) ---
                // 1. On passe à la catégorie suivante
                currentIndex = (currentIndex + 1) % categories.length;
                const nextCategory = categories[currentIndex];

                // 2. On change le TEXTE et l'IMAGE pendant que personne ne regarde
                categoryText.innerText = nextCategory;
                sliderImage.src = contentMap[nextCategory];

                // E. On attend un petit moment sur le logo fermé (2 secondes) avant de rouvrir
                setTimeout(animateCurtain, 2000);

            }, 1200); // Doit correspondre à la durée de transition CSS du rideau (1.2s)

        }, 3000); // Durée d'ouverture (temps pour voir le projet)
    }

    // --- LANCEMENT ---
    initSlider(); // On cale tout bien au démarrage
    
    // On lance la première animation après 1 seconde d'attente
    setTimeout(animateCurtain, 1000);
});