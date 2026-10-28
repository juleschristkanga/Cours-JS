const personne = {nom: "Awa", age:20};
const alias =personne;
console.log(personne.nom);
console.log(personne.age);
alias.age = 22;
console.log(personne.nom);
console.log(personne.age);