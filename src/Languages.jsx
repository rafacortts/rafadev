import React from 'react'
import ReactLogo from './Img/react.svg'
import TailwindLogo from './Img/tailwind.svg'
import JavaScriptLogo from './Img/javascript.svg'
import TypeScriptLogo from './Img/typescript.svg'
import CssLogo from './Img/css.svg'
import HtmlLogo from './Img/html.svg'
import PhpLogo from './Img/php.svg'


const Languages = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto container'>
      <div className='text-center my-8'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mb-2'>Tenha Acesso as Melhores Linguagens do Mercado</h2>
        <p className='text-black'>Desenvolvemos Landing Pages profissionais para e-books, cursos online e mentoria digital. Destaque-se no mercado digital com nossa expertise em conversão e design. <span className='text-blue-700 font-bold'>Alcance mais clientes e impulsione seus resultados hoje mesmo.</span>  </p>
        <div className='my-12 flex flex-wrap justify-between items-center'>
          <img src={ReactLogo} className='w-20 h-20 square-logo ' alt='React Logo'/>
          <img src={TailwindLogo} className='w-20 h-20 square-logo' alt='Tailwind Logo'/>
          <img src={JavaScriptLogo} className='w-20 h-20 square-logo' alt='JavaScript Logo'/>
          <img src={TypeScriptLogo} className='w-20 h-20 square-logo' alt='TypeScript Logo'/>
          <img src={CssLogo} className='w-20 h-20 square-logo' alt='CSS Logo'/>
          <img src={PhpLogo} className='w-20 h-20 square-logo' alt='PHP Logo'/>
        </div>
      </div>
    </div>
  )
}

export default Languages
