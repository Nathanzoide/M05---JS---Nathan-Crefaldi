const prompt = require("prompt-sync")();

while (true) {
    const imprimir = prompt("Informe se deseja imprimir um retângulo (s/n): ");
    
    if (imprimir.toLowerCase() !== "s") {
        break;
    }
    
    let altura = parseInt(prompt("Informe a altura do retângulo: "));
    let largura = parseInt(prompt("Informe a largura do retângulo: "));
    
    while (altura <= 0 || largura <= 0 || largura <= altura) {
        console.log("Entrada inválida.");
        altura = parseInt(prompt("Informe a altura do retângulo: "));
        largura = parseInt(prompt("Informe a largura do retângulo: "));
    }
    
    for (let i = 0; i < altura; i++) {
        let linha = "";
        for (let j = 0; j < largura; j++) {
            linha += "*";
        }
        console.log(linha);
    }
}

console.log("Programa encerrado.");