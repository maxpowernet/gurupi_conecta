import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="w-full bg-gray-900 text-white" id="contato">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-4 col-span-1 md:col-span-2">
            <a className="flex items-center gap-3" href="#">
              <div className="bg-white/10 p-2 rounded-lg size-10">
                <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 3.054V8h5.946A8.001 8.001 0 0013 3.054zM11 3.054A8.001 8.001 0 005.054 8H11V3.054zM8 5.054A8.001 8.001 0 003.054 11H8V5.054zM5.054 13A8.001 8.001 0 008 18.946V13H5.054zM11 18.946A8.001 8.001 0 0015.946 16H11v2.946zM16 8.054A8.001 8.001 0 0013 3.108V8h3zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 10h2v5h-2v-5z"></path>
                </svg>
              </div>
              <span className="text-xl font-bold">Gurupi Conecta</span>
            </a>
            <p className="text-base text-gray-400 max-w-md">
              Uma iniciativa do Poder Público de Gurupi para impulsionar a inovação urbana através da colaboração entre o poder público, a academia e o setor privado.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">Navegação</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="text-base text-gray-400 hover:text-white transition-colors" href="#prefeitura">
                  Poder Público
                </a>
              </li>
              <li>
                <a className="text-base text-gray-400 hover:text-white transition-colors" href="#universidades">
                  Observatório Acadêmico
                </a>
              </li>
              <li>
                <a className="text-base text-gray-400 hover:text-white transition-colors" href="#empresas">
                  Hub Empresarial
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span className="text-base text-gray-400">Poder Público de Gurupi, TO</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-base">email</span>
                <span className="text-base text-gray-400">contato@gurupi.to.gov.br</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-sm text-gray-500">© 2024 Poder Público de Gurupi. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
