module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl:  '1440px'
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        'darkblue' : '#424D83',
        'lightblue' : '#93A5FF',
        'darkerblue' : '#384170',
        'whiter' : '#000000',
      }
    },
  },
  plugins: [],
}
