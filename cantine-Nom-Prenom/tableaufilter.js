const nombres = [1, 2, 3, 4, 5, 6];
if (nombres.length >= 1) {
// Supprimer les nombres supérieurs à 3
const resultat = nombres.filter(num => num <= -2);

console.log(resultat); // [1, 2, 3]
} else {
console.log("Le tableau est vide.");
}
