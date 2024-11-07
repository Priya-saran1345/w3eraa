'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import CommonBanner from '@/components/Common-Banner'
import Button from '@/components/button'
import { useapi } from '@/helpers/apiContext';
import Loader from '@/components/loader'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
const page = () => {
  const { career } = useapi();
  const [apidata, setapidata] = useState<any>()

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
          <CommonBanner title={apidata?.title} description={apidata?.body} image={apidata?.image} image_alt={apidata?.image_alt} btnlink={apidata?.button_url} btntext={apidata?.button_text} />
          <div className=' px-6 xl:px-0 xl:w-[75%] py-12 mx-auto'>
            <p className='text-homeblack text-[38px] font-bold text-center'>Current Job Openings in Jaipur
            </p>
            {
              career?.map((elem: any, index: any) => (
                <div className='mt-7'>
                  <p className='text-[24px] font-semibold mb-4 text-black px-2'>{index + 1} &nbsp;{elem?.title}</p>
                  <div className='flex justify-between gap-8  flex-wrap'>
                    {
                      elem?.card?.map((card: any) => (
                        <div className='rounded-xl p-4 flex flex-col w-full sm:w-[46%]  lg:w-[48%]  justify-center lg:justify-between gap-3 border-lightblue hover:shadow-lg border-[2px]'>
                          <p className='text-[20px] font-homeblack font-medium'>{card?.title}</p>
                          <p className='text-[18px] text-homegrey leading-[21px]'>{card?.description}</p>
                          <div className='mt-3'>

                            <Button content={'Apply Now'} />
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

export default page