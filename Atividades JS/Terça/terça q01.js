const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

let resultado = 0;

for (let i = 0; i < num2; i++) {
    resultado += num1;
}

console.log("Resultado: "+ resultado)