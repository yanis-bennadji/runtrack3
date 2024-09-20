<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root"; // Remplace par ton nom d'utilisateur MySQL
$password = ""; // Remplace par ton mot de passe MySQL
$dbname = "utilisateurs";

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Requête pour récupérer tous les utilisateurs
$sql = "SELECT id, nom, prenom, email FROM utilisateurs";
$result = $conn->query($sql);

// Tableau pour stocker les utilisateurs
$users = array();

if ($result->num_rows > 0) {
    // Remplir le tableau d'utilisateurs
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// Retourner le résultat au format JSON
echo json_encode($users);

// Fermer la connexion
$conn->close();
?>
