import React from 'react';

const Logo = ({ className = '', size = 'default', showText = false }) => {
  const sizeClasses = {
    small: 'h-6 w-6',
    default: 'h-16 w-16 sm:h-24 sm:w-24', // Responsivo: menor no mobile
    large: 'h-20 w-20 sm:h-24 sm:w-24',   // Responsivo: menor no mobile
    xl: 'h-16 w-16'
  };

  const textSizeClasses = {
    small: 'text-lg',
    default: 'text-xl',
    large: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img
        src="/img/logo.png"
        alt="Teste Match Logo"
        className={`${sizeClasses[size]} object-contain`}
      />
      {showText && (
        <span className={`font-bold text-gradient-romance ${textSizeClasses[size]}`}>
          Teste Match
        </span>
      )}
    </div>
  );
};

export default Logo;
