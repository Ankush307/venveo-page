import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowIcon, LogoIpsumIcon, NetWorkIcon } from '../utils/icons';

const PartnersGrowth = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(1);
    const tabNames = ['IndustryExpertise', 'ROIFocused', 'ProprietaryTechnology'];

    useEffect(() => {
        const tabParam = searchParams.get('tab');
        const tabIndex = tabNames.findIndex((name) => name === tabParam);
        if (tabIndex >= 0) {
            setActiveTab(tabIndex + 1)
        }
    }, [searchParams]);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        setSearchParams({ tab: tabNames[tabIndex - 1] });
    };

    const renderTabContent = () => {
        if (activeTab === 1) {
            return (
                <div className='bg-cover bg-no-repeat bg-center lg:bg-tabOneBgImg max-lg:bg-tabOneSmImg w-full max-w-[1280px] max-lg:h-full h-[720px] mx-auto'>
                    <div className='sm:pt-[75px] pt-14 sm:px-6 px-4 gap-4 flex items-center justify-between'>
                        <div>
                            <h3 className='text-white font-thin font-sohne lg:text-[80px] md:text-7xl text-6xl uppercase leading-[87%] max-w-[415px]'>the smartest minds in the industry</h3>
                            <p className='max-w-[360px] font-light text-[24px] font-maisonLight max-md:text-2xl text-white leading-[30px]'>Answer our questions and listen to our answers.</p>
                            <p className='max-w-[360px] sm:mt-[31px] mt-4 font-normal text-customsm font-maisonRegular leading-[20px] text-white'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                            <button className='max-lg:mb-6 max-sm:w-[334px] h-[84px] w-[250px] max-sm:mx-auto justify-center text-white font-medium font-maisonMedium text-customsm flex items-center bg-offRed transition-all duration-300 ease-linear hover:bg-black hover:text-white gap-[10px] mt-[58px]'><NetWorkIcon /> Subscribe to Podcast <span className='text-[6px]'>▼</span></button>
                        </div>
                        <div className="lg:hidden max-md:hidden">
                            <img src="/assets/image/png/tab-one-card.png" alt="card" className='lg:hidden max-w-[320px] mt-5 mx-auto' />
                        </div>
                    </div>
                    <div className='tab-one-bg'>
                        <div className="overflow-x-auto px-5 ">
                            <img src="/assets/image/png/patners-logo-img.png" alt="logo" className='min-w-[701px] md:mb-4 lg:hidden mx-auto' />
                        </div>
                        <img src="/assets/image/png/tab-one-card.png" alt="card" className='md:hidden max-w-[320px] mt-5 mx-auto' />
                    </div>
                </div>
            );
        }

        if (activeTab === 2) {
            return (
                <div className='bg-cover bg-no-repeat bg-center lg:bg-tabTwoBgImg max-lg:bg-tabTwoSmImg w-full max-w-[1337px] max-lg:h-full h-[720px] mx-auto'>
                    <div className='pt-[75px] ps-[89px] max-lg:p-12 max-md:p-8 max-sm:p-5'>
                        <h3 className='text-white font-bold lg:text-[80px] md:text-7xl text-6xl font-sohne uppercase leading-[87%]'>Proven Results</h3>
                        <p className='max-w-[360px] font-light text-[24px] font-maisonLight max-md:text-2xl max-lg:pb-7 text-white leading-[30px]'>Not hopes and prayers.</p>
                        <img src="./assets/image/png/data-group.png" alt="data" className='lg:hidden mx-auto' />
                    </div>
                </div>
            );
        }
        if (activeTab === 3) {
            return (
                <div className='lg:bg-tabThreeBgImg md:flex justify-between max-lg:bg-tabThreeSmImg max-lg:h-full bg-cover bg-center bg-no-repeat w-full max-w-[1337px] h-[720px] mx-auto'>
                    <div className='pt-[75px] ps-[79px] max-lg:p-12 max-md:p-8 max-sm:p-5'>
                        <h3 className='text-white font-bold lg:text-[80px] md:text-7xl text-6xl uppercase font-sohne leading-[87%]'>Project radar</h3>
                        <LogoIpsumIcon />
                        <p className='pt-[162px] max-xl:pt-24 max-lg:pt-16 max-md:pt-11 max-sm:pt-8 max-w-[360px] font-light text-[24px] font-maisonLight max-md:text-2xl text-white leading-[30px]'>Lorem ipsum what thisproduct actually does.</p>
                        <p className='font-normal text-customsm leading-[20px] text-white font-maisonLight max-w-[360px] mt-[14px]'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                        <button className='max-lg:mb-6 mt-[57px] max-sm:w-[334px] justify-center max-sm:mx-auto transition-all duration-300 ease-linear  right-button flex items-center text-black text-[15px] font-semibold font-maisonMedium leading-[15px] py-[31px] gap-[10px] px-[28px] bg-lemon-lime hover:bg-black hover:text-white'>Call to Action Somewhere <ArrowIcon /> </button>
                    </div>
                    <div className='tab-one-bg flex items-center justify-center'>
                        <img src="./assets/image/png/card-data-img.png" alt="card-data" className='lg:hidden max-w-[330px] pl-3' />
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='lg:pt-[113px] md:pt-20 sm:pt-16 pt-12 pb-[60px]'>
            <h3 className='px-5 sm:px-0 lg:text-[80px] md:text-7xl text-6xl font-sohne uppercase leading-[87%] text-center max-w-[500px] mx-auto'>The growth partner </h3>
            <p className='md:text-[30px] text-2xl font-maisonLight text-center pb-[3px]'>you’ve been looking for.</p>
            <p className='max-sm:px-8 sm:mt-[43px] pt-4 font-normal text-[15px] text-black leading-[20px] font-maisonRegular text-center'>Businesses trust Venveo to power grow.</p>
            <div className='tabs-parent mt-[105px] max-xl:mt-16 max-lg:mt-10 max-md:mt-8 relative z-20'>
                <div className='relative max-md:overflow-x-scroll max-md:mx-auto max-md:gap-7 flex items-center max-sm:justify-start justify-center gap-[78px]'>
                    <p className={`text-lg max-md:whitespace-nowrap max-sm:pl-5 max-sm:text-base font-semibold  text-black opacity-35 leading-[18px] font-maisonMedium cursor-pointer ${activeTab === 1 ? 'text-black !opacity-100' : ''}`}
                        onClick={() => handleTabClick(1)}>Industry Expertise{activeTab === 1 && (
                            <img src="./assets/image/svg/red-line.svg" alt="redline" className="mx-auto absolute max-md:hidden" />
                        )}</p>
                    <p className={`text-lg max-md:whitespace-nowrap max-sm:text-base font-semibold text-black opacity-35 leading-[18px] font-maisonMedium cursor-pointer ${activeTab === 2 ? 'text-black !opacity-100' : ''}`}
                        onClick={() => handleTabClick(2)}> ROI Focused{activeTab === 2 && (
                            <img src="./assets/image/svg/red-line.svg" alt="redline" className="mx-auto absolute max-md:hidden -translate-x-6" />
                        )}</p>
                    <p className={`text-lg max-md:whitespace-nowrap max-sm:pr-5 max-sm:text-base font-semibold text-black opacity-35 leading-[18px] font-maisonMedium cursor-pointer ${activeTab === 3 ? 'text-black !opacity-100' : ''}`}
                        onClick={() => handleTabClick(3)}>Proprietary Technology{activeTab === 3 && (
                            <img src="./assets/image/svg/red-line.svg" alt="redline" className="mx-auto absolute max-md:hidden" />
                        )}</p>
                </div>
                <div className='mt-[57px]'>{renderTabContent()}</div>
            </div>
            <img src="/assets/image/png/tab-bg-line1.png" alt="line " className='w-full mt-4 z-0' />
            <img src="/assets/image/png/tab-bg-line2.png" alt="line" className='w-full mt-2' />
        </div>
    );
};

export default PartnersGrowth;
