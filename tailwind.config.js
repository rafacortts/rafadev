/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  
  theme: {
    
    extend: {
        colors:{
          primary: "00000",
        } ,
        fontFamily: {
          sans : ["Poppins" , "Sans-serif"]

        } ,
        container: {
          center : true,
          padding: {
            default:"1rem",
            sm:"10rem"
          }
        } 
    },
  },
  plugins: [require('flowbite/plugin')],
  
}

