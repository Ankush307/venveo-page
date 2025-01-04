import React from 'react'
import Header from '../common/Header'
import CustomInput from '../common/CustomInput'

const Hero = () => {

  return (
    <div className='bg-pine-green xl:min-h-[1103px] overflow-hidden'>
      <div className="mx-auto relative">
        <Header />
        <img className='absolute sm:left-[-23%] sm:top-[-6%] 2xl:top-[-10%] 2xl:left-0 left-[-30%] top-[-5%] w-full max-w-[698px] max-sm:w-[261px] ' src="./assets/image/png/hero-bg-layer-2.png" alt="layer" />
        <div className="container mx-auto relative px-4">
          <h1 className='lg:text-[120px] md:text-8xl sm:text-7xl text-6xl font-bold max-w-[620px] text-center mx-auto text-white  font-sohne leading-[86%] uppercase sm:pt-10 pt-12'>Make marketing A growth machine <span> <img className='ml-9 max-sm:max-w-[173px] pointer-events-none' src="./assets/image/png/single-line.png" alt="" /></span></h1>
          <p className='text-white font-light sm:text-2xl text-[22px] sm:leading-[30px] leading-[28px] text-center max-w-[656px] mx-auto font-maisonLight mb-6 pt-[5px] '>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
          <CustomInput inputText='Enter Your Website' btnText='Analyze' />
        </div>
        <img className='absolute max-w-[534px] top-[64.1%] right-[-1%] max-xl:hidden' src="./assets/image/webp/hero-bottom-layer.webp" alt="top layer" />
        <img className='w-full absolute bottom-[20%] 2xl:bottom-[15%] max-lg:hidden' src="./assets/image/webp/bg-line.webp" alt="bg line" />
        <div className="hero-section px-4 z-10">
          <div className="relative max-w-[871px] mx-auto md:pb-20 pb-14">
            <img src="./assets/image/png/made-for-brands.png" alt="made-for-brands" className='h-[107px] xl:left-[-5%] lg:left-[-6%] md:left-[70%] max-md:left-[62%] lg:bottom-[25%] md:bottom-[5%] max-md:bottom-[3%] absolute pointer-events-none' />
            <video loop muted autoPlay className='max-w-[871px] max-sm:hidden mx-auto h-full w-full max-sm:h-[329px]' src="./assets/videos/vido_img.mp4"></video>
            <img className='max-w-[871px] mx-auto h-full w-full max-sm:h-[329px] sm:hidden object-cover' src="./assets/image/png/hero-img.png" alt="fdg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
