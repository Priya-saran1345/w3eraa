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
import { usePathname } from 'next/navigation';
import { BASE_URL } from '@/util/api';
import axios from 'axios';

const Main = () => {
    const { apidata } = Useapi();
    const [quicklinks, setquicklinks] = useState<any>()

    const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
    const pathname = usePathname();
    const segments = pathname.replace(/\/$/, '').split('/');
    const lastsegment= segments.pop();  
    const [data, setdata] = useState<any>(); // Initialize as an empty array
  
  
  const fetch=async()=>{
    try {
      const response = await axios.get(`${BASE_URL}seo-industry/${lastsegment}/`);
      setdata (response.data[0]);
    } catch (error: any) {
      console.log("client error", error.message);
    }
    try {
        const response = await axios.get(`${BASE_URL}quick-link/seo-by-industry/`);
        console.log('quick links',(response.data.link_category
        ))
        setquicklinks(response.data.link_category);
    } catch (error: any) {
        console.log('quicklinks error', error);
       
    }
  }
  
  useEffect(()=>{
    fetch()
  
  },[])
  console.log('seo by industry inner page ',data)
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
    return (
        <div>
            <Header />
            <Navbar />
         <CommonBanner title={data?.banner_title ||''} description={data?.banner_description||''} 
         image={data?.image} 
         btntext={data?.link_text} btnlink={data?.link_url}
          />
          {

data?.title && data?.image&&
            <div className='w-full xl:w-[75%] mx-auto px-6 py-8'>
                <div  className='w-full my-4 flex flex-wrap gap-4 '>
                    {[{ id: 1 }].map((elem, index) => (
                        <div
                            key={elem.id}
                            className="rounded-lg sm:w-[45%] lg:w-[31%] h-[319px] flex group justify-center items-center bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${data?.image||''})` }}
                            onMouseEnter={() => setHoveredCardIndex(index)}
                            onMouseLeave={() => setHoveredCardIndex(null)} // Reset on mouse leave
                        >
                            {hoveredCardIndex === index && (
                                <div className='bg-white/80 rounded-md px-6 py-6 w-[380px] h-[180px]' data-aos="zoom-in" data-aos-duration="1000">
                                    <p className='font-medium text-[20px]'>
                                       {data?.title||''}
                                    </p>
                                    <div className='flex justify-between mt-4 gap-5 items-center'>
                     
                                        <Link href={`${pathname}${data?.slug}`}>
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
  }
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
                // data?.contentsection1?.description &&
                <div className='w-full mx-auto xl:w-[75%] flex flex-col gap-4 px-6 xl:px-2 py-12'>
                    {/* {
                           
                                    <div>
                                        {/* <p className='text-[ 28px] text-homeblack font-semibold lg:text-[38px]'>Affordable SEO Pricing Packages</p> */}
                    <StyledWrapper>
                        <p
                            className="text-homegrey text-[18px]"
                        dangerouslySetInnerHTML={{ __html: data?.content1?.description ||''}}
                        />
                            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi eveniet dolorem ut nulla
                            similique quisquam reiciendis, esse atque temporibus velit quaerat fugiat voluptate quos, consequuntur tempore obcaecati. Expedita nihil commodi eveniet officia ipsa, qui reiciendis amet nam? Nesciunt est laudantium voluptas eaque autem veniam soluta sit suscipit molestias natus! Error officia cumque aut excepturi dicta consectetur
                            eius atque delectus nulla quisquam et quod nesciunt sequi ad, quo quaerat asperiores tenetur sed obcaecati eos. Rem, tempore sit.
                        </p> */}
                    </StyledWrapper>
                </div>

            }
            <div className='bg-white mt-12 xl:w-[75%] px-4 xl:px-0 mx-auto'>
                {/* <p className='text-homeblack text-[28px] text-center mb-8 font-bold lg:text-[38px]'>{data?.aboutservice?.title || ''}</p> */}
                <div className='flex justify-between lg:gap-16'>
                    <div className=' hidden lg:block'>
                        {
                            // <Image src={data?.aboutservice?.image || ''} height={377} width={545} alt='' ></Image>
                        }
                    </div>
                    <div className='w-full min-h-[377px]'>
                        {/* <p className='text-homeblack text-[24px] font-semibold leading-[29px] '>
                                                {data?.aboutservice?.subtitle || ''}
                                            </p> */}
                        <p className='text-homegrey text-[18px] mt-4'
                         dangerouslySetInnerHTML={{ __html: data?.content2?.description || '' }} />
                    </div>
                </div>
            </div>
            <Revenue />
            <Choose props={apidata?.why_choose[0]} />
            <Packages props={apidata?.our_package} />
            <Blogs props={apidata?.blog} />
            { quicklinks&&
                                <Quicklinks props={quicklinks } />
                            }  
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
