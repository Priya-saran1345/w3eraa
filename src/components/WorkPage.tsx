"use client"
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BASE_URL } from '@/util/api'
import axios from 'axios'
import Loader from '@/components/loader'
import Link from 'next/link'

const Work = () => {
const [data, setdata] = useState<any>()
const fetch=async()=>{
        try {
      const response = await axios.get(`${BASE_URL}our-process/`);
      setdata(response.data);
    } catch (error: any) {
      console.log("service error", error.message);
    }
}
useEffect(()=>{
fetch()
},[])
    return (
        <div>
        { !data&&
                    <Loader/>
        }
        {

data&&
        <div>
            <Header />
            <Navbar />
            <div className="w-full bg-no-repeat  lg:bg-[url('/images/work.png')]  pb-28 ">
                <div className='text-white pt-8   bg-blue pb-7 lg:pt-32 lg:pb-0 lg:bg-inherit w-full xl:w-[75%] px-4 mx-auto'>
                    <div className='lg:w-[70%]'>

                    <p className=' text-[28px] lg:text-[38px] font-semibold md:mb-8 '>{data?.our_process[0].consultation_title}</p>
                    <p className=' text-[34px] lg:text-[58px] font-semibold '>{data?.our_process[0].title}</p>
                    <p className='text-[18px] font-medium leading-[22px] '>{data?.our_process[0].description}</p>
                    <Image src={'/images/work-arrow1.svg'} height={56} width={77} alt="" className='hidden lg:block' />
                    </div>

                </div>
                <div className='w-full xl:w-[75%] bg-white lg:bg-inherit  flex lg:flex-nowrap flex-wrap xl:mt-24 justify-center gap-5 mx-auto px-4 py-16'>
                    <div className='lg:-rotate-90 lg:mt-80 text-center lg:text-left w-full lg:w-[40px] mr-8  h-fit'>
                        <p className='text-pink text-[34px] lg:text-[58px] font-bold uppercase'>Onboarding</p>
                    </div>

                    <div className='w-[345px] relative max-h-[500px]'>
                        <div className='w-[260px] h-[260px] bg-no-repeat bg-center flex justify-center items-center bg-[url("/images/bluestar.png")]'>
                            <Image src={'/images/current.png'} height={71} width={40} alt='' />
                        </div>
                        <p className='text-[24px] font-medium'>{data?.consultation[0].title}</p>
                        <p className='text-textGrey text-[18px] leading-[21px]'>
                        {data?.consultation[0].description}                        </p>
                    </div>

                    <div className='hidden lg:block'>
                        <Image src={'/images/pinkarrow.png'} height={102} width={181} alt='' className='mt-52'/>
                    </div>

                    <div className='w-[345px] max-h-[500px] relative lg:mt-32'>
                        <div className='w-[260px] h-[260px] bg-no-repeat bg-center flex justify-center items-center bg-[url("/images/bluestar.png")]'>
                            <Image src={'/images/current.png'} height={71} width={40} alt='' />
                        </div>
                        <p className='text-[24px] font-medium'>{data?.consultation[1].title}</p>
                        <p className='text-textGrey text-[18px] leading-[21px]'>
                        {data?.consultation[1].description}                   </p>
                    </div>

                    <div className='hidden lg:block'>

                        <Image src={'/images/ultaarrow-pink.png'} height={102} width={181} alt='' className='mt-80 ' />
                    </div>

                    <div className='w-[345px] max-h-[500px] relative lg:mt-64'>
                        <div className='w-[260px] h-[260px] bg-no-repeat bg-center flex justify-center items-center bg-[url("/images/bluestar.png")]'>
                            <Image src={'/images/current.png'} height={71} width={40} alt='' />
                        </div>
                        <p className='text-[24px] font-medium'>{data?.consultation[2].title}</p>
                        <p className='text-textGrey text-[18px] leading-[21px]'>
                        {data?.consultation[2].description}                         </p>
                    </div>
                </div>
                <div className='w-full xl:w-[75%] bg-blue lg:bg-inherit   flex lg:flex-nowrap text-white flex-wrap  justify-center gap-5 mx-auto px-4 py-5 xl:py-16'>
                    <div className='lg:-rotate-90 lg:mt-80 text-center lg:text-left w-full lg:w-[40px] mr-8  h-fit'>
                        <p className='text-pink text-[34px] lg:text-[58px] font-bold uppercase'>Production</p>
                    </div>

                    <div className='w-[345px] relative max-h-[500px]'>
                        <div className='w-[260px] h-[260px] bg-no-repeat bg-center flex justify-center items-center bg-[url("/images/pinkstar.png")]'>
                            <Image src={'/images/current.png'} height={71} width={40} alt='' />
                        </div>
                        <p className='text-[24px] font-medium'>{data?.strategy[0].title}</p>
                        <p className='text-white  text-[18px] leading-[21px]'>
                        {data?.strategy[0].description}                      </p>
                    </div>

                    <div className='hidden lg:block'>
                        <Image src={'/images/whitearrow.png'} height={102} width={181} alt='' className='mt-52'/>
                    </div>

                    <div className='w-[345px] max-h-[500px] relative lg:mt-32'>
                        <div className='w-[260px] h-[260px] bg-no-repeat bg-center flex justify-center items-center bg-[url("/images/pinkstar.png")]'>
                            <Image src={'/images/current.png'} height={71} width={40} alt='' />
                        </div>
                        <p className='text-[24px] font-medium'>{data?.strategy[1].title}</p>
                        <p className=' text-[18px] leading-[21px]'>
                        {data?.strategy[1].description}                        </p>
                    </div>

                    <div className='hidden lg:block'>

                        <Image src={'/images/ultaarrow-white.png'} height={102} width={181} alt='' className='mt-80 ' />
                    </div>

                    <div className='w-[345px] max-h-[500px] relative lg:mt-64'>
                        <div className='w-[260px] h-[260px] bg-no-repeat bg-center flex justify-center items-center bg-[url("/images/pinkstar.png")]'>
                            <Image src={'/images/current.png'} height={71} width={40} alt='' />
                        </div>
                        <p className='text-[24px] font-medium'>{data?.strategy[2].title}</p>
                        <p className=' text-[18px] leading-[21px]'>
                        {data?.strategy[2].description}                         </p>
                    </div>
                </div>
                <div className='w-full xl:w-[75%] bg-white lg:bg-inherit  flex lg:flex-nowrap flex-wrap py-7 lg:py-0 justify-center gap-5 mx-auto px-4 '>
                    <div className='lg:-rotate-90 lg:mt-80 text-center lg:text-left w-full lg:w-[40px] mr-8  h-fit'>
                        <p className='text-pink text-[34px] lg:text-[58px] font-bold uppercase'>DELIVERY</p>
                    </div>

                    <div className='w-[345px] relative max-h-[500px]'>
                        <div className='w-[260px] h-[260px] bg-no-repeat bg-center flex justify-center items-center bg-[url("/images/bluestar.png")]'>
                            <Image src={'/images/current.png'} height={71} width={40} alt='' />
                        </div>
                        <p className='text-[24px] font-medium'>{data?.execution[0].title}</p>
                        <p className='text-textGrey text-[18px] leading-[21px]'>
                        {data?.execution[0].description}                          </p>
                    </div>

                    <div className='hidden lg:block'>
                        <Image src={'/images/pinkarrow.png'} height={102} width={181} alt='' className='mt-52'/>
                    </div>

                    <div className='w-[345px] max-h-[500px] relative lg:mt-32'>
                        <div className='w-[260px] h-[260px] bg-no-repeat bg-center flex justify-center items-center bg-[url("/images/bluestar.png")]'>
                            <Image src={'/images/current.png'} height={71} width={40} alt='' />
                        </div>
                        <p className='text-[24px] font-medium'>{data?.execution[1].title}</p>
                        <p className='text-textGrey text-[18px] leading-[21px]'>
                        {data?.execution[1].description}                                             </p>
                    </div>

                    <div className='hidden lg:block'>

                        <Image src={'/images/ultaarrow-pink.png'} height={102} width={181} alt='' className='mt-80 ' />
                    </div>

                    <div className='w-[345px] max-h-[500px] relative lg:mt-64'>
                        <div className='w-[260px] h-[260px] bg-no-repeat bg-center flex justify-center items-center bg-[url("/images/bluestar.png")]'>
                            <Image src={'/images/current.png'} height={71} width={40} alt='' />
                        </div>
                        <p className='text-[24px] font-medium'>{data?.execution[2].title}</p>
                        <p className='text-textGrey text-[18px] leading-[21px]'>
                        {data?.execution[2].description}                                                  </p>
                    </div>
                </div>
                
                <div >
                    <div className='md:w-[40%] mt-10 mx-auto flex flex-col gap-4 text-center'>

                    <p className=' text-[32px] lg:text-[48px] font-bold'>Lorem Ipsum is simply</p>
                    <p className='text-[18px] font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </p>
                    <div>
                 <Link href={'/search-engine-optimization-services'}>
                    <button className='bg-pink rounded-md py-3 px-8  text-white text-[18px] font-medium'>Explore Our Packages</button>
                 </Link>
                    </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
          }
          </div>
    )
}

export default Work