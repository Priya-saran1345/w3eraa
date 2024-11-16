'use client'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React from 'react'
import Footer from '@/components/footer';
import Image from 'next/image';
import Revenue from '@/components/revenue';
import { Useapi } from '@/helpers/apiContext'
import Loader from '@/components/loader';
import Link from 'next/link';

const Client = () => {
    const { client } = Useapi(); 
    const { apidata } = Useapi(); 
    const arr = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3];
    console.log('clients are here',client)
    return (
        <>
      {
!client&& !apidata&&

          <Loader/>

      }
      {
client&& apidata&&
   
        <div className='w-full'>
            <Header />
            <Navbar />
            <div className='w-full px-4 bg-[url("/images/blog-bg.png")] h-[45vh] flex justify-center items-center'>
                <p className='text-white text-[32px] font-bold lg:text-[48px]'>{client?.client[0].title}</p>

            </div>
            <div className='w-full '>
                <div className='w-full xl:w-[75%] px-4 mx-auto py-12 lg:py-20'>
                    <p className='lg:text-[48px] text-[32px] font-bold text-black text-center'>We &apos;ve helped 5000+ customers worldwide</p>
                
                    <div className='mx-auto mt-7 flex justify-center flex-wrap  lg:w-[80%]'>
                    {
                       client?.client[0]?.client_list?.map((elem: any, i: number) => {
                            return (
                                <div key={i} className="flex min-w-[190] max-h-[120px] p-1 group md:size-[181px] justify-center items-center border-[1px] border-slate-100 rounded-sm">
                                    <Image
                                        src={elem?.image}
                                        alt={elem?.image_alt}
                                        height={101}
                                        width={200}
                                        className="grayscale w-[145px] lg:max-w-[175px] group-hover:grayscale-0 transition duration-100 ease-in-out"
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
                    <div className='w-full relative  xl:w-[75%] mx-auto py-8  bg-white flex justify-between items-center '>
                        <div className=' bg-white md:w-[55%] flex-col flex text-center md:text-left px-12 py-10 md:py-0 '>
                            <p className='text-[32px] lg:text-[34px] font-bold leading-[] lg:leading-[58px]'>
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
                            <Image src={ client?.client[0]?.reputation_image||'/images/pana.png'} height={512} width={588} alt={client?.client[0]?.image_alt} className='hidden md:block'/>
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
            <div className='w-full py-12 lg:py-16'>
                <div className='2xl:w-[75%] w-full px-4 mx-auto'>
                    <p className='lg:text-[48px] text-[32px] font-bold text-center'>Why Should Customers Choose W3era?</p>
                    <div className='flex flex-wrap mt-10 gap-5 justify-center'>
                        {
                            client?.whychoose_w3era.map((elem: any, index: number) => {
                                return ( // Add return statement here
                                    <div key={index} className='hover:shadow-lg flex flex-col gap-4 sm:min-w-[348px] w-[378px] h-[261px] px-5 justify-center rounded-lg group transition-shadow duration-300'>
                                        <div className='group-hover:filter group-hover:brightness-0 group-hover:contrast-100'>
                                            <Image
                                                src={elem?.icon} // Ensure this path is correct
                                                alt='' // Add a descriptive alt text
                                                height={38}
                                                width={41}
                                                className='transition-all duration-300'
                                            />
                                        </div>
                                        <p className='text-[22px] font-medium group-hover:text-pink transition-colors duration-300'>
                                           {elem?.title}
                                        </p>
                                        <p className='text-[17px] text-textGrey'>
                                        {elem?.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
           }
        </>
    );
};
export default Client;
