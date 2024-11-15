"use client";
import React from 'react';
import Slider from 'react-slick'; // Import the Slick component
import { MdOutlineStar } from 'react-icons/md';
import Image from 'next/image';
import Button from '@/components/button';
import { CiUser } from 'react-icons/ci';
import { RiVerifiedBadgeLine } from "react-icons/ri";
import  Link from 'next/link';

// Slider component
const Index = ({ props }: any) => {

  console.log('props',props)
  // Slick slider settings for smooth transitions
  const settings = {
    infinite: true,  // Infinite looping of slides
    speed: 500,      // Duration of the slide transition
    slidesToShow: 3.5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Delay for autoplay transition (2000ms = 2 seconds)
    centerMode: true, // Ensures the active slide is centered
    focusOnSelect: true, // Click on a slide to focus on it
    responsive: [
        {
            breakpoint: 1700, // Tablet and smaller screens
            settings: {
              slidesToShow: 3, // 2 slides on tablet
              centerMode: false, // Disable center mode on tablet
              arrows: true, // Show arrows on tablet
            },
          },
      {
        breakpoint: 1024, // Tablet and smaller screens
        settings: {
          slidesToShow: 2, // 2 slides on tablet
          centerMode: false, // Disable center mode on tablet
          arrows: true, // Show arrows on tablet
        },
      },
      {
        breakpoint: 768, // Mobile and smaller screens
        settings: {
          slidesToShow: 1, // 1 slide on mobile
          centerMode: false, // Disable center mode on mobile
          arrows: true, // Show arrows on mobile
        },
      },
    ],
  };

  // Render star rating dynamically based on review.rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<MdOutlineStar key={i} className="text-pink text-[18px]" />);
      } else {
        stars.push(<MdOutlineStar key={i} className="text-gray-300 text-[18px]" />);
      }
    }
    return stars;
  };
  return (
    <div className='bg-white py-12 hidden md:block lg:py-16'>
      <div className='xl:w-[75%] px-6 mx-auto'>
        {/* Title and Overall Ratings Section */}
        <p className='text-[28px] text-homeblack font-semibold lg:text-[38px]'>
          Our Ratings on Clutch
        </p>
        <div className='mt-8 flex border-b-2 flex-wrap border-lightblue'>
          <div className='px-10 border-r-2 py-4 border-lightblue'>
            <div className='flex justify-start items-center '>
              <p className='text-[28px] font-semibold text-homeblack'>4.9</p>
              <div className='flex text-pink text-[20px]'>
                {renderStars(5)} {/* Example static rating */}
              </div>
            </div>
            <p className='text-[16px] text-pink'>27 Reviews</p>
          </div>
          <div className='px-10 border-r-2 py-4 border-lightblue'>
            <p>Powered By</p>
            <Image
              src='/images/cluth.png'
              height={59}
              width={106}
              alt='Clutch logo'
            />
          </div>
          <div className='flex items-center mt-3 mx-8'>
            <Link href={'/testimonials'}>
            <Button content={'W3era Web Technology Pvt Ltd Reviews'}></Button>
            </Link>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className='mt-5'>
          <div className='flex justify-between'>
            <p className='text-[24px] text-homeblack font-semibold'>
              Customer Reviews
            </p>
          </div>

          {/* Slick Carousel for Reviews */}
          <div className='mt-5'>
            <Slider {...settings} className='flex overflow-x-hidden'>
              {props?.map((review: any, index: any) => (
                <div key={index} className='px-4'>
                  <div className='flex flex-col gap-4 border-2 max-w-[370px] min-w-[320px] border-lightblue p-6 h-[261px] hover:shadow-lg rounded-lg'>
                    <div className='flex justify-between'>
                      <div className='flex justify-start items-center '>
                        <p className='text-[20px] font-semibold text-homeblack'>
                          {parseFloat(review?.rating).toFixed(1)}
                        </p>
                        <div className='flex text-pink text-[18px]'>
                          {renderStars(review?.rating)} {/* Render dynamic stars */}
                        </div>
                      </div>
                      <div className='flex gap-2'>
                        <RiVerifiedBadgeLine />
                        <p className='text-[12px] text-homeblack'>
                          Verified Review
                        </p>
                      </div>
                    </div>
                    <div className='bg-lightblue p-5 rounded-lg text-homegrey'>
                    <p>{review.review}</p>

                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='flex justify-center items-center bg-lightblue rounded-full min-w-[49px] h-[49px]'>
                        <CiUser className='text-[28px] text-blue' />
                      </div>
                      <p className='text-[14px] font-medium'>{review.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
