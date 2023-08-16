/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fadeOut: 'fadeOut .3s ease-in-out',
        fadeIn: 'fadeIn .3s ease-in-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('bg-black/80') },
          '100%': { backgroundColor: theme('colors.transparent') }
        },
        fadeIn: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('bg-black/80') }
        }
      })
    }
  },
  plugins: []
}
