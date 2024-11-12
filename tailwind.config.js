/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        navBackground: 'var(--color-nav-background)',
        burgerBrown: '#4F372F',
        regentGray: '#8A94A4',
        galleryWhite: '#EEEEEE',
        mineShaftGray: '#2C2C2C',
        codGray: '#121212',
        tundoraGray: '#464646'
        
      },
      boxShadow: {
        'card': '0px 2px 14px 0px rgba(0, 0, 0, 0.15)', 
      },
      backgroundImage: {
        'banner': 'linear-gradient(90deg, #36231C 18.92%, rgba(54, 35, 28, 0) 50.56%, #36231C 80.88%)',
      }
    },
  },
  plugins: [],
}

