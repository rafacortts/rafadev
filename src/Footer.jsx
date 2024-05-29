import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Teste = () => {
  return (
    <footer className="bg-black text-white pt-10">
      <div className="container mx-auto md:flex md:justify-between md:items-center sm:px-12 px-4 py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Entre Em Contato Agora!</span> Leve a melhor Experiência ao Cliente Final.
        </h1>
        <div className="flex flex-col sm:flex-row items-center">
          <input
            type="text"
            placeholder="Envie seu Email"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
         
        </div>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-8 text-gray-400 text-sm pb-8">
        <div>
          <h2 className="text-white font-semibold mb-2">Links Rápidos</h2>
          <ul>
            <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-white">Serviços</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-2">Termos Legais</h2>
          <ul>
            <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-white">Política de Cookies</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-2">Siga-nos</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center pt-6 border-t border-gray-700 text-gray-400 text-sm pb-8">
        <span>© 2024 - forth. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Teste;
