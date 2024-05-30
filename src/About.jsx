import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const funFacts = [
    { value: "40K", description: "Clientes Satisfeitos" },
    { value: "12", description: "Projetos Concluídos" },
    { value: "50", description: "Prêmios Recebidos" },
    { value: "1", description: "Anos de Experiência" },
  ];

  const containerControls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          containerControls.start("visible");
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [containerControls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={containerControls}
        variants={containerVariants}
        className="bg-black p-12 w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-12 rounded-xl mx-4"
      >
        <div className="md:w-2/3">
          <h2 className="text-5xl mb-5 text-white">Sobre nós</h2>
          <p className="text-white">
            Bem-vindo à nossa página! Sou um programador full-stack em início de
            carreira, com 7 meses de experiência intensa e apaixonada em
            desenvolvimento de software. Durante esse período, mergulhei de
            cabeça em diversas tecnologias e ferramentas que me permitem
            construir soluções completas, desde a interface do usuário até o
            banco de dados.
          </p>
        </div>
        <div className="md:w-1/3 w-full mt-8 md:mt-0">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex h-auto items-center gap-1"
              >
                <h2 className="md:text-5xl text-3xl text-white">
                  {fact.value}
                </h2>
                <span className="text-blue-100 text-lg">+</span>
                <p className="mb-2 text-xs leading-tight text-white">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
