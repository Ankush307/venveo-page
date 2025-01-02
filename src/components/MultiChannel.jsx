import React, { useState } from 'react'
import { MULTI_CHANNEL_LIST } from '../utils/helper'

const MultiChannel = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore((prev) => !prev);


    const displayedCards = showMore ? MULTI_CHANNEL_LIST : MULTI_CHANNEL_LIST.slice(0, 1);

    return (
        <div className='container max-w-[1920px] mx-auto py-16 max-sm:pt-4'>
            <div className='flex flex-wrap items-center lg:justify-between sm:justify-center max-xl:gap-y-10 max-lg:hidden'>
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
            <div className='flex gap-3 items-center justify-center flex-wrap flex-col lg:hidden'>
                {displayedCards.map((obj, i) => (
                    <div key={i} className={`bg-cover bg-no-repeat min-h-[240px] w-full max-w-[375px] flex items-end justify-end pr-0 pl-28 pt-5 pb-4 ${
                            i === 0 ? 'bg-cardImgBgOne' : i === 1 ? 'bg-cardImgBgTwo' : 'bg-cardImgBgThree'
                        }`}>
                        <div className='bg-white p-6 w-full rounded-l-3xl'>
                            <p className='text-[15px] font-maisonMedium uppercase text-ball-blue pb-[15px]'>{obj.heading}</p>
                            <p className='text-2xl font-light font-maisonLight text-[15px] leading-[26px] max-w-[201px] pb-[15px]'>{obj.discription}</p>
                            <button className='flex items-center text-customsm font-maisonMedium gap-1.5 leading-5 hover:gap-4 duration-300 ease-linear pt-5'>
                                {obj.btn} <img src="./assets/image/svg/next-btn.svg" alt="img" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className='text-xl text-center flex items-center justify-center w-full mx-auto gap-2 text-customsm leading-5 font-maisonMedium pt-9 lg:hidden'
                onClick={toggleShowMore} >
                {showMore ? 'Less More Resources' : 'Show More Resources'}
                <span className={`${showMore ? 'rotate-180' : ''} duration-300 ease-linear text-[8px]`}>▼</span>
            </button>
        </div>
    )

}

export default MultiChannel