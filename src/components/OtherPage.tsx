'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Loader from '@/components/loader'
import Navbar from '@/components/navbar'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CommonBanner from '@/components/Common-Banner'
const Page = ({props}:any) => {
  const [other, setother] = useState<any>()

  useEffect(()=>{
    setother(props?.data)
  },[props])
  return (
    <>
    {
      !other&&
      <Loader/>

    }
    {
other&&
    <div>
        <Header/>
        <Navbar/>
        {
          other?.title&&
       <div className='w-full bg-no-repeat bg-center bg-[url("/images/tool-bg.png")] py-9 flex flex-col justify-center items-center'>
                    <p className='text-[32px] lg:text-[44px] font-bold text-white'> {other?.title || ''}</p>
                    
        </div>
        }
        { other?.banner_title|| other?.banner_desc&&
        <CommonBanner  title={other?.banner_title} description={other?.banner_desc} image={other?.banner_img} image_alt={other?.bannerimg_alt}
         btntext={other?.button_text} btnlink={other?.button_url} />

        }
         <div className='w-full px-6 xl:px-0 xl:w-[75%] mx-auto py-12'>
         <p className='text-[38px] text-center font-bold text-homeblack mb-7'>{other?.title || ''}</p>
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
const StyledWrapper = styled.div`
  menu, ol, ul {
    list-style: disc !important;
  }
  h2 ,h1{
    font-size: 28px !important; /* 36px */
    font-weight: 700; /* Bold */
  }
  h3 {

    font-size: 1.5rem; /* 24px */
    font-weight: 600; /* Semi-Bold */
  }

  h4 {

    font-size: 1.25rem; /* 20px */
    font-weight: 600; /* Semi-Bold */
  }

  h5 {

    font-size: 5rem; /* 16px */
    font-weight: 500; /* Medium */
  }
  h6 {

    font-size: 0.875rem; /* 14px */
    font-weight: 400; /* Medium */
  }
 p {
  font-size: 1rem; /* 16px */
  font-weight: 400; /* Regular */
  color: #535353; /* Replace with your color */
  line-height:28px
}
  ol, ul {
    padding-left: 1.5rem;
  }
      a{
    color:red;
    font-weight:500;}
`