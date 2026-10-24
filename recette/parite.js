function parité(nombre) {   
  return nombre % 2 === 0;
}
let estPair = parité(4);
console.log(`4 est pair : ${estPair}`);
let estImpair = parité(5);
console.log(`5 est impair : ${estImpair}`); 