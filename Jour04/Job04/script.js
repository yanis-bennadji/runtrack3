// Fonction pour mettre à jour le tableau des utilisateurs
function updateTable() {
    $.ajax({
        url: 'users.php', // Appel AJAX à la page users.php
        type: 'GET',
        dataType: 'json',
        success: function(users) {
            // Vider le tableau existant
            $('#usersTable tbody').empty();

            // Ajouter chaque utilisateur dans le tableau
            users.forEach(function(user) {
                $('#usersTable tbody').append(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.nom}</td>
                        <td>${user.prenom}</td>
                        <td>${user.email}</td>
                    </tr>
                `);
            });
        },
        error: function(xhr, status, error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
        }
    });
}

// Mise à jour du tableau lors du clic sur le bouton
$(document).ready(function() {
    $('#updateButton').click(function() {
        updateTable();
    });
});
