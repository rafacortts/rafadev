import React from "react";

import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";


const ServicesData = [
  {
    id: 1,
    heading: "Tenha Acesso aos Melhores Métodos de CiberSegurança",
    text: "A segurança cibernética do seu site não é apenas um recurso, é a proteção que protege seus batimentos cardíacos digitais.",
    icon: <GrSecure className="text-6xl" />,
  },

  {
    id: 2,
    heading: "Leve a Melhor Experiência ao Usuário ",
    text: "Uma ótima UX/UI não é apenas sobre design, é a ponte que transforma os visitantes em defensores leais do seu mundo digital.",
    icon: <FaRegUser className="text-6xl" />,
  },

  {
    id: 3,
    heading: "Impulsione suas vendas com landing pages poderosas",
    text: "Investir em landing pages poderosas é essencial para aumentar suas conversões e maximizar o retorno sobre o investimento em marketing digital",
    icon: <MdOutlineRocketLaunch className="text-6xl" />,
  },
];

const Services = () => {
  return (
    <div className="shadow-md">
      <div className="container mt-12  items-center pb-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
          {ServicesData.map(({ id, heading, text, icon }) => (
            <div key={id} className="space-y-3 text-center p-5 sh">
              <div className="flex justify-center">{icon}</div>
              <h1 className="text-3xl sm:text-2xl lg:text-3xl font-semibold">{heading}</h1>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
