let pessoa = {};

pessoa.nome = "Seu Nome";
pessoa.idade = 30;

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);

pessoa.idade = 35;
console.log("Idade atualizada: " + pessoa.idade);

let pessoa2 = {
  nome: "Outro Nome",
  idade: 25,
};

console.log("Propriedades de pessoa2:");
for (let propriedade in pessoa2) {
  console.log(`${propriedade}: ${pessoa2[propriedade]}`);
}

pessoa2.apresentacao = function() {
  console.log(`Olá, meu nome é ${this.nome}.`);
};
pessoa2.apresentacao();

pessoa.email = "seuemail@example.com";
console.log("E-mail: " + pessoa.email);