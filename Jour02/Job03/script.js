let count = 0;
let button = document.getElementById("button");
let compteur = document.getElementById("compteur");

function addOne() {
    count++;
    compteur.innerHTML = count;
}

button.addEventListener("click",addOne);