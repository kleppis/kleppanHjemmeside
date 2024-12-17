/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      primary: '#FCECC9',
      secondary: '#FCB0B3',
      third: '#7EB2DD',
      fourth: '#F93943',
      background: '#445E93',
      text: '#171717',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

