import React from 'react'
import CustomInput from '../common/CustomInput'

const OutSmartInput = () => {
    return (
        <div className='bg-outSmartBgImg pt-[60px] pb-[72px] '>
            <div className="container mx-auto max-w-[1140px] px-5">
                <div className="flex flex-wrap relative">
                    <div className="md:w-1/2 w-full">
                        <p className='text-[15px] font-normal font-maisonRegular'>Get a free competitive analysis on your market</p>
                        <h3 className='lg:text-[40px] md:text-4xl text-3xl max-sm:max-w-[200px] max-sm:mb-16 font-light font-maisonLight leading-[100%] mb-8 '>Outsmart your competition</h3>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <CustomInput inputText='Enter Your Website' myClass='bg-white mx-0 md:mx-auto mt-4 lg:mx-0 border-none !mb-0' inputClass='!text-black !text-[15px] !font-normal !font-maisonneuenormal placeholder:!text-black' btnClass='!text-black' btnText='Analyze' />
                    </div>
                    <img className='absolute max-md:hidden left-[30%] bottom-[0%] lg:left-[40%] lg:bottom-[-44%] right-[50%]' src="./assets/image/svg/rounded-arrow.svg" alt="" />
                    <img className='absolute md:hidden right-[26%] top-[20%] rotate-[40deg]' src="./assets/image/svg/rounded-arrow-sm.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default OutSmartInput