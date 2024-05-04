import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaJava } from "react-icons/lia";
import { FaReact } from "react-icons/fa"; // <FaReact />
import { SiTailwindcss } from "react-icons/si"; // < SiTailwindcss />
import { SiTypescript } from "react-icons/si"; // < SiTypescript />
import { SiJavascript } from "react-icons/si"; // < SiJavascript />
import { TbBrandReactNative } from "react-icons/tb"; // <TbBrandReactNative />
import { SiMysql } from "react-icons/si"; // <SiMysql />
import { SiPhp } from "react-icons/si"; // <SiPhp />

const ProjetosCard = [
  {
    id: 4,
    titulo: "ReactJS",
    paragrafo: " Esse é meu projeto pessoal para tanantantantan",
    imagem: <FaReact className="text-6xl " />,
  },

  {
    id: 4,
    titulo: "Tailwindcss",
    paragrafo: " Esse é meu projeto pessoal para tanantantantan",
    imagem: <SiTailwindcss className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "TypeScript",
    paragrafo: " Esse é meu projeto pessoal para tanantantantan",
    imagem: <SiTypescript className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "JavaScript",
    paragrafo: " Esse é meu projeto pessoal para tanantantantan",
    imagem: <SiJavascript className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "PHP",
    paragrafo: " Esse é meu projeto pessoal para tanantantantan",
    imagem: <SiPhp className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "MySQL",
    paragrafo: " Esse é meu projeto pessoal para tanantantantan",
    imagem: <SiMysql className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "Java",
    paragrafo: " Esse é meu projeto pessoal para tanantantantan",
    imagem: <LiaJava className="text-6xl " />,
  },

  
  {
    id: 4,
    titulo: "React Native",
    paragrafo: " Esse é meu projeto pessoal para tanantantantan",
    imagem: <TbBrandReactNative className="text-6xl " />,
  },
];

const Projects = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className="shadow-md pb-12">
    <div className=" container m-auto mt-12 ">
      <h1 className=" text-center text-3xl"> Minha Linguagens </h1>
      {/* <p className="text-center mt-2 ">Estas são as Linguagens que usarei em seu projeto </p> */}
      <div className="mt-10">
        <Slider {...settings}>
          {ProjetosCard.map(({ titulo, paragrafo, imagem }) => (
            <div className="bg-ba h-[270px] text-black rounded-xl items-center text-center ">
              <div className="flex justify-center m-5">{imagem}</div>

              <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-semibold text-center m-1">
                  {titulo}
                </p>
                <p className="text-center m-1">{paragrafo}</p>
                <button className="bg-blue-700 border-2 border-blue-700 text-white p-2 rounded-full transition hover:bg-white hover:text-black hover:border-2 hover:border-blue-700">
                  Veja Mais
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default Projects;
