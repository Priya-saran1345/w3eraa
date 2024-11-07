"use client"; // Ensures this component runs on the client side
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/button';
import Image from 'next/image';
import { useapi } from '@/helpers/apiContext';
import axios from 'axios';
import { BASE_URL } from '@/util/api';
import Loader from '@/components/loader';

const Category = () => {
  // const { blogs } = useapi(); // Get blog data from context
  const pathname = usePathname();
    const segments = pathname.replace(/\/$/, '').split('/');
    const lastsegment= segments.pop();  
    const [descripton, setdescriton] = useState<any>('')
    const [blog, setBlogs] = useState<any>(); // Initialize as an empty array

  const fetch=async()=>{
    try {
      const response = await axios.get(`${BASE_URL}blogs/?category=${lastsegment}`);
      setBlogs (response.data.blogs);
      setdescriton (response.data.category.find((elem:any)=>{
return(
  elem?.category_slug==lastsegment
)
      })) 
          console.log('response -----------',response.data)
    } catch (error: any) {
      console.log("client error", error.message);
    }
  }

  useEffect(()=>{
    fetch()

  },[])
   // Debug log for filtered blogs
  return (
    <div>
    { !blog&& 
      <Loader/>
      }
      {
blog&& 
    <div>
      <Header />
      <Navbar />
      <div className='w-full xl:w-[75%] mx-auto px-4 bg-white'>
        <div className='mt-5 py-3 w-full border-b-[2px] border-lightblue'>
          <p className='text-homegrey font-medium'>
           <Link href={'/blog'}>Blog</Link> / Category/<span className='text-pink capitalize'>{lastsegment}</span>
          </p>
        </div>
        <div className='w-full leading-[21px] bg-lightblue text-[18px] text-homegrey p-4 md:p-10 mt-3 rounded-2xl'>
  <div
    dangerouslySetInnerHTML={{
      __html: descripton?.description || 'data not available'
    }}
  />
</div>


        <div className='w-full mt-16'>
          <div className='w-full border-b-2 border-lightblue pb-5'>
            <p className='text-homeblack text-[38px] font-bold'>
              <span className='uppercase'>{lastsegment}&nbsp;</span>- Blogs
            </p>
          </div>
          <div className='flex mt-4 mb-16 justify-center flex-wrap gap-5'>
            {blog?.map((elem: any, index: number) => (
              <div  key={index} className='relative border-[2px] border-lightblue flex flex-col  hover:shadow-2xl duration-300  w-[450px] sm:w-[48%]
               lg:w-[32%] rounded-lg'>
                <div  className='bg-lightblue absolute top-3 left-3 text-blue text-[17px] font-medium rounded-lg py-1 px-4'>
                {elem?.blog_date||'16 Oct,2024'}
                </div>
                <div className='w-full h-fit'>
                  <Image src={elem?.image||''} alt='' height={218} width={461} className='rounded-lg max-h-[218px]' />
                </div>
                <div className='p-4 flex flex-col min-h-[350px]   justify-between'>
                  <div className='text-blue font-medium my-1'>
                    <span className='capitalize'>{elem?.category?.name}</span> | &nbsp;<span>Latest</span>
                  </div>
                  <p className='font-bold mb-3 text-homeblack text-[24px] leading-tight'>{elem?.title}</p>
                  <p className='text-homegrey leading-[21px] pb-6 text-[18px]'>
                    {elem?.summary}
                  </p>
                  <div>
                    <Link href={`/blog/${elem?.slug_link}`}>
                      <Button content={'View More'} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
      }
    </div>
  );
};

export default Category;
