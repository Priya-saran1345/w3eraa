'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import CommonBanner from '@/components/Common-Banner'
import Button from '@/components/button'
import { Useapi } from '@/helpers/apiContext';
import Loader from '@/components/loader'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
const Page = () => {
  const { career } = Useapi();
  const [apidata, setapidata] = useState<any>()
  const {basic_details} = Useapi();

  const fetch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}other/career/`);
      setapidata(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetch();
  }, [])
  console.log('basic detail-------',basic_details)
  return (
    <div>
      {
        !career && ! apidata&&
        <Loader />
      }
      {
        career &&apidata&&
        <div>
          <Header />
          <Navbar />
          <CommonBanner title={apidata?.title} description={apidata?.body} image={apidata?.image} image_alt={apidata?.image_alt} btnlink={apidata?.button_url}
           btntext={apidata?.button_text} />
          <div className=' px-6 xl:px-0 xl:w-[75%] py-12 mx-auto'>
            <p className='text-homeblack text-[38px] font-bold text-center'>Current Job Openings in Jaipur
            </p>
            {
              career?.map((elem: any, index: any) => (
                <div className='mt-7' key={index}>
                  <div className='bg-lightblue rounded-lg p-5'>
                  <p className='text-[24px] font-semibold  text-homeblack px-2'>{index + 1}. &nbsp;{elem?.title}</p>
                  </div>
                  <div className='flex justify-between mt-5 gap-8  flex-wrap'>
                    {
                      elem?.card?.map((card: any ,index:any) => (
                        <div className='rounded-xl p-4 flex flex-col w-full sm:w-[46%]  lg:w-[48%]  justify-center lg:justify-between gap-3
                         border-lightblue hover:shadow-lg border-[2px]' key={index}>
                          <p className='text-[20px] text-homeblack font-medium'>{card?.title}</p>
                          <p className=' text-[16px] lg:text-[18px] text-homegrey leading-[21px]'>{card?.description}</p>
                          <div className='mt-3'>
                           <a href={`tel:${basic_details?.basic_details[0].contact_job}`}>

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

export default Page