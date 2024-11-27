import Image from 'next/image'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Data from '@/components/Json/Data.json'
const ChooseAgency = () => {
    return (
        <div className='w-full  border-b-[1px] border-blue py-12 lg:py-16'>
            <div className='w-full xl:w-[75%] mx-auto px-4 lg:px-[30px]'>
                <h2 className=' text-center  capitalize   font-bold'>
                    {Data.home_agency.title}
                </h2>
                <p className='text-[16px] text-homegrey lg:text-[18px] mt-2 text-center'> {Data.home_agency.description}
                </p>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap mt-10 justify-between gap-6 items-center px-4 lg:px-3 w-full xl:w-[75%] mx-auto">
                <div className='lg:w-1/2'>
                    {
                        Data.home_agency.cards.map((elem: any, index: any) => (
                            <div key={index} className=' hidden md:flex'>
                                {/* <MdKeyboardDoubleArrowRight className='text-pink text-[30px] mt-3' /> */}
                                <div className='text-[16px] gap-2 text-justify mt-2  items-center text-homegrey lg:text-[18px]'>
                                    <span className='font-semibold text-[20px] text-homeblack mr-2'>{elem?.title}</span>
                                    {elem?.description}
                                </div>
                            </div>
                        ))
                    }
                    {Data.home_agency.cards.map((elem: any, i: number) => (
                        <div key={i} className=' md:hidden rounded-xl my-2 border-[2px]
                         border-lightblue items-center sm:items-start text-center sm:text-left px-4 2xl:px-8 py-4  
                              flex flex-col  gap-2 justify-between bg-white hover:shadow-xl'>

                            <p className=' text-[20px] md:text-[26px] font-medium text-homeblack leading-[31px]'>{elem.title}</p>
                            <p className='text-[16px] lg:text-[18px] text-homegrey leading-[22px]'>
                                {elem?.description}</p>


                        </div>
                    ))}
                </div>
                <div className='  hidden lg:block lg:w-1/2'>
                    <Image
                        src={'/images/marketin.png'}
                        width={500}
                        height={58}
                        alt='Digital Marketing Agency'
                        className="cursor-pointer"
                    />
                </div>

            </div>

        </div>
    )
}

export default ChooseAgency