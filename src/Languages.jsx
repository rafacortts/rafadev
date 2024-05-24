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
    paragrafo:
      "Adquiri habilidades em React através dos cursos no Senai e tutoriais no YouTube.",
    imagem: <FaReact className="text-6xl " />,
  },

  {
    id: 4,
    titulo: "Tailwindcss",
    paragrafo: "Adquiri habilidades em React através dos cursos no Senai e tutoriais no YouTube.",
    imagem: <SiTailwindcss className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "TypeScript",
    paragrafo: "Adquiri habilidades em React através dos cursos no Senai e tutoriais no YouTube.",
    imagem: <SiTypescript className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "JavaScript",
    paragrafo: "Adquiri habilidades em JavaScript através dos cursos no Senai e na Faculdade.",
    imagem: <SiJavascript className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "PHP",
    paragrafo: "Adquiri habilidades em PHP através dos cursos no Senai , na Faculdade e Freelancer",
    imagem: <SiPhp className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "MySQL",
    paragrafo: "Adquiri habilidades em MySQL através dos cursos no Senai e na Faculdade.",
    imagem: <SiMysql className="text-6xl" />,
  },

  {
    id: 4,
    titulo: "Java",
    paragrafo: "Adquiri habilidades em Java e S através dos cursos no Senai e na Faculdade.",
    imagem: <LiaJava className="text-6xl " />,
  },

  {
    id: 4,
    titulo: "React Native",
    paragrafo: " Adquiri habilidades em React através dos cursos no Senai e tutoriais no YouTube.",
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
    arrows: true,
    responsive:
     [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" pb-10">
      <div className=" container m-auto mt-12 ">
        <h1 className=" text-center text-3xl"> Minha Linguagens </h1>
        {/* <p className="text-center mt-2 ">Estas são as Linguagens que usarei em seu projeto </p> */}
        <div className="mt-10 ">
          <Slider {...settings}>
            {ProjetosCard.map(({ titulo, paragrafo, imagem }) => (
              <div className=" h-[270px] text-blue  rounded-xl items-center text-center  ">
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
