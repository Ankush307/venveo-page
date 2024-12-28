import React from 'react'
import { MULTI_CHANNEL_LIST } from '../utils/helper'

const MultiChannel = () => {
    return (
        <div className='container max-w-[1920px] mx-auto py-16'>
            <div className='flex items-center justify-between'>
                {MULTI_CHANNEL_LIST.map((obj, i) => (
                    <div className={`${i === 1 ? 'bg-cardImgBgTwo' : i === 2 ? 'bg-cardImgBgThree' : 'bg-cardImgBgOne'} pt-[202px] p-[29px] lg:max-h-[551px]`} key={i}>
                        <div className="pt-[35px] rounded-[25px] bottom-[3%] left-[3%] px-7 pb-[31px] bg-white max-w-[382px]">
                            <h4 className='text-[15px] font-semibold leading-[20px] text-[#00AFB5] uppercase font-maisonneuelight'>{obj.heading}</h4>
                            <h3 className='text-black font-light text-3xl leading-[30px] max-w-[300px] pt-4 font-maisonLight'>{obj.discription}</h3>
                            <p className='text-black font-normal text-[15px] leading-5 pt-4 font-maisonneuenormal'>{obj.discriptionTwo}</p>
                            <button className={`${i === 0 ? 'pt-[81px] !m-0' : 'pt-[40px]'} bg-transparent text-customsm font-semibold text-black mt-[28px] font-maisonBold flex gap-2 hover:gap-4 transition-all ease-linear duration-200 items-center justify-center`}>{obj.btn} <img src="./assets/image/svg/next-btn.svg" alt="img" /> </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MultiChannel