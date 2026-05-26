function showCard(type) {
    const box = document.getElementById("card-info");

    if (type === "infanterie") {
        box.innerHTML = "<h3>Infanterie</h3><p>Carte classique utilisée dans les combinaisons pour obtenir des renforts.</p>";
    }

    if (type === "cavalerie") {
        box.innerHTML = "<h3>Cavalerie</h3><p>Carte qui peut être combinée avec les autres types pour gagner des armées supplémentaires.</p>";
    }

    if (type === "canon") {
        box.innerHTML = "<h3>Canon</h3><p>Carte importante du jeu Risk, utilisée dans les échanges de cartes contre des renforts.</p>";
    }

    if (type === "joker") {
        box.innerHTML = "<h3>Joker</h3><p>Carte spéciale qui peut remplacer n’importe quel type de carte dans une combinaison.</p>";
    }
}