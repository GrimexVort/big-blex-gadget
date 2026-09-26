/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#020617',
        navy: '#061A40',
        blex: '#0066FF',
        cyan: '#00E5FF',
        wa: '#25D366',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(0, 102, 255, 0.55)',
        'glow-cyan': '0 0 40px -10px rgba(0, 229, 255, 0.55)',
        'glow-wa': '0 0 30px -8px rgba(37, 211, 102, 0.6)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(2,6,23,0) 0%, #020617 90%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.6s ease-in-out infinite',
        drift: 'drift 22s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37,211,102,0)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-3%,2%)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },
    },
  },
  plugins: [],
}
