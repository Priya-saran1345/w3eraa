'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navigation from '@/components/navbar'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '@/components/button'
import DownNavbar from '@/components/DownNavbar'

import Choose from '@/components/Choose'
import Revenue from '@/components/revenue'
import Casestudycontent from '@/components/Casestudycontent'
import CommonBanner from '@/components/Common-Banner'
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import { Useapi } from '@/helpers/apiContext';
import Loader from '@/components/loader'
import CustomerChoose from '@/components/CustomerChoose';

const Page = () => {
    const { apidata } = Useapi();
    const { basic_details } = Useapi();

    const [caseStudydata, setcaseStudydata] = useState<any>()
    const [data, setdata] = useState<any>()

    const fetch = async () => {
        try {
            const response = await axios.get(`${BASE_URL}case-study/`);
            setcaseStudydata(response.data);
        }
        catch (error: any) {
            console.log('error from case study', error.message);
        }
        try {
            const response = await axios.get(`${BASE_URL}other/case-study/`);
            setdata(response.data);
        } catch (error: any) {
            console.log('error from others case study', error.message);

        }
    }
    useEffect(() => {
        fetch();
    }, [])

    return (
        <>
        {/* {
!data&&!caseStudydata&&
<Loader/>
        } */}
        {
// data&&caseStudydata&&
       
        <div>
            <Header />
            <DownNavbar/>
            <Navigation />
            <CommonBanner title={data?.banner_title} description={data?.banner_desc} image={data?.image||''}
             btnlink={data?.button_url} btntext={data?.button_text} image_alt={data?.image_alt} />
            <Casestudycontent props={caseStudydata} />
            <div className='w-full bg-blue py-10 text-white  lg:py-16'>
                <div className=' md:w-[75%] mx-auto xl:w-[50%]'>
                    <h2 className=' text-[28px] font-bold text-center lg:leading-[46px] lg:text-[38px]'>Get A Top Rank on Google Search Results,
                        Qualified Leads and Increased Sales
                    </h2>
                    <div className='flex flex-wrap mt-8 justify-center gap-4'>
                        <Link href={'/get-a-free-quote'}>
                        <Button content={'Get a Quote Now!'} />
                        </Link>
                        <Link href={'/get-a-free-strategy-review'}>
                        <Button content={'Analyse my Website for Free!'} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full mx-auto xl:w-[75%] flex flex-col gap-4 px-6 xl:px-2 py-12'>
                
            <p className='text-homegrey text-[18px]' dangerouslySetInnerHTML={{ __html: caseStudydata?.content_1[0]?.description }} />

                   
            </div>
            <Revenue />
            {/* <Choose props={apidata?.why_choose[0]} /> */}
            <CustomerChoose/>

        
            <Footer />
        </div>
         }
        </>
    )
}

export default Page