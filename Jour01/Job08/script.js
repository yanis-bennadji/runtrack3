function sommenombrespremiers(a, b) {
    // Vérifier si "a" est un nombre premier
    if (a <= 1) return false;
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) return false;
    }

    // Vérifier si "b" est un nombre premier
    if (b <= 1) return false;
    for (let i = 2; i <= Math.sqrt(b); i++) {
        if (b % i === 0) return false;
    }

    // Si les deux sont des nombres premiers, retourner leur somme
    return a + b;
}

// Exemple d'utilisation :
console.log(sommenombrespremiers(3, 5)); // Retourne 8 (car 3 et 5 sont premiers)
console.log(sommenombrespremiers(4, 5)); // Retourne false (car 4 n'est pas premier)
