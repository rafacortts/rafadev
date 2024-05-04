import React from 'react'

const Teste = () => {
  return (
  
  
  
    <footer className="bg-black text-white ">
    <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7 container">
      <h1
        className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
       md:w-2/5"
      >
        <span className="text-blue-700">Entre Em Contato Agora!</span> Leve a melhor Experiência ao Cliente Final.
      </h1>
      <div>
        <input
          type="text"
          placeholder="Envie seu Email"
          className="text-gray-800
         sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
        />
        <button
          className="bg-blue-800 hover:bg-blue-700 duration-300 px-5 py-2.5 font-[Poppins]
         rounded-full text-white md:w-auto w-full"
        >
          Envie Agora
        </button>
      </div>
    </div>
    
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    text-center pt-2 text-gray-400 text-sm pb-8 bg-slate-900"
    >
      <span>© 2024 - forth. All rights reserved.</span>
      <a href="Carente" className='hover:text-white '>Termos · Politica De Privaciade</a>
      <a href="Carente" className='hover:text-white '>Termos · Politica De Privaciade</a>
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
       
    </div> */}
    </div>
  </footer>

  )
}

export default Teste
