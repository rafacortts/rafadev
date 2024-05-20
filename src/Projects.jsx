import React from "react";
import imgTeste from './Img/site01.png'

const Projects = () => {
  const blogs = [
    {
      id: 1,
      title: "Texto de teste de imagem ",
      image: "./src/img/site01.png",
    },
    {
      id: 2,
      title: "Texto de teste de imagem",
      image: "./src/img/site02.jpeg",
    },
    {
      id: 3,
      title: "Texto de teste de imagem",
      image: "./src/img/site03.jpeg",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 container">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-black pb-8">Meus Projetos</h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={imgTeste} alt={blog.title} />
            <div>
              <h3 className="text-center px-4 py-8 bg-white shadow-lg rounded-md mx-auto md:w-3/4 absolute left-0 right-0 -bottom-12">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center gap-8 absolute left-0 right-0 -bottom-11">
                <a href="https://github.com/rafacortts/AppleCommerce" className="font-bold text-blue-700 hover:text-blue-400">Veja Mais</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
