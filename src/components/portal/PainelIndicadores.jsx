import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PainelIndicadores = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('educacao');

  const indicadores = {
    educacao: [
      {
        titulo: 'Taxa de Alfabetização',
        valor: '94.2%',
        variacao: '+2.3%',
        status: 'positivo',
        icon: 'school',
        descricao: 'Crescimento anual',
      },
      {
        titulo: 'IDEB - Anos Iniciais',
        valor: '6.8',
        variacao: '+0.5',
        status: 'positivo',
        icon: 'grade',
        descricao: 'Meta: 6.0',
      },
      {
        titulo: 'IDEB - Anos Finais',
        valor: '5.4',
        variacao: '+0.3',
        status: 'positivo',
        icon: 'grade',
        descricao: 'Meta: 5.5',
      },
      {
        titulo: 'Evasão Escolar',
        valor: '3.1%',
        variacao: '-1.2%',
        status: 'positivo',
        icon: 'trending_down',
        descricao: 'Redução anual',
      },
      {
        titulo: 'Matrículas Ensino Médio',
        valor: '8.542',
        variacao: '+245',
        status: 'positivo',
        icon: 'person_add',
        descricao: 'Novos alunos',
      },
      {
        titulo: 'Professores Capacitados',
        valor: '456',
        variacao: '+89',
        status: 'positivo',
        icon: 'workspace_premium',
        descricao: 'Este ano',
      },
    ],
    saude: [
      {
        titulo: 'Cobertura Vacinal',
        valor: '87.5%',
        variacao: '+5.2%',
        status: 'positivo',
        icon: 'vaccines',
        descricao: 'Meta: 95%',
      },
      {
        titulo: 'Consultas Realizadas',
        valor: '12.340',
        variacao: '+1.234',
        status: 'positivo',
        icon: 'medical_services',
        descricao: 'Este mês',
      },
      {
        titulo: 'Tempo Médio de Espera',
        valor: '18 min',
        variacao: '-5 min',
        status: 'positivo',
        icon: 'schedule',
        descricao: 'Redução',
      },
      {
        titulo: 'Leitos Disponíveis',
        valor: '142',
        variacao: '0',
        status: 'neutro',
        icon: 'hotel',
        descricao: 'Capacidade total',
      },
      {
        titulo: 'Taxa de Mortalidade Infantil',
        valor: '8.2‰',
        variacao: '-1.1‰',
        status: 'positivo',
        icon: 'child_care',
        descricao: 'Por mil nascidos',
      },
      {
        titulo: 'Casos Dengue',
        valor: '23',
        variacao: '-67',
        status: 'positivo',
        icon: 'bug_report',
        descricao: 'vs mês anterior',
      },
    ],
    seguranca: [
      {
        titulo: 'Homicídios',
        valor: '12',
        variacao: '-8',
        status: 'positivo',
        icon: 'warning',
        descricao: 'vs ano anterior',
      },
      {
        titulo: 'Furtos',
        valor: '145',
        variacao: '-23',
        status: 'positivo',
        icon: 'report',
        descricao: 'Este trimestre',
      },
      {
        titulo: 'Roubos',
        valor: '67',
        variacao: '-12',
        status: 'positivo',
        icon: 'local_police',
        descricao: 'Este trimestre',
      },
      {
        titulo: 'Tempo de Resposta',
        valor: '7.5 min',
        variacao: '-2.1 min',
        status: 'positivo',
        icon: 'speed',
        descricao: 'Média',
      },
      {
        titulo: 'Câmeras Monitoramento',
        valor: '234',
        variacao: '+45',
        status: 'positivo',
        icon: 'videocam',
        descricao: 'Ativas',
      },
      {
        titulo: 'Ocorrências Resolvidas',
        valor: '89.3%',
        variacao: '+3.7%',
        status: 'positivo',
        icon: 'check_circle',
        descricao: 'Taxa resolução',
      },
    ],
  };

  const categorias = [
    { id: 'educacao', nome: 'Educação', icon: 'school', color: 'text-blue-600 dark:text-blue-400' },
    { id: 'saude', nome: 'Saúde', icon: 'health_and_safety', color: 'text-green-600 dark:text-green-400' },
    { id: 'seguranca', nome: 'Segurança Pública', icon: 'shield', color: 'text-red-600 dark:text-red-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="indicadores" className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-4xl text-primary">analytics</span>
            Painel de Indicadores
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Acompanhe em tempo real os principais indicadores da cidade, enriquecidos com análise de Big Data
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaSelecionada(categoria.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                categoriaSelecionada === categoria.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
              }`}
            >
              <span className={`material-symbols-outlined ${categoriaSelecionada === categoria.id ? '' : categoria.color}`}>
                {categoria.icon}
              </span>
              {categoria.nome}
            </button>
          ))}
        </div>

        {/* Grid de Indicadores */}
        <motion.div
          key={categoriaSelecionada}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {indicadores[categoriaSelecionada].map((indicador, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl text-primary">
                  {indicador.icon}
                </span>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      {indicador.icon}
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                      indicador.status === 'positivo'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : indicador.status === 'negativo'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {indicador.status === 'positivo' ? 'trending_up' : indicador.status === 'negativo' ? 'trending_down' : 'remove'}
                    </span>
                    {indicador.variacao}
                  </div>
                </div>

                <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                  {indicador.titulo}
                </h3>
                <p className="text-3xl font-black text-text-light dark:text-text-dark mb-2">
                  {indicador.valor}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {indicador.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botão Ver Mais */}
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-md hover:scale-105">
            <span className="material-symbols-outlined">visibility</span>
            Ver Todos os Indicadores
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default PainelIndicadores;
