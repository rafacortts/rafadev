import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

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

  const handleWhatsAppRedirect = () => {
    window.location.href = 'https://wa.me/5521998095334';
  };
  return (
    <div className="bg-black shadow-md mt-12">
      <main className="sm:mt-0 container">
        <div className="min-h-[500px] flex items-center justify-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-5 justify-center p-12"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center text-white"
            >
              Com Rafael, cada linha de código é uma jornada rumo à{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                inovação e excelência.
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-center text-white"
            >
              Rafael é um desenvolvedor comprometido e apaixonado por
              tecnologia, que transforma projetos em obras-primas digitais com
              excelência. Sua busca incessante por soluções criativas e
              eficientes eleva os padrões da indústria, inspirando os outros a
              alcançarem novos níveis de excelência.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="space-x-4 flex justify-center"
            >
              <button  onClick={handleWhatsAppRedirect}  className='bg-blue-700 border-2 border-blue-700   text-white py-2 px-4 transition-all duration-300 rounded-full hover:bg-transparent hover:text-white hover:border-1 hover:border-blue-700 '>Entre em Contato</button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
