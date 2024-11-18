"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '@/components/button'
import Link from 'next/link';
import ClientsCount from '@/components/ClientsCount'
const Choose = ({props}:any) => {
  
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
    const result = splitStringByLastWords(props?.title || '', 2);
    setdata(result);
  }, [props]);


  return (
    <div className='w-full bg-white py-10 lg:py-20'>
      <div  className=' h-[236px] leading-[29px] md:w-[80%] px-4 lg:w-[40%] text-center mx-auto  md:text-left pt-4  flex flex-col gap-3'>
        <h2 className=' text-[28px] lg:text-[38px] xl:text-[48px] text-center  font-bold'>{data.first} <span className='text-pink'>{data.second}</span></h2>
        {/* <p className='text-[24px] font-medium'>{props?.subtitle}</p> */}
        <p className='text-[16px] lg:text-[18px] text-center text-homegrey mt-4 font-normal leading-tight'>
          {props?.description}
        </p>
      </div>
      <div className='w-full px-4 xl:w-[75%] mx-auto flex justify-center gap-5 flex-wrap '>
        {props?.cards &&props?.cards.map((card: any, index: number) => (
          <div key={index} className='min-h-[284px] lg:w-[30%]'>

            <div key={index} className='max-w-[404px] hover:shadow-xl border-[2px] relative border-lightblue min-h-[219px] bg-white rounded-xl group leading-[29px] p-10 flex flex-col gap-3'>
              <div className='bg-lightblue absolute -top-14 rounded-xl p-4 w-[110px] h-[90px] flex justify-center items-center'>
                <Image src={card.icon} alt={card.title} height={62} width={62} />
              </div>
              <p className=' text-[22px] lg:text-[24px] font-bold '>{card.title}</p>
              <p className='text-[16px] text-homegrey leading-tight'>
                {card.description}
              </p>
            </div>
          </div>
        ))}
        <div className='sm:h-[284px] lg:w-[30%] flex  justify-center items-center'>
          <div  className='flex flex-col justify-center items-center gap-2'>
            <div>
              <Link href={'/contact-us'}>
            <Button content={'Contact Us'}/>
              </Link>
            </div>
            <ClientsCount/>

           
          </div>
        </div>
      </div >
    </div>
  );
}

export default Choose;
