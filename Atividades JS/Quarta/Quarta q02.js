let nomeUsuario = "";

while (true) {
  nomeUsuario = prompt("Digite um nome de usuário:");

  if (nomeUsuario.length < 12) {
    console.log("Erro: Nomes de usuário devem ter pelo menos 12 caracteres.");
    continue;
  }

  nomeUsuario = nomeUsuario.toLowerCase();

  if (!nomeUsuario.startsWith("user@")) {
    console.log("Erro: O nome de usuário deve começar com 'user@'.");
    continue;
  }

  if (nomeUsuario.indexOf("admin@") === 0) {
    console.log("Erro: Os nomes de usuário não podem começar com 'admin@'.");
    continue;
  }

  console.log("Nome de usuário válido: " + nomeUsuario);
  break;
}