import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PainelDesempenho = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colaboradores = [
    {
      id: 1,
      nome: 'Ana Paula Silva',
      setor: 'Secretaria de Educação',
      contribuicoes: 156,
      nivel: 'Diamante',
      avatar: 'https://i.pravatar.cc/150?img=1',
      ultimaAtualizacao: '08/11/2025',
    },
    {
      id: 2,
      nome: 'Carlos Eduardo Santos',
      setor: 'Secretaria de Saúde',
      contribuicoes: 142,
      nivel: 'Diamante',
      avatar: 'https://i.pravatar.cc/150?img=13',
      ultimaAtualizacao: '07/11/2025',
    },
    {
      id: 3,
      nome: 'Marina Costa',
      setor: 'Secretaria de Meio Ambiente',
      contribuicoes: 128,
      nivel: 'Ouro',
      avatar: 'https://i.pravatar.cc/150?img=5',
      ultimaAtualizacao: '08/11/2025',
    },
    {
      id: 4,
      nome: 'Roberto Almeida',
      setor: 'Secretaria de Segurança',
      contribuicoes: 115,
      nivel: 'Ouro',
      avatar: 'https://i.pravatar.cc/150?img=12',
      ultimaAtualizacao: '06/11/2025',
    },
    {
      id: 5,
      nome: 'Juliana Ferreira',
      setor: 'Secretaria de Urbanismo',
      contribuicoes: 98,
      nivel: 'Ouro',
      avatar: 'https://i.pravatar.cc/150?img=9',
      ultimaAtualizacao: '05/11/2025',
    },
    {
      id: 6,
      nome: 'Pedro Henrique Lima',
      setor: 'Secretaria de Transporte',
      contribuicoes: 87,
      nivel: 'Prata',
      avatar: 'https://i.pravatar.cc/150?img=15',
      ultimaAtualizacao: '07/11/2025',
    },
    {
      id: 7,
      nome: 'Fernanda Oliveira',
      setor: 'Secretaria de Assistência Social',
      contribuicoes: 76,
      nivel: 'Prata',
      avatar: 'https://i.pravatar.cc/150?img=10',
      ultimaAtualizacao: '08/11/2025',
    },
    {
      id: 8,
      nome: 'Lucas Rodrigues',
      setor: 'Secretaria de Cultura',
      contribuicoes: 65,
      nivel: 'Prata',
      avatar: 'https://i.pravatar.cc/150?img=14',
      ultimaAtualizacao: '04/11/2025',
    },
  ];

  const getNivelColor = (nivel) => {
    switch (nivel) {
      case 'Diamante':
        return 'from-blue-400 to-cyan-300';
      case 'Ouro':
        return 'from-yellow-400 to-yellow-600';
      case 'Prata':
        return 'from-gray-300 to-gray-500';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getNivelIcon = (nivel) => {
    switch (nivel) {
      case 'Diamante':
        return 'diamond';
      case 'Ouro':
        return 'military_tech';
      case 'Prata':
        return 'shield';
      default:
        return 'star';
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="painel-desempenho" className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-4xl text-primary">leaderboard</span>
            Painel de Desempenho
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Colaboradores que estão alimentando a plataforma com dados mensais e contribuindo para a inovação urbana
          </p>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-4xl">person</span>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Total
              </div>
            </div>
            <p className="text-3xl font-black mb-1">156</p>
            <p className="text-sm opacity-90">Colaboradores Ativos</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-4xl">upload</span>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Este Mês
              </div>
            </div>
            <p className="text-3xl font-black mb-1">1.234</p>
            <p className="text-sm opacity-90">Datasets Atualizados</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-4xl">trending_up</span>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                +23%
              </div>
            </div>
            <p className="text-3xl font-black mb-1">94%</p>
            <p className="text-sm opacity-90">Taxa de Atualização</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-4xl">workspace_premium</span>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Top
              </div>
            </div>
            <p className="text-3xl font-black mb-1">8</p>
            <p className="text-sm opacity-90">Setores Participantes</p>
          </div>
        </div>

        {/* Grid de Colaboradores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {colaboradores.map((colaborador) => (
            <motion.div
              key={colaborador.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
            >
              {/* Badge Nível */}
              <div className="absolute top-4 right-4">
                <div className={`bg-gradient-to-br ${getNivelColor(colaborador.nivel)} p-2 rounded-lg shadow-lg`}>
                  <span className="material-symbols-outlined text-white text-xl">
                    {getNivelIcon(colaborador.nivel)}
                  </span>
                </div>
              </div>

              {/* Avatar com Efeito de Água */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  {/* Container do Avatar */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img
                      src={colaborador.avatar}
                      alt={colaborador.nome}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Efeito de Água Animado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-400/40 via-cyan-300/30 to-transparent animate-pulse"></div>
                    
                    {/* Onda de Água */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/50 to-transparent animate-wave opacity-60"></div>
                    </div>
                    
                    {/* Brilho */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40"></div>
                  </div>

                  {/* Círculo de Progresso */}
                  <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
                    <div className={`bg-gradient-to-br ${getNivelColor(colaborador.nivel)} rounded-full p-2`}>
                      <span className="material-symbols-outlined text-white text-sm">
                        check_circle
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-1">
                  {colaborador.nome}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {colaborador.setor}
                </p>
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${getNivelColor(colaborador.nivel)} text-white text-xs font-bold rounded-full shadow-md`}>
                  {colaborador.nivel}
                </span>
              </div>

              {/* Estatísticas */}
              <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">cloud_upload</span>
                    Contribuições
                  </span>
                  <span className="font-bold text-primary">{colaborador.contribuicoes}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    Última atualização
                  </span>
                  <span className="font-medium text-xs text-gray-700 dark:text-gray-300">
                    {colaborador.ultimaAtualizacao}
                  </span>
                </div>
              </div>

              {/* Botão de Ação */}
              <button className="w-full mt-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                Ver Perfil
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Botão Ver Mais */}
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-md hover:scale-105">
            <span className="material-symbols-outlined">group</span>
            Ver Todos os Colaboradores
          </button>
        </div>
      </motion.div>

      {/* Adicionar estilos de animação customizados */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PainelDesempenho;
