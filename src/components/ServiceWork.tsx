'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientsCount from '@/components/ClientsCount';
import Link from 'next/link';
import Button from '@/components/button';

const ServiceWork = () => {
  const settings = {
    // dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Duration for each image (3 seconds)
  };

  return (
    <div className='bg-lightblue'>
      <div className='2xl:w-[75%] mx-auto px-4 lg:w-[90%] w-full lg:px-6 py-12'>

        <h2 className="text-3xl lg:text-4xl font-bold text-center md:text-left text-homeblack mb-8">
          Our Work
        </h2>
        <p className="text-homegrey text-[16px] lg:text-[18px] text-center md:text-left sm:w-[90%] mb-8">
          At W3era, we specialize in creating innovative and scalable websites, whether through custom development or platform-based solutions. Below are some of the websites we &apos;ve developed using custom code and popular platforms, showcasing our
          versatility and expertise in building both unique, tailored experiences and efficient, user-friendly solutions.
        </p>

        <div className='border-[10px] border-white rounded-3xl'>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((elem, index) => (
              <div key={index} className=' w-full rounded-3xl flex justify-center items-center'>
                <Image
                  width={1423}
                  height={411}
                  src={`/images/servicework${elem}.svg`}
                  alt={`Service Work ${elem}`}
                  className='rounded-3xl'
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex w-full flex-col mt-12 items-center gap-2">
          <div>
            <Link href="/contact-us">
              <Button content={`Let's Discuss Your Project`} />
            </Link>
          </div>
          <ClientsCount />
        </div>
      </div>
    </div>
  );
};

export default ServiceWork;
