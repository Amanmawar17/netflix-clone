/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      primary: '#C11119',
      secondary: '#ffffff',
      base: '#000000',
      accentColor: '#414141',
      footer: '#B3B3B3',
      blue:'#0071EB',
      alternatebase: '#181818'
    },
  },
  plugins: [],
}