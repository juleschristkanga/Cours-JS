const bouton = document.getElementById("monBouton");

bouton.addEventListener("click", () => {
  const inputNom = document.getElementById("champNom");
  const valeur = inputNom.value.trim(); // .value récupère le texte, .trim() supprime les espaces inutiles
  console.log("Valeur récupérée :", valeur);
});
