import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import InovacaoPatrocinio from '../components/empresarial/InovacaoPatrocinio';
import DemandasDesafiosEmpresarial from '../components/empresarial/DemandasDesafiosEmpresarial';
import TalentosDestaques from '../components/empresarial/TalentosDestaques';

const HubEmpresarialPortal = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600/90 to-amber-600/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-5xl">business_center</span>
              <h1 className="text-4xl md:text-5xl font-black">Portal do Hub Empresarial</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6">
              Inove, patrocine soluções e descubra talentos. Conecte sua empresa aos desafios urbanos e às melhores ideias acadêmicas da região
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="material-symbols-outlined">lightbulb</span>
                <span className="text-sm">Módulo Pro-Lab</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="material-symbols-outlined">star</span>
                <span className="text-sm">Score de Pontuação</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="material-symbols-outlined">group</span>
                <span className="text-sm">Vitrine de Talentos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <InovacaoPatrocinio />
        <DemandasDesafiosEmpresarial />
        <TalentosDestaques />
      </div>
    </div>
  );
};

export default HubEmpresarialPortal;
