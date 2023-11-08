const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número (0 para sair): "));
let cont = 0;
let soma = 0;


while (num !== 0) {
    cont++;
    soma += num;
    num = Number(prompt("Digite um número (0 para sair): "));
}
let media = soma / cont;
console.log("A média dos números digitados é: " + media);


