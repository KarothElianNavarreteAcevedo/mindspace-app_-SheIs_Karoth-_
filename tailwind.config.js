/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapeo de colores principales para compatibilidad
        primary: '#00f3ff', // Cian Interactivo (era primary-container)
        secondary: '#fe00fe', // Magenta original (era secondary-container)
        accent: '#36fd0f', // Verde de Éxito (era tertiary-container)

        // Paleta extendida del nuevo sistema de diseño
        surface: '#1b1b20',
        'surface-dim': '#131318',
        'surface-bright': '#39383e',
        'surface-container-lowest': '#0e0e13',
        'surface-container-low': '#1b1b20',
        'surface-container': '#1f1f24',
        'surface-container-high': '#2a292f',
        'surface-container-highest': '#35343a',
        'on-surface': '#e4e1e8',
        'on-surface-variant': '#b9cacb',
        'inverse-surface': '#e4e1e8',
        'inverse-on-surface': '#303035',
        outline: '#849495',
        'outline-variant': '#3a494b',
        'surface-tint': '#00dce6',
        'primary-text': '#e3fdff',
        'on-primary': '#00373a',
        'primary-container': '#00f3ff',
        'on-primary-container': '#006b71',
        'inverse-primary': '#00696f',
        'secondary-text': '#ffabf3',
        'on-secondary': '#5b005b',
        'secondary-container': '#fe00fe',
        'on-secondary-container': '#500050',
        'tertiary-text': '#e8ffda',
        'on-tertiary': '#053900',
        'tertiary-container': '#36fd0f',
        'on-tertiary-container': '#107000',
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        'primary-fixed': '#6ff6ff',
        'primary-fixed-dim': '#00dce6',
        'on-primary-fixed': '#002022',
        'on-primary-fixed-variant': '#004f53',
        'secondary-fixed': '#f8d8ff',
        'secondary-fixed-dim': '#ebb2ff',
        'on-secondary-fixed': '#320047',
        'on-secondary-fixed-variant': '#74009f',
        'tertiary-fixed': '#79ff5b',
        'tertiary-fixed-dim': '#2ae500',
        'on-tertiary-fixed': '#022100',
        'on-tertiary-fixed-variant': '#095300',
        background: '#131318',
        'on-background': '#e4e1e8',
        'surface-variant': '#35343a',
        danger: '#ff2d55',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline-lg': ['32px', { lineHeight: '1.2' }],
        'headline-lg-mobile': ['24px', { lineHeight: '1.2' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.5' }],
        'label-md': ['14px', { lineHeight: '1.2', letterSpacing: '0.05em' }],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 243, 255, 0.4)',
        'neon-magenta': '0 0 20px rgba(254, 0, 254, 0.5)',
        'neon-green': '0 0 15px rgba(57, 255, 20, 0.4)',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      animation: {
        'pulse-intense': 'pulse-intense 2.5s infinite ease-in-out',
      },
      keyframes: {
        'pulse-intense': {
            '0%, 100%': { opacity: 0.9, transform: 'scale(1)', filter: 'brightness(1.2)' },
            '50%': { opacity: 1, transform: 'scale(1.25)', filter: 'brightness(2)' },
        },
      }
    },
  },
  plugins: [],
}
