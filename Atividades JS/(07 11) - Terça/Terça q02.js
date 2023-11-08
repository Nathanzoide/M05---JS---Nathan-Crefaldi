let livro = {
    titulo: "Aventuras de Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    anoPublicacao: 1865,
    genero: "Fantasia",
    disponivel: true,
    emprestarLivro: function() {
      this.disponivel = false;
    },
  };
  
  console.log("Informações do Livro:");
  console.log("Título: " + livro.titulo);
  console.log("Autor: " + livro.autor);
  console.log("Ano de Publicação: " + livro.anoPublicacao);
  console.log("Gênero: " + livro.genero);
  console.log("Disponível para Empréstimo: " + livro.disponivel);
  
  livro.emprestarLivro();
  console.log("Após empréstimo, disponível para Empréstimo: " + livro.disponivel);
  
  let animalDeEstimacao = {
    nome: "Rex",
    especie: "Cachorro",
    idade: 3,
    fazerBarulho: function() {
      console.log(`O ${this.nome} está latindo!`);
    },
    envelhecer: function() {
      this.idade++;
    },
    trocarNome: function(novoNome) {
      this.nome = novoNome;
    },
  };
  
  console.log("\nInformações do Animal de Estimação:");
  console.log("Nome: " + animalDeEstimacao.nome);
  console.log("Espécie: " + animalDeEstimacao.especie);
  console.log("Idade: " + animalDeEstimacao.idade);
  
  animalDeEstimacao.fazerBarulho();
  animalDeEstimacao.envelhecer();
  console.log("Idade após envelhecimento: " + animalDeEstimacao.idade);
  
  animalDeEstimacao.trocarNome("Buddy");
  console.log("Novo nome do animal: " + animalDeEstimacao.nome);