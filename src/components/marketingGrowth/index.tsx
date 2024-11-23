"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Useapi } from '@/helpers/apiContext'
import { IoMdStar } from "react-icons/io";
import Button from '@/components/button';
import Link from 'next/link';
const Growth = () => {
    const [Data, setData] = useState<any>(); // Initial state should be null
    const { apidata } = Useapi(); // Destructure apidata from the context

    const [data, setdata] = useState({ first: '', second: '' })
    function splitStringByLastWords(text: any, numOfWords: number) {
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
        const result = splitStringByLastWords(Data?.title || '', 3);
        setdata(result);
    }, [Data]);
    useEffect(() => {
        if (apidata && apidata?.marketing_growth[0]
        ) {
            setData(apidata?.marketing_growth[0]);
        }
    }, [apidata]);

    // Effect to control body scroll
    return (
        <div className='w-full bg-lightblue py-12 lg:py-16'>
            <div className="flex flex-wrap lg:flex-nowrap justify-between  gap-7 items-center px-4 w-full xl:w-[75%] mx-auto">
                <div className=' mx-auto w-full lg:max-w-[50%] '>
                    <div className='flex  flex-wrap justify-center md:flex-nowrap gap-3'>
                        {/* {
                        [ 1, 4].map((elem: any) => ( */}
                        <div className='bg-white flex flex-col gap-3 justify-center items-center w-[162px] h-[150px]
                         md:w-[345px] min-h-[201px] text-homeblack text-center hover:bg-blue hover:text-white rounded-xl'>
                            <p className=' text-[28px] md:text-[38px] font-medium'>10,000+</p>
                            <p>Happy Clients</p>
                        </div>
                        <div className='bg-white flex flex-col gap-3 justify-center items-center w-[162px] h-[150px] md:w-[345px] min-h-[201px] text-homeblack text-center hover:bg-blue hover:text-white rounded-xl'>
                            <p className=' text-[28px] md:text-[38px] font-medium'>87%</p>
                            <p>Retention Rate</p>
                        </div>
                        {/* ))
                    } */}
                    </div>
                    <div className='flex  mt-3 flex-wrap justify-center md:flex-nowrap gap-3'>
                        {/* {
                        [ 3, 4].map((elem: any) => ( */}
                        <div className='bg-white flex flex-col gap-3 justify-center items-center w-[162px] h-[150px] md:w-[345px] min-h-[201px] text-homeblack text-center hover:bg-blue hover:text-white rounded-xl'>
                            <p className=' text-[28px] md:text-[38px] font-medium'>$1B+</p>
                            <p>Revenue Generated</p>
                        </div>
                        <div className='bg-white flex flex-col gap-3 justify-center items-center w-[162px] h-[150px] md:w-[345px] min-h-[201px] text-homeblack text-center hover:bg-blue hover:text-white rounded-xl'>
                            <p className=' text-[28px] md:text-[38px] font-medium'>3M+</p>
                            <p>Leads Generated</p>
                        </div>
                        {/* ))
                    } */}
                    </div>
                </div>
                <div className='flex items-center flex-col gap-2'>
                    <div className=' md:w-[80%] lg:w-full text-center lg:text-left'>

                        <p className='  text-[28px] lg:text-[38px] xl:text-[48px]  font-bold lg:leading-[58px]'><span className='text-pink'>{data.first}</span>{data.second}</p>
                        <div
                            className="text-homegrey mt-3 text-[16px] lg:text-[18px] leading-[21px]"
                            dangerouslySetInnerHTML={{ __html: Data?.description }}
                        ></div>

                    </div>
                    {/* <div className='flex flex-wrap justify-center md:justify-start sm:flex-nowrap mt-5 gap-2'>
                        <div className='bg-white p-3 flex gap-3 rounded-xl'>
                            <div className='rounded-full flex justify-center items-center size-[63px]'>
                                <Image
                                    src={'/images/growth-person.png'}
                                    alt={''}
                                    height={60}
                                    width={163}
                                    className={''}
                                />
                            </div>
                            <div>
                                <p className='text-homeblack text-[18px]'>Rajat Sharma</p>
                                <div className='flex gap-1 text-[20px] text-blue'>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <p className='text-homegrey text-[14px]'>“Great Work, boost conve...</p>
                            </div>
                        </div>
                        <div className='bg-white p-3 flex gap-3 rounded-xl'>
                            <div className='rounded-full flex justify-center items-center size-[63px]'>
                                <Image
                                    src={'/images/growth-person.png'}
                                    alt={''}
                                    height={60}
                                    width={163}
                                    className={''}
                                />
                            </div>
                            <div>
                                <p className='text-homeblack text-[18px]'>Rajat Sharma</p>
                                <div className='flex gap-1 text-[20px] text-blue'>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <p className='text-homegrey text-[14px]'>“Great Work, boost conve...</p>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg lg:hidden xl:flex items-center min-h-full p-3'>
                            <p className='text-blue text-[20px]'>5k+</p>
                        </div>
                    </div> */}
                    <div className='flex  mt-2'>
                        <Link href={'/get-a-free-quote'}>
                            <Button content={'Know More'} />
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
};
export default Growth;