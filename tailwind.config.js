/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'heath': {
          '50': '#fef2f3',
          '100': '#fde3e6',
          '200': '#fdcbd0',
          '300': '#faa7b0',
          '400': '#f67381',
          '500': '#ec4758',
          '600': '#d9293b',
          '700': '#b61f2f',
          '800': '#971d2a',
          '900': '#7d1f29',
          '950': '#5c0f17',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
