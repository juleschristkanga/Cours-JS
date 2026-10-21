const nom="Awa"; //Type : string
const budget=50000; //Type : number ; unité : FCFA 

//TODO : convertissez les trois dépenses en nombres.
const transportTexte=12500; //Type : string ; unité : FCFA
const alimentationTexte="18300";//Type : string ; unité : FCFA
const loisirsTexte = "7500"; //Type : string ; unité : FCFA

//convertissez les trois depenses en nombres.
let transport = Number(transportTexte);//Type : number ; unité : FCFA
let alimentation = Number(alimentationTexte);//Type : string ; unité : FCFA
let loisirs = Number(loisirsTexte);//Type : string ; unité : FCFA

//TODO: affichez le rapport uniquement avec des littéraux de gabarit.
let totalDepenses = transport + alimentation + loisirs;//Type : string ; unité : FCFA
let budgetRestant = budget - totalDepenses;//Type : string ; unité : FCFA
let budgetRespecte = budgetRestant >= 0;//Type : string ; unité : FCFA

totalDepenses = Number(transport + alimentation + loisirs);
budgetRestant = Number(budget - totalDepenses);
budgetRespecte = Number(budgetRestant >=0 );
console.log(`Nom: ${nom}`);
console.log(`Budget: ${budget} FCFA`);
console.log(`Reste des dépenses ${totalDepenses} FCFA`);
console.log(`le reste du budget est : ${budgetRestant} FCFA`);
console.log(`Le budget respecté est : ${budgetRespecte} FCFA`);