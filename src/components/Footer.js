import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Logo size="default" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforme sua alimentação de forma inteligente através do WhatsApp. Análise nutricional instantânea e sugestões personalizadas.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Avaliações
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Preços
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold text-white mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help-center" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Engine by */}
          <div>
            <h3 className="font-semibold text-white mb-4">Engine by</h3>
            <a 
              href="https://clerky.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="flex items-center space-x-2 group">
                <img 
                  src="/img/clerky.png" 
                  alt="Clerky" 
                  className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-gray-400 text-xs mt-2 group-hover:text-white transition-colors">
                Hub WhatsApp com API
              </p>
            </a>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Teste Match. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1 italic">
                Transformando vidas através da alimentação consciente
              </p>
            </div>
            
            <div className="text-gray-400 text-sm">
              <span>Desenvolvido por </span>
              <a 
                href="https://guip.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-romance-400 hover:text-romance-300 transition-colors font-semibold"
              >
                GuiP.DeV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

