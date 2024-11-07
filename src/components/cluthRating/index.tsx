"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import Image from 'next/image';
import Button from '@/components/button';
import { CiUser } from 'react-icons/ci';
import { RiVerifiedBadgeLine } from "react-icons/ri";

const Index = () => {
    const reviews = [
        { rating: 5.0, review: "They were a dedicated and experienced professional team.", user: "Manager, GuestBlog" },
        { rating: 4.5, review: "Great experience working with them.", user: "Owner, TechBiz" },
        { rating: 5.0, review: "Amazing service and support.", user: "CEO, StartUp Inc." },
        { rating: 4.8, review: "Professional and timely delivery.", user: "Director, HealthCare Ltd." },
        { rating: 5.0, review: "Top-notch skills and friendly team.", user: "Project Manager, BuildCo" },
        { rating: 4.9, review: "They understood our needs and delivered.", user: "Founder, EduLearn" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const moveSlider = useCallback((direction:any) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => {
            if (direction === 'next') {
                return prevIndex === reviews.length - 3 ? 0 : prevIndex + 1;
            } else {
                return prevIndex === 0 ? reviews.length - 3 : prevIndex - 1;
            }
        });
    }, [isTransitioning, reviews.length]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Match this with the transition duration in CSS

        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            moveSlider('next');
        }, 2000);

        return () => clearInterval(interval);
    }, [moveSlider]);

    return (
        <div className='bg-white py-12 lg:py-16'>
            <div className='xl:w-[75%] px-6 mx-auto'>
                <p className='text-[28px] text-homeblack font-semibold lg:text-[38px]'>Our Ratings on Clutch</p>
                <div className='mt-8 flex border-b-2 flex-wrap border-lightblue'>
                    <div className='px-10 border-r-2 py-4 border-lightblue'>
                        <div className='flex justify-start items-center '>
                            <p className='text-[28px] font-semibold text-homeblack'>4.9</p>
                            <div className='flex text-pink text-[20px]'>
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                            </div>
                        </div>
                        <p className='text-[16px] text-pink'>27 Reviews</p>
                    </div>
                    <div className='px-10 border-r-2 py-4 border-lightblue'>
                        <p>Powered By</p>
                        <Image src='/images/cluth.png' height={59} width={106} alt='Clutch logo'></Image>
                    </div>
                    <div className='flex items-center mx-8'>
                        <Button content={'W3era Web Technology Pvt Ltd Reviews'}></Button>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between mt-5'>
                        <p className='text-[24px] text-homeblack font-semibold'>Customer Reviews</p>
                    </div>
                    
                    <div className='mt-5 relative overflow-hidden'>
                        <div 
                            className='flex transition-transform duration-500 ease-in-out'
                            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                        >
                            {reviews.map((review, index) => (
                                <div key={index} className='min-w-[calc(100%/3)] flex-shrink-0 px-2'>
                                    <div className='flex flex-col gap-4 border-2 border-lightblue p-6 h-[261px] hover:shadow-lg rounded-lg'>
                                        <div className='flex justify-between'>
                                            <div className='flex justify-start items-center '>
                                                <p className='text-[20px] font-semibold text-homeblack'>{review.rating}</p>
                                                <div className='flex text-pink text-[18px]'>
                                                    <MdOutlineStar />
                                                    <MdOutlineStar />
                                                    <MdOutlineStar />
                                                    <MdOutlineStar />
                                                    <MdOutlineStar />
                                                </div>
                                            </div>
                                            <div className='flex gap-2'>
                                                <RiVerifiedBadgeLine />
                                                <p className='text-[12px] text-homeblack '>Verified Review</p>
                                            </div>
                                        </div>
                                        <div className='bg-lightblue p-5 rounded-lg text-homegrey'>
                                            <p>"{review.review}"</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='flex justify-center items-center bg-lightblue rounded-full min-w-[49px] h-[49px]'>
                                                <CiUser className='text-[28px] text-blue' />
                                            </div>
                                            <p className='text-[14px] font-medium'>{review.user}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <button 
                            onClick={() => moveSlider('prev')} 
                            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10'
                            aria-label="Previous slide"
                        >
                            &#8592;
                        </button>
                        <button 
                            onClick={() => moveSlider('next')} 
                            className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10'
                            aria-label="Next slide"
                        >
                            &#8594;
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;