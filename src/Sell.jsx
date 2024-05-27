import React from "react";
import LandingPage from "./Img/lp.jpg";
import Grafico from './Img/alta.jpeg'

function Sell() {
  return (
    <div className=" container px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={LandingPage} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-5xl  md:h-4/5 mb-4">
            O poder das landing pages para aumentar as suas vendas
          </h2>
          <p className="md:w-3/4 mb-8">
            Diferente das páginas comuns do seu site, que podem oferecer uma
            variedade de informações e caminhos, a landing page tem um único
            propósito: <span className="text-blue-700 font-bold">converter visitantes em clientes ou leads.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sell;
