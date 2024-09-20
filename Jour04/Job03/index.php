<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <h1>Pokédex</h1>

    <form id="filterForm">
        <label for="id">ID:</label>
        <input type="text" id="id" name="id">

        <label for="name">Nom:</label>
        <input type="text" id="name" name="name">

        <label for="type">Type:</label>
        <select id="type" name="type">
            <option value="">Tous les types</option>
            <option value="Fire">Feu</option>
            <option value="Water">Eau</option>
            <option value="Grass">Plante</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Électrique</option>
            <option value="Flying">Vol</option>
            <!-- Ajoute plus de types si nécessaire -->
        </select>

        <input type="button" value="Filtrer" id="filterButton">
    </form>

    <div id="pokemonList"></div>

    <script src="pokedex.js"></script>
</body>
</html>
