import React from 'react';
import { MARKETING_CARDS_LIST } from '../utils/helper';
import { ButtonArrow } from '../utils/icons';

const Marketing = () => {
    return (
        <div className="pt-[132px] pb-[129px] max-xl:py-28 max-lg:py-20 max-md:py-16 max-sm:py-10 relative md:px-0 px-3">
            <p className='md:text-[30px] text-2xl font-maisonLight font-light text-center pb-1'>Problems we solve.</p>
            <h3 className='lg:text-[80px] md:text-[72px] !text-[60px] font-sohne font-bold uppercase sm:!leading-[70px] !leading-[40px] text-center max-w-[500px] mx-auto'>Digital Marketing for today's Business</h3>
            <p className="font-normal text-[15px] font-maisonRegular text-center max-w-[700px] leading-[20px] pt-6 text-black mx-auto max-sm:max-w-[307px]">
                We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.
            </p>
            <img src="./assets/image/png/yellow-line.png" alt="yellow-line"
                className="w-full -z-10 translate-y-[10rem]" />
            <div className="flex flex-wrap gap-[66px] max-md:gap-6 justify-center pt-[31px] max-w-[1920px] mx-auto">
                {MARKETING_CARDS_LIST.map((obj, i) => (
                    <div key={i}
                        className="border-2 relative z-40 max-w-[502px] bg-white border-solid border-ball-blue rounded-[25px] pl-[48px] ps-[31px] max-md:p-10 max-sm:p-7 pt-[65px] pb-[54px] w-[calc(50%-12px)] max-lg:w-full ">
                        <div className="flex items-start gap-6 max-sm:flex-col">
                            <img src={obj.logo} alt="data-icon" className='pointer-events-none' />
                            <div>
                                <h3 className="text-black font-light text-[30px] font-maisonLight leading-[30px] max-w-[346px]">{obj.title}</h3>
                                <p className="text-black font-normal font-maisonRegular text-[15px] max-w-[315px] pt-[15px] leading-[20px]">{obj.description}</p>
                                <ul className="list-disc pl-5 mt-[15px] max-w-[310px]">
                                    <li className='font-semibold font-maisonMedium text-black leading-[20px]'>{obj.listOne}</li>
                                    <li className='font-semibold font-maisonMedium text-black leading-[20px]'>{obj.listTwo}</li>
                                    <li className='font-semibold font-maisonMedium text-black leading-[20px]'>{obj.listThree}</li>
                                </ul>
                                <button className={`mt-[52px] flex hover:gap-4 transition-all duration-300 ease-linear items-center gap-2 max-md:mt-8 max-sm:mt-6 text-customsm font-semibold leading-[20px] ${i === 0 ? 'mt-[72px]' : i === 2 ? 'mt-[72px]' : ''}`}>
                                    {obj.btn} <ButtonArrow />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketing;
