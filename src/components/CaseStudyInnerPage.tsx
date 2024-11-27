'use client'
import React, { useEffect, useState } from 'react'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CommonBanner from '@/components/Common-Banner'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import {usePathname} from 'next/navigation'
import Loader from '@/components/loader'
import {StyledWrapper} from '@/components/Styled'
import DownNavbar from '@/components/DownNavbar'

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
    {/* {
      !data&&
      <Loader/>
    } */}
    {
// data&&
    <div>
    <Header/>
    <DownNavbar/>

    <Navbar/>
    <CommonBanner title={data?.title||''} image_alt={data?.image_alt} description={data?.description||''} image={data?.image||''} btnlink={''}btntext={''} />
<div className='w-full '>
<StyledWrapper>
<div
  className="mx-auto px-6  py-12 xl:w-[95%]  2xl:w-[75%]"
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
