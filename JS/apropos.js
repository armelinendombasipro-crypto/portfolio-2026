// 1. FONCTION POUR LE CLIC MANUEL
function manualToggle(header) {
    const item = header.parentElement;
    item.classList.toggle('is-active');
}

// 2. ANIMATION AUTOMATIQUE À L'ARRIVÉE
window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.acc-item');
    
    items.forEach((item, index) => {
        // On fait apparaître chaque paragraphe l'un après l'autre
        setTimeout(() => {
            item.classList.add('is-active');
            
            // Optionnel : Si tu veux qu'ils se referment tout seuls après lecture
            // setTimeout(() => item.classList.remove('is-active'), 4000); 
            
        }, index * 1000); // 800ms d'écart entre chaque paragraphe
    });
});