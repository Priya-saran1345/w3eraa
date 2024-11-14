"use client"
import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useEffect, useState } from 'react'
import Navigation from '@/components/navbar'
import CommonBanner from '@/components/Common-Banner'
import QuickLinks from '@/components/quickLinks'
import TestimonialVideo from '@/components/testimonial-video'
import TestimonialCard from '@/components/testimonialCard'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import Loader from '@/components/loader'
import { Useapi } from '@/helpers/apiContext';
import { usePathname, useRouter } from 'next/navigation';

const Page = () => {
  const { basic_details } = Useapi(); // Get blog data from context
  const pathname = usePathname();
  const segments = pathname.replace(/\/$/, '').split('/');
  const lastsegment = segments.pop();
  const [apidata, setapidata] = useState<any>()
  const [testimonial, settestimonial] = useState<any>()
  const fetch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}other/testimonials/`);
      setapidata(response.data);
    } catch (error: any) {
      console.log('testimonial error from other', error.message);

    }
   
  }
  const fetch1 = async () => {
    try {
      const response = await axios.get(`${BASE_URL}testimonial/`);
      settestimonial(response.data);
    } catch (error: any) {
      console.log('testimonial error', error.message);

    }
  }
  useEffect(() => {
    fetch();
    fetch1()
  }, [])

  return (
    <div>
      {
        !apidata && <Loader />
      }
      {
        apidata &&
        <div>
          <Header />
          <Navigation />
          <CommonBanner title={apidata?.title} description={apidata?.body} image={apidata?.image} btnlink={apidata?.button_url} btntext={apidata?.button_text} image_alt={apidata?.image_alt} />
          <TestimonialCard props={testimonial?.review} />
          <TestimonialVideo props={testimonial?.clients_say_card} />
          <Footer />
        </div>
      }
    </div>
  )
}

export default Page