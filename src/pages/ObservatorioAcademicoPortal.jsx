import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DemandasDesafios from '../components/academico/DemandasDesafios';
import SubmeterSolucoes from '../components/academico/SubmeterSolucoes';

const ObservatorioAcademicoPortal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600/90 to-purple-600/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-5xl">school</span>
              <h1 className="text-4xl md:text-5xl font-black">Portal do Observatório Acadêmico</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Conecte pesquisa acadêmica aos desafios reais da cidade. Submeta TCCs, projetos integradores e pesquisas para solucionar problemas urbanos
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="material-symbols-outlined">email</span>
                <span className="text-sm">Acesso com e-mail institucional</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <DemandasDesafios />
        <SubmeterSolucoes />
      </div>
    </div>
  );
};

export default ObservatorioAcademicoPortal;
