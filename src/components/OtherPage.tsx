'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Loader from '@/components/loader'
import Navbar from '@/components/navbar'
import Revenue from '@/components/revenue'

import React, { useEffect, useState } from 'react'
import CommonBanner from '@/components/Common-Banner'
import {StyledWrapper} from '@/components/Styled'
import DownNavbar from '@/components/DownNavbar'

const Page = ({props}:any) => {
  const [other, setother] = useState<any>()

  useEffect(()=>{
    setother(props?.data)
  },[props])
  return (
    <>
    {/* {
      !other&&
      <Loader/>
    } */}
    {
// other&&
    <div>
        <Header/>
        <DownNavbar/>

        <Navbar/>
        {
          other?.title &&
          <div className='w-full px-4 bg-[url("/images/blog-bg.png")] h-[45vh] flex justify-center items-center'>
        <h1 className='text-[32px] lg:text-[44px] font-bold text-white'> {other?.title || ''}</h1>
        </div>
        }
        { other?.banner_title&& other?.banner_desc&&
        <CommonBanner  title={other?.banner_title} description={other?.banner_desc} image={other?.banner_img} image_alt={other?.bannerimg_alt}
         btntext={other?.button_text} btnlink={other?.button_url} />
        }
         <div className='w-full px-6 xl:px-0 xl:w-[95%]  2xl:w-[75%] mx-auto py-12'>
         {/* <p className='text-[38px] text-center font-bold text-homeblack mb-7'>{other?.title || ''}</p> */}
        {/* Use Refundother or display a fallback message */}
        <StyledWrapper>
        <div className='text-homeblack' dangerouslySetInnerHTML={{ __html: other?.body }} />
        </StyledWrapper>
      </div>
{

     
}
        <Footer/>
    </div>
       }
    </>
  )
}

export default Page
