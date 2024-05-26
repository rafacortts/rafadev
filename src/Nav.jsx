import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";


const Nav = () => {
  const [MenuOpen, setMenuOpen] = useState(false)
  const [Sticky , setSticky] = useState(false)

const toggleMenu = () => {
  setMenuOpen(!MenuOpen)
}

useEffect (() =>{

  const handleScroll = () =>{
    if(Window.scrollY > 100){
      setSticky(true)
    }
    else{
      setSticky(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  return () => {
    window.addEventListener ("scroll" , handleScroll)
  }
})


const navItems = [
  {link: 'Home' , path: 'home'},
  {link: 'Service' , path: 'service'},
  {link: 'About' , path: 'about'},
  {link: 'FAQ' , path: 'faq'},
 

]


  return (
   <header className='w-full bg-white fixed top-0 left-0 right-0 shadow-lg'>
    <nav className={`py-4 lg:px-14 px-4 ${Sticky ? "sticky top-0 left-0 right-0 border-0 bg-white duration-100" : ""}`}>
      <div className='flex justify-between items-center text-base gap-8'>
       <a href="#" className='text-2xl flex items-center space-x-3'>RafaDev</a>
      
      <ul className='md:flex space-x-12 hidden'>
        {
          navItems.map(({link , path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base hover:text-blue-700 '>{link}</Link>)
        }
      </ul>
      <div className='space-x-12 lg:flex  hidden items-center'>
      
        <button className='bg-blue-700 border-2 border-blue-700  text-white py-2 px-4 transition-all duration-300 rounded hover:bg-transparent hover:text-black hover:border-1 hover:border-blue-700 '>Contato</button>

      </div>


          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {
                MenuOpen ? ( <FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6'/>)
              }
            </button>
          </div>
</div>

              <div className={`space-y-4 px-4 mt-16 py-7 bg-white ${MenuOpen ?  "block fixed top-0 right-0 left-0" : "hidden"}`}>
              {
          navItems.map(({link , path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base hover:text-blue-700 '>{link}</Link>)
        }
              </div>
    </nav>
   </header>
  )
}

export default Nav
