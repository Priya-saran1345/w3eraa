'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import CommonBanner from '@/components/Common-Banner'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import { div } from 'framer-motion/client'
import { usePathname } from 'next/navigation';

const Page = () => {
  const [data, setdata] = useState<any>()
  const pathname = usePathname();
    const segments = pathname.replace(/\/$/, '').split('/');
    const lastsegment= segments.pop(); 
  const fetch = async () => {
    try {
        const response = await axios.get(`${BASE_URL}industry-detail/${lastsegment}/`);
        setdata(response.data);
    } catch (error: any) {
        console.log("Service error", error.message);
    }
    
};

useEffect(() => {
    fetch();
}, []);
  return (
    <div>
      <Header />
      <Navbar />
      {/* <CommonBanner title={'Resources for Your Industry'} description={'Need helpful tips and ideas for your website or business? We have compiled a collection of industry-specific resources written by our certified professionals with many years of experience'}
      //  image={data?.image} btntext={data?.link_text} btnlink={data?.link_url}
      /> */}
      <div className='py-12 xl:w-[75%] px-6 mx-auto'>
        {/* <StyledWrapper> */}

       

            <div className='text-homeblack leading-[30px]'
            >
             {data?.map((elem:any, i:number)=>(
              <div key={i} dangerouslySetInnerHTML={{ __html: elem?.body || '' }} className='h-fit'></div>
             ))}
            </div>
         

        {/* </StyledWrapper> */}
      </div>
      <Footer />

    </div>
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
}
  ol, ul {
    padding-left: 1.5rem;
  }
    table{
    border:1px solid black;
    margin-top:26px ;
    margin-bottom:26px
    width:100% ;
    }
    td{
    padding-x:10px;
    border:1px solid black;}
`
