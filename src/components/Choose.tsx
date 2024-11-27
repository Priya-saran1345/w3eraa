"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '@/components/button';
import Link from 'next/link';
import ClientsCount from '@/components/ClientsCount';

const Choose = ({ props }: any) => {
  
  const [data, setdata] = useState({ first: '', second: '' });

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
    <div className='w-full bg-white py-8 lg:py-20'>
      <div className='mb-10 leading-[29px] md:w-[80%] px-4 lg:w-[40%] text-center mx-auto md:text-left pt-4 flex flex-col gap-3'>
        <h2 className='text-center font-bold'>
          {data.first} <span className='text-pink'>{data.second}</span>
        </h2>
        <p className='text-[16px] lg:text-[18px] text-center text-homegrey mt-4 font-normal leading-tight'>
          {props?.description}
        </p>
      </div>
      <div className='w-full px-4 xl:w-[95%]  2xl:w-[75%] mx-auto flex justify-center gap-5 flex-wrap'>
        <div className="flex flex-wrap w-full gap-5">
          {props?.cards && props?.cards.map((card: any, index: number) => (
            <div key={index} className='flex-1 min-h-[200px] mt-20 min-w-full sm:min-w-[45%] lg:min-w-[30%]'>
              <div className='duration-300 ease-in-out hover:shadow-xl border-[2px] relative border-lightblue bg-white rounded-xl
               group leading-[29px] p-10 flex flex-col gap-3 h-full'>
                <div className='bg-lightblue absolute -top-14 left-[37%] md:left-8 rounded-xl p-4 w-[110px] h-[90px] flex justify-center items-center'>
                  <Image src={card.icon} alt={card.icon_alt} height={62} width={62} />
                </div>
                <p className='text-[22px] text-center md:text-left lg:text-[24px] font-bold'>{card.title}</p>
                <p className='text-[16px] text-center md:text-left text-homegrey leading-tight'>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
          <div className='h-[150px] mx-auto sm:mx-0 sm:h-[284px] sm:mt-20  sm:min-w-[45%] lg:min-w-[30%] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div>
                <Link href={'/contact-us'}>
                  <Button content={'Contact Us'} />
                </Link>
              </div>
              <ClientsCount />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
