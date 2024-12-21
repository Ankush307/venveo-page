import React from 'react'
import { PARTNERS_LIST } from '../utils/helper'

const OurPartners = () => {
    return (
        <div>
            <div className="container mx-auto max-w-[1024px] ">
                <h3 className='font-maisonneue !font-normal text-center mb-12 '>Featured in</h3>
                <div className='flex items-center justify-between'>
                    {PARTNERS_LIST.map((obj, i) => (
                        <div key={i}>
                            <img src={obj.img} alt="img" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurPartners