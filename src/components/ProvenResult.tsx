"use client"; // Ensure this is a client component in Next.js
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { Useapi } from '@/helpers/apiContext';
import Button from '@/components/button';

const CaseStudy: React.FC = () => {
    const { apidata } = Useapi();
    const [provenResult, setProvenResult] = useState<any>();
    const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index
    const Router = useRouter();
    const sliderTextRef = useRef<Slider | null>(null);
    const sliderImageRef = useRef<Slider | null>(null);

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
        const result = splitStringByLastWords(' Our Proven Results', 2);
        setdata(result);
    }, []);
    useEffect(() => {
        setProvenResult(apidata?.proven_result);
    }, [apidata]);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: (oldIndex: number, newIndex: number) => {
            setActiveIndex(newIndex);
        },
    };

    const handlePrev = () => {
        sliderTextRef.current?.slickPrev();
        sliderImageRef.current?.slickPrev();
    };

    const handleNext = () => {
        sliderTextRef.current?.slickNext();
        sliderImageRef.current?.slickNext();
    };

    return (
        <div className='w-full bg-white py-8 md:py-20'>
            <div className='w-full mx-auto p-4 md:p-16 border-[2px] border-slate-100 rounded-3xl xl:w-[82%]'>
                <div>
                    <p className=' text-[32px] lg:text-[48px] text-homeblack font-bold'>{data.first} <span className='text-pink'>{data.second}</span></p>
                </div>
                <div className='flex flex-col md:flex-row mt-5 justify-between items-center w-full md:gap-16'>
                    <div className='md:w-[40%]'>
                        {provenResult && provenResult[activeIndex] && (
                            <div className='mb-10'>
                                <div className='flex justify-start gap-2'>
                                    <div
                                        onClick={handlePrev}
                                        className=' rounded-2xl text-pink bg-lightpink p-5 flex justify-center items-center text-[24px] cursor-pointer transition duration-300'
                                    >
                                        <FaArrowLeftLong className='text-pink' />
                                    </div>
                                    <div className='border-[2px] border-lightpink rounded-2xl p-2 px-7'>
                                        <p className='text-[28px] font-semibold text-black'>
                                            {provenResult[activeIndex].title}
                                        </p>
                                    </div>
                                    <div
                                        onClick={handleNext}
                                        className=' flex bg-lightpink text-pink p-5 rounded-2xl justify-center items-center text-[24px] cursor-pointer transition duration-300'
                                    >
                                        <FaArrowRightLong />
                                    </div>
                                </div>
                                <p className='text-[24px] mt-4 font-medium text-homegrey'>
                                    {provenResult[activeIndex].subtitle}
                                </p>
                                <p 
                                    className='text-[18px] mt-4 leading-tight text-homegrey'
                                    dangerouslySetInnerHTML={{ __html: provenResult[activeIndex].description }} 
                                  />

                                <div className='mt-6 p-5 bg-lightblue w-fit rounded-2xl mb-4 md:mb-8'>
                                    <p className='text-[16px] font-bold text-homeblack'>Results</p>
                                    <div className='flex gap-10'>
                                        <div dangerouslySetInnerHTML={{ __html: provenResult[activeIndex].app_download }} />
                                        <div dangerouslySetInnerHTML={{ __html: provenResult[activeIndex].new_users }} />
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        Router.push('/case-study');
                                    }}>
                                    <Button content={'Learn More'}/>

                                </div>
                            </div>
                        )}
                    </div>

                    <div className='relative hidden md:block md:w-[60%]'>
                        <Slider ref={sliderImageRef} {...settings} className='overflow-hidden'>
                            {provenResult?.map((elem: any, index: number) => (
                                <div key={index} className='overflow-hidden min-h-[507px]'>
                                    <Image
                                        src={elem?.image}
                                        alt={`Case Study ${index + 1}`}
                                        height={507}
                                        width={829}
                                        className='w-[500px] xl:w-[829px] h-full rounded-lg'
                                    />
                                </div>
                            ))}
                        </Slider>

                        {/* Dots Navigation */}
                        {/* <div className='absolute bottom-6 left-4 flex  gap-2'>
                            {provenResult?.map((elem:any, index: number) => (
                                <div
                                    key={index}
                                    className={`w-[70px] h-[6px] rounded ${
                                        activeIndex === index ? 'bg-pink' : 'bg-white'
                                    } transition-all duration-300`}
                                />
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
