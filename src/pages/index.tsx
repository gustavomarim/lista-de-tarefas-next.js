import Tarefa from "../model/Tarefa";
import tarefasIniciais from "../data/mock";

export default function Home() {

  let tarefas = tarefasIniciais;
  tarefas = tarefas.filtrarAtivas();
  tarefas = tarefas.filtrarConcluidas();
  // tarefas = tarefas.removerFiltro();
  tarefas = tarefas.excluirConcluidas();

  function renderizarTarefas() {
    return tarefas.itens.map(tarefa => {
      return (
        <div key={tarefa.id}>
          <span> {tarefa.id} | </span>
          <span> {tarefa.descricao} | </span>
          <span> {tarefa.concluida ? "Concluída" : "Ativa" }</span>
        </div>
      )
    })
  }

  return (
    <div className={`
      flex flex-col  justify-center  items-center
      text-white
      bg-gradient-to-tr from-purple-500  to-yellow-600
      h-screen
    `}>
      {renderizarTarefas()}
    </div>
  );
}
