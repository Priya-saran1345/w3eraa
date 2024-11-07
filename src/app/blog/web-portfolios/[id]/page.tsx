'use client'
import Choose from '@/components/Choose'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Loader from '@/components/loader'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Useapi } from '@/helpers/apiContext';
import { usePathname } from 'next/navigation'
import axios from 'axios'
import { BASE_URL } from '@/util/api'

const PortfolioInner = () => {
  const { apidata } = Useapi();


  const pathname = usePathname();
  const segments = pathname.replace(/\/$/, '').split('/');
  const lastsegment = segments.pop();
  const [data, setdata] = useState<any>()
  const fetch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}portfolio/${lastsegment}/`);
      setdata(response.data[0]);
    } catch (error: any) {
      console.log("service error", error.message);
    }
  }
  useEffect(() => {
    fetch()
  }, [])

  console.log('portfolio data', data)
  return (
    <div>
      {!apidata &&
        <Loader />
      }
      {apidata &&
        <div>
          <Header></Header>
          <Navbar />
          <div className='border-b-2 border-lightblue'>
          <div className=' py-12 xl:w-[70%]  px-6 mx-auto items-center lg:py-16 flex-col gap-12'>
            <div className='flex justify-center items-center'>
              <Image src={data?.image || ''} height={550} width={550} alt={'finding'}></Image>
            </div>
            <div className=' mx-auto mt-8 lg:mt-16 text-center'>
              <p className='text-homeblack text-[38px] font-bold'>{data?.title || ''}</p>
              <p className='text-[18px] text-homegrey mt-3 text-left leading-[30px]'>
                {data?.description || ''}
              </p>
            </div>
            <div>
            </div>
          </div>
          </div>
          <Choose props={apidata?.why_choose[0] || ''} />
          <Footer />
        </div>
      }




    </div>
  )
}

export default PortfolioInner