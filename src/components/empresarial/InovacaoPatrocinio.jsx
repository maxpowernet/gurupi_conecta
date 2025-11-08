import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InovacaoPatrocinio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showForm, setShowForm] = useState(false);

  const oportunidadesPatrocinio = [
    {
      id: 1,
      titulo: 'Sistema de Roteamento Dinâmico para Transporte Público',
      tipo: 'TCC',
      autores: 'Maria Silva, João Santos',
      instituicao: 'UnirG',
      area: 'Tecnologia',
      investimentoNecessario: 'R$ 15.000',
      potencialMercado: 'Alto',
      score: 8.5,
      visualizacoes: 234,
      interessados: 5,
      status: 'Buscando Patrocínio',
    },
    {
      id: 2,
      titulo: 'App de Coleta Seletiva com Gamificação',
      tipo: 'Projeto Integrador',
      autores: 'Pedro Oliveira, Ana Costa',
      instituicao: 'IFTO',
      area: 'Sustentabilidade',
      investimentoNecessario: 'R$ 8.000',
      potencialMercado: 'Médio',
      score: 9.2,
      visualizacoes: 412,
      interessados: 8,
      status: 'Em Negociação',
    },
    {
      id: 3,
      titulo: 'Dashboard Educacional com BI e Machine Learning',
      tipo: 'TCC',
      autores: 'Fernanda Lima, Lucas Rocha',
      instituicao: 'UnirG',
      area: 'Educação',
      investimentoNecessario: 'R$ 12.000',
      potencialMercado: 'Alto',
      score: 8.8,
      visualizacoes: 321,
      interessados: 6,
      status: 'Buscando Patrocínio',
    },
    {
      id: 4,
      titulo: 'Plataforma de Agendamento Inteligente para Saúde',
      tipo: 'Pesquisa',
      autores: 'Roberto Santos',
      instituicao: 'UFT',
      area: 'Saúde',
      investimentoNecessario: 'R$ 20.000',
      potencialMercado: 'Muito Alto',
      score: 9.5,
      visualizacoes: 567,
      interessados: 12,
      status: 'Patrocinado',
    },
  ];

  const getScoreColor = (score) => {
    if (score >= 9) return 'from-green-500 to-emerald-600';
    if (score >= 7.5) return 'from-blue-500 to-cyan-600';
    if (score >= 6) return 'from-yellow-500 to-orange-500';
    return 'from-gray-400 to-gray-600';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Patrocinado':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Em Negociação':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Buscando Patrocínio':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getPotencialIcon = (potencial) => {
    switch (potencial) {
      case 'Muito Alto':
        return { icon: 'trending_up', color: 'text-green-600' };
      case 'Alto':
        return { icon: 'show_chart', color: 'text-blue-600' };
      case 'Médio':
        return { icon: 'insights', color: 'text-yellow-600' };
      default:
        return { icon: 'analytics', color: 'text-gray-600' };
    }
  };

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
    <section id="inovacao-patrocinio" className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-4xl text-orange-600">rocket_launch</span>
              Inovação & Patrocínio
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Invista em soluções inovadoras, avalie projetos acadêmicos e descubra as melhores ideias para o mercado
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <span className="material-symbols-outlined">add_business</span>
            Criar Desafio Pro-Lab
          </button>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-4xl">lightbulb</span>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Disponíveis
              </div>
            </div>
            <p className="text-3xl font-black mb-1">28</p>
            <p className="text-sm opacity-90">Projetos para Patrocínio</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-4xl">handshake</span>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Ativos
              </div>
            </div>
            <p className="text-3xl font-black mb-1">12</p>
            <p className="text-sm opacity-90">Patrocínios Ativos</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-4xl">groups</span>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Total
              </div>
            </div>
            <p className="text-3xl font-black mb-1">45</p>
            <p className="text-sm opacity-90">Talentos Cadastrados</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-4xl">payments</span>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Investido
              </div>
            </div>
            <p className="text-3xl font-black mb-1">R$ 340k</p>
            <p className="text-sm opacity-90">Volume Total</p>
          </div>
        </div>

        {/* Formulário de Novo Desafio Pro-Lab */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border-2 border-orange-500/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-600">add_business</span>
              Criar Desafio de Mercado (Pro-Lab)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Título do Desafio
                </label>
                <input
                  type="text"
                  placeholder="Ex: Solução de E-commerce para Pequenos Produtores"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Área de Atuação
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark">
                  <option>Tecnologia</option>
                  <option>Agronegócio</option>
                  <option>Varejo</option>
                  <option>Saúde</option>
                  <option>Educação</option>
                  <option>Logística</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Investimento Disponível
                </label>
                <input
                  type="text"
                  placeholder="Ex: R$ 25.000"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Descrição do Desafio
                </label>
                <textarea
                  rows="4"
                  placeholder="Descreva o problema de mercado e o tipo de solução esperada..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Prazo para Soluções
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Nome da sua empresa"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                Publicar Desafio
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-8 py-3 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition"
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        )}

        {/* Lista de Oportunidades */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-600">star</span>
            Projetos em Destaque - Avalie e Invista
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {oportunidadesPatrocinio.map((projeto) => {
            const potencial = getPotencialIcon(projeto.potencialMercado);
            return (
              <motion.div
                key={projeto.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Score Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-br ${getScoreColor(projeto.score)} p-4 rounded-xl shadow-lg`}>
                    <div className="text-center">
                      <p className="text-2xl font-black text-white">{projeto.score}</p>
                      <p className="text-xs text-white/80 font-semibold">SCORE</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pr-20">
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 text-xs font-semibold rounded-full">
                      {projeto.tipo}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(projeto.status)}`}>
                      {projeto.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
                    {projeto.titulo}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">person</span>
                      <span>{projeto.autores}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">school</span>
                      <span>{projeto.instituicao}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">category</span>
                      <span>{projeto.area}</span>
                    </div>
                  </div>

                  {/* Métricas */}
                  <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Investimento</p>
                      <p className="text-lg font-bold text-orange-600">{projeto.investimentoNecessario}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Potencial</p>
                      <div className="flex items-center gap-1">
                        <span className={`material-symbols-outlined ${potencial.color}`}>{potencial.icon}</span>
                        <p className="text-sm font-semibold text-text-light dark:text-text-dark">{projeto.potencialMercado}</p>
                      </div>
                    </div>
                  </div>

                  {/* Estatísticas e Ações */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-4 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        <span>{projeto.visualizacoes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">business</span>
                        <span>{projeto.interessados} interessados</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                      <span className="material-symbols-outlined text-sm">handshake</span>
                      Investir
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-orange-600 text-orange-600 rounded-lg text-sm font-semibold hover:bg-orange-50 dark:hover:bg-orange-900/20 transition">
                      <span className="material-symbols-outlined text-sm">info</span>
                      Detalhes
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InovacaoPatrocinio;
