"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useapi } from '@/helpers/apiContext'
import Button from '@/components/button';
import Link from 'next/link';

const driveResults = () => {
    const [Data, setData] = useState<any>(); // Initial state should be null
    const { apidata } = useapi(); // Destructure apidata from the context
    const [data, setdata] = useState({first:'',second:''})

    useEffect(() => {
        if (apidata && apidata?.valued_client[0]
        ) {
            setData(apidata?.valued_client[0]);
        }
    }, [apidata]);

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
        const result = splitStringByLastWords(Data?.title||'', 3);
        setdata(result);
    }, [Data]);

    return (
        <div className='w-full py-12 lg:py-20'>
            <div className="  px-4 w-full xl:w-[75%] mx-auto">
                <div className=' w-full sm:w-[75%] lg:w-[50%] text-center mx-auto flex flex-col gap-3'>
                    <p className=' text-[32px] leading-tight lg:text-[48px] font-bold text-black'>{data.first} <span className='text-pink'>{data.second}</span></p>
                    <p
                        className='text-[18px] leading-[22px] text-homegrey'
                        dangerouslySetInnerHTML={{ __html: Data?.description }}
                    ></p>
                </div>
                <div className='mx-auto mt-7 flex justify-center flex-wrap  lg:w-[80%]'>
                    {
                        Data?.cards?.map((elem: any) => {
                            return (
                                <div className="flex size-[150] p-2 group md:size-[181px] justify-center items-center border-[1px] border-slate-100 rounded-sm">
    <Image
        src={elem.image}
        alt=""
        height={81}
        width={165}
        className="grayscale w-[145px] lg:w-[165px] group-hover:grayscale-0 transition duration-150 ease-in-out"
    />
</div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center mt-5'>
                    <Link href={'/our-client-list'}>
                    <Button content={'Join Our Growing List of Partners'} />
                    </Link>

                </div>

            </div>
        </div>
    );
};
export default driveResults;
