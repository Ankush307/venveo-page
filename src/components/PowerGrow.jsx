import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { UsIcon } from '../utils/icons';
import { SWIPER_DATA } from '../utils/helper';

const PowerGrow = () => {
    return (
        <div className="bg-cover  bg-no-repeat bg-center bg-swiperBgImg flex flex-col justify-center items-center overflow-hidden">
            <div className="container relative max-w-[1920px] mx-auto">
                <div className="text-center pt-[119px]  max-xl:pt-20 max-lg:pt-14 max-md:pt-10 max-sm:pt-6 px-4 md:px-6 lg:px-0">
                    <h3 className="text-white font-maisonLight font-light text-lg sm:text-xl md:text-2xl lg:text-custom3xl leading-6 md:leading-[30px]">Actual businesses.</h3>
                    <h2 className="text-white font-sohne font-bold text-6xl max-sm:pt-2 lg:text-[80px] leading-8 max-sm:leading-[52px] lg:leading-[70px] ">Actual results.</h2>
                    <p className="text-white font-maisonRegular font-normal text-sm sm:text-base md:text-lg lg:text-customsm leading-5 pt-9 sm:pt-6 md:pt-10">Businesses trust Venveo to power growth.</p>
                </div>

                <div className="mx-auto flex items-center justify-center w-full pt-10 md:pt-[81px] px-4 sm:px-6 max-w-[1920px] lg:px-0">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Navigation, Pagination]} className="mySwiper !pb-[60px] sm:!pb-[80px] lg:!pb-[100px]">
                        {SWIPER_DATA.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="text-center w-full max-w-[992px] mx-auto px-4">
                                    <img src={slide.image} alt='img' className="w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[640px] mx-auto" />
                                    <p className="text-white pt-6 sm:pt-8 lg:pt-[74px] font-maisonLight font-light max-w-[300px] sm:max-w-[450px] lg:max-w-[613px] mx-auto text-base sm:text-lg lg:text-[30px]"> {`"${slide.description}"`}</p>
                                    <p className="text-white font-normal pt-4 sm:pt-5 font-maisonRegular text-sm sm:text-base lg:text-customsm">{slide.name},</p>
                                    <p className="text-white font-normal font-maisonRegular text-sm sm:text-base lg:text-customsm">{slide.title}</p>
                                    <p className="text-center pt-3 mx-auto flex items-center justify-center"><UsIcon /></p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="max-md:hidden swiper-button-prev absolute left-4 md:left-8 top-[50%] transform translate-y-[-50%]">
                        <button className="bg-white max-md:hidden hover:bg-lemon-lime transition-all duration-300 ease-linear rounded-r-[25px] flex items-center justify-center w-[75px] ">
                            <img src="/assets/image/svg/prev-btn.svg" alt="prev-btn" className="size-[10px] my-14 mx-8 max-md:hidden" />
                        </button>
                    </div>
                    <div className="max-md:hidden swiper-button-next absolute right-4 md:right-8 top-[50%] transform translate-y-[-50%]">
                        <button className="bg-white max-md:hidden hover:bg-lemon-lime transition-all duration-300 ease-linear rounded-l-[25px] flex items-center justify-center">
                            <img src="/assets/image/svg/next-btn.svg" alt="next-btn" className="size-[10px] my-14 mx-8 max-md:hidden" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerGrow;
