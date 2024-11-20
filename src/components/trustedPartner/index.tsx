import React, { useState } from 'react';
import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';

const Index = ({ props }: any) => {
    const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

    // Function to handle service click
    const handleServiceClick = (index: number) => {
        setSelectedServiceIndex(index);
    };

    return (
        <div className='bg-white xl:w-[75%] mx-auto px-6 py-12 lg:py-16'>
            <h2 className='text-homeblack font-bold '>{props?.title}</h2>
            <p className='text-homegrey text-[18px] mt-3'>{props?.subtitle}</p>
            <div className='my-8 flex md:flex-nowrap flex-wrap justify-between gap-10'>
                {/* Left Side: List of Services */}
                <div className='flex flex-wrap justify-center md:flex-col gap-4'>
                    {props?.card.map((elem: any, index: number) => (
                        <div
                            key={index}
                            onClick={() => handleServiceClick(index)}
                            className={`font-medium text-[20px] w-[326px] text-center text-homeblack py-4 border-[1px] border-lightblue rounded-xl hover:shadow-lg cursor-pointer ${
                                selectedServiceIndex === index ? 'bg-lightblue' : ''
                            }`}
                        >
                            <p>{elem.service_name}</p>
                        </div>
                    ))}
                </div>
                {/* Right Side: Display Selected Service Details */}
                <div className='bg-lightblue w-[1079px] p-8 rounded-lg min-h-full'>
                    {/* <div className='bg-white rounded-lg flex justify-center items-center w-[104px] h-[104px]'> */}
                    <div className='flex justify-center items-center'>

                        <Image src={props?.card[selectedServiceIndex]?.icon||''} height={171} width={200} alt={''} />
                    </div>
                    {/* </div> */}
                    <p className='text-[18px] leading-[24px] mt-6 text-homegrey'  dangerouslySetInnerHTML={{ __html:props?.card[selectedServiceIndex]?.description || 
                        " " }}/>
                </div>
            </div>
            <div className='flex justify-center'>
            <Link href={'/our-client-list'}>

                <Button content={'Join Our Growing List of Partners'} />
                </Link>
            </div>
        </div>
   
    );
};

export default Index;
