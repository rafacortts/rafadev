import React from 'react'

const About = () => {
  return (
    <div className='bg-gradient-animated'>

  
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
                <a href='http://wa.me/5521998095334' className="bg-blue-700 border-2 border-blue-700 text-white p-2 rounded-full transition hover:bg-transparent hover:text-white hover:border-2 hover:border-blue-700">
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
