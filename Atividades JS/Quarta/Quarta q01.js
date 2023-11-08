function verificaEmail(email) {
    if (email.indexOf('@gmail.com') !== -1) {
      console.log("O e-mail contém o domínio '@gmail.com'");
      const usuario = email.slice(0, email.indexOf('@'));
      console.log(`Nome de usuário: ${usuario}`);
    } else {
      const dominio = email.slice(email.indexOf('@') + 1);
      console.log(`O domínio do e-mail é: ${dominio}`);
    }
  }