'use client'
import React, { useEffect, useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import Image from 'next/image'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import Button from '@/components/button'
import Footer from '@/components/footer'
import CommonBanner from '@/components/Common-Banner'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import {usePathname} from 'next/navigation'
import Loader from '@/components/loader'
import styled from 'styled-components'

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.replace(/\/$/, '').split('/');
  const lastsegment= segments.pop(); 
  const [data, setdata] = useState<any>()
  const fetch=async()=>{
          try {
        const response = await axios.get(`${BASE_URL}case-study/${lastsegment}/`);
        setdata(response.data[0]);
      } catch (error: any) {
        console.log("service error", error.message);
      }
  }
  useEffect(()=>{
  fetch()
  },[])

  console.log('case study inner data',data)
  return (
    <>
    {
      !data&&
      <Loader/>
    }
    {
data&&
    <div>
    <Header/>
    <Navbar/>
    <CommonBanner title={data?.title||''} image_alt={data?.image_alt} description={data?.description||''} image={data?.image||''} btnlink={''}btntext={''} />
<div className='w-full '>
<StyledWrapper>
<div
  className="mx-auto px-6  py-12 xl:w-[75%]"
  dangerouslySetInnerHTML={{ __html: data?.body }}
></div>
</StyledWrapper>

</div>
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
h1{
font-size: 38px !important; /* 36px */
    font-weight: 900; /* Bold */
}
  h2 {

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
  font-size: 17px; /* 16px */
  font-weight: 400; /* Regular */
  color: #535353; /* Replace with your color */
  line-height:25px;
  
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
      a{
    color:red;
    font-weight:500;}
`
