/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px #fff, 0 0 10px #00f' },
          '50%': { textShadow: '0 0 20px #0ff, 0 0 30px #0ff' },
        },
        rippleFade: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        flicker: {
          '0%, 40%, 60%, 100%': { opacity: 1 },
          '10%': { opacity: 0.5 },
          '20%': { opacity: 0.8 },
          '30%': { opacity: 0.3 },
          '50%': { opacity: 0.4 },
        },
        rotatePop: {
          '0%': { transform: 'rotateY(90deg) scale(0)', opacity: 0 },
          '100%': { transform: 'rotateY(0deg) scale(1)', opacity: 1 },
        },
        skewSlide: {
          '0%': { transform: 'translateY(20px) skewY(10deg)', opacity: 0 },
          '100%': { transform: 'translateY(0) skewY(0)', opacity: 1 },
        },
        jitter: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-1px)' },
          '50%': { transform: 'translateY(1px)' },
          '75%': { transform: 'translateY(-1px)' },
        },
      },
      animation: {
        pulseScale: 'pulseScale 2.5s ease-in-out infinite',
        wave: 'wave 2.5s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        rippleFade: 'rippleFade 0.8s ease-out forwards',
        flicker: 'flicker 2s infinite ease-in-out',
        rotatePop: 'rotatePop 0.6s ease-out forwards',
        skewSlide: 'skewSlide 0.5s ease-out forwards',
        jitter: 'jitter 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
