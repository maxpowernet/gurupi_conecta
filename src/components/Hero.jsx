import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary dark:text-secondary font-semibold text-sm rounded-full"
            >
              Laboratório Urbano Digital
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter"
            >
              Conectando ideias, construindo o futuro de Gurupi.
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
            >
              A plataforma que une Poder Público, Observatório Acadêmico e Hub Empresarial para transformar dados em inovação e qualidade de vida para nossa cidade.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
            >
              <Link
                to="/gurupi-inteligente"
                className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-transform duration-200 hover:scale-105"
              >
                <span className="truncate">Painel de Indicadores</span>
              </Link>
              <a
                className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 border-2 border-primary text-primary text-base font-bold hover:bg-primary/10 transition-all duration-200"
                href="#pilares"
              >
                <span className="truncate">Explore os Pilares</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                alt="Vista panorâmica da cidade de Gurupi com céu azul e áreas verdes."
                className="rounded-lg aspect-video w-full object-cover"
                src="https://ecletk.com.br/img/12dfb350fd6d8a4bcf336bd818614079.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
