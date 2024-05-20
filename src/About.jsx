import React from 'react'

const About = () => {
  return (
    <div className='bg-black relative'>
      <svg
        className="absolute inset-0 m-auto w-64 h-64 text-white opacity-5"
        width="100"
        height="100"
        viewBox="-11.5 -10.232 23 20.463"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
  
      <div className="shadow-md container mt-12 text-white relative z-10">
        <main className="sm:mt-0 container">
          <div className="min-h-[500px] flex items-center justify-center">
            <div className="space-y-5 justify-center p-12">
              <h1 className="text-3xl text-center">
                Me chamo Rafael Cortes, Tenho 20 anos, Estudante de Análise e Desenvolvimento de Sistemas & Física.
              </h1>
              <p className="text-center">
                Criei o Projeto "Rafa.dev" com o intuito de Documentar e Divulgar minha Rotina de Estudante e Minhas Buscar por Oportunidades de Estágio. Atualmente concílio a Faculdade de Análise e Desenvolvimento de Sistemas e o Curso no Senai de Desenvolvimento Mobile. Em Breve irá começar minhas Aulas de Física na UFF.
              </p>
              <div className="space-x-4 flex justify-center">
                <a href='#' className="bg-blue-700 border-2 border-blue-700 text-white p-2 rounded-full transition hover:bg-transparent hover:text-white hover:border-2 hover:border-blue-700">
                  Entre em Contato
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default About;
