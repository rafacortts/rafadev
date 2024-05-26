import React, { useState } from "react";
import Grenn from './Img/ok.png'
import Red from './Img/Not.png'

const Price = () => {
  const [isYearly, setIsYearly] = useState(false);
  const Packs = [
    {
      nome: "Pacote Básico",
      descricao: "Descrição do Pacote Básico",
      Mensal: "9,90",
      Anual: "99,90",
    },
    {
      nome: "Pacote Intermediário",
      descricao: "Descrição do Pacote Intermediário",
      Mensal: "19,90",
      Anual: "199,90",
    },
    {
        nome: "Pacote Avançado",
        descricao: "Descrição do Pacote Intermediário",
        Mensal: "29,90",
        Anual: "299,90",
      },
  
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-bold mb-2">
        Planos acessíveis para qualquer situação
        </h2>
        <p className="md:w-1/3 mx-auto px-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, id.
        </p>
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer "
          >
            <span className="mr-8 text-2xl ">Mensal</span>
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
        {Packs.map(({ nome, descricao, Mensal, Anual }, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-bold text-center">{nome}</h3>
            <p className="text-center my-5">{descricao}</p>
            <p className="text-center mt-5 text-blue-600 text-4xl font-bold ">
              {isYearly ? `R$${Anual}` : `R$${Mensal}`} <span className="text-base font-medium">/{isYearly ? 'Anual' : 'Mensal'}</span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
                <li className="flex gap-3 items-center "><img src={Grenn} alt="" className="w-4 h-4"/>Imagens de Alta Qualidade</li>
                <li className="flex gap-3 items-center "><img src={Grenn} alt="" className="w-4 h-4"/>Imagens de Alta Qualidade</li>
                <li className="flex gap-3 items-center "><img src={Grenn} alt="" className="w-4 h-4"/>Imagens de Alta Qualidade</li>
                <li className="flex gap-3 items-center "><img src={Red} alt="" className="w-4 h-4"/>Imagens de Alta Qualidade</li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
            <button className='bg-blue-700 border-2 border-blue-700  text-white py-2 px-4 transition-all duration-300 rounded hover:bg-transparent hover:text-black hover:border-1 hover:border-blue-700 '>Compre Agora </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
