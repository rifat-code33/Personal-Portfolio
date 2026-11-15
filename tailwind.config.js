/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        darkBg: '#090a0f',
        cardBg: '#11131c',
        lightBg: '#f8fafc',
        lightCard: '#ffffff',
      },
      boxShadow: {
        glowing: '0 4px 25px -5px rgba(59, 130, 246, 0.2), 0 8px 30px -10px rgba(236, 72, 153, 0.15)',
      },
      backgroundImage: {
        'glowing-gradient':
          'linear-gradient(120deg, #06b6d4, #3b82f6, #a855f7, #ec4899, #06b6d4)',
      },
      animation: {
        'gradient-border': 'gradientBorder 6s ease infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'nav-float': 'navBubbleBounce 4.8s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'skill-float': 'skillCardFloat 4.8s ease-in-out infinite',
        'blink-cursor': 'blinkCursor 0.85s infinite',
      },
      keyframes: {
        gradientBorder: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        blinkCursor: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        navBubbleBounce: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '20%': { transform: 'translateY(-6px) scale(1.008, 0.992)' },
          '45%': { transform: 'translateY(1.5px) scale(0.995, 1.005)' },
          '65%': { transform: 'translateY(-3.5px) scale(1.004, 0.996)' },
          '82%': { transform: 'translateY(1px) scale(0.998, 1.002)' },
        },
        skillCardFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
      },
    },
  },
  plugins: [],
};
