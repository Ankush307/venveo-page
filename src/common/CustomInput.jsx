import React from 'react'

const CustomInput = ({ inputText, myClass, inputClass, btnClass, btnText }) => {
    return (
        <div>
            <form>
                <div className={`sm:mb-16 ${myClass} mb-12  max-sm:!pt-[22px] max-sm:!pb-4 max-sm:!px-5 bg-transparent border-2 border-white rounded-full py-5 px-9  flex items-center justify-between gap-2 max-w-[448px] mx-auto`}>
                    <input type="website" placeholder={`${inputText}`} className={` ${inputClass} font-maisonRegular text-[15px] w-[60%] leading-[133%] placeholder:text-cloudy-blue outline-none bg-transparent text-white`} required />
                    <button className={` ${btnClass} font-maisonBold text-[15px] font-semibold leading-[133%] text-white`}>{btnText} </button>
                </div>
            </form>
        </div>
    )
}

export default CustomInput