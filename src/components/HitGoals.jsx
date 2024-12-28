import React from 'react'
import { ArrowIcon } from '../utils/icons'

const HitGoals = () => {
  return (
      <div className="bg-goalsBgImg bg-cover bg-center bg-no-repeat box-border">
          <div className='max-w-[1140px] mx-auto text-center flex py-[66px] gap-9 justify-center items-center max-lg:flex-col'>
              <h2 className='font-light text-white text-[40px] leading-[100%] font-maisonLight'>Ready to hit your goals?</h2>
              <button className='p-[31px] right-button hover:bg-black hover:text-white flex items-center gap-2.5 bg-lemon-lime text-[15px] font-semibold font-maisonneue transition-all duration-300 ease-linear'>Book a Strategy Call
                  <ArrowIcon/>
              </button>
          </div>
      </div>
  )
}

export default HitGoals