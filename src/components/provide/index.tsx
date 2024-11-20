"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import { Useapi } from '@/helpers/apiContext';
import Button from '@/components/button';
import Link from 'next/link';

const Provide = () => {
  const { apidata } = Useapi();
  const [icons, setIcons] = useState<string[]>([]);
  const sliderRef = useRef<Slider | null>(null);
  const [data, setdata] = useState({ first: '', second: '' });
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current active slide

  function splitStringByLastWords(text: any, numOfWords: number) {
    const words = text.split(' ');
    if (numOfWords >= words.length) {
      return { first: '', second: text };
    }
    const splitIndex = words.length - numOfWords;
    const firstPart = words.slice(0, splitIndex).join(' ');
    const secondPart = words.slice(splitIndex).join(' ');
    return { first: firstPart, second: secondPart };
  }

  useEffect(() => {
    const result = splitStringByLastWords('What We Provide', 1);
    setdata(result);
  }, []);

  const settings = {
    infinite: true,
    speed: 300,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex), // Track slide changes
  };

  useEffect(() => {
    if (apidata?.we_provide) {
      const icons = apidata.we_provide.map((elem: any) => elem?.icon);
      setIcons(icons);
    }
  }, [apidata]);

  const handleSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className='w-full bg-white py-8 lg:py-20'>
      <div className='w-full xl:w-[75%] px-4 flex flex-col justify-center items-center mx-auto'>
        <h2 className=' font-bold text-homeblack'>
          {data.first} <span className='text-pink'>{data.second}</span>
        </h2>
        <div className='flex justify-center flex-wrap gap-6 mt-8'>
  {icons.map((icon, index) => (
    <div
      key={index}
      className={`flex justify-center items-center w-[70px] h-[70px] lg:w-[92px] lg:h-[92px] group 
        bg-lightblue rounded-full transition-colors duration-300 cursor-pointer ${
          currentSlide === index ? 'bg-pink text-white' : 'hover:bg-pink'
        }`}
      onMouseEnter={() => handleSlide(index)}
    >
      <Image
        src={icon}
        alt={`Icon ${index}`}
        height={51}
        width={49}
        className={`transition duration-300 w-[35px] lg:w-[49px] h-[45px] lg:h-[51px] ${
          currentSlide === index ? 'brightness-0 invert' : 'group-hover:brightness-0 group-hover:invert'
        }`}
      />
    </div>
  ))}
</div>

        <div className='bg-lightblue p-4 pb-12 md:p-12 w-full rounded-md mt-12 overflow-hidden'>
          <Slider ref={sliderRef} {...settings}>
            {apidata?.we_provide.map((elem: any, index: number) => (
              <div key={index}>
                <div className='flex flex-col md:flex-row gap-7 md:gap-20 items-center'>
                  <Image
                    src={elem?.image}
                    alt={elem?.image_alt}
                    height={426}
                    width={515}
                    className='w-[80%] h-[326px] lg:h-[426px] lg:w-[515px] hidden sm:flex'
                  />
                  <div className='text-center md:text-left'>
                    <p className=' text-[24px] lg:text-[28px] text-homeblack font-semibold mb-4'>{elem?.title}</p>
                    <p
                      className="text-homegrey text-[16px] lg:text-[18px]"
                      dangerouslySetInnerHTML={{ __html: elem?.description }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className='mt-6'>
          <Link href={'/get-a-free-quote'}>
          <Button content={'Get your Free Trial'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Provide;
