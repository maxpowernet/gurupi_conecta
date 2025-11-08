import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-conecta.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg shadow-lg' 
        : 'bg-background-light dark:bg-background-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-200 dark:border-gray-700/50">
          <Link className="flex items-center gap-3 text-text-light dark:text-text-dark" to="/">
            <img src={logo} alt="Conecta logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight">Conecta</span>
              <span className="text-xs text-gray-600 dark:text-gray-400 leading-tight">Cidades Inteligentes</span>
            </div>
          </Link>
          
          {location.pathname !== '/' && (
            <Link 
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Voltar ao Início
            </Link>
          )}
          
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors" href="#prefeitura">Poder Público</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors" href="#universidades">Observatório Acadêmico</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors" href="#empresas">Hub Empresarial</a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary/90 transition-all duration-300 ease-in-out hover:scale-105" href="#">
              <span className="truncate">Acessar Plataforma</span>
            </a>
          </div>
          
          <div className="md:hidden">
            <button className="p-2 rounded-md text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
