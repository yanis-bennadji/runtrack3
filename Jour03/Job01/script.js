$(document).ready(function () {
    $("p").hide();

    $("#Afficher").click(function () {
        $("p").show();
    });

    $("#Cacher").click(function () {
        $("p").hide();
    });
})