const readline = require("readline");
const rl=realine.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Entrer votre nom:", function(nom){
console.log(`Bonjour ${nom}`);

});
