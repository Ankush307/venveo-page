import React, { useState } from 'react'
import { FOOTER_LIST, FOOTER_SM_VIEW_LIST } from '../utils/helper'
import CustomInput from './CustomInput'

const Footer = () => {
    const [mobileView, setMobileView] = useState(null)
    const clickHandler = (index) => {
        setMobileView(mobileView === index ? null : index)
    }
    return (
        <div className='bg-offGreen'>
            <div className='max-w-[1321px] mx-auto pt-[90px] lg:pb-[105px] pb-[86px] max-xl:pt-14 max-lg:pt-10 max-sm:pt-9 px-5'>
                <div className='flex flex-wrap max-xl:flex-col-reverse max-xl:justify-center'>
                    <div className='xl:w-8/12 max-md:hidden max-lg:w-full flex xl:gap-[83px] max-md:gap-5 max-lg:flex-wrap max-sm:justify-center max-sm:items-center'>
                        {FOOTER_LIST.map((obj, i) => (
                            <div key={i} className='w-3/12 max-lg:w-full max-w-[168px] mx-auto flex-wrap'>
                                <h3 className='text-white text-xs font-medium font-maisonMedium leading-[13px] uppercase'>{obj.title}</h3>
                                <ul className='pt-5'>
                                    <li><a href="/" className='text-white font-light text-[15px] font-maisonLight leading-[30px]'>{obj.list}</a></li>
                                    <li><a href="/" className='text-white font-light text-[15px] font-maisonLight leading-[30px]'>{obj.listTwo}</a></li>
                                    <li><a href="/" className='text-white font-light text-[15px] font-maisonLight leading-[30px]'>{obj.listThree}</a></li>
                                    <li><a href="/" className='text-white font-light text-[15px] font-maisonLight leading-[30px]'>{obj.listFour}</a></li>
                                    <li><a href="/" className='text-white font-light text-[15px] font-maisonLight leading-[30px]'>{obj.listFive}</a></li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='w-8/12 max-lg:w-full flex gap-[82px] max-md:gap-5 max-sm:flex-wrap max-sm:justify-center max-sm:items-center md:hidden'>
                        {FOOTER_SM_VIEW_LIST.map((obj, i) => (
                            <div key={i} className='w-3/12 max-lg:w-full'>
                                <div onClick={() => clickHandler(i)} className='flex gap-1'>
                                    <h3 className='text-lightGreen cursor-pointer text-xs font-medium leading-[108%] uppercase font-maisonMedium'>{obj.title}</h3>
                                    <h3 className={`text-lightGreen cursor-pointer text-xs font-medium leading-[108%] uppercase font-maisonMedium transition-all duration-300 ease-linear ${i === mobileView ? 'rotate-180' : ''}`}>{obj.titleIcon}</h3>
                                </div>
                                <ul className={`overflow-hidden duration-300 ease-linear flex flex-col gap-6 ${mobileView === i ? "max-h-[300px] pt-5" : "max-h-0"}`}>
                                    <li className='flex gap-4 items-center'><a href="/" className='text-white font-light font-maisonLight text-[15px] leading-[30px] hover:text-lightGreen duration-300 ease-linear flex gap-2 items-center'>{obj.icon} {obj.list}</a></li>
                                    <li className='flex gap-4 items-center'><a href="/" className='text-white font-light font-maisonLight text-[15px] leading-[30px] hover:text-lightGreen duration-300 ease-linear flex gap-2 items-center'>{obj.iconTwo} {obj.listTwo}</a></li>
                                    <li className='flex gap-4 items-center'><a href="/" className='text-white font-light font-maisonLight text-[15px] leading-[30px] hover:text-lightGreen duration-300 ease-linear flex gap-2 items-center'>{obj.iconThree} {obj.listThree}</a></li>
                                    <li className='flex gap-4 items-center'><a href="/" className='text-white font-light font-maisonLight text-[15px] leading-[30px] hover:text-lightGreen duration-300 ease-linear flex gap-2 items-center'>{obj.iconFour}{obj.listFour}</a></li>
                                    <li className='flex gap-4 items-center'><a href="/" className='text-white font-light font-maisonLight text-[15px] leading-[30px] hover:text-lightGreen duration-300 ease-linear flex gap-2 items-center'>{obj.iconFive} {obj.listFive}</a></li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='xl:w-4/12 w-full max-md:pt-7 max-xl:mb-16'>
                        <h2 className='text-white text-3xl font-light font-maisonLight text-center max-sm:max-w-[210px] mx-auto'>Get weekly data — and insights.</h2>
                        <CustomInput inputText='Enter Your Email' myClass='xl:!mx-0 !mx-auto max-sm:!pt-[22px] max-sm:!pb-4 max-sm:!px-5 !border-2 !border-white md:mx-auto mt-4 lg:mx-0 !mb-0' inputClass='!text-[15px] !font-normal placeholder:!text-white !font-maisonneuenormal' btnClass='!text-lemon-lime' btnText='Get Started' />
                    </div>
                </div>
                <div className="flex pt-[80px] text-white items-end justify-between max-[769px]:hidden">
                    <div>
                        <a href="/" className='max-w-max flex mb-6'> <img src="./assets/image/svg/footer-page-logo.svg" alt="logo" /></a>
                        <p className='max-w-[315px] text-[13px] font-maisonRegular font-normal'>Venveo is an award-winning digital marketing solutions provider. Since 2003. ©2024 Venveo</p>
                    </div>
                    <div className="flex gap-[58px]">
                        <div>
                            <p className='pb-[30px] text-[12px]'>VISIT</p>
                            <p className='text-[13px]'>100 N Main Street</p>
                            <p className='text-[13px]'>#201</p>
                            <p className='text-[13px]'>Blacksburg, VA 24060</p>
                        </div>
                        <div>
                            <p className='pb-[30px] text-[12px]'>CONTACT</p>
                            <div className="flex flex-col">
                                <a href="mailto:info@venveo.com" className='text-[13px] hover:text-lightGreen duration-300 ease-linear'>info@venveo.com</a>
                                <div className="h-[1px] bg-lemon-lime w-[106px] mb-5"></div>
                                <a href="tel:+4733378901" className='text-[13px] hover:text-lightGreen duration-300 ease-linear' >1 · 800 · 123 · 4567</a>
                                <div className="h-[1px] bg-lemon-lime w-[116px]"></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className="flex">
                            <a href="/" className='pr-8 text-[13px] hover:text-lightGreen duration-300 ease-linear'>All Rights Reserved</a>
                            <a href="/" className='text-[13px] hover:text-lightGreen duration-300 ease-linear'>Privacy Policy</a>
                        </div>
                        <div className="flex gap-[39px] pt-[34px] items-center justify-center">
                            <a href="/" className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/facebook.svg" alt="facebook" /></a>
                            <a href="/" className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/insta-icon.svg" alt="insta" /></a>
                            <a href="/" className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/twitter-icon.svg" alt="twitter" /></a>
                            <a href="/" className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/linkdin-icon.svg" alt="linkdin" /></a>
                            <a href="/" className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/youtube-icon.svg" alt="youtube" /></a>
                        </div>
                    </div>
                </div>
                <div className='min-[769px]:hidden pt-16 justify-center items-center flex flex-col'>
                    <div className='flex gap-14 flex-col text-center'>
                        <ul>
                            <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium'>Visit</p>
                            <li className='pt-5'><a href="/" className='text-white font-light font-maisonLight text-[15px] leading-[133%]'>100 N Main Street <span className='block'>#201 </span>
                                Blacksburg, VA 24060</a></li>
                        </ul>
                        <ul>
                            <p className='uppercase text-sm leading-[108%] text-white font-maisonMedium font-medium pb-0.5'>contact</p>
                            <li className='pt-7'><a href="mailto:info@venveo.com" className='text-white font-light font-maisonLight text-[15px] leading-[153%px] hover:text-lightGreen duration-300 ease-linear border-b border-lemon-lime'>info@venveo.com</a></li>
                            <li className='pt-5'><a href="tel:+4733378901" className='text-white font-light font-maisonLight text-[15px] leading-[153%px] hover:text-lightGreen duration-300 ease-linear border-b border-lemon-lime'>1 · 800 · 123 · 4567</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-[34px] pt-16'>
                        <a className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/facebook.svg" alt="facebook" /></a>
                        <a className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/insta-icon.svg" alt="insta" /></a>
                        <a className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/twitter-icon.svg" alt="twitter" /></a>
                        <a className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/linkdin-icon.svg" alt="linkdin" /></a>
                        <a className='hover:scale-125 duration-300 ease-linear'><img src="./assets/image/svg/youtube-icon.svg" alt="youtube" /></a>
                    </div>
                    <div className='flex items-center justify-center flex-col text-center pt-14'>
                        <a href="/" className='pb-0.5'><img src="./assets/image/svg/footer-page-logo.svg" alt="" /> </a>
                        <p className='max-w-[415px] text-white text-[15px] font-normal font-maisonLight leadin-[153%] pt-3'>Venveo is an award-winning digital marketing <span className='block'>solutions provider. Since 2003.</span>
                            ©2024 Venveo</p>
                    </div>
                    <div className='flex gap-8 pt-9'>
                        <a href="/" className='text-white text-[15px] font-maisonMedium font-medium leading-[153%] hover:text-lightGreen duration-300 ease-linear'>All Rights Reserved</a>
                        <a href="/" className='text-white text-[15px] font-maisonMedium font-medium leading-[153%] hover:text-lightGreen duration-300 ease-linear'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer