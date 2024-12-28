import React from 'react'
import { FOOTER_LIST } from '../utils/helper'
import CustomInput from './CustomInput'

const Footer = () => {
  return (
      <footer className='bg-offGreen max-lg:px-4'>
          <div className='max-w-[1321px] mx-auto pt-[90px] max-xl:pt-14 max-lg:pt-10 max-sm:pt-9'>
              <div className='flex max-xl:flex-wrap max-md:justify-center '>
                  <div className='lg:w-8/12 w-full flex gap-[83px] max-md:gap-5 max-sm:flex-wrap max-sm:justify-center max-sm:items-center'>
                      {FOOTER_LIST.map((obj, i) => (
                          <div key={i} className='w-3/12 max-lg:w-full'>
                              <h3 className='text-white text-xs font-medium leading-[13px] uppercase'>{obj.title}</h3>
                              <ul className='pt-5'>
                                  <li><a href="/" className='text-white font-normal font-maisonneuelight text-customsm leading-[30px]'>{ obj.list}</a></li>
                                  <li><a href="/" className='text-white font-normal font-maisonneuelight text-customsm leading-[30px]'>{ obj.listTwo}</a></li>
                                  <li><a href="/" className='text-white font-normal font-maisonneuelight text-customsm leading-[30px]'>{ obj.listThree}</a></li>
                                  <li><a href="/" className='text-white font-normal font-maisonneuelight text-customsm leading-[30px]'>{ obj.listFour}</a></li>
                                  <li><a href="/" className='text-white  font-normal font-maisonneuelight text-customsm leading-[30px]'>{ obj.listFive}</a></li>
                              </ul>
                         </div>
                     ))}
                  </div>
                  <div className='lg:w-4/12 w-full max-md:pt-7'>
                      <h2 className='text-white text-3xl font-normal font-maisonneuelight text-center'>Get weekly data — and insights.</h2>
                      <CustomInput inputText='Enter Your Email' myClass='mx-0 !border-2 !border-white md:mx-auto mt-4 lg:mx-0 !mb-0' inputClass='!text-[15px] !font-normal placeholder:!text-white !font-maisonneuenormal' btnClass='!text-lemon-lime' btnText='Get Started' />
                  </div>
              </div>
          </div>
   </footer>
  )
}

export default Footer