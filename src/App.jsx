import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Languages"; // LINGUAS -> TROCAR ESSA MERDA NO MOMENTO OPORTUNO
import Projetos from "./Projects";
import About from "./About";
import Teste from "./Footer";
import CookieConsent from "react-cookie-consent";

const App = () => {
 


  return (
    <div>
          <CookieConsent
        location="none"
        buttonText="Aceitar"
        cookieName="myAwesomeCookieName2"
        style={popupStyles.container}
        buttonStyle={popupStyles.acceptButton}
        expires={15}
        disableStyles={true}
      >
        Este site usa cookies para melhorar a experiência do usuário.
      </CookieConsent>
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Projetos />
      <Teste />
    </div>
  );
};
const popupStyles = {
  container: {
    position: 'fixed',
    top: '85%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    color: '#000',
    padding: '20px',
    zIndex: 1000,
    borderRadius: '3px',
    textAlign: 'center',
    maxWidth: '700px',
    border : '1px solid gray'
    
  },
  acceptButton: {
    color: '#fff',
    background: '#000',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  
    
  },

};

export default App;
