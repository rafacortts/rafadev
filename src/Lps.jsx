import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import LP from './Img/LandPage1.png'
import LP1 from './Img/LandPage2.png'

const Lps = () => {
  const Beneficios = [
    {
      titulo: "Tenha acesso à melhor UX/UI",
      descricao: "Tenha acesso à melhor UX/UI",
    },
    {
      titulo: "Aumente sua produtividade",
      descricao: "Aumente sua produtividade com ferramentas eficientes",
    },
    {
      titulo: "Expanda sua rede de contatos",
      descricao: "Conecte-se com profissionais influentes em sua área",
    },
    {
      titulo: "Melhore sua visibilidade online",
      descricao: "Aumente sua presença digital e seja reconhecido",
    },
  ];

  return (
    <div className=" container">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6">
        Impulsione suas Vendas no <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent "> Mercado Digital</span>
      </h2>
      <div className="flex flex-wrap justify-center mt-12">
        <div className="p-2 w-full lg:w-1/2">
          <img src={LP} alt="" />
          <img src={LP1} alt="" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {Beneficios.map(({ titulo, descricao }, index) => (
            <div key={index} className="flex mb-12">
              <div className="mx-6 h-2 w-2 p-2 justify-center items-center rounded-full">
              <AiOutlineCheckCircle size={24}/>
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{titulo}</h5>
                <p className="text-md">{descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lps;
