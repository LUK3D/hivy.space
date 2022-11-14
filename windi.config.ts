import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
//   safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        luk: {
          100: '#12121C',
          200: '#1B1A25',
          300: '#202231',
          400: '#20222F',
          500: '#28263B',
          600: '#B269F6',
          700: '#707392',
        },
      },
    },
  },
  plugins: [],
})