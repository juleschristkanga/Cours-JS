// ===== Données de la commande =====
const client = "Awa";          // Client Awa
const codePlat = 1;            // Nombre(1, 2 ou 3)
const quantiteTexte = "3";     // Nombre sous forme de texte
const montantVerse = 5000;     // nombre, FCFA

// Conversion de la quantité en nombre
const quantite = Number(quantiteTexte); // Conversion de la quantité en nombre
// ===== Prix unitaire selon le plat =====
let nomPlat;       // Nom du plat
let prixUnitaire;  // Prix unitaire en FCFA

switch (codePlat) {
  case 1:
    nomPlat = "Attiéké-poisson"; // Nom du plat
    prixUnitaire = 1500; // Prix unitaire en FCFA
    break;
  case 2:
    nomPlat = "Riz-poulet"; // Nom du plat
    prixUnitaire = 2000; // Prix unitaire en FCFA
    break;
  case 3:
    nomPlat = "Alloco-œuf"; // Nom du plat
    prixUnitaire = 1000;// Prix unitaire en FCFA
    break;
    default:
      console.log("Code de plat invalide"); // Gestion du cas où le code de plat est invalide
}
// ===== Récapitulatif =====
console.log(`===== Caisse de la cantine =====`); 
console.log(`Client : ${client}`); // Affichage du nom du client
console.log(`Plat commandé : ${nomPlat}`); // Affichage du nom du plat
let total = 0;
for (let i = 1; i <= quantite; i++) {
  console.log(`Portion ${i} : ${nomPlat} - ${prixUnitaire} FCFA`);
  total += prixUnitaire;
}

console.log(`Total à payer : ${total} FCFA`);
console.log(`Montant versé : ${montantVerse} FCFA`);

if (montantVerse >= total) {
  console.log(`Monnaie à rendre : ${montantVerse - total} FCFA`);
} else {
  console.log(`Montant manquant : ${total - montantVerse} FCFA`);
}