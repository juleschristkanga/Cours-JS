const tarifenfant = 1500;
const tarifadulte = 2500;
let recettetotale = 0;
let billet1500 = 0;
let billet2500 = 0;


for (let age = 11; age <= 20; age++) {
    let prix;
    if (age < 16) {
        prix = 1500;
        billet1500++;
    }
    else {
        prix = 2500;
        billet2500++;
    }
    console.log("Age ",age, "Prix" ,prix );
    recettetotale = recettetotale + prix;
}
console.log("Recette totale : ", recettetotale);
console.log("Billets de 1500 : ", billet1500);
console.log("Billets de 2500 : ", billet2500);