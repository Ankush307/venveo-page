import React from 'react'
import { MULTI_CHANNEL_LIST } from '../utils/helper'

const MultiChannel = () => {


    return (
        <div className='container max-w-[1920px] mx-auto py-16 max-sm:pt-4'>
            <div className='flex flex-wrap items-center lg:justify-between sm:justify-center max-xl:gap-y-10 max-sm:hiden'>
                {MULTI_CHANNEL_LIST.map((obj, i) => (
                    <div className={`${i === 1 ? 'bg-cardImgBgTwo' : i === 2 ? 'bg-cardImgBgThree' : 'bg-cardImgBgOne'} sm:pt-[202px] sm:p-[29px] pl-[100px] py-5 lg:max-h-[551px] max-sm:max-h-[240px] bg-cover bg-no-repeat bg-center max-w-[440px] xl:mx-0 sm:mx-auto max-sm:w-full`} key={i}>
                        <div className="sm:pt-[35px] pt-6 rounded-[25px] max-sm:!pr-2 px-7 pb-[31px] max-sm:rounded-r-none bg-white max-w-[382px]">
                            <h4 className='text-[15px] font-semibold leading-[20px] text-ball-blue uppercase font-maisonMedium'>{obj.heading}</h4>
                            <h3 className='text-black font-light md:text-3xl text-2xl max-sm:max-w-[245px] leading-[30px] max-w-[300px] sm:pt-4 pt-1.5 font-maisonLight'>{obj.discription}</h3>
                            <p className='text-black max-sm:hidden font-normal text-[15px] leading-5 pt-4 font-maisonRegular'>{obj.discriptionTwo}</p>
                            <button className={`${i === 0 ? ' sm:pt-[81px] sm:!m-0 max-sm:!mt-[19px]' : 'sm:pt-[12px]'} bg-transparent text-customsm font-semibold text-black max-sm:mt-5 mt-[28px] font-maisonMedium flex gap-2 hover:gap-4 transition-all ease-linear duration-200 items-center justify-center text-[15px]`}>{obj.btn} <img src="./assets/image/svg/next-btn.svg" alt="img" /> </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default MultiChannel