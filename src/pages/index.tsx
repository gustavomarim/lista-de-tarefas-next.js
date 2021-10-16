import Selecao from "../components/lista/Selecao";

export default function Home() {

  return (
    <div className={`
      flex flex-col  justify-center  items-center
      text-white  bg-gradient-to-tr from-gray-600  to-gray-900
      h-screen
    `}>
      <Selecao valor={true} />
      <Selecao valor={false} />
    </div>
  );
}
