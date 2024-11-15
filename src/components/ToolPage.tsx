"use client";
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import axios from 'axios';
import { BASE_URL } from '@/util/api';
import Link from 'next/link';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import Loader from '@/components/loader';
import styled from 'styled-components'

//  import {useRouter} from 'next/navigation';
const Page = () => {
    // const router=useRouter()
    const itemsPerPage = 10;
    const [tools, setTools] = useState<any>();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchedTool, setSearchedTool] = useState("");
    const [body, setbody] = useState<any>()
    // Function to fetch tools from the API
    const fetchTools = async () => {
        try {
            const response = await axios.get(`${BASE_URL}tools/`);
            setTools(response.data);
        } catch (error: any) {
            console.log("Service error", error.message);
        }
        try {
            const response = await axios.get(`${BASE_URL}tools-body/`);
            setbody(response.data.body);
        } catch (error: any) {
            console.log("Service error", error.message);
        }

    };

    useEffect(() => {
        fetchTools();
    }, []);

    const totalPages = Math.ceil(tools?.length / itemsPerPage);

    // Function to handle Next button click
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = tools?.slice(startIndex, startIndex + itemsPerPage);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedTool(e.target.value);
    };

    const filteredTools = searchedTool
        ? tools.filter((tool: any) =>
            tool.title.toLowerCase().includes(searchedTool.toLowerCase())
        )
        : currentItems;

    return (
        <>
            {
                !tools &&
                <Loader />
            }
            {
                tools &&
                <div>
                    <Header />
                    <Navbar />
                    <div className='w-full '>
                        <div className='w-full bg-no-repeat bg-center bg-[url("/images/tool-bg.png")] py-9 flex flex-col justify-center items-center'>
                            <p className='text-[32px] lg:text-[44px] font-bold text-white'>Free SEO Tools</p>
                            <div className='rounded-full w-1/3 flex justify-between items-center p-3 px-6 mt-4 bg-white'>
                                <input
                                    type="text"
                                    className='text-textGrey w-full border-none outline-none text-[18px]'
                                    placeholder='Check Seo Tool'
                                    onChange={handleSearchChange}
                                />
                                <IoIosSearch className='text-textGrey text-[32px]' />
                            </div>
                        </div>
                        <div className='bg-white xl:w-[77%] mx-auto px-4 w-full py-10'>
                            <div className='flex gap-5 justify-center flex-wrap items-center'>
                                {filteredTools.map((elem: any, index: number) => (
                                    <Link href={`/tool/${elem.slug_link}`} key={index}>
                                        <div className='border-[1px] p-5 w-[155px] lg:min-w-[241px] min-h-[200px] lg:h-[264px] flex flex-col justify-center items-center gap-7 border-slate-200 rounded-md hover:shadow-lg'>
                                            <Image
                                                src={elem?.image}
                                                height={90}
                                                width={90}
                                                alt=""
                                                className="transition-all duration-200"
                                            />
                                            <p className='text-[20px] text-center font-medium'>{elem?.title}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className='flex justify-center'>
                                <div className='flex justify-center mt-12 items-center gap-3'>
                                    <div
                                        className={`flex justify-center size-[45px] items-center rounded-full ${currentPage === 1 ? 'bg-pink text-white cursor-not-allowed' : 'bg-lightpink text-pink cursor-pointer'}`}
                                        onClick={handlePrevious}>
                                        <FaAngleLeft />
                                    </div>
                                    <div className='text-textGrey text-[18px]'>
                                        {currentPage} of {totalPages}
                                    </div>
                                    <div
                                        className={`flex justify-center size-[45px] items-center rounded-full ${currentPage === totalPages ? 'bg-pink text-white cursor-not-allowed' : 'bg-lightpink text-pink cursor-pointer'}`}
                                        onClick={handleNext}>
                                        <FaAngleRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white flex justify-between gap-3 xl:w-[77%] mx-auto px-4 w-full my-10'>
                            <div className='w-full rounded-xl border-slate-100 border-[1px] h-full py-8 px-6 shadow-lg'>
                                <div className='border-b-[2px] border-slate-200'>
                                    <p className='text-[24px] font-medium text-homeblack mb-3'>About SEO Tools</p>
                                </div>
                                <div className='my-8 px-4'>
                                <StyledWrapper>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: body
                                        }}
                                    />
                                    </StyledWrapper>
                                </div>
                            </div>
                            <div className='w-[394px] hidden md:block border-slate-100 border-[1px] py-16 px-4 rounded-md shadow-lg'>
                                <div className='border-b-[1px] border-slate-200'>
                                    <p className='text-[24px] font-medium text-homeblack mb-3'>Package</p>
                                </div>
                               
                                <form className='text-homegrey'>
                                    <input type="text" required placeholder='Please Enter Your Name*' className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                    <input type="email" required placeholder='Email Address*' className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                    <input type="number" required placeholder='Contact No.*' className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                    <input type="text" required placeholder='Website URL (if any)' className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                    <textarea required className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                    <button className='bg-pink text-white text-[14px] w-[133px] h-[44px] flex justify-center items-center rounded-lg'>SUBMIT NOW</button>
                                </form>


                                <div className='border-b-[1px] border-slate-200 mt-5 mb-3'>
                                    <p className='text-[24px] font-medium text-homeblack mb-3'>Trendy SEO Tools</p>
                                </div>
                                <div className='px-4'>
                                    <ul className='flex flex-col gap-4'>
                                        <Link href={'/tool/backlink-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Backlink Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                        <Link href={'/tool/article-rewriter'}><li className='text-textGrey flex gap-2 font-semibold'>Article Rewriter <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                        <Link href={'/tool/keyword-ranking-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Keyword Ranking Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                        <Link href={'/tool/word-counter'}><li className='text-textGrey flex gap-2 font-semibold'>Word Counter <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                        <Link href={'/tool/domain-authority-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Domain Authority Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                        <Link href={'/tool/xml-sitemap-generator'}><li className='text-textGrey flex gap-2 font-semibold'>XML Sitemap Generator <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                        <Link href={'/tool/google-cache-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Google Cache Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                        <Link href={'/tool/mozrank-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Mozrank Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Footer />

                    </div>
                </div>
            }

        </>
    );
};

export default Page;
const StyledWrapper = styled.div`
  menu, ol, ul {
    list-style: disc !important;
  }
h1
{font-size: 32px ;
color:var(--homeblack);
font-weight:600 !important;}
  h2 {

    font-size: 28px !important; /* 36px */
    font-weight: 400; /* Bold */
    color:var(--homeblack);

  }

  h3 {

    font-size: 1.5rem; /* 24px */
    font-weight: 400; /* Semi-Bold */
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
