export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f3ff', // Cian Neón
        secondary: '#bc13fe', // Púrpura Neón
        accent: '#39ff14', // Verde Neón (Éxito)
        danger: '#ff2d55', // Rojo Neón (SOS)
        background: '#131318', // Fondo Profundo
        surface: '#1b1b20', // Tarjetas y Contenedores
        'surface-bright': '#39383e',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 243, 255, 0.4)',
        'neon-purple': '0 0 20px rgba(188, 19, 254, 0.5)',
        'neon-green': '0 0 15px rgba(57, 255, 20, 0.4)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1b1b20 1px, transparent 1px), linear-gradient(to bottom, #1b1b20 1px, transparent 1px)",
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1.2) drop-shadow(0 0 10px #00f3ff)' },
          '50%': { opacity: 0.8, filter: 'brightness(1) drop-shadow(0 0 5px #00f3ff)' },
        }
      }
    },
  },
  plugins: [],
}
