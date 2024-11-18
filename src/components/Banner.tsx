"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GoArrowLeft, GoArrowRight, GoArrowUpRight } from 'react-icons/go';
import { Useapi } from '@/helpers/apiContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import ClientsCount from './ClientsCount';

const Banner = () => {
  const [bannerData, setBannerData] = useState<any>();
  const { apidata } = Useapi();
  const { basic_details } = Useapi();

  const [data, setData] = useState({ first: '', second: '' });
  const sliderRef = useRef<Slider>(null); // Ref for the slider

  useEffect(() => {
    if (apidata && apidata?.banner[0]) {
      setBannerData(apidata?.banner[0]);
    }
  }, [apidata]);

  const splitStringByLastWords = (text: any, numOfWords: number) => {
    const words = text.split(' ');
    if (numOfWords >= words.length) {
      return { first: '', second: text };
    }
    const splitIndex = words.length - numOfWords;
    const firstPart = words.slice(0, splitIndex).join(' ');
    const secondPart = words.slice(splitIndex).join(' ');
    return { first: firstPart, second: secondPart };
  };
  useEffect(() => {
    const result = splitStringByLastWords('Recognized Excellence in Digital Marketing!', 3);
    setData(result);
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    arrows:false,
    speed: 200,
    slidesToShow: 4, // Set to 1 for mobile, adjust in responsive settings
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full relative bg-blue banner min-h-[78vh]">
        <video
          autoPlay
          loop
          muted
          className="h-[100vh] lg:h-screen hidden sm:block 2xl:h-[95vh] w-full object-cover"
        >
          <source src="/images/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="w-full sm:absolute px-6 lg:px-2 h-full top-0 left-0 flex justify-center bg-[#1090D059] items-center  min-h-[78vh]">
          <div className="w-full text-white flex flex-col justify-center  h-full items-center px-4 xl:w-[75%] mx-auto">
            <div className="flex flex-col justify-around lg:flex-row py-10 lg:py-3 xl:justify-between  items-center">
              <div>
                <div className='2xl:w-[80%]'>
                <h1
            className="font-bold text-center  sm:text-left text-[28px] lg:text-[32px] xl:text-[48px] 2xl:text-[55px] leading-tight xl:leading-[70px]"
            dangerouslySetInnerHTML={{ __html: bannerData?.title || "Default Title" }}
        />
                  <p className="text-[22px] lg:text-[28px] text-center sm:text-left font-semibold mt-3">
                    {bannerData?.subtitle}
                  </p>
                  <p className=" text-[16px] lg:text-[17px] text-center sm:text-left mt-2 ">
                    {bannerData?.description}
                  </p>
                  <div className="flex mt-3 flex-wrap gap-4 justify-center md:justify-start items-center">
                  <a href={`tel:${basic_details?.basic_details[0].phonenumber}`}>
                    <button className="flex items-center h-[55px] justify-center px-4 md:px-8 bg-white text-pink font-medium hover:text-white text-[18px] rounded-md  group hover:bg-pink transition duration-300">
                      <span  className="transition-transform duration-300 group-hover:-translate-x-2 text-[20px]">
                       Call For Sales
                      </span>
                      <GoArrowRight className="text-[20px] opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-x-2" />
                    </button>
                    </a>
                    <Link href={'/contact-us'}>
                    <button className="flex items-center hover:bg-white hover:text-pink font-medium justify-center  px-4 md:px-8 text-[18px]
                     text-white rounded-md h-[55px] group bg-pink transition duration-300">
                      <span className="transition-transform duration-300 group-hover:-translate-x-2 text-[20px]">
                        Contact Us
                      </span>
                      <GoArrowRight className="text-[20px] opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-x-2" />
                    </button>
                       </Link>
                      < ClientsCount/>
                   
                  </div>
                </div>

                <div className='mt-5 w-full max-w-[90vw] px-3 lg:px-1 xl:max-w-[70vw]'>
                  <div className='flex justify-between'>
                    <p className=' text-[24px] lg:text-[28px] font-medium'>  {bannerData?.our_core_services}</p>
                    <div className='flex gap-2 text-[24px]'>
                         <div className="arrow left  hover:text-pink  cursor-pointer text-[24px]" onClick={() => sliderRef.current?.slickPrev()}><GoArrowLeft /></div>
                         <div className="arrow right hover:text-pink cursor-pointer text-[24px]" onClick={() => sliderRef.current?.slickNext()}><GoArrowRight /></div>
                    </div>
                  </div>
                  <Slider ref={sliderRef} {...settings} className="mt-5">
                    {bannerData?.card.map((service:any, index:any) => (
                      <Link href={`${service?.slug}`}  key={index}>
                    
                      <div
                       
                        className='rounded-2xl border-[1px] max-w-[297px] hover:bg-white h-[180px] hover:text-homeblack group flex justify-between items-start gap-4 p-5'
                      >
                        <div className='flex gap-4'>
                          <div>
                            <p className='text-[20px] font-medium group-hover:font-semibold'>{service.title}</p>
                            <p className='mt-3 group-hover:text-homegrey'>{service.description}</p>
                          </div>
                          <div className='flex justify-center items-center min-w-[45px] h-[45px] text-[28px] rounded-full border-[1px] border-white group-hover:bg-pink group-hover:text-white'>
                            <GoArrowUpRight className='group-hover:rotate-[45deg] duration-200' />
                          </div>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full border-b-2 border-lightblue mx-auto'>
        <div className="w-full px-6 xl:w-[75%] mx-auto ">
          <p className=" text-[28px] lg:text-[38px] xl:text-[48px] text-homeback font-bold mt-8 mb-3">
            {data.first} <span className='text-pink'>{data.second}</span>
          </p>
          <div className="bg-white flex flex-wrap xl:flex-nowrap justify-center gap-4 items-center rounded-xl py-5 md:py-10">
            {apidata?.brand.map((elem: any, index: number) => (
              <React.Fragment key={index}>
             
                <div className='h-[140px] min-w-[100px] md:size-[140px] w-[140px] rounded-full flex justify-center items-center border-[1px] border-lightblue'>
                  <div>
                    <Image
                      src={elem.image}
                      loading='eager'

                      alt={`${elem?.image_alt}`}
                      height={114}
                      width={
                        100}
                      
                    />
                  </div>
                </div>
                
                {index < 7 && (
                  <div className="h-[90px] hidden md:block w-[1px] bg-slate-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
