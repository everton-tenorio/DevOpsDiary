module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        terminal: {
          black: '#0A0E14',          // Preto base mais profundo
          'black-light': '#1C2128',  // Preto mais claro para cartões
          'black-lighter': '#2D333B', // Preto mais claro para elementos de destaque
          green: '#4ADE80',          // Verde terminal vibrante
          blue: '#38BDF8',           // Azul para links
          pink: '#F472B6',           // Pink para alertas ou destaque secundário
          white: '#E6EDF3',          // Branco suave para texto principal
          gray: '#768390'            // Cinza para texto secundário
        }
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 6s linear infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(74, 222, 128, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(74, 222, 128, 0.8)' }
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(74, 222, 128, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(74, 222, 128, 0.1) 1px, transparent 1px)'
      },
      backgroundSize: {
        'grid': '50px 50px'
      }
    }
  },
  plugins: [],
}