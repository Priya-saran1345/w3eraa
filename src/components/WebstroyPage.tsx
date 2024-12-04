'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import Stories from '@/components/stories'
import CommonBanner from '@/components/Common-Banner'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import Loader from '@/components/loader'
import DownNavbar from '@/components/DownNavbar'

const WebStories = ({data , data_others}:any) => {
  // const [data, setdata] = useState<any>()
  // const [data_others, setdata_others] = useState<any>()
  // const fetch = async () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}web-story/`);
  //     setdata(response.data);
  //   }
  //   catch (error: any) {
  //     console.log('error from ', error.message);
  //   }
  //   try {
  //     const response = await axios.get(`${BASE_URL}other/web-stories/`);
  //     setdata_others(response.data);
  //   } catch (error: any) {
  //     console.log('error from others web-story', error.message);
  //   }
  // }
  // useEffect(() => {
  //   fetch();
  // }, [])

  return (
    <>
    {/* {
      !basic_details&&!data&&!data_others&&
      <Loader/>

    } */}
   {
  //  basic_details&&data&&data_others&&
    <div className='overflow-y-auto'>
      {/* <Header /> */}
      <DownNavbar/>
      <Navbar />
      <CommonBanner title={data_others?.title || ''} description={data_others?.body || ''}
      //  image={data?.image} btntext={data?.link_text} btnlink={data?.link_url}
      />
      <Stories props={data || []} />
      {/* <Footer /> */}
    </div>
      }
    </>
  )
}

export default WebStories