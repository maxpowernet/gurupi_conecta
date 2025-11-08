import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const GurupiInteligente = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Dados dos colaboradores com score de contribuição
  const colaboradores = [
    { nome: 'Maria S.', avatar: 'https://i.pravatar.cc/150?img=1', score: 9.2, contribuicao: 90 },
    { nome: 'João P.', avatar: 'https://i.pravatar.cc/150?img=12', score: 8.7, contribuicao: 85 },
    { nome: 'Ana L.', avatar: 'https://i.pravatar.cc/150?img=5', score: 9.5, contribuicao: 95 },
    { nome: 'Carlos R.', avatar: 'https://i.pravatar.cc/150?img=13', score: 8.1, contribuicao: 75 },
    { nome: 'Paula M.', avatar: 'https://i.pravatar.cc/150?img=9', score: 9.0, contribuicao: 88 },
    { nome: 'Ricardo F.', avatar: 'https://i.pravatar.cc/150?img=14', score: 8.5, contribuicao: 82 },
  ];

  // Dados do funil de projetos
  const funnelData = [
    { etapa: 'Desafios Postados', valor: 45, cor: 'bg-[#002C5E]' },
    { etapa: 'Soluções Submetidas', valor: 30, cor: 'bg-[#00A896]' },
    { etapa: 'Soluções em POC/Teste', valor: 8, cor: 'bg-blue-500' },
    { etapa: 'Soluções Implementadas', valor: 3, cor: 'bg-green-500' },
  ];

  // Dados do gráfico de rosca (investimentos)
  const investimentoData = [
    { categoria: 'P&D/Pesquisa', percentual: 40, cor: '#FFB700' },
    { categoria: 'Patrocínio de Eventos', percentual: 30, cor: '#FF8C00' },
    { categoria: 'Venda de IP', percentual: 30, cor: '#00A896' },
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

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
                <span className="material-symbols-outlined text-4xl text-[#002C5E] dark:text-[#00A896]">
                  hub
                </span>
                <div>
                  <h1 className="text-2xl font-bold text-[#002C5E] dark:text-white">
                    Gurupi Inteligente
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Laboratório Urbano Digital</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:scale-110 transition"
              >
                <span className="material-symbols-outlined">
                  {darkMode ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 bg-[#002C5E] text-white rounded-lg hover:bg-[#00A896] transition"
              >
                <span className="material-symbols-outlined">home</span>
                Voltar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {/* Painel de Indicadores */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-[#002C5E] dark:text-[#00A896]">
                dashboard
              </span>
              Painel de Indicadores
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Card Educação */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-500 to-[#002C5E] text-white shadow-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-5xl opacity-80">school</span>
                  <div className="bg-green-500 rounded-full px-3 py-1 text-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    +2.1%
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Educação</h3>
                <p className="text-4xl font-bold mb-1">87.5%</p>
                <p className="text-sm opacity-90">Taxa de Alfabetização Atual</p>
              </motion.div>

              {/* Card Saúde */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[#00A896] to-teal-700 text-white shadow-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-5xl opacity-80">health_and_safety</span>
                  <div className="bg-blue-500 rounded-full px-3 py-1 text-sm font-bold">
                    Estável
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Saúde</h3>
                <p className="text-4xl font-bold mb-1">82%</p>
                <p className="text-sm opacity-90">Cobertura Vacinal Geral</p>
              </motion.div>

              {/* Card Segurança */}
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-red-500 to-red-700 text-white shadow-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-5xl opacity-80">shield</span>
                  <div className="bg-green-500 rounded-full px-3 py-1 text-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_down</span>
                    -15%
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Segurança Pública</h3>
                <p className="text-4xl font-bold mb-1">-15%</p>
                <p className="text-sm opacity-90">Redução de Furtos (trimestre)</p>
              </motion.div>
            </div>

            <Link
              to="/portal-poder-publico"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#002C5E] text-white rounded-lg hover:bg-[#00A896] transition font-semibold"
            >
              <span className="material-symbols-outlined">analytics</span>
              Ver todos os indicadores
            </Link>
          </motion.section>

          {/* Seção de Projetos e Investimentos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gráfico de Funil */}
            <motion.section variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-[#00A896]">filter_alt</span>
                Pipeline de Soluções Acadêmicas
              </h3>
              
              <div className="space-y-4">
                {funnelData.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {item.etapa}
                      </span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.valor}
                      </span>
                    </div>
                    <div className="relative h-12 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${(item.valor / 45) * 100}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full ${item.cor} flex items-center justify-end px-4`}
                      >
                        <span className="text-white font-bold">{item.valor}</span>
                      </motion.div>
                    </div>
                    {index < funnelData.length - 1 && (
                      <div className="flex justify-center my-2">
                        <span className="material-symbols-outlined text-gray-400">arrow_downward</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-[#002C5E]">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Taxa de Conversão:</strong> {((3/45) * 100).toFixed(1)}% dos desafios resultam em soluções implementadas
                </p>
              </div>
            </motion.section>

            {/* Gráfico de Rosca */}
            <motion.section variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-[#FFB700]">donut_large</span>
                Capitalização e Retorno
              </h3>
              
              <div className="flex flex-col items-center">
                {/* Gráfico de Rosca SVG */}
                <svg viewBox="0 0 200 200" className="w-64 h-64 mb-6">
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#FFB700"
                    strokeWidth="30"
                    strokeDasharray="175.93 439.82"
                    transform="rotate(-90 100 100)"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#FF8C00"
                    strokeWidth="30"
                    strokeDasharray="131.95 439.82"
                    strokeDashoffset="-175.93"
                    transform="rotate(-90 100 100)"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#00A896"
                    strokeWidth="30"
                    strokeDasharray="131.95 439.82"
                    strokeDashoffset="-307.88"
                    transform="rotate(-90 100 100)"
                  />
                  <text x="100" y="100" textAnchor="middle" dy="7" className="text-2xl font-bold fill-gray-800 dark:fill-white">
                    100%
                  </text>
                </svg>

                {/* Legendas */}
                <div className="w-full space-y-3">
                  {investimentoData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.cor }}
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.categoria}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.percentual}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-[#FFB700]">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Hub Empresarial:</strong> R$ 340.000 investidos em inovação urbana
                </p>
              </div>
            </motion.section>
          </div>

          {/* Painel de Desempenho - Rede Colaborativa */}
          <motion.section variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-[#002C5E] dark:text-[#00A896]">
                diversity_3
              </span>
              Colaboradores em Rede e Desempenho de Dados
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Score alto = Potencial para Progressão de Carreira e Gestão de Big Data
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {colaboradores.map((colab, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 mb-3">
                    {/* Avatar com efeito de água */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#00A896] shadow-lg">
                      <img
                        src={colab.avatar}
                        alt={colab.nome}
                        className="w-full h-full object-cover"
                      />
                      {/* Efeito de água crescente */}
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-400/70 to-cyan-300/50 backdrop-blur-sm"
                        style={{ height: `${colab.contribuicao}%` }}
                      >
                        <div className="absolute inset-0 animate-wave bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      </div>
                    </div>
                    {/* Badge de Score */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FFB700] to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {colab.score}
                    </div>
                  </div>
                  <p className="font-semibold text-gray-800 dark:text-white text-sm text-center">
                    {colab.nome}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {colab.contribuicao}% dados
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-gray-600 dark:text-gray-400">Score Alto (9.0+)</p>
                <p className="text-2xl font-bold text-green-600">3 servidores</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-gray-600 dark:text-gray-400">Score Médio (8.0-8.9)</p>
                <p className="text-2xl font-bold text-blue-600">2 servidores</p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm text-gray-600 dark:text-gray-400">Em Crescimento</p>
                <p className="text-2xl font-bold text-yellow-600">1 servidor</p>
              </div>
            </div>
          </motion.section>

          {/* Mapa de Dados e Repositório */}
          <motion.section variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-[#002C5E] dark:text-[#00A896]">
                folder_data
              </span>
              Repositório de Estudos e Big Data
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700 hover:shadow-2xl transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-5xl text-purple-600">description</span>
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full font-bold">PDF</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                  Pesquisa de Satisfação Escolar 2024
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Análise completa da satisfação de alunos e professores em escolas municipais
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-semibold">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download
                  </button>
                  <button className="px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700 hover:shadow-2xl transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-5xl text-green-600">analytics</span>
                  <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full font-bold">XLSX</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                  Relatório de Indicadores de Saúde
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Dados consolidados sobre atendimentos, vacinação e infraestrutura de saúde
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download
                  </button>
                  <button className="px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30 transition">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-700 hover:shadow-2xl transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-5xl text-orange-600">database</span>
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full font-bold">CSV</span>
                </div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                  Base de Dados – Coleta Seletiva
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Histórico de coleta, volume e distribuição geográfica dos pontos de coleta
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-sm font-semibold">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download
                  </button>
                  <button className="px-4 py-2 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/30 transition">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Módulos de Acesso Rápido */}
          <motion.section variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-[#002C5E] dark:text-[#00A896]">
                apps
              </span>
              Acesso Rápido aos Módulos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Poder Público */}
              <Link
                to="/portal-poder-publico"
                className="group relative overflow-hidden bg-gradient-to-br from-[#002C5E] to-blue-700 rounded-2xl p-8 text-white hover:shadow-2xl hover:scale-105 transition-all"
              >
                <div className="absolute top-0 right-0 opacity-10">
                  <span className="material-symbols-outlined" style={{ fontSize: '150px' }}>domain</span>
                </div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-5xl mb-4 block">domain</span>
                  <h4 className="text-2xl font-bold mb-2">Poder Público</h4>
                  <p className="text-blue-100 text-sm mb-4">
                    Gerencie desafios, indicadores e acompanhe o desempenho da cidade
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    Acessar Portal
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>

              {/* Observatório Acadêmico */}
              <Link
                to="/portal-observatorio-academico"
                className="group relative overflow-hidden bg-gradient-to-br from-[#00A896] to-teal-700 rounded-2xl p-8 text-white hover:shadow-2xl hover:scale-105 transition-all"
              >
                <div className="absolute top-0 right-0 opacity-10">
                  <span className="material-symbols-outlined" style={{ fontSize: '150px' }}>school</span>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-5xl">school</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                      E-mail Institucional
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Observatório Acadêmico</h4>
                  <p className="text-teal-100 text-sm mb-4">
                    Submeta TCCs e projetos para solucionar desafios da cidade
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    Acessar Portal
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>

              {/* Hub Empresarial */}
              <Link
                to="/portal-hub-empresarial"
                className="group relative overflow-hidden bg-gradient-to-br from-[#FFB700] to-amber-600 rounded-2xl p-8 text-white hover:shadow-2xl hover:scale-105 transition-all"
              >
                <div className="absolute top-0 right-0 opacity-10">
                  <span className="material-symbols-outlined" style={{ fontSize: '150px' }}>business</span>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-5xl">business</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                      Vitrine de Talentos
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Hub Empresarial</h4>
                  <p className="text-amber-100 text-sm mb-4">
                    Invista em inovação, crie desafios Pro-Lab e encontre talentos
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    Acessar Portal
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </main>

      {/* CSS para animação de água */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GurupiInteligente;
