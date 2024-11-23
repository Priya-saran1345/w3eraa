'use client'
import React from 'react'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer';
import Image from 'next/image';
import { Useapi } from '@/helpers/apiContext'
import Link from 'next/link';
import Loader from '@/components/loader';
import DownNavbar from '@/components/DownNavbar'

const Life = () => {
    const { life } = Useapi();
    const { basic_details } = Useapi();

    return (
        <div>
            {/* {!basic_details && !life &&

                <Loader />
            } */}
            {
                // basic_details && life &&

                <div className='w-full'>
                    <Header />
                    <DownNavbar/>

                    <Navbar />
                    <div className='w-full px-4 bg-[url("/images/lifeBanner.png")] bg-center bg-no-repeat b h-[40vh] flex justify-center items-center'>
                        <h1 className='text-white  font-bold '>Life at W3era</h1>
                    </div>
                    <div className='w-full mx-auto 2xl:w-[75%] px-6 items-center bg-white flex flex-col-reverse  md:flex-row justify-between gap-10  py-12 lg:py-28'>
                        <div className=' md:w-[70%] lg:w-[40%] text-center md:text-left'>
                            <h2 className='  text-[28px] lg:text-[38px] 2xl:text-[48px] leading-[] text-homeblack xl:leading-[58px] font-bold'>
                                {life?.Revolutionize[0].title}</h2>
                            <p className=' text-[16px] lg:text-[19px]  mt-3 text-textGrey'>
                                {life?.Revolutionize[0].description}</p>
                            <Link href="/about-us">
                                <button className='text-white mt-5 bg-pink rounded-lg px-6 py-3 text-[18px]'>About Us</button>
                            </Link>
                        </div>
                        <div className='lg:min-w-[627px] '>
                            <Image src={life?.Revolutionize[0].image} 
                            height={380} width={627} alt={life?.Revolutionize[0]?.image_alt} className='lg:w-[627px] w-[450px] '></Image>
                        </div>
                    </div>
                    <div className='w-full bg-blue py-12 lg:py-24'>
                        <div className='w-full mx-auto px-4 xl:w-[75%]'>
                            <div className='lg:w-[60%] mx-auto text-white  text-center '>
                                <h2 className='font-semibold mb-4 leading-[] md:leading-[58px]'>{life?.team_work[0].title}</h2>
                                <p className=' text-[16px] lg:text-[19px]  leading-[21px]' dangerouslySetInnerHTML={{ __html: life?.team_work[0].description }} >
                                </p>

                            </div>
                            <div className='w-full rounded-xl pt-10'>
                                <video
                                    preload="true"
                                    autoPlay
                                    muted
                                    loop
                                    className="rounded-3xl fixed-video-size mx-auto"
                                >
                                    <source src="/images/lifeVideo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                            </div>

                        </div>
                    </div>
                    <div className='w-full bg-grey'>
                        <div className='2xl:w-[75%] px-3 w-full  py-12 lg:py-24 mx-auto'>
                            <div className='md:w-[60%] mx-auto  text-center '>
                                <h2 className=' text-homeblack font-semibold mb-4'>{life?.event[0].title}</h2>
                                <p className=' text-[16px] lg:text-[19px] text-homegrey  leading-[21px]' dangerouslySetInnerHTML={{ __html: life?.event[0].description }} >
                                </p>
                            </div>
                            <div className='w-full flex  mt-8 gap-4 flex-wrap justify-center'>
                                {
                                    life?.event[0].cards.map((event: any ,index:any) => {
                                        return (
                                            <div className='border-[1px] w-[95%] md:w-[45%] lg:w-[32%] bg-white  border-slate-200 shadow-lg flex px-3 rounded-md py-3
                                             flex-col gap-3' key={index}>
                                                <Image src={event?.image} height={300} width={413} alt={event?.image_alt} className=''></Image>
                                                <p className='text-[24px] text-homeblack font-medium'>{event?.title}</p>
                                                <p className='text-textGrey'>
                                                    {event?.description}                                 </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-blue py-12 lg:py-16'>
                        <div className='w-full 2xl:w-[75%] mx-auto flex flex-wrap xl:flex-nowrap justify-center gap-10 px-4'>
                            <div className='text-white md:w-[60%] text-center mx-auto '>
                                <h2 className='  text-[28px] lg:text-[38px] 2xl:text-[48px] font-semibold leading-[58px]'>{life?.fly_high[0].title}</h2>
                                <p className=' text-[16px] lg:text-[18px] mt-2' dangerouslySetInnerHTML={{ __html: life?.fly_high[0].description }} >
                                </p>
                            </div>
                            <div className='flex justify-center  lg:flex-nowrap flex-wrap gap-5'>



                                {
                                    life?.fly_high[0].cards.map((elem: any, i:number) => (
                                        <div key={i} className='flex justify-end gap-5'>
                                            <div className='bg-white sm:w-[230px] lg:w-[272px] min-h-[252px] max-h-[330px] py-5 rounded-lg flex items-center  flex-col justify-center gap-4 px-4 text-center'>
                                                <Image src={elem.icon}
                                                 height={62} width={62} alt={elem.icon_alt}></Image>
                                                <p className=' text-[18px] md:text-[20px]  font-medium'>{elem.title}</p>
                                                <p className=' text-textGrey '>{elem.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>  
                        </div>

                    </div>
                    <div className='w-full  mx-auto  py-12 lg:py-24 px-4'>
                        <div>
                            <div className='mx-auto md:w-[60%] flex flex-col gap-5'>
                                <h2 className='font-bold text-homeblack text-center'>{life?.grow_withus[0].title}</h2>
                                <p className='text-textGrey  text-[16px] lg:text-[19px] text-center'>{life?.grow_withus[0].description}</p>
                            </div>
                        </div>
                        <div className='flex w-full xl:w-[75%] mx-auto md:flex-nowrap flex-wrap justify-between mt-7 gap-4 '>
                            <Image src={life?.grow_withus[0].image1} height={350} width={711} alt={life?.grow_withus[0].image_alt1} className=' min-w-[320px] max-w-[711px] max-h-[350px]'></Image>
                            <Image src={life?.grow_withus[0].image2} height={350} width={711} alt={life?.grow_withus[0].image_alt2} className=' min-w-[320px] max-w-[711px] max-h-[350px]'></Image>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </div>
    );
};





export default Life