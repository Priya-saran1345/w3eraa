
'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import { BASE_URL } from '@/util/api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const Sitemap = () => {
  const [data, setdata] = useState<any>()
  const fetch = async () => {
   
    try {
      const response = await axios.get(`${BASE_URL}other/sitemap/`);
      setdata(response.data);
    } catch (error: any) {
      console.log('error from others web-story', error.message);
    }
  }
  useEffect(() => {
    fetch();
  }, [])
  console.log('sitemap data',data);
  return (
<div>
<Header/>
<Navbar/>
<div className='xl:w-[55%] mx-auto px-7  py-12 lg:py-16'>
    <p className='text-homeblack mb-4 font-bold text-[38px]'>{data?.title}</p>
    <StyledWrapper>
    <div   dangerouslySetInnerHTML={{ __html: data?.body }}/>
    </StyledWrapper>

</div>
<Footer/>
</div>
  )
}

export default Sitemap
const StyledWrapper = styled.div`
  menu, ol, ul {
    list-style: disc !important;
  }
li{
font-size: 18px !important;
margin-bottom:5px;

}
li:hover{
color:var(--blue)}
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
