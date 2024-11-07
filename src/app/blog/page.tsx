'use client';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/footer';
import Image from 'next/image';
import { Useapi } from '@/helpers/apiContext';
import Link from 'next/link';
import Loader from '@/components/loader';

const Blogs = () => {
    const { blogs } = Useapi();
    const [allblogs, setallblogs] = useState<any>();
    useEffect(() => {
        setallblogs(blogs);
    }, [blogs]);
    return (
        <div>
            {
                !blogs && <Loader />
            }
            {
                blogs &&

                <div className='w-full '>
                    <Header />
                    <Navbar />
                    <div className='w-full px-4 bg-[url("/images/blog-bg.png")] h-[45vh] flex justify-center items-center'>
                        <p className='text-white text-[32px] font-bold lg:text-[48px]'>W3era Blogs</p>
                    </div>

                    <div className='bg-lightblue  py-5'>
                        <div className='w-full  flex gap-5  relative h-full  justify-between lg:flex-nowrap flex-wrap mx-auto xl:w-[75%] px-4 text-white mb-8 lg:mb-32'>
                            <aside>
                                <div className='xl:min-w-[414px] w-[314px] sticky top-32 flex flex-col gap-6'>
                                    <div className='bg-white w-full flex text-[18px] font-medium justify-between rounded-lg p-3'>
                                        <input type="text" placeholder='Search' className='p-2 text-black w-full bg-grey border-0 outline-none' />
                                        <button className='bg-pink rounded-md text-white py-2 px-6'>Search</button>
                                    </div>
                                    <div className='bg-white leading-tight p-8 rounded-lg text-textGrey text-[18px] hidden lg:block '>
                                        <div className='border-b-2 border-pink w-fit mb-4 text-black'>
                                            <p className='text-[24px] font-medium mb-1'>Recent Posts</p>
                                        </div>
                                        <ul className='flex flex-col gap-3 list-disc mx-4'>
                                            {
                                                blogs?.blogs?.slice(0, 5).map((elem: any) => (
                                                    <Link href={`/blog/${elem?.slug_link}`} key={elem?.slug_link}>
                                                        <li>{elem?.title}</li>
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className='bg-white p-8 rounded-lg text-textGrey max-h-[280px] overflow-y-auto text-[18px] hidden lg:block'>
                                        <div className='border-b-2 border-pink w-fit mb-4 text-black'>
                                            <p className='text-[24px] font-medium mb-1'>Categories</p>
                                        </div>
                                        <ul className='flex flex-col leading-tight gap-3 list-disc mx-4'>
                                            {blogs?.category?.map((elem: any) => (
                                                <Link href={`/blog/category/${elem?.category_slug}`} key={elem.name}>
                                                    <li className='hover:text-pink cursor-pointer'>{elem?.name}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </aside>

                            <div className='w-full'>
                                <div className={`min-h-[243px] bg-no-repeat bg-start bg-center py-8 px-5 lg:px-16 rounded-lg bg-white md:bg-lightblue 
                            md:bg-[url("/images/blog-bg-1.png")]`}>
                                    <div className='flex flex-col gap-3'>
                                        <p className='text-[#3152B2] font-semibold text-[28px] md:text-[38px]'>Top 5 Best Blogs</p>
                                        <p className='text-black text-[20px] font-medium'>Content Management System (CMS) for SEO in 2024</p>
                                        <p className='text-textGrey text-[18px] xl:w-[65%]'>Lorem Ipsum is simply dummy text of
                                             the printing and typesetting industry.
                                             Lorem Ipsum has been the industry &apos; s standard.</p>
                                    </div>
                                </div>
                                <div className='bg-white p-3 md:p-8 mt-5 block lg:hidden  rounded-lg text-textGrey text-[18px] '>
                                    <div>

                                        <div className='border-b-2 border-pink w-fit mb-4 text-black'>
                                            <p className='text-[24px] font-medium mb-1'>Categories</p>
                                        </div>
                                        <div className='flex flex-wrap mt-6  leading-tight gap-3 list-disc md:mx-4'>
                                            {blogs?.category?.map((elem: any) => (
                                                <Link href={`/blog/category/${elem?.category_slug}`} key={elem.name}>
                                                    <div className='hover:text-pink p-2 rounded-md bg-grey cursor-pointer'>{elem?.name}</div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='my-10 px-5'>
                                    <div className='border-b-2 border-pink w-fit mb-4 text-black'>
                                        <p className='text-[28px] font-semibold mb-1'>Latest Blogs</p>
                                    </div>
                                    {allblogs?.blogs?.map((elem: any, index: number) => (
                                        <Link href={`/blog/${elem?.slug_link}`} key={index}>
                                            <div className='bg-white rounded-lg my-4 w-full p-4 flex sm:flex-row flex-col sm:text-left items-center gap-2 sm:justify-between'>
                                                <Image src={elem?.image || ''} height={175} width={328} alt='' className='w-full sm:w-[300px] xl:min-w-[328px]'></Image>
                                                <div className='flex flex-col items-start gap-2'>
                                                    <p className='text-[20px] text-[black] font-medium'>{elem?.title}</p>
                                                    <p className='text-homegrey text-[18px] font-medium'> <Link href={`/blog/category/${elem?.category?.category_slug}`}><span>{elem?.category?.name || 'Uncategorized'}</span></Link> &nbsp;<span className='text-homeblack'>{elem?.blog_date || '26-07-24'}</span></p>
                                                    <p className='text-[18px] text-textGrey'>{elem?.summary}</p>
                                                    <button className='text-pink text-[18px] mt-3 font-medium'>Read More...</button>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
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
// elem?.card?.filter((card: any) => card.is_favourite === true)