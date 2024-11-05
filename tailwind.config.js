/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors : {
        kata :'#7D7C7C',
        dark : '#000000',
        bg : '#D9D9D9',
        garis: '#0C71C3',
        footer: '#09359B',
      },
      backgroundImage: {
        'custom-bg': "url('/img/bghome.png')",
      },
    },
  },
  plugins: [],
}