import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DesafiosDemandas = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showForm, setShowForm] = useState(false);

  const desafios = [
    {
      id: 1,
      titulo: 'Otimização do Transporte Público',
      categoria: 'Mobilidade Urbana',
      descricao: 'Desenvolver solução para reduzir tempo de espera e melhorar rotas de ônibus com base em dados de fluxo da cidade.',
      status: 'Aberto',
      prazo: '30/12/2025',
      propostas: 12,
      prioridade: 'Alta',
    },
    {
      id: 2,
      titulo: 'Gestão Inteligente de Resíduos',
      categoria: 'Meio Ambiente',
      descricao: 'Sistema de monitoramento e otimização de coleta seletiva utilizando IoT e análise preditiva.',
      status: 'Em Análise',
      prazo: '15/01/2026',
      propostas: 8,
      prioridade: 'Média',
    },
    {
      id: 3,
      titulo: 'Plataforma de Segurança Comunitária',
      categoria: 'Segurança Pública',
      descricao: 'App colaborativo para reportar ocorrências e mapear áreas de risco com integração ao sistema de segurança pública.',
      status: 'Aberto',
      prazo: '20/11/2025',
      propostas: 15,
      prioridade: 'Alta',
    },
    {
      id: 4,
      titulo: 'Dashboard de Indicadores Educacionais',
      categoria: 'Educação',
      descricao: 'Visualização integrada de dados educacionais para apoiar gestores na tomada de decisões pedagógicas.',
      status: 'Aberto',
      prazo: '10/12/2025',
      propostas: 6,
      prioridade: 'Média',
    },
  ];

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

  const getPrioridadeColor = (prioridade) => {
    switch (prioridade) {
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Aberto':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Em Análise':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Concluído':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="desafios" className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-primary">flag</span>
              Desafios e Demandas
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Problemas urbanos que precisam de soluções inovadoras da comunidade acadêmica e empresarial
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:scale-105"
          >
            <span className="material-symbols-outlined">add_circle</span>
            Novo Desafio
          </button>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border-2 border-primary/20"
          >
            <h3 className="text-xl font-bold mb-4 text-text-light dark:text-text-dark">Criar Novo Desafio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Título do Desafio"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
              />
              <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark">
                <option>Categoria</option>
                <option>Mobilidade Urbana</option>
                <option>Meio Ambiente</option>
                <option>Segurança Pública</option>
                <option>Educação</option>
                <option>Saúde</option>
              </select>
              <textarea
                placeholder="Descrição detalhada"
                rows="3"
                className="col-span-1 md:col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
              />
              <input
                type="date"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
              />
              <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark">
                <option>Prioridade</option>
                <option>Alta</option>
                <option>Média</option>
                <option>Baixa</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition">
                Publicar Desafio
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition"
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {desafios.map((desafio) => (
            <motion.div
              key={desafio.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(desafio.status)}`}>
                      {desafio.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPrioridadeColor(desafio.prioridade)}`}>
                      {desafio.prioridade}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-1">{desafio.titulo}</h3>
                  <p className="text-sm text-primary font-medium">{desafio.categoria}</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {desafio.descricao}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    <span>{desafio.prazo}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <span className="material-symbols-outlined text-lg">lightbulb</span>
                    <span>{desafio.propostas} propostas</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-secondary text-white rounded-lg text-sm font-semibold hover:bg-secondary/90 transition">
                  Ver Detalhes
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesafiosDemandas;
