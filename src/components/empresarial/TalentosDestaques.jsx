import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TalentosDestaques = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filtroNivel, setFiltroNivel] = useState('todos');

  const talentos = [
    {
      id: 1,
      nome: 'Maria Silva',
      curso: 'Ciência da Computação',
      instituicao: 'UnirG',
      avatar: 'https://i.pravatar.cc/150?img=1',
      pontuacao: 9.5,
      nivel: 'Master',
      trabalhos: 4,
      avaliacoes: 12,
      especialidades: ['IoT', 'Machine Learning', 'Mobile'],
      projetos: [
        { titulo: 'Sistema de Roteamento Dinâmico', score: 9.2 },
        { titulo: 'App de Gestão de Tráfego', score: 9.8 },
      ],
    },
    {
      id: 2,
      nome: 'João Santos',
      curso: 'Engenharia de Software',
      instituicao: 'UFT',
      avatar: 'https://i.pravatar.cc/150?img=13',
      pontuacao: 9.2,
      nivel: 'Master',
      trabalhos: 3,
      avaliacoes: 10,
      especialidades: ['Web', 'Cloud', 'DevOps'],
      projetos: [
        { titulo: 'Plataforma de E-commerce', score: 9.0 },
        { titulo: 'Sistema de Microserviços', score: 9.4 },
      ],
    },
    {
      id: 3,
      nome: 'Ana Costa',
      curso: 'Engenharia Ambiental',
      instituicao: 'IFTO',
      avatar: 'https://i.pravatar.cc/150?img=5',
      pontuacao: 8.9,
      nivel: 'Expert',
      trabalhos: 5,
      avaliacoes: 15,
      especialidades: ['Sustentabilidade', 'IoT', 'Dados Ambientais'],
      projetos: [
        { titulo: 'App de Coleta Seletiva', score: 9.2 },
        { titulo: 'Monitor de Qualidade do Ar', score: 8.6 },
      ],
    },
    {
      id: 4,
      nome: 'Pedro Oliveira',
      curso: 'Análise de Sistemas',
      instituicao: 'UnirG',
      avatar: 'https://i.pravatar.cc/150?img=12',
      pontuacao: 8.7,
      nivel: 'Expert',
      trabalhos: 3,
      avaliacoes: 9,
      especialidades: ['BI', 'Data Science', 'Analytics'],
      projetos: [
        { titulo: 'Dashboard Analytics', score: 8.9 },
        { titulo: 'Sistema de Previsão de Vendas', score: 8.5 },
      ],
    },
    {
      id: 5,
      nome: 'Fernanda Lima',
      curso: 'Sistemas de Informação',
      instituicao: 'UFT',
      avatar: 'https://i.pravatar.cc/150?img=10',
      pontuacao: 8.5,
      nivel: 'Expert',
      trabalhos: 4,
      avaliacoes: 11,
      especialidades: ['UX/UI', 'Frontend', 'Design Thinking'],
      projetos: [
        { titulo: 'Redesign de Portal Educacional', score: 8.7 },
        { titulo: 'App de Saúde Mental', score: 8.3 },
      ],
    },
    {
      id: 6,
      nome: 'Lucas Rocha',
      curso: 'Engenharia da Computação',
      instituicao: 'IFTO',
      avatar: 'https://i.pravatar.cc/150?img=14',
      pontuacao: 8.3,
      nivel: 'Advanced',
      trabalhos: 2,
      avaliacoes: 6,
      especialidades: ['Embedded Systems', 'Arduino', 'Automação'],
      projetos: [
        { titulo: 'Sistema de Irrigação Inteligente', score: 8.4 },
        { titulo: 'Casa Inteligente IoT', score: 8.2 },
      ],
    },
    {
      id: 7,
      nome: 'Juliana Ferreira',
      curso: 'Ciência de Dados',
      instituicao: 'UnirG',
      avatar: 'https://i.pravatar.cc/150?img=9',
      pontuacao: 8.1,
      nivel: 'Advanced',
      trabalhos: 3,
      avaliacoes: 8,
      especialidades: ['Python', 'Statistics', 'Visualization'],
      projetos: [
        { titulo: 'Análise Preditiva de Tráfego', score: 8.3 },
        { titulo: 'Dashboard de Indicadores', score: 7.9 },
      ],
    },
    {
      id: 8,
      nome: 'Roberto Santos',
      curso: 'Engenharia de Produção',
      instituicao: 'UFT',
      avatar: 'https://i.pravatar.cc/150?img=15',
      pontuacao: 7.9,
      nivel: 'Advanced',
      trabalhos: 2,
      avaliacoes: 5,
      especialidades: ['Logística', 'Otimização', 'Gestão'],
      projetos: [
        { titulo: 'Sistema de Roteirização', score: 8.0 },
        { titulo: 'Gestão de Estoque Inteligente', score: 7.8 },
      ],
    },
  ];

  const getNivelColor = (nivel) => {
    switch (nivel) {
      case 'Master':
        return {
          gradient: 'from-purple-500 via-pink-500 to-red-500',
          bg: 'bg-purple-100 dark:bg-purple-900/30',
          text: 'text-purple-800 dark:text-purple-300',
          border: 'border-purple-500',
        };
      case 'Expert':
        return {
          gradient: 'from-blue-500 via-cyan-500 to-teal-500',
          bg: 'bg-blue-100 dark:bg-blue-900/30',
          text: 'text-blue-800 dark:text-blue-300',
          border: 'border-blue-500',
        };
      case 'Advanced':
        return {
          gradient: 'from-green-500 via-emerald-500 to-lime-500',
          bg: 'bg-green-100 dark:bg-green-900/30',
          text: 'text-green-800 dark:text-green-300',
          border: 'border-green-500',
        };
      default:
        return {
          gradient: 'from-gray-400 to-gray-600',
          bg: 'bg-gray-100 dark:bg-gray-700',
          text: 'text-gray-800 dark:text-gray-300',
          border: 'border-gray-500',
        };
    }
  };

  const getNivelIcon = (nivel) => {
    switch (nivel) {
      case 'Master':
        return 'emoji_events';
      case 'Expert':
        return 'workspace_premium';
      case 'Advanced':
        return 'military_tech';
      default:
        return 'star';
    }
  };

  const talentosFiltrados = talentos.filter((talento) => {
    if (filtroNivel === 'todos') return true;
    return talento.nivel === filtroNivel;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="talentos-destaques" className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-4xl text-orange-600">stars</span>
            Talentos e Destaques
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Vitrine de talentos acadêmicos em destaque com base na pontuação de trabalhos e avaliações empresariais
          </p>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-3xl">emoji_events</span>
              <span className="text-sm font-medium opacity-90">Master</span>
            </div>
            <p className="text-3xl font-black">{talentos.filter(t => t.nivel === 'Master').length}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-3xl">workspace_premium</span>
              <span className="text-sm font-medium opacity-90">Expert</span>
            </div>
            <p className="text-3xl font-black">{talentos.filter(t => t.nivel === 'Expert').length}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-3xl">military_tech</span>
              <span className="text-sm font-medium opacity-90">Advanced</span>
            </div>
            <p className="text-3xl font-black">{talentos.filter(t => t.nivel === 'Advanced').length}</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-3xl">group</span>
              <span className="text-sm font-medium opacity-90">Total</span>
            </div>
            <p className="text-3xl font-black">{talentos.length}</p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setFiltroNivel('todos')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              filtroNivel === 'todos'
                ? 'bg-orange-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
            }`}
          >
            Todos os Talentos
          </button>
          <button
            onClick={() => setFiltroNivel('Master')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              filtroNivel === 'Master'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
            }`}
          >
            <span className="material-symbols-outlined text-sm">emoji_events</span>
            Master
          </button>
          <button
            onClick={() => setFiltroNivel('Expert')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              filtroNivel === 'Expert'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
            }`}
          >
            <span className="material-symbols-outlined text-sm">workspace_premium</span>
            Expert
          </button>
          <button
            onClick={() => setFiltroNivel('Advanced')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              filtroNivel === 'Advanced'
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
            }`}
          >
            <span className="material-symbols-outlined text-sm">military_tech</span>
            Advanced
          </button>
        </div>

        {/* Grid de Talentos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {talentosFiltrados.map((talento) => {
            const nivel = getNivelColor(talento.nivel);
            return (
              <motion.div
                key={talento.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 relative overflow-hidden group"
              >
                {/* Badge Nível */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-br ${nivel.gradient} p-2 rounded-lg shadow-lg`}>
                    <span className="material-symbols-outlined text-white text-xl">
                      {getNivelIcon(talento.nivel)}
                    </span>
                  </div>
                </div>

                {/* Avatar com Pontuação */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    {/* Container do Avatar com Borda Gradiente */}
                    <div className={`relative w-24 h-24 rounded-full p-1 bg-gradient-to-br ${nivel.gradient}`}>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                        <img
                          src={talento.avatar}
                          alt={talento.nome}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Badge de Pontuação */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className={`bg-gradient-to-br ${nivel.gradient} px-4 py-1 rounded-full shadow-lg border-2 border-white dark:border-gray-800`}>
                        <p className="text-sm font-black text-white">{talento.pontuacao}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informações */}
                <div className="text-center mb-4 mt-4">
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-1">
                    {talento.nome}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {talento.curso}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                    {talento.instituicao}
                  </p>
                  <span className={`inline-block px-3 py-1 ${nivel.bg} ${nivel.text} text-xs font-bold rounded-full`}>
                    {talento.nivel}
                  </span>
                </div>

                {/* Especialidades */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Especialidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {talento.especialidades.map((esp, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {esp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Estatísticas */}
                <div className="space-y-2 mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">description</span>
                      Trabalhos
                    </span>
                    <span className="font-bold text-orange-600">{talento.trabalhos}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">star</span>
                      Avaliações
                    </span>
                    <span className="font-bold text-orange-600">{talento.avaliacoes}</span>
                  </div>
                </div>

                {/* Projetos em Destaque */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Projetos em Destaque:</p>
                  <div className="space-y-1">
                    {talento.projetos.slice(0, 2).map((projeto, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <span className="text-gray-700 dark:text-gray-300 truncate flex-1 mr-2">
                          {projeto.titulo}
                        </span>
                        <span className={`px-2 py-0.5 bg-gradient-to-r ${nivel.gradient} text-white font-bold rounded-full`}>
                          {projeto.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-all hover:scale-105">
                    <span className="material-symbols-outlined text-sm">person_add</span>
                    Contatar
                  </button>
                  <button className="flex items-center justify-center gap-1 px-3 py-2 border border-orange-600 text-orange-600 rounded-lg text-xs font-semibold hover:bg-orange-50 dark:hover:bg-orange-900/20 transition">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TalentosDestaques;
