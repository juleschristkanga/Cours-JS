// Fonction qui calcule la factorielle d'un nombre 
function calculFactorielle(n) {
  if (n < 0) return null; // Les factorielles des nombres négatifs ne sont pas définies
  if (n === 0 || n === 1) return 1;
  
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *=i;
  }
  return resultat;
}

//  Tableau de départ
const nombres = [0, 1, 3, 5, 6];

//  Utilisation de map() pour appliquer la fonction à chaque élément du tableau
const factorielles = nombres.map(calculFactorielle);

console.log(factorielles); 
// Résultat : [1, 1, 6, 120, 720]