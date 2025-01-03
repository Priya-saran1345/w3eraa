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
import Loader from '@/components/loader'
import {StyledWrapper} from '@/components/Styled'
import DownNavbar from '@/components/DownNavbar'
const Page = ({data}:any) => {
  // const [data, setdata] = useState<any>()
  // const pathname = usePathname();
  //   const segments = pathname.replace(/\/$/, '').split('/');
  //   const lastsegment= segments.pop(); 
//   const fetch = async () => {
//     try {
//         const response = await axios.get(`${BASE_URL}industry-detail/${lastsegment}/`);
//         setdata(response.data);
//     } catch (error: any) {
//         console.log("Service error", error.message);
//     }
// };
// useEffect(() => {
//     fetch();
// }, []);
  return (
    <>
  {/* {
    
    !data&&
<Loader/>
  } */}
  {

// data&&
    <div>
      {/* <Header /> */}
      <DownNavbar/>
      <Navbar />
      <div className='py-12 xl:w-[95%]  2xl:w-[75%] px-6 mx-auto'>
        <StyledWrapper>
            <div className='text-homeblack leading-[30px]'
            >
             {/* {data?.map((elem:any, i:number)=>( */}
              <div  dangerouslySetInnerHTML={{ __html: data?.body || '' }} className='h-fit'></div>
             {/* ))} */}
            </div>
        </StyledWrapper>
      </div>
      {/* <Footer /> */}

    </div>
     }
    </>
  )
}

export default Page
