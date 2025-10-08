/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "Romance Magnético"
        romance: {
          50: '#fef7f7',
          100: '#fdeef0',
          200: '#fbd5dc',
          300: '#f8b3c0',
          400: '#f48fb1',
          500: '#FF69B4', // Rosa Quente Suave (Primária)
          600: '#e91e63',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
        },
        royal: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#4169E1', // Azul Real Escuro (Secundária)
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFD700', // Dourado Brilhante (Acento)
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        beige: {
          50: '#fefdf8',
          100: '#fdf9f0',
          200: '#faf2e1',
          300: '#f5e6c8',
          400: '#F5F5DC', // Bege Suave (Neutro Quente)
          500: '#e6d7a8',
          600: '#d4c085',
          700: '#b8a066',
          800: '#9c8447',
          900: '#806b2e',
        },
        mint: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#98FB98', // Verde Menta Claro (Complementar)
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      fontFamily: {
        'rounded': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-romance': 'pulseRomance 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRomance: {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(255, 105, 180, 0.7)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 0 10px rgba(255, 105, 180, 0)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-romance': 'linear-gradient(135deg, #FF69B4 0%, #4169E1 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FF69B4 100%)',
        'gradient-mint': 'linear-gradient(135deg, #98FB98 0%, #4169E1 100%)',
        'gradient-soft': 'linear-gradient(135deg, #F5F5DC 0%, #FF69B4 50%, #4169E1 100%)',
      },
      boxShadow: {
        'romance': '0 10px 25px -5px rgba(255, 105, 180, 0.1), 0 10px 10px -5px rgba(255, 105, 180, 0.04)',
        'royal': '0 10px 25px -5px rgba(65, 105, 225, 0.1), 0 10px 10px -5px rgba(65, 105, 225, 0.04)',
        'gold': '0 10px 25px -5px rgba(255, 215, 0, 0.1), 0 10px 10px -5px rgba(255, 215, 0, 0.04)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
