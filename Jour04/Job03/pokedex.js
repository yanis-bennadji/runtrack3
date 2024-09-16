document.getElementById('filterButton').addEventListener('click', function () {
    // Récupérer les valeurs du formulaire
    const idInput = document.getElementById('id').value;
    const nameInput = document.getElementById('name').value.toLowerCase();
    const typeInput = document.getElementById('type').value;

    // Récupérer les données JSON
    fetch('pokemon.json')
        .then(response => response.json())
        .then(pokemonData => {
            // Filtrer les pokémons en fonction des critères
            const filteredPokemon = pokemonData.filter(pokemon => {
                const matchesId = idInput === '' || pokemon.id == idInput;
                const matchesName = nameInput === '' || pokemon.name.french.toLowerCase().includes(nameInput);
                const matchesType = typeInput === '' || pokemon.type.includes(typeInput);
                return matchesId && matchesName && matchesType;
            });

            // Afficher les résultats
            displayPokemon(filteredPokemon);
        });
});

// Fonction pour afficher les pokémons
function displayPokemon(pokemonList) {
    const pokemonContainer = document.getElementById('pokemonList');
    pokemonContainer.innerHTML = ''; // Efface les résultats précédents

    if (pokemonList.length === 0) {
        pokemonContainer.innerHTML = '<p>Aucun Pokémon trouvé</p>';
        return;
    }

    pokemonList.forEach(pokemon => {
        const pokemonElement = document.createElement('div');
        pokemonElement.innerHTML = `
            <h3>${pokemon.name.french} (#${pokemon.id})</h3>
            <p>Type: ${pokemon.type.join(', ')}</p>
            <p>HP: ${pokemon.base.HP}</p>
        `;
        pokemonContainer.appendChild(pokemonElement);
    });
}
