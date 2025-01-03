// 'use client'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React from 'react'
import Footer from '@/components/footer';
import Image from 'next/image';
import Revenue from '@/components/revenue';
import Loader from '@/components/loader';
import Link from 'next/link';
import CustomerChoose from '@/components/CustomerChoose';
import DownNavbar from '@/components/DownNavbar'
import axios from 'axios';
import { BASE_URL } from '@/util/api';

async function getClientData() {
    const res = await fetch(`${BASE_URL}our-clients/`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch client data');
    }
    return res.json();
  }
export default async function Client ()  {
const client=await getClientData();
  
    const arr = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3];
    return (
        <>
      {/* {
       (!client) && (!apidata)&&
          <Loader/>

      } */}
      {
// client&& apidata&&
        <div className='w-full'>
            <Header />
            <DownNavbar/>
            <Navbar />
            <div className='w-full px-4 bg-[url("/images/blog-bg.png")] h-[45vh] flex justify-center items-center'>
                <h1 className='text-white text-[32px] font-bold lg:text-[48px]'>{client?.client[0].title}</h1>
            </div>
            <div className='w-full '>
                <div className='w-full xl:w-[95%]  2xl:w-[75%] px-4 mx-auto py-12 lg:py-20'>
                    <h2 className='lg:text-[48px] text-[32px] font-bold text-black text-center'>We &apos;ve helped 5000+ customers worldwide</h2>
                    <div className='mx-auto mt-7 flex justify-center flex-wrap lg:w-[80%]'>
                    {
                       client?.client[0]?.client_list?.map((elem: any, i: number) => {
                            return (
                                <div key={i} className="flex w-[160px] h-[120px] p-1 group sm:size-[181px] justify-center items-center border-[1px] border-slate-100 rounded-sm">
                                    <Image
                                        src={elem?.image}
                                        alt={elem?.image_alt}
                                        height={101}
                                        width={200}
                                        className="grayscale max-w-[145px] md:max-w-[160px] group-hover:grayscale-0 transition duration-100 ease-in-out"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
            <div className='w-full'>
            <div className='w-full'>
                <div className='w-full pt-20 bg-[url("/images/footer-bg.png")] bg-cover bg-center '>
                    <div className='w-full relative  xl:w-[95%]  2xl:w-[75%] mx-auto py-8  bg-white flex justify-between items-center '>
                        <div className=' bg-white md:w-[55%] flex-col flex text-center md:text-left px-12 py-10 md:py-0 '>
                            <p className=' text-[24px] xl:text-[28px] font-semibold text-homegrey  leading-[] lg:leading-[40px]'>
                           {client?.client[0]?.reputation_description}
                            </p>
                            <div className='flex justify-center md:justify-start flex-wrap gap-6 items-center'>
                                <Link href={'/get-a-free-quote'}>
                                <button className='px-10 mt-6 py-4 text-[18px] text-white rounded-lg bg-pink'>
                                    Get a Free Quote
                                </button>
                                </Link>
                                <Link href={'/get-a-free-strategy-review'}>
                                <button className='text-pink flex items-center hover:underline text-[20px] font-medium'>
                                    Analyse My Website for Free!
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div>
                        <Image src={ client?.client[0]?.reputation_image||'/images/pana.png'} height={512} width={588}
                         alt={client?.client[0]?.image_alt} className='hidden md:block min-h-full'/>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-grey -mt-64 h-72'>
                </div>
            </div> 
                <div className='w-full bg-grey -mt-20 pt-28 min-h-[35vh]'>
                    <Revenue />
                </div>
            </div>
            <CustomerChoose/>
            <Footer />
        </div>
           }
        </>
    );
};
