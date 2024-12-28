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
        maisonneuenormal:["maisonneuenormal","serif"],
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
            'lightGrey': "#0D99A0",
            'lightGreen': "#D2F038",
            'offGreen': "#097980",
            'offRed': "#FF4242",
            'ball-blue': "#00AFB5",
        },
        backgroundImage: {
          cardImgOne: "url('/public/assets/image/webp/blue-bg-img.webp')",
          cardImgTwo :"url('/public/assets/image/webp/green-bg-img.webp')",
          cardImgThree :"url('/public/assets/image/webp/yello-bg-img.webp')",
          outSmartBgImg :"url('/public/assets/image/png/outsmart-bg.png')",
          tabOneBgImg: "url('/public/assets/image/png/growth-img-one.png')",
          tabTwoBgImg: "url('/public/assets/image/webp/tab2-bg.webp')",
          tabThreeBgImg: "url('/public/assets/image/png/project-rader-img.png')",
          tabOneSmImg: "url('/public/assets/image/png/tab-one-sm-img.png')",
          tabTwoSmImg: "url('/public/assets/image/png/tab-two-sm-img.png')",
          tabThreeSmImg:"url('/public/assets/image/png/tab-three-sm-img.png')",
          swiperBgImg:"url('/public/assets/image/png/swiper-bg-img.png')",
          cardImgBgOne:"url('/public/assets/image/png/card-1-img.png')",
          cardImgBgTwo:"url('/public/assets/image/png/card-img2.png')",
          cardImgBgThree:"url('/public/assets/image/png/card-img3.png')",
          goalsBgImg:"url('/public/assets/image/png/goals-bg-img.png')",
        },
      },
    },
    plugins: [],
  }