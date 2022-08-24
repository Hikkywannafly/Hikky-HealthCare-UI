/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      fira: ["Fira Sans"],
    },
    flexBasis: {
      '1/7': '14.2857143%',
      '2/7': '28.5714286%',
      '3/7': '42.8571429%',
      '4/7': '57.1428571%',
      '5/7': '71.4285714%',
      '6/7': '85.7142857%',
    },
    color: {
      'transparent': "transparent",
      'red': 'red',
    },
    width: {
      '128': '32rem',
      '800': '750px',
      '325': '325px',
      '100': '150px',
      'full': '100%',
      '1': '1px',
    },
    // backgroundColor: {
    //   'transparent': "transparent",
    //   'red': 'red',
    // },
    extend: {},
  },
  plugins: [],
}