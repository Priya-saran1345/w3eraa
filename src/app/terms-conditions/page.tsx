'use client'
import React, { useEffect, useState } from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import styled from 'styled-components'
import { Loader } from 'lucide-react'

const page = () => {
  const [termsdata, settermsdata] = useState<any>()
  const fetch=async()=>{
    try {
      const response = await axios.get(`${BASE_URL}other/terms-conditions/`);
      settermsdata(response.data);
    } catch (error: any) {
      console.log("case study error", error.message);
    }
  }
    useEffect(() => {
      
        fetch()
    }, []);
 
  return (
    <>
    {
      !termsdata&&
      <Loader/>
    }
      {
        termsdata&&
        <div>
  
        <Header/>
        <Navbar/>
       <div className='w-full bg-no-repeat bg-center bg-[url("/images/tool-bg.png")] py-9 flex flex-col justify-center items-center'>
                    <p className='text-[32px] lg:text-[44px] font-bold text-white'>{termsdata?.title || 'Terms and condition'} </p>
       </div>
         <div className='w-full px-6 xl:px-0 xl:w-[75%] mx-auto py-12'>
          <p className='text-[38px] text-center font-bold text-homeblack mb-7'>{termsdata?.title || 'Terms and condition'}
          </p>
          <StyledWrapper>
          <div dangerouslySetInnerHTML={{ __html: termsdata?.body }} />
          </StyledWrapper>
         </div>
      

        <Footer/>
    </div>
  }
  </>
  )
}

export default page
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
`
