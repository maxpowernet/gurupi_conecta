import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MapaDados = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const repositorios = [
    {
      id: 1,
      titulo: 'Pesquisa de Satisfação Escolar 2024',
      categoria: 'Educação',
      descricao: 'Dados coletados de 15.432 estudantes sobre infraestrutura, qualidade do ensino e ambiente escolar.',
      formato: 'CSV, JSON, Excel',
      tamanho: '2.4 MB',
      atualizacao: '05/11/2025',
      downloads: 234,
      visualizacoes: 1456,
      icon: 'school',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      titulo: 'Relatório de Indicadores de Saúde',
      categoria: 'Saúde',
      descricao: 'Compilação de dados epidemiológicos, cobertura vacinal, atendimentos e leitos disponíveis nos últimos 12 meses.',
      formato: 'PDF, CSV, API',
      tamanho: '5.7 MB',
      atualizacao: '07/11/2025',
      downloads: 189,
      visualizacoes: 2103,
      icon: 'health_and_safety',
      color: 'bg-green-500',
    },
    {
      id: 3,
      titulo: 'Base de Dados - Coleta Seletiva',
      categoria: 'Meio Ambiente',
      descricao: 'Registros georeferenciados de pontos de coleta, volume de resíduos reciclados e rotas de caminhões.',
      formato: 'GeoJSON, Shapefile, CSV',
      tamanho: '12.3 MB',
      atualizacao: '03/11/2025',
      downloads: 156,
      visualizacoes: 987,
      icon: 'recycling',
      color: 'bg-emerald-500',
    },
    {
      id: 4,
      titulo: 'Dados de Mobilidade Urbana',
      categoria: 'Transporte',
      descricao: 'Fluxo de veículos, rotas de transporte público, pontos de congestionamento e análise de tráfego.',
      formato: 'CSV, JSON, KML',
      tamanho: '8.9 MB',
      atualizacao: '08/11/2025',
      downloads: 312,
      visualizacoes: 2567,
      icon: 'directions_bus',
      color: 'bg-orange-500',
    },
    {
      id: 5,
      titulo: 'Mapa de Segurança Pública',
      categoria: 'Segurança',
      descricao: 'Dados anonimizados de ocorrências policiais, localização de câmeras e iluminação pública.',
      formato: 'GeoJSON, CSV, API',
      tamanho: '4.2 MB',
      atualizacao: '06/11/2025',
      downloads: 278,
      visualizacoes: 1834,
      icon: 'shield',
      color: 'bg-red-500',
    },
    {
      id: 6,
      titulo: 'Censo de Infraestrutura Urbana',
      categoria: 'Urbanismo',
      descricao: 'Inventário completo de equipamentos públicos, praças, espaços de lazer e iluminação.',
      formato: 'Excel, CSV, GeoJSON',
      tamanho: '15.6 MB',
      atualizacao: '01/11/2025',
      downloads: 145,
      visualizacoes: 876,
      icon: 'location_city',
      color: 'bg-purple-500',
    },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="mapa-dados" className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-4xl text-primary">database</span>
            Mapa de Dados
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Repositório de datasets públicos disponíveis para pesquisa, análise e desenvolvimento de soluções
          </p>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-3xl">folder_open</span>
              <span className="text-sm font-medium opacity-90">Datasets</span>
            </div>
            <p className="text-3xl font-black">124</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-3xl">download</span>
              <span className="text-sm font-medium opacity-90">Downloads</span>
            </div>
            <p className="text-3xl font-black">3.4k</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-3xl">visibility</span>
              <span className="text-sm font-medium opacity-90">Visualizações</span>
            </div>
            <p className="text-3xl font-black">12.8k</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-3xl">update</span>
              <span className="text-sm font-medium opacity-90">Atualizados</span>
            </div>
            <p className="text-3xl font-black">45</p>
          </div>
        </div>

        {/* Lista de Repositórios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-4"
        >
          {repositorios.map((repo) => (
            <motion.div
              key={repo.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className={`${repo.color} p-4 rounded-xl flex items-center justify-center self-start`}>
                  <span className="material-symbols-outlined text-5xl text-white">
                    {repo.icon}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-1">
                        {repo.titulo}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {repo.categoria}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {repo.descricao}
                  </p>

                  {/* Metadados */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">description</span>
                      <span>{repo.formato}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">folder</span>
                      <span>{repo.tamanho}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">event</span>
                      <span>Atualizado em {repo.atualizacao}</span>
                    </div>
                  </div>

                  {/* Estatísticas e Ações */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">download</span>
                        <span>{repo.downloads} downloads</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        <span>{repo.visualizacoes} visualizações</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg text-sm font-semibold hover:bg-secondary/90 transition">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        Visualizar
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition">
                        <span className="material-symbols-outlined text-sm">download</span>
                        Baixar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botão Ver Mais */}
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-md hover:scale-105">
            <span className="material-symbols-outlined">folder_open</span>
            Explorar Todos os Datasets
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default MapaDados;
