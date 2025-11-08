import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DesafiosDemandas from '../components/portal/DesafiosDemandas';
import PainelIndicadores from '../components/portal/PainelIndicadores';
import MapaDados from '../components/portal/MapaDados';
import PainelDesempenho from '../components/portal/PainelDesempenho';

const PoderPublicoPortal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 to-secondary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-5xl">domain</span>
              <h1 className="text-4xl md:text-5xl font-black">Portal do Poder Público</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Sistema integrado de gestão de desafios urbanos, indicadores e análise de Big Data para tomada de decisões estratégicas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <DesafiosDemandas />
        <PainelIndicadores />
        <MapaDados />
        <PainelDesempenho />
      </div>
    </div>
  );
};

export default PoderPublicoPortal;
