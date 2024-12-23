import React from 'react'
import { EnterpreneurIcon, ForbesIcon, FortuneIcon, IncIcon, WsjIcon } from '../utils/icons'

const Features = () => {
  return (
    <div className='overflow-hidden'>
      <p className='text-[15px] font-maisonneue font-normal text-black text-center uppercase leading-[15px]'>Featured in</p>
      <div className='flex items-center mt-12 mb-[90px] max-lg:my-10 max-w-[1025px] mx-auto justify-evenly max-md:gap-9 slide-scroll-left'>
        <WsjIcon />
        <EnterpreneurIcon />
        <FortuneIcon />
        <ForbesIcon />
        <IncIcon />
        <div className='md:hidden flex items-center gap-9 slide-scroll-left'>
          <WsjIcon />
          <EnterpreneurIcon />
          <FortuneIcon />
          <ForbesIcon />
          <IncIcon />
        </div>
      </div>
      <img src="./assets/image/png/partners-bottom-line-one.png" alt="line" className='w-full' />
      <img src="./assets/image/png/partners-bottom-line-two.png" alt="line" className='w-full' />


    </div>
  )
}

export default Features