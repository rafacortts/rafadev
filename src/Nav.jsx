import React from "react";

const Nav = () => {
  return (
    <div className="shadow-md sticky">
      <nav className="container flex justify-between items-center p-4 bg-white z-10">
        <h1 className="text-2xl font-bold relative">Rafadev</h1>
        <ul className="flex gap-6">
          <li onClick={() => {}}>
            {" "}
            <a href="#" className="hover:text-blue-700">
              Home
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="hover:text-blue-700">
              About
            </a>
          </li>
          <li>
            {" "}
            <a
              href="
              http://wa.me/5521998095334"
              className="bg-blue-700 border-2 border-blue-700 text-white p-2 rounded-full transition hover:bg-white hover:text-black hover:border-2 hover:border-blue-700"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
