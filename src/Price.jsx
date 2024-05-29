import React, { useState } from "react";
import Grenn from './Img/ok.png';
import Red from './Img/Not.png';
import { Link } from "react-scroll";

const Price = () => {
  const [isYearly, setIsYearly] = useState(false);
  const Packs = [
    {
      nome: "Essencial",
      descricao: "Descrição do Pacote Básico",
      Mensal: "9,90",
      Anual: "99,90",
      beneficios: [
        { texto: "Imagens de Alta Qualidade", incluido: true },
        { texto: "Suporte 24/7", incluido: false },
        { texto: "Acesso a Novos Conteúdos", incluido: false },
        { texto: "Descontos Exclusivos", incluido: false },
      ],
    },
    {
      nome: "Essencial +",
      descricao: "Descrição do Pacote Intermediário",
      Mensal: "19,90",
      Anual: "199,90",
      beneficios: [
        { texto: "Imagens de Alta Qualidade", incluido: true },
        { texto: "Suporte 24/7", incluido: true },
        { texto: "Acesso a Novos Conteúdos", incluido: true },
        { texto: "Descontos Exclusivos", incluido: false },
      ],
    },
    {
      nome: "Premium",
      descricao: "Descrição do Pacote Avançado",
      Mensal: "29,90",
      Anual: "299,90",
      beneficios: [
        { texto: "Imagens de Alta Qualidade", incluido: true },
        { texto: "Suporte 24/7", incluido: true },
        { texto: "Acesso a Novos Conteúdos", incluido: true },
        { texto: "Descontos Exclusivos", incluido: true },
      ],
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10 container">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mb-2 text-center">
          Os <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent ">Melhores Planos</span> do Mercado Para Turbinar Suas Vendas
        </h2>
     
       
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl">Mensal</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "bg-blue-600 ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl">Anual</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {Packs.map(({ nome, descricao, Mensal, Anual, beneficios }, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-bold text-center">{nome}</h3>
            <p className="text-center my-5">{descricao}</p>
            <p className="text-center mt-5 text-blue-600 text-4xl font-bold">
              {isYearly ? `R$${Anual}` : `R$${Mensal}`} <span className="text-base font-medium">/{isYearly ? 'Anual' : 'Mensal'}</span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              {beneficios.map(({ texto, incluido }, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <img src={incluido ? Grenn : Red} alt="" className="w-4 h-4"/>
                  {texto}
                </li>
              ))}
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className='bg-blue-700 border-2 border-blue-700 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-transparent hover:text-black hover:border-1 hover:border-blue-700'>
                Compre Agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
