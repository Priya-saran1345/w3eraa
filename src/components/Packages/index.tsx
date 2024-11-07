"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useapi } from '@/helpers/apiContext'
import Button from '@/components/button';

const Packages = ({props}:any) => {
// Destructure apidata from the context

    
    const [data, setdata] = useState({first:'',second:''})

    function splitStringByLastWords(text:any, numOfWords:number) {
        const words = text.split(' '); // Split the string by spaces to get individual words
        
        if (numOfWords >= words.length) {
            return { first: '', second: text };
        }
        
        const splitIndex = words.length - numOfWords;
        const firstPart = words.slice(0, splitIndex).join(' ');
        const secondPart = words.slice(splitIndex).join(' ');
        
        return { first: firstPart, second: secondPart };
    }
      
      useEffect(() => {
        const result = splitStringByLastWords(' Our Digital Marketing Packages', 3);
        setdata(result);
    }, []);
    // Effect to control body scroll
    return (
        <div className='w-full bg-lightblue  py-12 lg:py-16'>
            <div className='w-full xl:w-[75%] mx-auto px-4'>
                <p className=' text-[32px] lg:text-[48px] capitalize text-center lg:text-left font-bold'>{data.first} <span className='text-pink'> {data.second}</span></p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap mt-10 justify-center gap-5  items-center px-4 w-full xl:w-[75%] mx-auto">

                {props?.map((elem: any) => (
                    <div className='rounded-xl p-8 w-[347px] min-h-[357px] flex flex-col gap-2 justify-between bg-white hover:shadow-xl'>
                        <div className='p-4 size-[72px] flex justify-center items-center rounded-lg bg-lightblue'>
                            <Image
                                src={elem.icon}
                                alt={''}
                                height={44}
                                width={30}
                                className={''}
                            />
                        </div>
                        <p className=' text-[22px] md:text-[26px] font-medium text-homeblack leading-[31px]'>{elem.title}</p>
                        <p className='text-[18px] text-homegrey leading-[22px]'>
                            {elem?.description}</p>
                        <div>
                        {/* <Button content={'Learn More'}/> */}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default Packages;