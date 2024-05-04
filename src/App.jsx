import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Languages"; // LINGUAS -> TROCAR ESSA MERDA NO MOMENTO OPORTUNO
import Projetos from "./Projects";
import About from "./About";
import Teste from "./Footer";




const App = () => {
  return (
    <div>
      <Nav/>
      <Hero />
      <Services />
      <Projects /> 
      <About/>
      <Projetos/>
      <Teste/>

    </div>
  );
};

export default App;
