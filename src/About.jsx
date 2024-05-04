import React from 'react'

const About = () => {
  return (
    <div className=" bg-blue-200 shadow-md container mt-12">
    <main className=" sm:mt-0 container ">
      <div className=" min-h-[500px] flex items-center justify-center">
        <div className="space-y-5 justify-center p-12">
          <h1 className="text-3xl  text-center">
                Me chamo Rafael Cortes , Tenho 19 anos , Estudante de Análise e Desenvolvimento de Sistemas  & Física.
          </h1>
          <p className="text-center ">
           Criei o Projeto "Rafadev" com o intuito de Documentar e Divulgar minha Rotina e Divulgar Meus Serviços.
          </p>
          <div className="space-x-4 flex justify-center">
              <button className="bg-blue-700 border-2 border-blue-700 text-white p-2 rounded-full transition hover:bg-transparent hover:text-black hover:border-2 hover:border-blue-700"> Entre em Contato</button>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default About;
