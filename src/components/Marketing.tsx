"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Useapi } from '@/helpers/apiContext'
import { GoArrowUpRight } from "react-icons/go";
import Button from '@/components/button';
import Link from 'next/link';
const Marketing = () => {
  const [marketingData, setmarketingData] = useState<any>(); // Initial state should be null
  const { apidata } = Useapi(); // Destructure apidata from the context
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
    const result = splitStringByLastWords(marketingData?.title||'', 3);
    setdata(result);
}, [marketingData]);
  useEffect(() => {
    if (apidata && apidata?.aboutsection[0]) {
      setmarketingData(apidata?.aboutsection[0]);
    }
  }, [apidata]);
  return (
    <div className='w-full bg-white py-8'>
      <div className=" flex justify-between flex-col md:flex-row items-center  px-4 w-full xl:w-[75%] mx-auto">
        <div className="lg:w-1/2 text-center flex flex-col gap-3 md:text-left">
          <p className='text-homeblack text-[18px] lg:text-[20px] font-semibold  uppercase'>{marketingData?.subtitle}</p>
          
          <p className='  font-bold  text-[28px] lg:text-[38px] xl:text-[48px] lg:leading-[58px]'>{data.first} <span className='text-pink'>{data.second}</span></p>
          <p className='text-homegrey text-[16px] lg:text-[18px]'>{marketingData?.summary}</p>
          <div className='flex gap-4 mt-5 flex-wrap sm:flex-nowrap justify-between'>
            <div className="bg-lightblue p-5 rounded-lg items-start flex gap-4 group hover:bg-white duration-300 hover:shadow-lg transition-all">
              <p className="text-homeblack text-[16px] lg:text-[18px]">
              {marketingData?.box1}
              </p>
              <div className="rounded-full bg-white flex justify-center items-center min-w-[45px] h-[45px] group-hover:bg-lightpink transition-colors duration-300">
                <GoArrowUpRight className="transform transition-transform duration-300 -rotate-30 text-[28px] text-pink group-hover:rotate-45" />
              </div>
            </div>

            <div className="bg-lightblue p-5 rounded-lg items-start flex gap-4 group hover:bg-white duration-300 hover:shadow-lg transition-all">
              <p className="text-homeblack text-[16px] lg:text-[18px]">
              {marketingData?.box2}
              </p>
              <div className="rounded-full bg-white flex justify-center items-center min-w-[45px] h-[45px] group-hover:bg-lightpink transition-colors duration-300">
                <GoArrowUpRight className="transform transition-transform duration-300 -rotate-30 text-[28px] text-pink group-hover:rotate-45" />
              </div>
            </div>
          </div>
          <div className=' w-fit mt-6'>
            <Link href={'/contact-us'}>
          <Button content={'Contact US'}/>
            </Link>
          </div>
        </div>
        <div className="mt-7 md:hidden lg:block md:mt-0">
          <Image
            src={marketingData?.image}
            alt={marketingData?.image_alt}
            loading='eager'

            height={580}
            width={588}
          />
        </div>
      </div>
    </div>
  )
}

export default Marketing
