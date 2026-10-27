// Une chaîne de caractères au format JSON (données brutes reçues d'un serveur)
const donneesJsonRecues = `[
  {"id": 1, "nom": "Ordinateur Portable", "prix": 899.99, "disponible": true},
  {"id": 2, "nom": "Souris Sans Fil", "prix": 25.00, "disponible": true},
  {"id": 3, "nom": "Écran 4K", "prix": 349.99, "disponible": false},
  {"id": 4, "nom": "Casque Audio", "prix": 120.00, "disponible": true}
]`;

// 2. CONVERSION : On transforme le texte JSON en un véritable Tableau JavaScript
const catalogueProduits = JSON.parse(donneesJsonRecues);

console.log("--- TOUS LES PRODUITS DU CATALOGUE ---");
console.log(catalogueProduits);


// 3. MANIPULATION DU TABLEAU : Filtrer les produits disponibles
// La méthode .filter() crée un nouveau tableau contenant uniquement les éléments qui valident la condition
const produitsDisponibles = catalogueProduits.filter(produit => produit.disponible === true);

console.log("\n--- PRODUITS DISPONIBLES EN STOCK ---");
console.table(produitsDisponibles); // .table() affiche proprement le tableau sous forme de grille


// 4. MANIPULATION DU TABLEAU : Augmenter les prix de 10% (Inflation)
// La méthode .map() permet de transformer chaque élément d'un tableau
const produitsChers = catalogueProduits.map(produit => {
  return {
    ...produit, // On copie le produit actuel
    prix: Number((produit.prix * 1.1).toFixed(2)) // On augmente le prix et on garde 2 décimales
  };
});

console.log("\n--- CATALOGUE APRÈS HAUSSE DE PRIX (10%) ---");
console.table(produitsChers);


// 5. ENVOI DE DONNÉES : Convertir à nouveau le tableau modifié en texte JSON (pour l'envoyer au serveur)
const jsonAEnvoyer = JSON.stringify(produitsChers, null, 2); // Les arguments "null, 2" permettent d'indenter proprement le texte

console.log("\n--- TEXTE JSON PRÊT À ÊTRE ENVOYÉ AU SERVEUR ---");
console.log(jsonAEnvoyer);
