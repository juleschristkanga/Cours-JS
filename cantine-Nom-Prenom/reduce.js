const nombres = [1, 2, 3, 4, 5];
const total = nombres.reduce((accumulateur, n) => accumulateur + n, 3); // Le deuxième argument (3) est la valeur initiale de l'accumulateur
console.log(total); // Affiche 15