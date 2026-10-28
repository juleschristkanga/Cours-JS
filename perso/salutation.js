// Demander le prénom de l'utilisateur
let nom;
nom= prompt(`Quel est votre prénom ?`);

if (nom !== null) {
  console.log(`Bonjour` +nom+ ` !`);
} else {
  console.log(`L'utilisateur a annulé la saisie.`);
}
