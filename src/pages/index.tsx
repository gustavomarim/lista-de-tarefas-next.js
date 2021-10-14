import Tarefa from "../model/Tarefas";

export default function Home() {

  let tarefa: Tarefa = new Tarefa(1, "Exemplo de Tarefa");
  tarefa = tarefa.alternarStatus();

  return (
    <div className={`
      flex flex-col  justify-center  items-center
      text-white
      bg-gradient-to-tr from-purple-500  to-yellow-600
      h-screen
    `}>
      <span>{tarefa.id}</span>
      <span>{tarefa.descricao}</span>
      <span>{tarefa.concluida ? "Concluída" : "Ativa"}</span>
    </div>
  );
}
