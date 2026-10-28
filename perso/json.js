const personne = {nom : "Awa", age:20};
const texte = JSON.stringify(personne);
const recu = JSON.parse(texte);
console.log(texte);
console.log(recu.nom+' '+recu.age);