import React from 'react'
import { FROM_US_LIST } from '../utils/helper'

const FromUs = () => {
  return (
    <div>
      <img className='pt-3' src="./assets/image/png/swiper-green-line.png" alt="green line" />
      <div className="container mx-auto max-w-[1320px] ">
        <h3 className='lg:text-[80px] md:text-7xl text-6xl font-sohneschmal font-bold md:leading-[70px] leading-[52px] lg:pt-[86px] pt-[50px] text-center uppercase'>Learn from us.</h3>
        <p className='text-[15px] font-maisonneuenormal font-normal leading-[20px] pt-[13px] mb-9 text-center'>Digital marketing resources from Venveo to help you grow.</p>
        <button className='flex mb-[81px] font-maisonneue font-semibold items-center justify-center gap-[11px] max-w-[78px] mx-auto '>See All <img src="./assets/image/svg/next-btn.svg" alt="btn img" /> </button>
        <div className="relative w-full ">
          <img src="./assets/image/png/from-us-img.png" alt="from us img" />
          <img className='absolute top-[-8%] right-[10%] ' src="./assets/image/png/made-for-brands.png" alt="made for brands" />
          <div className="pt-[35px] rounded-[25px] absolute bottom-[3%] left-[3%] px-7 pb-[31px] bg-white max-w-[382px]">
            <div>
              {FROM_US_LIST.map((obj, i) => (
                <div className='' key={i}>
                  <h4 className='text-[15px] font-semibold leading-[20px] text-[#00AFB5] uppercase font-maisonneuelight'>{obj.heading}</h4>
                  <h3 className='text-black font-light text-3xl leading-[30px] max-w-[265px] pt-4 font-maisonLight'>{obj.discription}</h3>
                  <h3 className='text-black font-light text-3xl leading-[30px] font-maisonLight'>{obj.discriptionTwo}</h3>
                  <p className='text-black font-normal text-[15px] leading-5 pt-4 font-maisonneuenormal'>{obj.discriptionThree}</p>
                  <button className='bg-transparent text-customsm font-semibold text-black mt-[28px] font-maisonBold flex gap-2 hover:gap-4 transition-all ease-linear duration-200 items-center justify-center'>{obj.btn} <img src="./assets/image/svg/next-btn.svg" alt="img" /> </button>
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