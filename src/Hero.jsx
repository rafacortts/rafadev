import React from "react";
const Hero = () => {
  return (
    <div className="bg-blue-00 shadow-md">
      <main className=" sm:mt-0 container ">
        <div className=" min-h-[500px] flex items-center justify-center">
          <div className="space-y-5 justify-center p-12 ">
            <h1 className="text-3xl font-bold text-center">
              Hi ,I'am Rafael Your <span className="text-blue-600">Desenvolvedor</span> Favorito !
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, praesentium.
            </p>
            <div className="space-x-4 flex justify-center">
                <button className="bg-blue-700 border-2 border-blue-700 text-white p-2 rounded-full transition hover:bg-white hover:text-black hover:border-2 hover:border-blue-700"> Entre em Contato</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
