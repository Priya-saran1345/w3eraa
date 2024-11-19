"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '@/components/button'
import Link from 'next/link';
import ClientsCount from '@/components/ClientsCount'
import { Descriptions } from 'antd';
import { image } from 'framer-motion/client';
const CustomerChoose = () => {
    const dataCard = {
        title: 'Why Should Customers Choose W3era?',
        descriptions: 'Experience the competence of our digital marketing services as we amplify brand visibility, cultivate high-quality leads, and yield result-driven results',
        card: [{
            image: '/images/c1.svg',
            title: '15+ Years in Business'
            ,
            Descriptions: 'For over fifteen years, we have been delivering excellent SEO and Digital Marketing services to loads of customers, and each year, we become stronger and stronger in our vision and mission'

        },
        {
            image: '/images/c2.svg',
            title: 'Gratified Clients'
            ,
            Descriptions: 'We have guided 3M+ leads for our clients, and the number continues to rise. We have about 87 percent of repeated customers.'

        },
        {
            image: '/images/c3.svg',
            title: 'High Technical Integrity'
            ,
            Descriptions:
                'We are adopting innovative SEO strategies to make your score higher; helping thousands of diverse organizations grow online and offline.'

        },
        {
            image: '/images/c4.svg',
            title: 'Team of Expertise'
            ,
            Descriptions:
                'We have a team of in-house marketers who are professionals in their segments and bring desired results.'
        },
        {
            image: '/images/c5.svg',
            title: 'New-Age Strategies'
            ,
            Descriptions:
                'We are constantly altering our SEO tactics to keep the search scores in line with the current search engine guidelines.'
        },
        {
            image: '/images/c6.svg',
            title: '360 Degree Approach'
            ,
            Descriptions:
                'We embrace a 360-degree approach, implement agile methods, and use the new techniques to improve your search engine result pages ranking.'
        },


        ]
    }
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
        const result = splitStringByLastWords(dataCard?.title || '', 2);
        setdata(result);
    }, []);


    return (
        <div className='w-full bg-white py-10 lg:py-20'>
            <div className=' h-[236px] leading-[29px] md:w-[80%] px-4 lg:w-[40%] text-center mx-auto  md:text-left pt-4  flex flex-col gap-3'>
                <h2 className=' text-[28px] lg:text-[38px] xl:text-[48px] lg:leading-[52px] text-center  font-bold'>{data.first} <span className='text-pink'>{data.second}</span></h2>
                {/* <p className='text-[24px] font-medium'>{props?.subtitle}</p> */}
                <p className='text-[16px] lg:text-[18px] text-center text-homegrey mt-4 font-normal leading-tight'>
                    {dataCard?.descriptions}
                </p>
            </div>
            <div className='w-full px-4  xl:w-[75%] mx-auto flex justify-center gap-5 flex-wrap '>
                {dataCard?.card?.map((card: any, index: number) => (
                    <div
                        key={index}
                        className="max-w-[404px] text-center group mt-16 hover:shadow-xl border-[2px] relative border-lightblue min-h-[219px] bg-white rounded-xl group leading-[29px] p-10 flex flex-col gap-3"
                    >
                        <div
                            className="bg-lightblue group-hover:bg-blue duration-100 absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 w-[120px] h-[120px] flex justify-center items-center"
                        >
                            <Image
                                src={card.image}
                                alt={card.title}
                                height={56}
                                width={56}
                                className="group-hover:filter group-hover:invert group-hover:brightness-0"
                            />
                        </div>
                        <p className="text-[22px] text-homeblack mt-10 lg:text-[24px] font-bold">{card.title}</p>
                        <p className="text-[16px] text-homegrey leading-tight">
                            {card.Descriptions}
                        </p>
                    </div>
                ))}
                <div className='sm:h-[284px] lg:w-[30%] flex  justify-center items-center'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div>
                            <Link href={'/contact-us'}>
                                <Button content={'Contact Us'} />
                            </Link>
                        </div>
                        <ClientsCount />
                    </div>
                </div>
            </div >
        </div>
    );
}

export default CustomerChoose;
