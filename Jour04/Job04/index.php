<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Utilisateurs</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script> <!-- Inclusion du fichier JavaScript externe -->
</head>
<body>

    <h1>Liste des Utilisateurs</h1>

    <table id="usersTable" border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <!-- Les utilisateurs seront insérés ici via AJAX -->
        </tbody>
    </table>

    <button id="updateButton">Update</button>

</body>
</html>
