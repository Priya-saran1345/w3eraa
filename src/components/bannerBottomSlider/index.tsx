'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; // Import Slider from react-slick
import { useapi } from '@/helpers/apiContext'

  const BannerBottomSlider: React.FC = () => {
  const [Data, setData] = useState<any>([]); // Initial state should be null
  const { apidata } = useapi(); // Destructure apidata from the context

  useEffect(() => {
      if (apidata && apidata?.brand) {
          setData(apidata?.brand);
      }
  }, [apidata]);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 700,
    slidesToShow:15 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
  };

  return (
    <div className="w-full py-2">
      <Slider {...settings} className='flex items-center gap-3 overflow-hidden'>
        {/* <div className='w-[108px]'>
          <Image src="/images/stripe1.png" height={71} width={108} alt="Stripe 1" />
        </div> */}
        {
          Data?.map((elem:any)=>{
            return(
            <div className='w-[108px]'>
              <Image src={`${elem?.image}`} height={71} width={108} alt="Stripe 1" />
            </div>
            )
          })
        }
        
        {/* <div  className='w-[108px]'>
          <Image src="/images/stripe2.png" height={71} width={108} alt="Stripe 2" />
        </div>
        <div  className='w-[108px]'>
          <Image src="/images/stripe3.png" height={71} width={108} alt="Stripe 3" />
        </div>
        <div className='w-[108px]'> 
          <Image src="/images/stripe4.png" height={71} width={108} alt="Stripe 4" />
        </div>
        <div className='w-[108px]'>
          <Image src="/images/stripe1.png" height={71} width={108} alt="Stripe 1" />
        </div>
        <div  className='w-[108px]'>
          <Image src="/images/stripe2.png" height={71} width={108} alt="Stripe 2" />
        </div>
        <div  className='w-[108px]'>
          <Image src="/images/stripe3.png" height={71} width={108} alt="Stripe 3" />
        </div>
        <div className='w-[108px]'> 
          <Image src="/images/stripe4.png" height={71} width={108} alt="Stripe 4" />
        </div>
        <div className='w-[108px]'>
          <Image src="/images/stripe1.png" height={71} width={108} alt="Stripe 1" />
        </div>
        <div  className='w-[108px]'>
          <Image src="/images/stripe2.png" height={71} width={108} alt="Stripe 2" />
        </div>
        <div  className='w-[108px]'>
          <Image src="/images/stripe3.png" height={71} width={108} alt="Stripe 3" />
        </div>
        <div className='w-[108px]'> 
          <Image src="/images/stripe4.png" height={71} width={108} alt="Stripe 4" />
        </div>
        <div className='w-[108px]'>
          <Image src="/images/stripe1.png" height={71} width={108} alt="Stripe 1" />
        </div>
        <div  className='w-[108px]'>
          <Image src="/images/stripe2.png" height={71} width={108} alt="Stripe 2" />
        </div>
        <div  className='w-[108px]'>
          <Image src="/images/stripe3.png" height={71} width={108} alt="Stripe 3" />
        </div>
        <div className='w-[108px]'> 
          <Image src="/images/stripe4.png" height={71} width={108} alt="Stripe 4" />
        </div> */}
      </Slider>
    </div>
  );
};

export default BannerBottomSlider;
