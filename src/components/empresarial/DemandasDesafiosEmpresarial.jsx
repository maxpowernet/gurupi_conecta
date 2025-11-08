import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DemandasDesafiosEmpresarial = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filtroOrigem, setFiltroOrigem] = useState('todos');

  // Desafios do Poder Público + Desafios Pro-Lab (Empresariais)
  const desafios = [
    // Desafios do Poder Público
    {
      id: 1,
      origem: 'Poder Público',
      tipo: 'Mobilidade Urbana',
      nome: 'Otimização do Transporte Público',
      descricao: 'Desenvolver solução para reduzir tempo de espera e melhorar rotas de ônibus com base em dados de fluxo da cidade.',
      classificacao: 'Alta',
      prazo: '30/12/2025',
      propostas: 12,
      icone: 'directions_bus',
      cor: 'blue',
    },
    {
      id: 2,
      origem: 'Poder Público',
      tipo: 'Meio Ambiente',
      nome: 'Gestão Inteligente de Resíduos',
      descricao: 'Sistema de monitoramento e otimização de coleta seletiva utilizando IoT e análise preditiva.',
      classificacao: 'Média',
      prazo: '15/01/2026',
      propostas: 8,
      icone: 'recycling',
      cor: 'green',
    },
    {
      id: 3,
      origem: 'Poder Público',
      tipo: 'Segurança Pública',
      nome: 'Plataforma de Segurança Comunitária',
      descricao: 'App colaborativo para reportar ocorrências e mapear áreas de risco com integração ao sistema de segurança pública.',
      classificacao: 'Alta',
      prazo: '20/11/2025',
      propostas: 15,
      icone: 'shield',
      cor: 'red',
    },
    // Desafios Pro-Lab (Empresariais)
    {
      id: 101,
      origem: 'Pro-Lab',
      empresa: 'TechSolutions Ltda',
      tipo: 'Tecnologia',
      nome: 'App de Delivery para Produtores Locais',
      descricao: 'Plataforma que conecte pequenos produtores rurais diretamente aos consumidores urbanos, com logística integrada.',
      classificacao: 'Alta',
      prazo: '15/12/2025',
      propostas: 7,
      investimento: 'R$ 18.000',
      icone: 'local_shipping',
      cor: 'orange',
    },
    {
      id: 102,
      origem: 'Pro-Lab',
      empresa: 'AgriTech Tocantins',
      tipo: 'Agronegócio',
      nome: 'Sistema de Irrigação Inteligente',
      descricao: 'Solução IoT para monitoramento e automação de irrigação baseada em dados climáticos e condições do solo.',
      classificacao: 'Média',
      prazo: '30/01/2026',
      propostas: 5,
      investimento: 'R$ 25.000',
      icone: 'water_drop',
      cor: 'teal',
    },
    {
      id: 103,
      origem: 'Pro-Lab',
      empresa: 'HealthCare Inovação',
      tipo: 'Saúde',
      nome: 'Telemedicina para Comunidades Rurais',
      descricao: 'Plataforma de consultas médicas remotas com prontuário eletrônico e integração com farmácias locais.',
      classificacao: 'Alta',
      prazo: '10/12/2025',
      propostas: 11,
      investimento: 'R$ 30.000',
      icone: 'medical_services',
      cor: 'purple',
    },
    {
      id: 104,
      origem: 'Pro-Lab',
      empresa: 'EduTech Brasil',
      tipo: 'Educação',
      nome: 'Gamificação para Ensino Fundamental',
      descricao: 'App educativo com jogos para reforço escolar em matemática e português, com acompanhamento de desempenho.',
      classificacao: 'Média',
      prazo: '25/12/2025',
      propostas: 9,
      investimento: 'R$ 15.000',
      icone: 'school',
      cor: 'indigo',
    },
  ];

  const getClassificacaoColor = (classificacao) => {
    switch (classificacao) {
      case 'Alta':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'Média':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Baixa':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getOrigemColor = (origem) => {
    return origem === 'Poder Público'
      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
      : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
  };

  const getIconColor = (cor) => {
    const colors = {
      orange: 'text-orange-500',
      green: 'text-green-500',
      red: 'text-red-500',
      blue: 'text-blue-500',
      teal: 'text-teal-500',
      yellow: 'text-yellow-500',
      purple: 'text-purple-500',
      indigo: 'text-indigo-500',
    };
    return colors[cor] || 'text-gray-500';
  };

  const desafiosFiltrados = desafios.filter((desafio) => {
    if (filtroOrigem === 'todos') return true;
    return desafio.origem === filtroOrigem;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section id="demandas-desafios-empresarial" className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-4xl text-orange-600">flag</span>
            Demandas e Desafios
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore desafios do Poder Público e oportunidades Pro-Lab criadas por outras empresas
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setFiltroOrigem('todos')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              filtroOrigem === 'todos'
                ? 'bg-orange-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
            }`}
          >
            Todos ({desafios.length})
          </button>
          <button
            onClick={() => setFiltroOrigem('Poder Público')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              filtroOrigem === 'Poder Público'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
            }`}
          >
            <span className="material-symbols-outlined text-sm">domain</span>
            Poder Público ({desafios.filter(d => d.origem === 'Poder Público').length})
          </button>
          <button
            onClick={() => setFiltroOrigem('Pro-Lab')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              filtroOrigem === 'Pro-Lab'
                ? 'bg-orange-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
            }`}
          >
            <span className="material-symbols-outlined text-sm">rocket_launch</span>
            Pro-Lab ({desafios.filter(d => d.origem === 'Pro-Lab').length})
          </button>
        </div>

        {/* Grid de Desafios */}
        <motion.div
          key={filtroOrigem}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {desafiosFiltrados.map((desafio) => (
            <motion.div
              key={desafio.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
            >
              {/* Background Icon */}
              <div className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className={`material-symbols-outlined text-9xl ${getIconColor(desafio.cor)}`}>
                  {desafio.icone}
                </span>
              </div>

              {/* Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-${desafio.cor}-100 dark:bg-${desafio.cor}-900/20`}>
                      <span className={`material-symbols-outlined text-2xl ${getIconColor(desafio.cor)}`}>
                        {desafio.icone}
                      </span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getOrigemColor(desafio.origem)}`}>
                        {desafio.origem}
                      </span>
                      {desafio.empresa && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{desafio.empresa}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold">
                    {desafio.tipo}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getClassificacaoColor(desafio.classificacao)}`}>
                    {desafio.classificacao}
                  </span>
                </div>

                {/* Nome do Problema */}
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                  {desafio.nome}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {desafio.descricao}
                </p>

                {/* Investimento (Pro-Lab) */}
                {desafio.investimento && (
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-orange-600">payments</span>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Investimento Disponível</p>
                        <p className="text-lg font-bold text-orange-600">{desafio.investimento}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">schedule</span>
                      <span className="font-medium">{desafio.prazo}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">lightbulb</span>
                      <span>{desafio.propostas} soluções</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    Ver Detalhes
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-orange-600 text-orange-600 rounded-lg text-sm font-semibold hover:bg-orange-50 dark:hover:bg-orange-900/20 transition">
                    <span className="material-symbols-outlined text-sm">star</span>
                    Avaliar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DemandasDesafiosEmpresarial;
