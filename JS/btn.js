const navButtons = document.querySelectorAll('.navbar-contact .btn');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 1. On enlève le violet de tous les boutons
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // 2. On ajoute le violet sur celui qu'on vient de cliquer
        this.classList.add('active');
    });
});