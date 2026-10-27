// Objet JavaScript
const utilisateur = {
  nom: "Alice",
  age: 25,
  estActif: true,
  saluer: function() {
    console.log("Bonjour !");
  }
};
utilisateur.saluer(); // Appel de la méthode
console.log(utilisateur.nom); // Accès direct à la propriété
console.log(utilisateur["age"]); // Accès à la propriété via une chaîne de caractères


