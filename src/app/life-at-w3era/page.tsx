'use client'
import React from 'react'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer';
import Image from 'next/image';
import { Useapi } from '@/helpers/apiContext'
import Link from 'next/link';
import FooterBanner from '@/components/footer-banner'
import Loader from '@/components/loader';

const Life = () => {
    const { life } = Useapi();
    const { basic_details } = Useapi();

    return (
        <div>
            {!basic_details && !life &&

                <Loader />
            }
            {
                basic_details && life &&

                <div className='w-full'>
                    <Header />
                    <Navbar />
                    <div className='w-full px-4 bg-[url("/images/lifeBanner.png")] bg-center bg-no-repeat b h-[40vh] flex justify-center items-center'>
                        <p className='text-white text-[32px] font-bold lg:text-[48px]'>Life at W3era</p>
                    </div>
                    <div className='w-full mx-auto 2xl:w-[75%] px-6 items-center bg-white flex flex-col-reverse  md:flex-row justify-between gap-10  py-12 lg:py-28'>
                        <div className=' md:w-[70%] lg:w-[40%] text-center md:text-left'>
                            <p className=' text-[32px] xl:text-[48px] leading-[] xl:leading-[58px] font-bold'>{life?.Revolutionize[0].title}</p>
                            <p className='text-[18px] font-medium mt-3 text-textGrey'>
                                {life?.Revolutionize[0].description}</p>
                            <Link href="/aboutus">
                                <button className='text-white mt-5 bg-pink rounded-lg px-6 py-3 text-[18px]'>About Us</button>
                            </Link>
                        </div>
                        <div className='lg:min-w-[627px] '>
                            <Image src={life?.Revolutionize[0].image} height={380} width={627} alt='' className='lg:w-[627px] w-[450px] '></Image>
                        </div>
                    </div>
                    <div className='w-full bg-blue py-12 lg:py-24'>
                        <div className='w-full mx-auto px-4 xl:w-[75%]'>
                            <div className='lg:w-[60%] mx-auto text-white  text-center '>
                                <p className=' text-[32px] lg:text-[48px] font-semibold mb-4 leading-[] md:leading-[58px]'>{life?.team_work[0].title}</p>
                                <p className='text-[18px] font-medium leading-[21px]' dangerouslySetInnerHTML={{ __html: life?.team_work[0].description }} >
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
                        <div className='2xl:w-[75%] px-6 w-full  py-12 lg:py-24 mx-auto'>
                            <div className='md:w-[60%] mx-auto  text-center '>
                                <p className=' text-[32px] lg:text-[48px] font-semibold mb-4'>{life?.event[0].title}</p>
                                <p className='text-[18px] text-textGrey font-medium leading-[21px]' dangerouslySetInnerHTML={{ __html: life?.event[0].description }} >
                                </p>
                            </div>
                            <div className='w-full flex  mt-8 gap-4 flex-wrap justify-center'>
                                {
                                    life?.event[0].cards.map((event: any ,index:any) => {
                                        return (
                                            <div className='border-[1px] min-w-[340px]  max-w-[438px] bg-white  border-slate-200 shadow-lg flex px-3 rounded-md py-3
                                             flex-col gap-3' key={index}>
                                                <Image src={event?.image} height={300} width={413} alt='' className=''></Image>
                                                <p className='text-[24px] font-medium'>{event?.title}</p>
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
                                <p className=' text-[32px] lg:text-[48px] font-semibold leading-[58px]'>{life?.fly_high[0].title}</p>
                                <p className='text-[18px] font-medium' dangerouslySetInnerHTML={{ __html: life?.fly_high[0].description }} >
                                </p>
                            </div>
                            <div className='flex justify-center lg:flex-nowrap flex-wrap gap-5'>



                                {
                                    life?.fly_high[0].cards.map((elem: any, i:number) => (
                                        <div key={i} className='flex justify-end gap-5'>
                                            <div className='bg-white sm:w-[230px] lg:w-[272px] min-h-[252px] py-5 rounded-lg flex items-center  flex-col justify-center gap-4 px-4 text-center'>
                                                <Image src={elem.icon} height={62} width={62} alt=''></Image>
                                                <p className='text-[20px] font-medium'>{elem.title}</p>
                                                <p className=' text-textGrey font-'>{elem.description}</p>
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
                                <p className=' text-[32px] lg:text-[48px] font-bold text-center'>{life?.grow_withus[0].title}</p>
                                <p className='text-textGrey text-center'>{life?.grow_withus[0].description}</p>
                            </div>
                        </div>
                        <div className='flex w-full xl:w-[75%] mx-auto md:flex-nowrap flex-wrap justify-between mt-7 gap-4 '>
                            <Image src={life?.grow_withus[0].image1} height={350} width={711} alt='' className=' min-w-[320px] max-w-[711px] max-h-[350px]'></Image>
                            <Image src={life?.grow_withus[0].image2} height={350} width={711} alt='' className=' min-w-[320px] max-w-[711px] max-h-[350px]'></Image>
                        </div>
                    </div>
                    <FooterBanner content={basic_details?.footer_card[0].title} description={basic_details?.footer_card[0].description} image={basic_details?.footer_card[0].image || "/images/life-footer.png"} slug={''} btncontent={'Talk To Our Experts'} />
                    <Footer />
                </div>
            }
        </div>
    );
};





export default Life