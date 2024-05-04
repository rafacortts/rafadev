import React from 'react'

const About = () => {
  return (
    <div className=" bg-blue-700 shadow-md container mt-12 text-white">
    <main className=" sm:mt-0 container ">
      <div className=" min-h-[500px] flex items-center justify-center">
        <div className="space-y-5 justify-center p-12">
          <h1 className="text-3xl  text-center">
                Me chamo Rafael Cortes , Tenho 19 anos , Estudante de Análise e Desenvolvimento de Sistemas & Física.
          </h1>
          <p className="text-center ">
           Criei o Projeto "Rafa.dev" com o intuito de Documentar e Divulgar minha Rotina de Estudante e Minhas Buscar por Oportunidades de Estágio. Atualmente concílio a Faculdade de Análise e Desenvolvimento de Sistemas e o Curso no Senai de Desenvolvimento Mobile. Em Breve irá começar minhas Aulas de Física na UFF.
          </p>
          <div className="space-x-4 flex justify-center">
              <a href='#' className="bg-blue-500 border-2 border-blue-500 text-white p-2 rounded-full transition hover:bg-transparent hover:text-whithe hover:border-2 hover:border-blue-300 "> Entre em Contato</a>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default About;
