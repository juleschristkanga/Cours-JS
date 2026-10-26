// declaration des variables
let client = "Awa";
let codeplat = 3;
let quantite = "5";
let montantverse = 4000;
let nomplat = "";
let prixunitaire = 0;
let monnaie = 0;
let manquant = 0;
// conversion de la quantite en nombre
let conversion = Number (quantite);
if(codeplat<1 || codeplat>3 || !Number.isInteger(codeplat)){
    console.log("le code est invalide")
    }
else if(!Number.isInteger(conversion) || conversion<0){
    console.log("Quantite invalide, veuillez entrer un entier")

}
else{ 





// determination des prix avec la contion if 
// if(codeplat === 1){
//     nomplat = "Attieke-poisson";
//     prixunitaire = 1500;
// } else if(codeplat === 2){
//     nomplat ="Riz-poulet";
//     prixunitaire = 2000;
// } else if(codeplat === 3){
//     nomplat = "Alloco";
//     prixunitaire = 1000;
// }else{
//     console.log("code plat invalide");
// }

// determination des prix avec switch
switch ( codeplat){
    case 1:
    nomplat = "Attieke-poisson";
    prixunitaire = 1500;
    break;
    case 2:
    nomplat ="Riz-poulet";
    prixunitaire = 2000;
    break;
    case 3:
    nomplat = "Alloco";
    prixunitaire = 1000;
    break;
    default:
   
}

// declarion de la fonction
function caculertotal(prixunitaire, quantite){
    return (prixunitaire*quantite);
}

// appel de la fonction

let totalcalculer = caculertotal(prixunitaire,conversion);

// affichage des resultats

console.log("==== RECAPITULATIF DE LA COMMANDE DE:", client ,"=======");
console.log("le plat choisi est : ", nomplat);
console.log("le prix unitaire est :", prixunitaire);
console.log("la quantite est : ", conversion);

// declatation de la boucle

console.log("")
console.log("==== preparation des portions ====");

for (let i = 1; i <= conversion; i++){
    console.log("portion ", i ,"/",conversion, "preparation de ton ",nomplat);
}

console.log("");

// affichage de la caisse

console.log("======= CAISSE ======");
console.log("le total a payer est : ", totalcalculer);
console.log("le montant versé est : ", montantverse);

// condition pour la monnaie ou le manque 

if (montantverse >= totalcalculer){
    monnaie = montantverse - totalcalculer;
    console.log("le paiement est accepté monnaie à rendre : ", monnaie);
}else{
    manquant = totalcalculer - montantverse
    console.log("nom paiement insufisant il manque : ", manquant);
}

console.log("===============================================");
}