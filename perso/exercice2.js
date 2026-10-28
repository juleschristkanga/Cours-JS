function nombreEnLettres(n) {
  const unites = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
  const dizaines = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];
  const particuliers = {
    11: 'onze', 12: 'douze', 13: 'treize', 14: 'quatorze', 15: 'quinze',
    16: 'seize', 17: 'dix-sept', 18: 'dix-huit', 19: 'dix-neuf'
  };

  if (n === 0) return 'zéro';
  if (n < 0) return 'moins ' + nombreEnLettres(-n);

  let resultat = '';

  // Centaines
  const c = Math.floor(n / 100);
  const resteC = n % 100;
  if (c > 0) {
    if (c === 1) {
      resultat += 'cent';
    } else {
      resultat += unites[c] + ' cent';
    }
    if (resteC === 0 && c > 1) resultat += 's';
  }

  // Dizaines et Unités
  if (resteC > 0) {
    if (c > 0) resultat += ' ';
    if (particuliers[resteC]) {
      resultat += particuliers[resteC];
    } else {
      const d = Math.floor(resteC / 10);
      const u = resteC % 10;
      
      if (d === 7 || d === 9) {
        const dModifie = d - 1;
        resultat += dizaines[dModifie] + '-' + nombreEnLettres(10 + u);
      } else {
        resultat += dizaines[d];
        if (u > 0) {
          if (u === 1 && d !== 8 && d !== 0) {
            resultat += '-et-un';
          } else {
            resultat += '-' + unites[u];
          }
        }
      }
    }
  }

  return resultat;
}

console.log(nombreEnLettres(325)); // trois cent vingt-cinq
