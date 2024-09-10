function tri(numbers, order) {
    // Utiliser sort() avec une fonction de comparaison personnalisée
    numbers.sort(function(a, b) {
        if (order === "asc") {
            // Tri ascendant
            return a - b;
        } else if (order === "desc") {
            // Tri descendant
            return b - a;
        }
    });
    
    return numbers;
}

// Exemple d'utilisation :
console.log(tri([5, 2, 9, 1, 7], "asc"));  // [1, 2, 5, 7, 9]
console.log(tri([5, 2, 9, 1, 7], "desc")); // [9, 7, 5, 2, 1]
