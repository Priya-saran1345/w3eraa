'use client';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/footer';
import { Useapi } from '@/helpers/apiContext';
import axios from 'axios';
import { BASE_URL } from '@/util/api';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { StyledWrapper } from '@/components/Styled'
import Loader from '@/components/loader';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Blogs = () => {
    const { blogs } = Useapi();
    const [apidata, setapidata] = useState<any>(null);
    const pathname = usePathname();
    const path_name = window.location.href
    const segments = pathname.replace(/\/$/, '').split('/');
    const lastsegment = segments.pop();
    const [recentblogs, setrecentblogs] = useState<any>([]);
    // Fetch data when component mounts
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`${BASE_URL}blog-details/${lastsegment}/`);
                setapidata(response.data);
            } catch (error: any) {
                console.log("Error fetching data:", error.message);
            }
        };

        fetch();
    }, []);

    useEffect(() => {
        if (blogs) {
            setrecentblogs(blogs);
        }
    }, [blogs]);
    return (
        <div>
            {!blogs && !apidata &&
                <Loader />

            }
            {
                blogs && apidata &&
                <div className='w-full'>
                    <Header />
                    <Navbar />

                    <div className='bg-grey py-5'>
                        <div className='mt-5  w-full mx-auto xl:w-[75%] px-6  mb-8 '>
                            <p className='text-homegrey py-3 font-medium border-b-[2px] border-slate-200'>
                                {/* <Link href={'/blog'}>Blog</Link>  &nbsp;/&nbsp;<span className='text-pink'>{lastSegment}</span> */}
                            </p>
                        </div>
                        <div className='w-full flex gap-5  lg:flex-nowrap flex-wrap mx-auto xl:w-[95%] 2xl:w-[75%] px-4 text-white mb-8 lg:mb-32 '>
                            <aside>
                                <div className='xl:min-w-[414px] w-[314px] sticky top-32 flex flex-col gap-6'>
                                    {/* <div className='bg-white w-full flex text-[18px] font-medium justify-between rounded-lg p-3'>
                                        <input type="text" placeholder='Search' className='p-2 text-black w-full bg-grey border-0 outline-none' />
                                        <button className='bg-pink rounded-md text-white py-2 px-6'>Search</button>
                                    </div> */}
                                    <div className='bg-white leading-tight p-8 rounded-lg text-textGrey text-[18px] hidden lg:block '>
                                        <div className='border-b-2 border-pink w-fit mb-4 text-black'>
                                            <p className='text-[24px] font-medium mb-1'>Recent Posts</p>
                                        </div>
                                        <ul className='flex flex-col gap-3 list-disc mx-4'>
                                            {
                                                recentblogs?.results?.blogs?.slice(0, 5).map((elem: any) => (
                                                    <Link href={`/blog/${elem?.slug_link}`} key={elem?.slug_link}>
                                                        <li>{elem?.title}</li>
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className='bg-white p-8 rounded-lg max-h-[280px]  overflow-y-auto text-textGrey text-[18px] hidden lg:block'>
                                        <div className='border-b-2 border-pink w-fit mb-4 text-black'>
                                            <p className='text-[24px] font-medium mb-1'>Categories</p>
                                        </div>
                                        <ul className='flex flex-col leading-tight gap-3 list-disc mx-4'>
                                            {recentblogs?.results?.category?.map((elem: any) => (
                                                <Link href={`/blog/category/${elem?.category_slug}`} key={elem.name}>
                                                    <li className='hover:text-pink cursor-pointer'>{elem?.name}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                            <div className=' w-[97%] lg:w-full  flex flex-col gap-10 text-black '>
                                <div className='bg-white p-3 md:p-8 mt-5  block lg:hidden  rounded-lg text-textGrey text-[18px] '>
                                    <div>

                                        <div className='border-b-2 border-pink w-fit mb-4 text-black'>
                                            <p className='text-[24px] font-medium mb-1'>Categories</p>
                                        </div>
                                        <div className='flex flex-wrap mt-6  leading-tight gap-3 list-disc md:mx-4'>
                                            {blogs?.results?.category?.map((elem: any) => (
                                                <Link href={`/blog/category/${elem?.category_slug}`} key={elem.name}>
                                                    <div className='hover:text-pink p-2 rounded-md bg-grey cursor-pointer'>{elem?.name}</div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <StyledWrapper>
                                    <div className='bg-white rounded-lg p-4 md:p-8'>

                                        {apidata ? (
                                            <div>
                                                <h2 className='text-[28px] text-center text-homeblack md:text-left font-semibold mb-2'>{apidata.title || "No Title Available"}</h2>
                                                <p className='text-[20px] mb-5 flex items-center gap-1' ><Link href="/"><span className='text-blue'>Home</span></Link>
                                                    <MdOutlineKeyboardDoubleArrowRight />
                                                    <Link href={`/blog/category/${apidata?.category_slug}`}>
                                                        <span className='text-blue '>{apidata?.category}</span></Link> <MdOutlineKeyboardDoubleArrowRight />
                                                    {apidata.title}</p>
                                                <div className='text-homeblack leading-[30px]'
                                                    dangerouslySetInnerHTML={{ __html: apidata.body || "No Content Available" }}
                                                />
                                            </div>
                                        ) : (
                                            <p>Loading...</p>
                                        )}



                                        <div className='flex mt-3  gap-3'>
                                            <span className="text-homeblack text-[17px] font-medium">Tagged: </span>
                                            <div className="flex flex-wrap gap-4 list-none">
                                                {Object.entries(apidata?.tag || {}).map(([key, value]: any) => (
                                                    <li key={key}>
                                                        <Link
                                                            href={`/blog/tag/${key}`}
                                                            className="text-blue-500 no-underline"
                                                        >
                                                            {value}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-8 pt-8 border-t border-gray-200">
                                            <h3 className="text-xl font-semibold text-homeblack mb-4">Share this post:</h3>
                                            <div className="flex space-x-2">
                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(path_name)}`} target="_blank" rel="noopener noreferrer">
                                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white smooth hover:bg-[#1656A1] hover:-translate-y-1 transition-colors duration-300">
                                                        <FaFacebookF className="text-xl" />
                                                    </button>
                                                </a>
                                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(path_name)}&text=Check%20this%20out!`} target="_blank" rel="noopener noreferrer">
                                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#000] text-white smooth hover:bg-[#000] hover:-translate-y-1 transition-colors duration-300">
                                                        <FaXTwitter className="text-xl" />
                                                    </button>
                                                </a>
                                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(path_name)}`} target="_blank" rel="noopener noreferrer">
                                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5] text-white smooth hover:bg-[#005582] hover:-translate-y-1 transition-colors duration-300">
                                                        <FaLinkedinIn className="text-xl" />
                                                    </button>
                                                </a>
                                            </div>
                                        </div>



                                    </div>

                                </StyledWrapper>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </div>
    );
};
export default Blogs;

