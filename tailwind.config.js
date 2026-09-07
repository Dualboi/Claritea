/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#faf7f1',
          100: '#f2eadc',
          200: '#e6d2b9',
          300: '#d5b58e',
          400: '#b98a5f',
          500: '#9a6640',
          600: '#7d5035',
          700: '#61402d',
          800: '#463126',
          900: '#2d211b'
        },
        moss: {
          50: '#f4f7f2',
          100: '#e3eadf',
          200: '#c5d3bd',
          300: '#a4b793',
          400: '#7f9768',
          500: '#5f7a4d',
          600: '#4b6140',
          700: '#3a4b33',
          800: '#2b3827',
          900: '#1e261c'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(47, 36, 26, 0.18)'
      },
      backgroundImage: {
        'leaf-pattern': 'radial-gradient(circle at 1px 1px, rgba(154, 102, 64, 0.18) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};