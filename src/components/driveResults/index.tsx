"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Useapi } from '@/helpers/apiContext'
const DriveResults = ({Data}:any) => {
    // const [Data, setData] = useState<any>(); // Initial state should be null
    // const { apidata } = Useapi(); // Destructure apidata from the context
    // useEffect(() => {
    //     if (apidata && apidata?.drive_result
    //     ) {
    //         setData(apidata?.drive_result);
    //     }
    // }, [apidata]);


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
    }, []);
    
    return (
        <div className='w-full bg-lightblue  py-12 lg:py-16'>
            <div className='w-full xl:w-[95%]  2xl:w-[75%] mx-auto px-4'>
                <h2 className='  text-homeblack text-center 
                lg:text-left capitalize font-bold'>{data.first} <span className='text-pink'>{data.second}</span></h2>
            </div>

            <div className="flex mt-10 flex-wrap lg:flex-nowrap justify-center gap-5  items-center px-4 xl:px-0 w-full xl:w-[95%]  2xl:w-[75%] mx-auto">

                {Data?.map((elem: any, i:number) => (
                    <div key={i} className='rounded-xl px-4 2xl:px-8 py-8 w-[347px] text-center sm:text-left sm:w-[300px] md:w-[347px] h-[350px] 
                    items-center sm:items-start flex flex-col gap-2 justify-between bg-white duration-300 hover:shadow-xl'>
                        <div className='p-4 size-[72px] flex justify-center items-center rounded-lg bg-lightblue'>
                            <Image
                                src={elem.icon}
                                alt={elem?.icon_alt}
                                height={54}
                                width={50}
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
