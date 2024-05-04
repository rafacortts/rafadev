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
    heading: "Leve a Melhor Experiência ao Usuário Junto com a Modernidade ",
    text: "Uma ótima UX/UI não é apenas sobre design, é a ponte que transforma os visitantes em defensores leais do seu mundo digital.",
    icon: <FaRegUser className="text-6xl" />,
  },

  {
    id: 3,
    heading: "Projetos Com Entrega Rápida Garantida",
    text: "A entrega rápida da sua landing page não é apenas velocidade, é a via expressa para capturar a atenção, engajar os usuários e gerar conversões em um piscar de olhos.",
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
              <h1 className="text-2xl font-bold">{heading}</h1>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
