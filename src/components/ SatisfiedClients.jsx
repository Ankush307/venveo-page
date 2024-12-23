import React from 'react';
import { CLIENTS_CARDS } from '../utils/helper';
import { ButtonArrow } from '../utils/icons';

const SatisfiedClients = () => {
    return (
        <div className="mt-[101px]  max-xl:mt-24 max-lg:mt-20 max-md:mt-10">
            <p className='md:text-[30px] text-2xl font-maisonneuelight text-center max-sm:max-w-[234px] mx-auto leading-[100%] pb-2'>Driving digital revenue for over</p>
            <h3 className='lg:text-[80px] md:text-7xl text-6xl font-sohneschmal uppercase leading-[87%] text-center md:max-w-[516px] lg:max-w-[574px] max-w-[430px] max-[450px]:max-w-[286px] mx-auto'>1,400+ satisfied clients. <span> <img className='max-sm:max-w-[84px] max-[430px]:translate-y-[-55px] ' src="./assets/image/svg/small-red-line.svg" alt="red line"/></span></h3>
           
            <div className="flex flex-wrap justify-between max-xl:justify-center max-xl:gap-6 mt-10 max-xl:m-4 max-w-[1920px] mx-auto">
                {CLIENTS_CARDS.map((obj, i) => (
                    <div
                        key={i} className={`bg-no-repeat bg-center relative bg-cover max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col !w-[440px] max-sm:w-[320px] ${i === 1 ? "bg-cardImgTwo" : i === 2 ? "bg-cardImgThree" : "bg-cardImgOne"}`}>
                        <div className='flex flex-col bg-white w-[382px] max-sm:w-[320px] rounded-[25px] shadow-lg px-7 pt-[38px] max-sm:m-4 pb-[31px] mx-7 mt-[31px]'>
                            <div className={i === 0 ? "absolute  bg-black text-white font-semibold text-[12px] border border-solid rounded-full w-[165px] py-2 top-3 ps-3 border-black" : i === 1 ? "absolute top-5 text-black font-semibold" : ""}>{obj.heading}</div>
                        <div className="mb-4">{obj.logo}</div>
                        <h3 className="font-light text-[30px] leading-[30px] max-sm:text-2xl max-w-[325px] text-black mt-6 max-sm:mt-4">
                            {obj.title}
                        </h3>
                        <p className="max-w-[315px] font-maisonneuenormal font-normal text-black uppercase max-sm:pt-5 pt-[31px]">
                            {obj.description}
                        </p>
                        <button className="mt-[54px] max-md:mt-9 max-sm:mt-7 font-semibold flex items-center gap-2">
                            {obj.btn} <ButtonArrow/>
                        </button>
                        </div>
                        <div className="flex items-center justify-center gap-12 mt-[13px] mb-[33px]">
                            <div className="">
                                <p className="text-[50px] font-bold max-lg:text-4xl max-md:text-3xl font-sohneschmal text-black leading-[44px]">{obj.leads}</p>
                                <p className="font-medium text-black leading-[15px]">{obj.leadText}</p>
                            </div>
                            <div className="">
                                <p className="text-[50px] max-lg:text-4xl max-md:text-3xl font-bold font-sohneschmal text-black leading-[44px]">{obj.adLeads}</p>
                                <p className="font-medium text-black leading-[15px]">{obj.adLeadsText}</p>
                            </div>
                            <div className="">
                                <p className="text-[50px] max-lg:text-4xl max-md:text-3xl font-bold font-sohneschmal text-black leading-[44px]">
                                    {obj.webTraffic}
                                </p>
                                <p className="font-medium text-black leading-[15px]">{obj.webTrafficText}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default  SatisfiedClients