const calculatrice = {
  facturer: function(prixHT) {
    const tva = 0.20; // C'est une variable classique, locale à la fonction
    return prixHT * (1 + tva);
  }
};

console.log(calculatrice.facturer(100)); // Appel de la méthode facturer
