import React from 'react'
import { FROM_US_LIST } from '../utils/helper'

const FromUs = () => {
  return (
    <div>
      <img className='sm:pt-3 pt-2' src="./assets/image/png/swiper-green-line.png" alt="green line" />
      <div className="container mx-auto max-w-[1320px] ">
        <h3 className='lg:text-[80px] md:text-7xl text-6xl font-sohne font-bold sm:leading-[70px] leading-[52px] lg:pt-[86px] pt-[50px] text-center uppercase'>Learn from us.</h3>
        <p className='text-[15px] font-maisonRegular font-normal leading-[20px] pt-[13px] mb-[33px] text-center'>Digital marketing resources from Venveo to help you grow.</p>
        <button className='flex md:mb-[81px] mb-10 font-maisonMedium font-semibold items-center justify-center gap-[11px] max-w-[78px] mx-auto'>See All <img src="./assets/image/svg/next-btn.svg" alt="btn img" /> </button>
        <div className="relative w-full ">
          <img className="object-cover min-h-[565px] max-h-[750px]" src="./assets/image/png/from-us-img.png" alt="from us img" />
          <img className='absolute top-[-8%] right-[10%] max-md:hidden' src="./assets/image/png/made-for-brands.png" alt="made for brands" />
          <div className="pt-[35px] rounded-[25px] absolute bottom-[3%] mx-5 sm:left-[3%] px-7 pb-[31px] bg-white max-w-[382px]">
            <div>
              {FROM_US_LIST.map((obj, i) => (
                <div className='' key={i}>
                  <h4 className='text-[15px] font-semibold leading-[20px] text-[#00AFB5] uppercase font-maisonMedium'>{obj.heading}</h4>
                  <h3 className='text-black font-light sm:text-3xl text-2xl leading-[26px] sm:leading-[30px] max-w-[265px] sm:pt-4 pt-1.5 font-maisonLight'>{obj.discription}</h3>
                  <h3 className='text-black font-light sm:text-3xl text-2xl leading-[26px] sm:leading-[30px] font-maisonLight'>{obj.discriptionTwo}</h3>
                  <p className='text-black font-normal text-[15px] leading-5 sm:pt-4 pt-1.5 font-maisonRegular'>{obj.discriptionThree}</p>
                  <button className='bg-transparent text-customsm font-semibold text-black sm:mt-[28px] mt-[19px] font-maisonMedium flex gap-2 hover:gap-4 transition-all ease-linear duration-200 items-center justify-center'>{obj.btn} <img src="./assets/image/svg/next-btn.svg" alt="img" /> </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FromUs