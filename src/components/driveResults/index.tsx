"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Useapi } from '@/helpers/apiContext'
const DriveResults = () => {
    const [Data, setData] = useState<any>(); // Initial state should be null
    const { apidata } = Useapi(); // Destructure apidata from the context
    useEffect(() => {
        if (apidata && apidata?.drive_result
        ) {
            setData(apidata?.drive_result);
        }
    }, [apidata]);


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
        const result = splitStringByLastWords('How We Drive Results', 2);
        setdata(result);
    }, [apidata]);
    
    return (
        <div className='w-full bg-lightblue  py-12 lg:py-16'>
            <div className='w-full xl:w-[75%] mx-auto px-4'>
                <p className='  text-[28px] lg:text-[38px] xl:text-[48px] text-center lg:text-left capitalize font-bold'>{data.first} <span className='text-pink'>{data.second}</span></p>
            </div>

            <div className="flex mt-10 flex-wrap lg:flex-nowrap justify-center gap-5  items-center px-4 xl:px-0 w-full xl:w-[75%] mx-auto">

                {Data?.map((elem: any, i:number) => (
                    <div key={i} className='rounded-xl px-4 2xl:px-8 py-8 w-[347px] sm:w-[300px] md:w-[347px] min-h-[350px] flex flex-col gap-2 justify-between bg-white hover:shadow-xl'>
                        <div className='p-4 size-[72px] flex justify-center items-center rounded-lg bg-lightblue'>
                            <Image
                                src={elem.icon}
                                alt={''}
                                height={44}
                                width={30}
                                className={''}
                            />
                        </div>
                        <p className=' text-[22px] lg:text-[26px] font-medium text-homeblack leading-[31px]'>{elem.title}</p>
                        <p className='text-[16px] lg:text-[18px] text-homegrey leading-[22px]'>
                            {elem?.description}</p>
                        <div>
                           
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default DriveResults;
