"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useapi } from '@/helpers/apiContext'
import Button from '@/components/button';
const Blogs = () => {
    const { blogs } = useapi();
    const [selectedBlog, setselectedBlog] = useState<any>([])
    const [data, setdata] = useState({first:'',second:''})

    function splitStringByLastWords(text:any, numOfWords:number) {
        const words = text.split(' '); // Split the string by spaces to get individual words
        
        if (numOfWords >= words.length) {
            return { first: '', second: text };
        }
        
        const splitIndex = words.length - numOfWords;
        const firstPart = words.slice(0, splitIndex).join(' ');
        const secondPart = words.slice(splitIndex).join(' ');
        
        return { first: firstPart, second: secondPart };
    }
      
      useEffect(() => {
        const result = splitStringByLastWords('Our Latest Blogs',2);
        setdata(result);
    }, []);




    useEffect(() => {
        // Filter and set the first three blogs that are marked as favorite
        if (blogs) {
            // const favoriteBlogs = blog.flatMap((elem: any) =>
            //     elem?.card?.filter((card: any) => card.is_favourite === true)
            // ).slice(0, 3); // Select only the first three
            setselectedBlog(blogs?.blogs);
        }
    }, [blogs]);

    return (
       
        <div className='w-full px-4 mx-auto py-10 lg:py-16 xl:w-[75%]'>
            {/* <p className='text-textPurple text-center font-semibold text-[20px]'><span className='border-b-2 border-pink pb-2'>Updates</span></p> */}
            <p className=' text-[32px] lg:text-[48px] text-homeblack font-bold text-center my-4'>{data.first} <span className='text-pink'>{data.second}</span></p>
            <p className='text-homegrey text-[18px] text-center'>Dive into our latest blogs to keep up with the newest trends, insights, and tips in the digital marketing world.</p>
            <div className='flex justify-center  flex-wrap lg:flex-nowrap mt-12 gap-7'>
                {
                    selectedBlog?.slice(0,3).map((elem: any) =>     
                    (
                        <div className='relative  border-[2px]  border-lightblue hover:shadow-xl   duration-300 w-[461px] pb-2 rounded-lg '>
                            <div className='bg-pink absolute top-3 left-3 text-white text-[17px] font-medium rounded-lg py-1 px-4'>
                                {elem?.blog_date||'16 Oct,2024'}
                            </div>
                            <div>
                                <Image src={elem?.image||'/images/blog1.png'} alt='' height={218} width={461} className='rounded-lg max-h-[218px]' />
                            </div>
                            <div className='p-4 flex flex-col min-h-[400px] gap-3 justify-between '>
                                <div className='text-blue font-medium '>
                                    <Link href={`/blog/category/${elem?.category?.category_slug}`}><span>{elem?.category?.name|| 'Uncategorized'}</span></Link> | &nbsp;<span>Latest</span>
                                </div>
                                <p className='font-bold  text-homeblack text-[24px] leading-tight'>{elem?.title}</p>
                                <p className='text-homegrey leading-[21px]  text-[18px]'>
                                    {elem?.summary}
                                </p>
                                <div>
                                <Link href={'/blog'}>
                                <Button content={'View All'} className='mt-3'/>
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full mt-10 flex justify-center items-center'>
                <Link href={'/blog'}>
                <Button content={'View All'}/>
                </Link>

            </div>
        </div>
       
    )
}

export default Blogs