// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
}

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return calculerTotal(depenses) / depenses.length;

}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter((valeur) => valeur > 2000);
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return Math.max(...depenses);
} 


// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
console.log("Dépenses de la semaine : " + depensesSemaine);
const depensesTriees = [...depensesSemaine].sort((a, b) => a - b);
console.log("Dépenses triées : " + depensesTriees);

const total = calculerTotal(depensesSemaine);
console.log("Total des dépenses : " + total + " FCFA");

const moyenne = calculerMoyenne(depensesSemaine);
console.log("Moyenne des dépenses : " + moyenne.toFixed(2) + " FCFA");

const grossesDepenses = filtrerGrossesDepenses(depensesSemaine);
console.log("Grosses dépenses (> 2000 FCFA) : " + grossesDepenses);

const maximum = trouverMaximum(depensesSemaine);
console.log("Plus grande dépense : " + maximum + " FCFA");
