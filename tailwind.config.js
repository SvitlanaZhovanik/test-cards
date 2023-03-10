/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
      borderRadius: {
         regular: '12px',
         large: '24px',
      },

     colors: {
      accent: '#5CD3A8',
      white: '#f2f2f2',
      light: '#EBD8FF',
      dark: '#373737',
    },

    fontSizes: {
      lg: '20px',
      xl: '24px',
    },

    fontWeights: {
      medium: 500,
      semibold: 600,
    },

    lineHeights: {
      lg: '1.2',
      xl: '1.45',
    },

    boxShadow: {
      regular: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      large: '-3px 8px 24px rgba(0, 0, 0, 0.23)',
      avatar: '0px 5.11111px 5.11111px rgba(0, 0, 0, 0.06), inset 0px -2.55556px 5.11111px #ae7be3,inset 0px 5.11111px 3.83333px #fbf8ff'
    },

    animation: {
      cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
    },
    },
  },
  plugins: [],
}
