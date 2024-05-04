import React from "react";
import Teste from "./Img/teste.webp";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Projects = [
  {
    id: 10,
    src: Teste,
    ico : <FaGithub />,
    ico2 : <TbWorldWww />
  },
  {
    id: 11,
    src: Teste,
    ico : <FaGithub />,
    ico2 : <TbWorldWww />
  },
  {
    id: 12,
    src: Teste,
    ico : <FaGithub />,
    ico2 : <TbWorldWww />
  },
  {
    id: 13,
    src: Teste,
    ico : <FaGithub />,
    ico2 : <TbWorldWww />
  },
  {
    id: 14,
    src: Teste,
    ico : <FaGithub />,
    ico2 : <TbWorldWww />
  },
  {
    id: 15,
    src: Teste,
    ico : <FaGithub />,
    ico2 : <TbWorldWww />
  },

];

function Projetos() {
  return (
    <div className=" mt-12 container">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
       <h1 className="text-center text-3xl"> Meus Projetos </h1>
          <p className="py-3 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            ex?
          </p>
        </div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
        {Projects.map(({ id, src , ico , ico2}) => (
     <div className="shadow-md shadow-gray-100 rounded-lg">
              <img
                src={src}
                alt=""
                className=" duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" text-4xl px-6 m-4 ">
                  {ico}
                </button>
                <button className=" text-4xl  px-6 m-4  text-blue-700 ">
                 {ico2}
                </button>
              </div>
            </div>
        ))}
          </div>
      </div>
    </div>
  );
}

export default Projetos;
