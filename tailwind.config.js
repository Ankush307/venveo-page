/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontFamily:{
        sohneschmal:["sohneschmal","serif"],
        maisonneue:["maisonneue","serif"],
        maisonneuelight:["maisonneuelight","serif"],
      },
      extend: {
        colors:{
            'pine-green':'#097980',
            'pine-green':'#097980',
            'cloudy-blue':'#9dc9cc',
            'lemon-lime':'#D2F038',
            'ghost-silver':'#C9C9C9',
            'platinum':'#E8E8E8',
            'dark-blue':'#194c4d',
        }
      },
    },
    plugins: [],
  }