import React from 'react'
import Header from '../common/Header'

const Hero = () => {

  return (
    <div className='bg-pine-green xl:min-h-[1103px] overflow-hidden relative'>
      <Header />
      <img className='absolute sm:left-[-23%] sm:top-[-6%] left-[-30%] top-[-5%] w-full max-w-[698px] max-sm:w-[261px] ' src="./assets/image/png/hero-bg-layer-2.png" alt="layer" />
      <div className="container mx-auto relative px-4">
        <h1 className='lg:text-[120px] md:text-8xl sm:text-7xl text-6xl font-bold max-w-[620px] text-center mx-auto text-white  font-sohneschmal leading-[86%] uppercase sm:pt-20 pt-12'>Make marketing A growth machine <span> <img className='ml-9 max-sm:max-w-[173px] pointer-events-none' src="./assets/image/png/single-line.png" alt="" /></span></h1>
        <p className='text-white font-light sm:text-2xl text-[22px] sm:leading-[30px] leading-[28px] text-center max-w-[656px] mx-auto font-maisonneuelight mb-6'>We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
        <form>
          <div className="sm:mb-16 mb-12 bg-transparent border-2 border-white rounded-full py-5 px-9  flex items-center justify-between gap-2 max-w-[448px] mx-auto">
            <input type="website" placeholder='Enter Your Website' className='font-maisonneue text-[15px] w-[60%] leading-[133%] placeholder:text-cloudy-blue outline-none bg-transparent text-white' required />
            <button className='font-maisonneue text-[15px] font-semibold leading-[133%] text-white'>Analyze </button>
          </div>
        </form>
      </div>
      <img className='absolute max-w-[534px] top-[65.1%] right-[-1%] max-xl:hidden' src="./assets/image/webp/hero-bottom-layer.webp" alt="top layer" />
      <img className='w-full absolute bottom-[20%] max-lg:hidden' src="./assets/image/webp/bg-line.webp" alt="bg line" />
      <div className="hero-section px-4 z-10">
        <div className="relative max-w-[871px] mx-auto pb-20">
          <img src="./assets/image/png/made-for-brands.png" alt="made-for-brands" className='h-[107px] xl:left-[-5%] lg:left-[-6%] md:left-[70%] max-md:left-[62%]  lg:bottom-[25%] md:bottom-[15%] max-md:bottom-[18%] absolute pointer-events-none' />
          <img className='max-w-[871px] mx-auto  w-full max-xl:pb-14 max-sm:h-[380px] ' src="./assets/image/png/hero-img.png" alt="hero img" />
        </div>
      </div>
    </div>
  )
}

export default Hero
