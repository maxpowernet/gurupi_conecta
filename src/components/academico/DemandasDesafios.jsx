import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DemandasDesafios = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [filtroPrioridade, setFiltroPrioridade] = useState('todos');

  // Mesmos desafios do Portal do Poder Público
  const desafios = [
    {
      id: 1,
      tipo: 'Mobilidade Urbana',
      nome: 'Otimização do Transporte Público',
      descricao: 'Desenvolver solução para reduzir tempo de espera e melhorar rotas de ônibus com base em dados de fluxo da cidade.',
      classificacao: 'Alta',
      prazo: '30/12/2025',
      propostas: 12,
      status: 'Aberto',
      icone: 'directions_bus',
      cor: 'orange',
    },
    {
      id: 2,
      tipo: 'Meio Ambiente',
      nome: 'Gestão Inteligente de Resíduos',
      descricao: 'Sistema de monitoramento e otimização de coleta seletiva utilizando IoT e análise preditiva.',
      classificacao: 'Média',
      prazo: '15/01/2026',
      propostas: 8,
      status: 'Em Análise',
      icone: 'recycling',
      cor: 'green',
    },
    {
      id: 3,
      tipo: 'Segurança Pública',
      nome: 'Plataforma de Segurança Comunitária',
      descricao: 'App colaborativo para reportar ocorrências e mapear áreas de risco com integração ao sistema de segurança pública.',
      classificacao: 'Alta',
      prazo: '20/11/2025',
      propostas: 15,
      status: 'Aberto',
      icone: 'shield',
      cor: 'red',
    },
    {
      id: 4,
      tipo: 'Educação',
      nome: 'Dashboard de Indicadores Educacionais',
      descricao: 'Visualização integrada de dados educacionais para apoiar gestores na tomada de decisões pedagógicas.',
      classificacao: 'Média',
      prazo: '10/12/2025',
      propostas: 6,
      status: 'Aberto',
      icone: 'analytics',
      cor: 'blue',
    },
    {
      id: 5,
      tipo: 'Saúde',
      nome: 'Sistema de Agendamento Inteligente',
      descricao: 'Plataforma de agendamento de consultas com IA para otimizar fluxo de pacientes e reduzir filas.',
      classificacao: 'Alta',
      prazo: '05/12/2025',
      propostas: 9,
      status: 'Aberto',
      icone: 'medical_services',
      cor: 'teal',
    },
    {
      id: 6,
      tipo: 'Urbanismo',
      nome: 'Mapeamento Colaborativo de Iluminação',
      descricao: 'App para cidadãos reportarem problemas de iluminação pública com geolocalização automática.',
      classificacao: 'Baixa',
      prazo: '20/01/2026',
      propostas: 4,
      status: 'Aberto',
      icone: 'lightbulb',
      cor: 'yellow',
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

  const getIconColor = (cor) => {
    const colors = {
      orange: 'text-orange-500',
      green: 'text-green-500',
      red: 'text-red-500',
      blue: 'text-blue-500',
      teal: 'text-teal-500',
      yellow: 'text-yellow-500',
      purple: 'text-purple-500',
    };
    return colors[cor] || 'text-gray-500';
  };

  const desafiosFiltrados = desafios.filter((desafio) => {
    const matchCategoria = filtroCategoria === 'todos' || desafio.tipo === filtroCategoria;
    const matchPrioridade = filtroPrioridade === 'todos' || desafio.classificacao === filtroPrioridade;
    return matchCategoria && matchPrioridade;
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
    <section id="demandas-desafios" className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-4xl text-blue-600">flag</span>
            Demandas e Desafios
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Desafios urbanos publicados pelo Poder Público que precisam de soluções acadêmicas inovadoras
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Filtrar por Tipo
              </label>
              <select
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
              >
                <option value="todos">Todos os tipos</option>
                <option value="Mobilidade Urbana">Mobilidade Urbana</option>
                <option value="Meio Ambiente">Meio Ambiente</option>
                <option value="Segurança Pública">Segurança Pública</option>
                <option value="Educação">Educação</option>
                <option value="Saúde">Saúde</option>
                <option value="Urbanismo">Urbanismo</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Filtrar por Classificação
              </label>
              <select
                value={filtroPrioridade}
                onChange={(e) => setFiltroPrioridade(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
              >
                <option value="todos">Todas as classificações</option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contador */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
            <span className="font-bold text-lg">{desafiosFiltrados.length}</span>
            <span className="text-sm ml-2">
              {desafiosFiltrados.length === 1 ? 'desafio disponível' : 'desafios disponíveis'}
            </span>
          </div>
        </div>

        {/* Grid de Desafios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
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
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Tipo de Desafio
                      </span>
                      <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{desafio.tipo}</p>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(desafio.status)}`}>
                    {desafio.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getClassificacaoColor(desafio.classificacao)}`}>
                    Classificação: {desafio.classificacao}
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

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">schedule</span>
                      <span className="font-medium">Prazo: {desafio.prazo}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <span className="material-symbols-outlined text-lg">lightbulb</span>
                    <span>{desafio.propostas} soluções submetidas</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {desafiosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">
              search_off
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Nenhum desafio encontrado com os filtros selecionados
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default DemandasDesafios;
