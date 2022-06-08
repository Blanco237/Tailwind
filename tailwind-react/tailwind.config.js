module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      },
      colors: {
        'red': '#ff525d',
        'light-red': '#ff7a85',
        'dark-blue': '#1f3f5b',
        'white': '#ffffff',
        'gray-blue': '#c8c8cb',
        'gray-dark': '#4b5862',
        'deep-dark': '#25252d',
        'grad-red': '#ff8f70',
        'grad-light-red': '#ff3d54',
        'grad-blue': '#1fa1f2',
        'grad-dark-blue': '#00d8d8',
      },
    },
    // screens: {
    //   'mobile': '375px',
    //   'desktop': '1024px'
    // },
    screens: {
      sm: '640px',
      md: '1280px',
      lg: '1024px',
      xl: '768px',
      '2xl': '640px',
    },
  },
  plugins: [],
}
