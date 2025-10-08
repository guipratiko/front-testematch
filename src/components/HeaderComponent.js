import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Logo from './Logo';
import { 
  Menu, 
  X, 
  LogOut,
  CreditCard,
  Upload,
  History,
  BarChart3
} from 'lucide-react';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const publicLinks = [
    { name: 'Início', href: '/' },
    { name: 'Planos', href: '/plans' },
    { name: 'Login', href: '/login' },
    { name: 'Cadastro', href: '/register' },
  ];

  const protectedLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Nova Análise', href: '/upload', icon: Upload },
    { name: 'Histórico', href: '/history', icon: History },
    { name: 'Créditos', href: '/plans', icon: CreditCard },
  ];

  return (
    <header className="bg-white shadow-soft border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom px-3 sm:px-4">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="default" />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {isAuthenticated() ? (
              <>
                {protectedLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                        isActive(link.href)
                          ? 'bg-romance-100 text-romance-700'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  );
                })}
                
                {/* Informações do usuário */}
                <div className="flex items-center space-x-3 px-3 py-2 bg-gradient-to-r from-romance-50 to-royal-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-romance rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">{user?.name}</p>
                    <p className="text-gray-600">{user?.credits} créditos</p>
                  </div>
                </div>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="font-medium">Sair</span>
                </button>
              </>
            ) : (
              publicLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'bg-romance-100 text-romance-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))
            )}
          </nav>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="space-y-2">
              {isAuthenticated() ? (
                <>
                  {protectedLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive(link.href)
                            ? 'bg-romance-100 text-romance-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    );
                  })}
                  
                  {/* Informações do usuário mobile */}
                  <div className="px-3 py-2 bg-gradient-to-r from-romance-50 to-royal-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-romance rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {user?.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{user?.name}</p>
                        <p className="text-sm text-gray-600">{user?.credits} créditos</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Sair</span>
                  </button>
                </>
              ) : (
                publicLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'bg-romance-100 text-romance-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
