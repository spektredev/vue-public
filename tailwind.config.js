/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
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
        accent: {
          200: '#0088CC',
          600: '#222222',
        },
      },
    },
  },
  plugins: [],
};
