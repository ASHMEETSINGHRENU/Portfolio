/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF6EF',
          light: '#FFFFFF',
          sheet: '#F4F2ED',
          border: 'rgba(13, 13, 12, 0.08)',
          card: '#F6F3EC',
        },
        ink: {
          DEFAULT: '#0D0D0C',
          secondary: 'rgba(13, 13, 12, 0.56)',
          muted: 'rgba(13, 13, 12, 0.42)',
          subtle: 'rgba(13, 13, 12, 0.06)',
          border: 'rgba(13, 13, 12, 0.12)',
        },
        pastel: {
          lemon: '#F4EBC6',
          lemonBase: '#F2ECDF',
          lemonTint: '#E9C22E',
          peach: '#F8DCC7',
          apricot: '#F9CBA9',
          peachTint: '#F2772F',
          sage: '#DFE9D4',
          sageBase: '#E9EBE0',
          sageTint: '#3FB874',
          rose: '#ECD6E2',
          roseBase: '#F0E4E6',
          roseTint: '#C564C4',
        }
      },
      fontFamily: {
        interTight: ['"Inter Tight"', 'sans-serif'],
        sans: ['"Inter Tight"', 'sans-serif'],
      },
      boxShadow: {
        'vela': '0 20px 45px -12px rgba(13, 13, 12, 0.08)',
        'vela-hover': '0 25px 60px -15px rgba(13, 13, 12, 0.14)',
        'card-soft': '0 4px 20px -2px rgba(13, 13, 12, 0.05)',
        'glow-lemon': '0 0 35px rgba(246, 222, 104, 0.35)',
        'glow-peach': '0 0 35px rgba(249, 150, 84, 0.35)',
        'glow-sage': '0 0 35px rgba(150, 206, 150, 0.35)',
        'glow-rose': '0 0 35px rgba(222, 150, 200, 0.35)',
      },
      animation: {
        'blob': 'blob 10s infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
};
