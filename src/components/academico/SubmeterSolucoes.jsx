import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SubmeterSolucoes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: '',
    desafioRelacionado: '',
    autores: '',
    orientador: '',
    instituicao: '',
    curso: '',
    resumo: '',
    palavrasChave: '',
    arquivo: null,
  });

  const solucoesRecentes = [
    {
      id: 1,
      titulo: 'Sistema de Roteamento Dinâmico para Transporte Público',
      tipo: 'TCC',
      autores: 'Maria Silva, João Santos',
      curso: 'Ciência da Computação',
      instituicao: 'UnirG',
      desafio: 'Otimização do Transporte Público',
      data: '05/11/2025',
      status: 'Em Avaliação',
      likes: 23,
      visualizacoes: 156,
    },
    {
      id: 2,
      titulo: 'App de Coleta Seletiva com Gamificação',
      tipo: 'Projeto Integrador',
      autores: 'Pedro Oliveira, Ana Costa',
      curso: 'Engenharia Ambiental',
      instituicao: 'IFTO',
      desafio: 'Gestão Inteligente de Resíduos',
      data: '03/11/2025',
      status: 'Aprovado',
      likes: 45,
      visualizacoes: 289,
    },
    {
      id: 3,
      titulo: 'Plataforma de Denúncias Anônimas Georreferenciadas',
      tipo: 'Pesquisa Científica',
      autores: 'Carlos Mendes',
      curso: 'Segurança Pública',
      instituicao: 'UFT',
      desafio: 'Plataforma de Segurança Comunitária',
      data: '01/11/2025',
      status: 'Em Avaliação',
      likes: 34,
      visualizacoes: 201,
    },
    {
      id: 4,
      titulo: 'Dashboard Educacional com BI e Machine Learning',
      tipo: 'TCC',
      autores: 'Fernanda Lima, Lucas Rocha',
      curso: 'Análise de Sistemas',
      instituicao: 'UnirG',
      desafio: 'Dashboard de Indicadores Educacionais',
      data: '30/10/2025',
      status: 'Aprovado',
      likes: 67,
      visualizacoes: 412,
    },
  ];

  const tiposSolucao = [
    { valor: 'tcc', nome: 'TCC - Trabalho de Conclusão de Curso', icone: 'school' },
    { valor: 'projeto', nome: 'Projeto Integrador', icone: 'engineering' },
    { valor: 'pesquisa', nome: 'Pesquisa Científica', icone: 'science' },
    { valor: 'extensao', nome: 'Projeto de Extensão', icone: 'volunteer_activism' },
    { valor: 'mestrado', nome: 'Dissertação de Mestrado', icone: 'workspace_premium' },
    { valor: 'doutorado', nome: 'Tese de Doutorado', icone: 'military_tech' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Aprovado':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Em Avaliação':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Rejeitado':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, arquivo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solução submetida:', formData);
    // Aqui seria feita a integração com backend
    alert('Solução submetida com sucesso!');
    setShowForm(false);
    setFormData({
      titulo: '',
      tipo: '',
      desafioRelacionado: '',
      autores: '',
      orientador: '',
      instituicao: '',
      curso: '',
      resumo: '',
      palavrasChave: '',
      arquivo: null,
    });
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
    <section id="submeter-solucoes" className="space-y-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-4xl text-purple-600">upload_file</span>
              Submeter Soluções
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Envie TCCs, projetos integradores, pesquisas e trabalhos acadêmicos para solucionar os desafios da cidade
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <span className="material-symbols-outlined">add_circle</span>
            Nova Submissão
          </button>
        </div>

        {/* Formulário de Submissão */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border-2 border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark flex items-center gap-2">
              <span className="material-symbols-outlined text-purple-600">description</span>
              Formulário de Submissão
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informações Básicas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Título do Trabalho *
                  </label>
                  <input
                    type="text"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleInputChange}
                    required
                    placeholder="Ex: Sistema Inteligente de Gestão de Resíduos"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tipo de Trabalho *
                  </label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Selecione o tipo</option>
                    {tiposSolucao.map((tipo) => (
                      <option key={tipo.valor} value={tipo.valor}>
                        {tipo.nome}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Desafio Relacionado *
                  </label>
                  <select
                    name="desafioRelacionado"
                    value={formData.desafioRelacionado}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Selecione um desafio</option>
                    <option value="1">Otimização do Transporte Público</option>
                    <option value="2">Gestão Inteligente de Resíduos</option>
                    <option value="3">Plataforma de Segurança Comunitária</option>
                    <option value="4">Dashboard de Indicadores Educacionais</option>
                    <option value="5">Sistema de Agendamento Inteligente</option>
                    <option value="6">Mapeamento Colaborativo de Iluminação</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Autor(es) *
                  </label>
                  <input
                    type="text"
                    name="autores"
                    value={formData.autores}
                    onChange={handleInputChange}
                    required
                    placeholder="Ex: Maria Silva, João Santos"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Orientador(a) *
                  </label>
                  <input
                    type="text"
                    name="orientador"
                    value={formData.orientador}
                    onChange={handleInputChange}
                    required
                    placeholder="Ex: Prof. Dr. Carlos Mendes"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Instituição *
                  </label>
                  <select
                    name="instituicao"
                    value={formData.instituicao}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Selecione a instituição</option>
                    <option value="unirg">UnirG - Centro Universitário</option>
                    <option value="ifto">IFTO - Instituto Federal do Tocantins</option>
                    <option value="uft">UFT - Universidade Federal do Tocantins</option>
                    <option value="outro">Outra Instituição</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Curso *
                  </label>
                  <input
                    type="text"
                    name="curso"
                    value={formData.curso}
                    onChange={handleInputChange}
                    required
                    placeholder="Ex: Ciência da Computação"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Resumo do Trabalho *
                  </label>
                  <textarea
                    name="resumo"
                    value={formData.resumo}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Descreva o objetivo, metodologia e resultados esperados do trabalho..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Palavras-chave *
                  </label>
                  <input
                    type="text"
                    name="palavrasChave"
                    value={formData.palavrasChave}
                    onChange={handleInputChange}
                    required
                    placeholder="Ex: IoT, Smart City, Mobilidade Urbana, Machine Learning"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Arquivo do Trabalho (PDF) *
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <span className="material-symbols-outlined text-gray-400">upload_file</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {formData.arquivo ? formData.arquivo.name : 'Clique para selecionar o arquivo'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    Formato aceito: PDF. Tamanho máximo: 10MB
                  </p>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined">send</span>
                  Enviar Submissão
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-8 py-3 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Soluções Recentes */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-purple-600">history</span>
            Soluções Recentes
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-6"
        >
          {solucoesRecentes.map((solucao) => (
            <motion.div
              key={solucao.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Ícone do Tipo */}
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl">
                    <span className="material-symbols-outlined text-4xl text-white">
                      {solucao.tipo === 'TCC' ? 'school' : solucao.tipo === 'Projeto Integrador' ? 'engineering' : 'science'}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <div className="flex gap-2 mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-semibold rounded-full">
                          {solucao.tipo}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(solucao.status)}`}>
                          {solucao.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-1">
                        {solucao.titulo}
                      </h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                        Desafio: {solucao.desafio}
                      </p>
                    </div>
                  </div>

                  {/* Informações Acadêmicas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">person</span>
                      <span>{solucao.autores}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">school</span>
                      <span>{solucao.curso}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">domain</span>
                      <span>{solucao.instituicao}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="material-symbols-outlined text-lg">calendar_today</span>
                      <span>{solucao.data}</span>
                    </div>
                  </div>

                  {/* Estatísticas e Ações */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-lg">thumb_up</span>
                        <span>{solucao.likes} curtidas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                        <span>{solucao.visualizacoes} visualizações</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        Ver Detalhes
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg text-sm font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition">
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
      </motion.div>
    </section>
  );
};

export default SubmeterSolucoes;
