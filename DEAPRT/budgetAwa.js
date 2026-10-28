const nom = 'Awa'; // Type du nom : string
const budget = '30000'; // Type du budget : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA


// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte);
const alimentation = Number(alimentationTexte);
const loisirs = Number(loisirsTexte);

// TODO : calculez le total, le budget restant et budgetRespected.
const totalDepenses = transport + alimentation + loisirs;
// Budget restant : number, FCFA
const budgetRestant = budget - totalDepenses;
const budgetRespecte = budgetRestant >= 0;

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Bonjour ${nom}, voici le rapport de vos dépenses :`);
console.log(` Budget initial : ${budget} FCFA`);
console.log(`Dépenses totales : ${totalDepenses} FCFA`);
console.log(`Budget restant : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespecte ? 'True' : 'False'}`);
