// Ton ID extrait de l'URL Formspree
const FORMSPREE_ID = "mqepokqo"; 

const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = document.querySelector('.btn-submit');

        // On change le texte du bouton pour montrer que ça travaille
        submitBtn.textContent = "Envoi en cours...";
        submitBtn.disabled = true;

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert("Super ! Message envoyé avec succès.");
                contactForm.reset(); // Vide le formulaire proprement
            } else {
                alert("Erreur lors de l'envoi. Vérifie tes informations.");
            }
        } catch (error) {
            alert("Impossible de joindre le service d'envoi.");
        } finally {
            submitBtn.textContent = "Envoyer";
            submitBtn.disabled = false;
        }
    });
}