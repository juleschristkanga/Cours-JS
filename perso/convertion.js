const { NumberToLetter } = require(`convertir-nombre-lettre`);
const prompt = require(`prompt-sync`)();
let nombre = prompt(`Entrer un nombre : `);
console.log(`Vous avez entré :`, nombre);
console.log(NumberToLetter(nombre));