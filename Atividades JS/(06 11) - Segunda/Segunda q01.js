let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];
  
  // 1. Listar todas as tarefas com posição
  console.log("1 - Listagem de tarefas:");
  tarefas.forEach((tarefa, index) => {
    console.log(`${index + 1} - ${tarefa}`);
  });
  
  // 2. Filtrar tarefas pendentes
  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.includes("Feito"));
  console.log("\n2 - Tarefas Pendentes:");
  console.log(tarefasPendentes);
  
  // 3. Ordenar as tarefas em ordem alfabética
  const tarefasOrdenadas = tarefas.slice().sort();
  console.log("\n3 - Tarefas Ordenadas Alfabeticamente:");
  console.log(tarefasOrdenadas);
  
  // 4. Criar um array com as duas primeiras tarefas
  const primeirasTarefas = tarefas.slice(0, 2);
  console.log("\n4 - Primeiras Tarefas:");
  console.log(primeirasTarefas);
  
  // 5. Remover a última tarefa da lista
  tarefas.pop();
  console.log("\n5 - Lista de Tarefas Atualizada (última tarefa removida):");
  console.log(tarefas);
  
  // 6. Adicionar uma nova tarefa ao final da lista
  tarefas.push("Ler livro novo");
  console.log("\n6 - Lista de Tarefas Atualizada (nova tarefa adicionada):");
  console.log(tarefas);