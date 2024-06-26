import React, { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import Sell from "./Sell";
import Projects from "./Languages"; // LINGUAS -> TROCAR ESSA MERDA NO MOMENTO OPORTUNO
import About from "./About";
import Teste from "./Footer";
import CookieConsent from "react-cookie-consent";
import Price from "./Price";
import Lps from "./Lps";

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
      <div id="home"><Hero /></div>
      <div id="service"><Services /></div>
      <div id="sell"><Sell /></div>
      <div id="projects"><Projects /></div>
      <div id="lps"><Lps /></div>
      <div id="price"><Price /></div>
      <div id="about"><About /></div>
      <Teste />
    </div>
  );
};

const popupStyles = {
  container: {
    position: "fixed",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    color: "#000",
    padding: "20px",
    zIndex: 1000,
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "700px",
  },
  acceptButton: {
    color: "#fff",
    background: "#000",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
