"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Useapi } from '@/helpers/apiContext'
import Button from '@/components/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Packages = ({props}:any) => {
// Destructure apidata from the context
const Router = useRouter()
    
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
            <div className='w-full xl:w-[95%]  2xl:w-[75%] mx-auto px-4'>
                <h2 className=' capitalize text-center text-homeblack lg:text-left font-bold'>{data.first}
                     <span className='text-pink'> {data.second}</span></h2>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap mt-10 justify-center gap-5 items-center px-4 lg:px-3 w-full xl:w-[95%]  2xl:w-[75%] mx-auto">
                {props?.map((elem: any, i:number) => (
                    <div key={i} className='rounded-xl items-center 
                    sm:items-start text-center sm:text-left px-4 2xl:px-8 py-8 
                     w-[97%] sm:w-[45%] lg:w-[23%]
                     h-[357px] flex flex-col  gap-2 justify-between bg-white duration-300 ease-in-out hover:shadow-xl'>
                        <div className='p-4 size-[72px] flex justify-center items-center rounded-lg bg-lightblue'>
                            <Image
                                src={elem.icon}
                                alt={elem?.icon_alt}
                                height={54}
                                width={50}
                                className={''}
                            />
                        </div>
                        <p className=' text-[20px] md:text-[26px] font-medium text-homeblack leading-[31px]'>{elem.title}</p>
                        <p className='text-[16px] lg:text-[18px] text-homegrey leading-[22px]'>
                            {elem?.description}</p>
                        <div>
                            <div onClick={()=>Router.push(`/${elem?.slug}`)} className='w-fit'>

                        <Button content={'Know More'}/>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default Packages;
