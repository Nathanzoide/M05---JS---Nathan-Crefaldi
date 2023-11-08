let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];

function ehPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;
  if (numero % 2 === 0 || numero % 3 === 0) return false;

  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
  }

  return true;
}

const numerosPrimos = numeros.filter(ehPrimo);
console.log("2 - Números Primos:");
console.log(numerosPrimos);

const quadradosDosPrimos = numerosPrimos.map((numero) => numero * numero);
console.log("\n3 - Quadrados dos Números Primos:");
console.log(quadradosDosPrimos);