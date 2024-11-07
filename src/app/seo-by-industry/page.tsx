"use client";
import React, { useEffect, useState } from 'react';
import { Useapi } from '@/helpers/apiContext';
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ClientSays from "@/components/clientSays";
import Packages from "@/components/Packages";
import Revenue from "@/components/revenue";
import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Loader from '@/components/loader';
import Quicklinks from '@/components/quickLinks';
import Choose from '@/components/Choose';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link'; // Updated import
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@/components/button'
import styled from 'styled-components'
import CommonBanner from '@/components/Common-Banner'
import { BASE_URL } from '@/util/api';
import axios from 'axios';

const Main = () => {
    const { apidata } = Useapi();
    const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
const [data, setdata] = useState<any>()
    const fetchTools = async () => {
        try {
            const response = await axios.get(`${BASE_URL}seo-industry/`);
            setdata(response.data);
        } catch (error: any) {
            console.log("Service error", error.message);
        }
    };

    useEffect(() => {
        fetchTools();
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in ms
            once: true, // Whether animation happens only once
        });
        AOS.refresh(); // Refresh AOS after dynamic content is loaded
    }, []);

    // Loading State
    if (!apidata) {
        return <Loader />;
    }
    console.log('industry data',data)
    return (
        <div>
            <Header />
            <Navbar />
           <CommonBanner title={data?.seo_industry[0].title||''} description={data?.seo_industry[0].description|| ''} 
        //  image={data?.image} btntext={data?.link_text} btnlink={data?.link_url}
          />
            <div className='w-full xl:w-[75%] mx-auto px-6 py-8'>
                <div className='w-full my-4 flex flex-wrap gap-4 justify-center'>
                    {data?.seo_industry[0]?.card?.map((elem:any, index:any) => (
                        <div
                            key={elem.id}
                            className="rounded-lg w-full sm:w-[45%] lg:w-[31%] h-[319px] flex group justify-center items-center bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${elem?.image||'/images/casephoto.png'})` }}
                            onMouseEnter={() => setHoveredCardIndex(index)}
                            onMouseLeave={() => setHoveredCardIndex(null)} // Reset on mouse leave
                        >
                            {hoveredCardIndex === index && (
                                <div className='bg-white/80 rounded-md px-6 py-6 w-[380px] h-[180px]' data-aos="zoom-in" data-aos-duration="1000">
                                    <p className='font-medium text-[20px]'>
                                       {elem?.title}
                                    </p>
                                    <div className='flex justify-between mt-4 gap-5 items-center'>
                                        <Link href={`/seo-by-industry/${elem?.slug}`}>
                                            <div className='w-[55px] h-[40px] rounded-md bg-pink text-[20px] text-white flex justify-center items-center font-bold'>
                                                <FaArrowRightLong />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <ClientSays props={apidata?.clients_say[0]} />
            <div className='w-full bg-blue py-10 text-white  lg:py-16'>
                <div className=' md:w-[75%] mx-auto xl:w-[50%]'>
                    <p className=' text-[28px] font-bold text-center lg:leading-[46px] lg:text-[38px]'>Get A Top Rank on Google Search Results,
                        Qualified Leads and Increased Sales
                    </p>
                    <div className='flex flex-wrap mt-8 justify-center gap-4'>
                        <Button content={'Get a Quote Now!'} />
                        <Button content={'Analyse my Website for Free!'} />
                    </div>
                </div>
            </div>
            {
                <div  className='w-full mx-auto xl:w-[75%] flex flex-col gap-4 px-6 xl:px-2 py-12'>
                    <StyledWrapper>
                        <p
                            className="text-homegrey text-[18px]"
                        dangerouslySetInnerHTML={{ __html: data?.industry_content[0]?.description ||''}}
                        >
                        </p>
                    </StyledWrapper>
                </div>
            }
            <div className='w-full mx-auto xl:w-[75%] flex flex-col gap-4 px-6 xl:px-2 py-12'>
                    <StyledWrapper>
                        <div
                            className="text-homegrey text-[18px]"
                        dangerouslySetInnerHTML={{ __html: data?.industry_content2 [0]?.description ||''}}
                        >
                        </div>
                    </StyledWrapper>
            </div>
      
            <Revenue />
            <Choose props={apidata?.why_choose[0]} />
            <Packages props={apidata?.our_package} />
            <Blogs />
            <Quicklinks />
            <Footer />
        </div>
    );
};

export default Main;
const StyledWrapper = styled.div`
  ul {
    list-style: disc;
  }

  ol, ul {
    padding-left: 1.5rem;
  }`
