import React from 'react'
import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go'
const index = () => {
    return (
        <div className=' w-full border-t border-[2px] border-lightblue'>
            <div className='xl:w-[75%] mx-auto px-6 my-12'>
                <p className=' text-[28px] text-center lg:text-[38px] text-homeblack font-bold'>Lorem Ipsum is simply dummy text </p>
                <div className='mt-10 flex justify-center gap-6 flex-wrap'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((elem: any) => (
                            <div className='rounded-xl p-8 sm:w-[43%] md:w-[31%] lg:w-[23%] min-h-[357px] flex flex-col gap-2 justify-between border-[2px] border-lightblue bg-white hover:shadow-xl'>
                                <div className='flex justify-between items-start'>

                                    <div className='p-4 w-[110px] h-[90px] flex justify-center items-center rounded-lg bg-lightblue'>
                                        <Image
                                            src={'/images/seo1.svg'}
                                            alt={''}
                                            height={50}
                                            width={59}
                                            className={''}
                                        />
                                    </div>
                                    <div className='w-[45px] h-[45px] rounded-full flex justify-center items-center bg-lightpink hover:bg-pink text-pink hover:text-white'>
                                    <GoArrowUpRight className='text-[28px] font-semibold' />

                                    </div>
                                </div>
                                <p className=' text-[20px] font-medium text-homeblack leading-[31px]'>Article Submission</p>
                                <p className='text-[16px] text-homegrey leading-[22px]'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                
                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default index