import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import { 
  Home, 
  ArrowLeft, 
  AlertCircle
} from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 via-white to-romance-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto"
      >
        {/* Ícone */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-romance rounded-full flex items-center justify-center mx-auto mb-4">
              <Logo size="xl" showText={false} />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

        {/* Texto */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Ops! A página que você está procurando não existe ou foi movida.
          Que tal voltar ao início e descobrir sua compatibilidade romântica?
        </p>

        {/* Botões */}
        <div className="space-y-4">
          <Link
            to="/"
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Voltar ao início</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar à página anterior</span>
          </button>
        </div>

        {/* Links úteis */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Ou tente uma dessas páginas:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              to="/upload"
              className="text-romance-500 hover:text-romance-600 transition-colors"
            >
              Nova Análise
            </Link>
            <Link
              to="/plans"
              className="text-romance-500 hover:text-romance-600 transition-colors"
            >
              Planos
            </Link>
            <Link
              to="/login"
              className="text-romance-500 hover:text-romance-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-romance-500 hover:text-romance-600 transition-colors"
            >
              Cadastro
            </Link>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-romance-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-royal-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gold-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </motion.div>
    </div>
  );
};

export default NotFound;
