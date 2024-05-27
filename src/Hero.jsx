import React from "react";
const Hero = () => {
  return (
    <div className="bg-blue-00 shadow-md bg-black mt-12">
      <main className=" sm:mt-0 container ">
        <div className=" min-h-[500px] flex items-center justify-center">
          <div className="space-y-5 justify-center p-12 ">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl  font-bold text-center text-white">
              Com Rafael, cada linha de código é uma jornada rumo à{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">inovação e excelência.</span>
            </h1>
            <p className="text-center text-white">
              Rafael é um desenvolvedor comprometido e apaixonado por
              tecnologia, que transforma projetos em obras-primas digitais com
              excelência. Sua busca incessante por soluções criativas e
              eficientes eleva os padrões da indústria, inspirando os outros a
              alcançarem novos níveis de excelência.
            </p>
            <div className="space-x-4 flex justify-center">
              <a
                href="
                http://wa.me/5521998095334"
                className="bg-blue-700 border-2 border-blue-700 text-white p-2 rounded-full transition hover:bg-transparent hover:text-white hover:border-2 hover:border-blue-700"
              >
                {" "}
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
