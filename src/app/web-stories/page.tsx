'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import FooterBanner from '@/components/footer-banner'
import React, { useEffect, useState } from 'react'
import Stories from '@/components/stories'
import CommonBanner from '@/components/Common-Banner'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import { useapi } from '@/helpers/apiContext';
import Loader from '@/components/loader'

const WebStories = () => {

  const { basic_details } = useapi();
  const [data, setdata] = useState<any>()
  const [data_others, setdata_others] = useState<any>()
  const fetch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}web-story/`);
      setdata(response.data);
    }
    catch (error: any) {
      console.log('error from ', error.message);
    }
    try {
      const response = await axios.get(`${BASE_URL}other/web-stories/`);
      setdata_others(response.data);
    } catch (error: any) {
      console.log('error from others web-story', error.message);
    }
  }
  useEffect(() => {
    fetch();
  }, [])

  return (
    <>
    {
      !basic_details&&!data&&!data_others&&
      <Loader/>

    }
   {basic_details&&data&&data_others&&
    <div>
      <Header />
      <Navbar />
      <CommonBanner title={data_others?.title || ''} description={data_others?.body || ''}
      //  image={data?.image} btntext={data?.link_text} btnlink={data?.link_url}
      />
      <Stories props={data || []} />
      <FooterBanner content={basic_details?.footer_card[0]?.title || ''} description={basic_details?.footer_card[0]?.description
      } image={'/images/life-footer.png'} btncontent={'contact US'} ></FooterBanner>
      <Footer />
    </div>
      }
    </>
  )
}

export default WebStories