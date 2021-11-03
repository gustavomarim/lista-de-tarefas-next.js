import { useState } from "react";
import Lista from "../components/lista/Lista";
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";
import tarefasIniciais from "../data/mock";

export default function Home() {

  const [tarefas, setTarefas] = useState(tarefasIniciais);

  return (
    <div className={`flex flex-col h-screen bg-gray-300`}>
      <Cabecalho>
        
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={tarefas} mudou={(novasTarefas) => {
          setTarefas(novasTarefas)
        }} />
      </Conteudo>
    </div>
  );
}
