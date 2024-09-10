function showHide() {
    const container = document.getElementById('articleContainer');
    
    if (container.innerHTML === "") {
        const article = document.createElement('article');
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        container.appendChild(article);
    } else {
        container.innerHTML = "";
    }
}
