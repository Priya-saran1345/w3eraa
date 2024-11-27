// 'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import CommonBanner from '@/components/Common-Banner'
import Button from '@/components/button'
// import { Useapi } from '@/helpers/apiContext';
import Loader from '@/components/loader'
import { BASE_URL } from '@/util/api'
async function getData() {
  const res = await fetch(`${BASE_URL}career/`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('career data not found');
  }
  return res.json();
}
async function getOtherData() {
  const res = await fetch(`${BASE_URL}other/career/`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('career data not found from others');
  }
  return res.json();
}
export default async function Page  ()  {
  // const {basic_details} = Useapi();
  const career = await getData();
  const apidata = await getOtherData();
  return (
    <div>
      {/* {
        !career && ! apidata&&
        <Loader />
      } */}
      {
        // career &&apidata&&
        <div>
          <Header />
          <Navbar />
          <CommonBanner title={apidata?.title} description={apidata?.body} image={apidata?.image} image_alt={apidata?.image_alt} btnlink={apidata?.button_url}
           btntext={apidata?.button_text} />
          <div className=' px-6 xl:px-0 xl:w-[95%]  2xl:w-[75%] py-12 mx-auto'>
            <h2 className='text-homeblack text-[38px] font-bold text-center'>Current Job Openings in Jaipur
            </h2>
            {
              career?.map((elem: any, index: any) => (
                <div className='mt-7' key={index}>
                  <div className='bg-lightblue rounded-lg p-5'>
                  <h3 className=' text-[20px] lg:text-[24px] font-semibold  text-homeblack px-2'>{index + 1}. &nbsp;{elem?.title}</h3>
                  </div>
                  <div className='flex justify-between mt-5 gap-8  flex-wrap'>
                    {
                      elem?.card?.map((card: any ,index:any) => (
                        <div className='rounded-xl p-4 flex flex-col w-full sm:w-[46%]  lg:w-[48%]  justify-center lg:justify-between gap-3
                         border-lightblue hover:shadow-lg border-[2px]' key={index}>
                          <p className=' text-[19px] lg:text-[20px] text-homeblack font-medium'>{card?.title}</p>
                          <p className=' text-[16px] lg:text-[18px] text-homegrey leading-[21px]'>{card?.description}</p>
                          <div className='mt-3'>
                           <a href={`tel:+918306229633`}>
                            <Button content={'Apply Now'} />
                           </a>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
          <Footer />
        </div>
      }
    </div>
  )
}

