/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "theme-green": {
          '50': '#effef7',
          '100': '#d9ffee',
          '200': '#b5fdde',
          '300': '#7cf9c4',
          '400': '#1fe995',
          '500': '#13d484',
          '600': '#09b06c',
          '700': '#0b8a56',
          '800': '#0f6c46',
          '900': '#0e593c',
          '950': '#013220',
        },
        'theme-violet': {
          '50': '#f2f5fb',
          '100': '#e7eef8',
          '200': '#d3def2',
          '300': '#b8c7e9',
          '400': '#9babde',
          '500': '#8290d2',
          '600': '#6972c2',
          '700': '#6167af',
          '800': '#494f8a',
          '900': '#40456f',
          '950': '#252741',
        },
      }
    },
  },  
  plugins: [],
}