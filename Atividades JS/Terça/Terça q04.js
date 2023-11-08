const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número inteiro positivo: "));

if (numero <= 0) {
    console.log("Nenhum número na sequência.");
} else {
    let sequencia = [0, 1];

    switch (numero) {
        case 1:
            sequencia = [0];
            break;
        case 2:
            sequencia = [0, 1];
            break;
        default:
            for (let i = 2; i < numero; i++) {
                sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
            }
    }

    console.log(`Sequência de Fibonacci até ${numero} : ${sequencia.join(", ")}`);
}