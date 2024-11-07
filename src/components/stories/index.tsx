"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { PiArrowUpRight } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

const Stories = ({props}:any) => {
    const router=useRouter()
    return (
        <div className='relative'>
            <div className='w-full py-12'>
                <div className='xl:w-[75%] w-full px-6 xl:px-0 mx-auto'>
                    <p className='text-[32px] text-center lg:text-[48px] font-bold text-homeblack'>Stories</p>
                    <div className='flex gap-3 mt-6 flex-wrap justify-center'>
                        {
                           props?.map((elem: any, index: number) => (
                                <div
                                    key={index}
                                    className='relative bg-cover bg-center h-[573px]  md:w-[32%] lg:w-[24%] justify-center group rounded-lg'
                                    style={{ backgroundImage: `url(${elem?.image})` }} onClick={()=>router.push(`/web-stories/hijiokok`)}>
                                    <div className='w-full h-full rounded-lg bg-gradient-to-t from-black to-transparent flex flex-col justify-between p-4'>
                                        <div className='flex justify-end'>
                                            <div className='min-w-[42px] h-[42px] rounded-full flex justify-center items-center group-hover:bg-white duration-200'>
                                                <PiArrowUpRight className='text-pink text-[28px] duration-200 group-hover:rotate-[45deg]' />
                                            </div>
                                        </div>
                                        <div className='text-white'>
                                        <p
  className="text-[18px] font-bold leading-[21px]"
  dangerouslySetInnerHTML={{ __html: elem?.title }}
></p>

                                            <p className='text-[14px] mt-1'>
                                            {elem?.description}
                                            </p>
                                            <div className='mt-4'>
                                                <p className='font-medium'>{elem?.by_name}</p>
                                                <p>On {elem?.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Stories;
