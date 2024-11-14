/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/2SZJXPk/upper.png')",
        'footer-texture': "url('https://i.ibb.co/ZgjVmJK/o7.png')",
      }
    },
    colors: {
      // Using modern `rgb`
      primary: 'rgb(var(--color-primary))',
      secondary: 'rgb(var(--color-secondary))',

      // Using modern `hsl`
      primary: 'hsl(var(--color-primary))',
      secondary: 'hsl(var(--color-secondary))',

      // Using legacy `rgba`
      primary: 'rgba(var(--color-primary), 1)',
      secondary: 'rgba(var(--color-secondary), 1)',
    }
  },
  plugins: [],
}

