import Image from 'next/image'
import React from 'react'
import Data from '@/components/Json/Data.json'

const Certificate = () => {
    return (
        <div className='w-full  border-b-[1px] border-lightblue py-12 lg:py-16'>
            <div className='w-full xl:w-[95%]  2xl:w-[75%] mx-auto px-4 lg:px-[30px]'>
                <h2 className='  text-homeblack leading-none lg:leading-[45px] text-center  capitalize   font-bold'>
                    W3era wins Certification of Recognition in India 5000 Best MSME Award for Quality excellence
                </h2>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap mt-10 justify-center gap-5  items-center px-4 lg:px-3 w-full xl:w-[95%]  2xl:w-[75%] mx-auto">
                <div className=' hidden lg:block '>
                    <Image
                        src={'/images/Certificate.jpg'}
                        width={500}
                        height={300}
                        alt='Awards'
                        className="cursor-pointer lg:min-w-[300px] "
                    />
                </div>
                <div className=''>
                    {
                       Data.home_certificate.cards.map((elem:any ,index:number) =>(
                        <div key={index} className= ' hidden text-[16px] gap-2 my-4 mb-6 sm:flex items-center text-homegrey lg:text-[18px]'>
                            {elem?.description}
                            </div>
                       ))
                    }
                      {Data.home_certificate.cards.map((elem: any, i: number) => (
                        <div key={i} className='box md:hidden rounded-xl my-2  items-center sm:items-start
                         text-center sm:text-left px-4 2xl:px-8 py-8  
                              flex flex-col  gap-2 justify-between bg-white hover:shadow-xl'>

                            {/* <p className=' text-[20px] md:text-[26px] font-medium text-homeblack leading-[31px]'>{elem.title}</p> */}
                            <p className='text-[16px] lg:text-[18px]  leading-[22px]'>
                                {elem?.description}</p>


                        </div>
                    ))}
                  
                </div>


            </div>

        </div>
    )
}

export default Certificate