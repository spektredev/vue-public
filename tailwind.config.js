/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: '1200px',
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        fc: {
          300: '#f0f6fc',
        },
        accent: {
          200: '#0088CC',
        },
        darken: {
          100: '#5d5d5d',
          200: '#2b2b2b',
          500: '#515151',
          600: '#222222',
          700: '#474646',
          800: '#1a1a1a',
          900: '#1f1f1f',
        },
      },
    },
  },
  plugins: [],
};
