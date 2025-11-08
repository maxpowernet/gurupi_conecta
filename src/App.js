import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PillarSection from './components/PillarSection';
import Footer from './components/Footer';
import PoderPublicoPortal from './pages/PoderPublicoPortal';
import ObservatorioAcademicoPortal from './pages/ObservatorioAcademicoPortal';
import HubEmpresarialPortal from './pages/HubEmpresarialPortal';
import GurupiInteligente from './pages/GurupiInteligente';
import './index.css';

function HomePage() {
  const pillars = [
    {
      id: 'prefeitura',
      title: 'Poder Público',
      icon: 'domain',
      iconBg: 'analytics',
      description: 'Modernize a gestão pública com dados precisos. Otimize serviços, aumente a transparência e tome decisões estratégicas para o desenvolvimento urbano de Gurupi.',
      benefits: [
        'Análise de dados para planejamento urbano e mobilidade.',
        'Plataforma para gestão de serviços e infraestrutura.',
        'Canal de comunicação e transparência com o cidadão.',
      ],
      buttonText: 'Acessar Portal do Poder Público',
      buttonLink: '/portal-poder-publico',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5QSrhg2aLW_PED_Fkx2A_51X3KCK7MhFkmdLswJ-CxHnnjUCnlLlXGt8-KLRmucq7gYsatdgy9XVa70AoDmnyZ8Fs5QAJkqgSJ0_qn-VrNyYQ5IBjtc7uriya8OqHRVE81-5lv4fi4Ny5HUoZpk-Pr1WSnYf7v76XNZponqj7U-ci3LgWeYj_6aAoNVNHUiKuB-wGBlrAlxyFzQBEkPSVWGWXNgeUt6793QH-npSF6FmUj-LgHOcDMSaOiCC5GOLzAkpbQKtFH7Qu',
      imageAlt: 'Gráficos e dashboards mostrando dados da cidade de forma visual e intuitiva.',
      reverse: false,
    },
    {
      id: 'universidades',
      title: 'Observatório Acadêmico',
      icon: 'school',
      iconBg: 'school',
      description: 'Conecte a academia aos desafios reais da cidade. A plataforma oferece um ambiente rico para pesquisa, desenvolvimento de projetos e formação de talentos.',
      benefits: [
        'Acesso a datasets urbanos anonimizados para pesquisa.',
        'Oportunidades de projetos de extensão e estágio.',
        'Colaboração com o setor público e privado em inovação.',
      ],
      buttonText: 'Acessar Portal Acadêmico',
      buttonLink: '/portal-observatorio-academico',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8CmiSv1DVTHFfeLYnodi1Miq7NFvwawFiMKdR3mVK9p3h5x1xW-jCqsHgX3Q6cmuWwLi4nR55XFH5WleLh9FVp2-8Dq1zEsNpH7L3C3txiIXzFgIu2MlFkS2K5Z2A6GWNHuM0YCNeqWtD7noLnWs6F9-CDJAZ2yee5mwOFoyj6ruRgwXd9OnmyMj7qWbuzPVY5hlHt-E0d2cU4X0yjtFs25kcB6E8leInZrKDZKMK2pUHtM_tMcXr6pFENylpY0zengdjyFHpafdq',
      imageAlt: 'Estudantes universitários colaborando em um projeto em um laboratório moderno.',
      reverse: true,
    },
    {
      id: 'empresas',
      title: 'Hub Empresarial',
      icon: 'business_center',
      iconBg: 'lightbulb',
      description: 'Inove e crie novas oportunidades de negócio. Utilize dados e insights da plataforma para desenvolver soluções, produtos e serviços para a cidade inteligente.',
      benefits: [
        'Identificação de demandas e oportunidades de mercado.',
        'Ambiente para testar e validar soluções de smart city.',
        'Networking com talentos acadêmicos e poder público.',
      ],
      buttonText: 'Acessar Portal do Hub Empresarial',
      buttonLink: '/portal-hub-empresarial',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDqd-lYY_Z2axkRuMtgTqPGIfkajpWLXULrJjEP9lZUMQCu0pMl5uF_-z1TpXCQDNoYBztKc_20Z0kOK2Z_TXApbgglOddVft8SHtKe6yq58lRGT5P-pqamEyLqyoHElGpqVQ4fZs0p7MqlvXROKr369VIjmbW0FchRFqKvv8HzWGS63RempArwyAAy_NC8CfzNDgPd09jNm3X9PAoMaYp5epL2qDryXYn6vTOjz4FGImpXIV16jQnE6K-Frt4expXVfeC3QwamPzz',
      imageAlt: 'Uma reunião de negócios com profissionais discutindo um projeto em um escritório moderno.',
      reverse: false,
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark antialiased">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24 bg-white dark:bg-background-dark" id="pilares">
          {pillars.map((pillar, index) => (
            <PillarSection key={pillar.id} {...pillar} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portal-poder-publico" element={
          <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark antialiased">
            <Header />
            <main className="flex-1">
              <PoderPublicoPortal />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/portal-observatorio-academico" element={
          <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark antialiased">
            <Header />
            <main className="flex-1">
              <ObservatorioAcademicoPortal />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/portal-hub-empresarial" element={
          <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark antialiased">
            <Header />
            <main className="flex-1">
              <HubEmpresarialPortal />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/gurupi-inteligente" element={<GurupiInteligente />} />
      </Routes>
    </Router>
  );
}

export default App;
