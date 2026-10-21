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

totalDepenses = Number(transport + alimentation + loisirs);//Calcul des depenses totales
budgetRestant = Number(budget - totalDepenses);//Calcul du budget restant
budgetRespecte = Number(budgetRestant >=0 );//calcul du budget respecté 
console.log(`Nom: ${nom}`); //Affichage du nom
console.log(`Budget: ${budget} FCFA`);//Affichage du budget
console.log(`Reste des dépenses ${totalDepenses} FCFA`);//Affichage du budget 
console.log(`le reste du budget est : ${budgetRestant} FCFA`);//Affichage du reste du budget
console.log(`Le budget respecté est : ${budgetRespecte} FCFA`);//Affichage du budget respecté