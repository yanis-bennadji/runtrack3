const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonamiMode();
            konamiIndex = 0; 
        }
    } else {
        konamiIndex = 0; 
    }
});

function activateKonamiMode() {
    document.body.classList.add('konami');
    alert("Konami code activé ! La page est maintenant stylisée aux couleurs de La Plateforme_ !");
}
