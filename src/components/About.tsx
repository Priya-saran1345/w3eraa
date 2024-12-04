"use client"
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React, { use, useEffect, useState } from 'react'
import Image from 'next/image';
import Footer from '@/components/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Loader from '@/components/loader'
import Link from 'next/link';
import ClientsCount from './ClientsCount';
import Button from '@/components/button'
import DownNavbar from '@/components/DownNavbar'
import axios from 'axios';
import { BASE_URL } from '@/util/api';

const AboutUS = ({about}:any) => {
// const [about, setabout] = useState<any>()
// const fetch = async () => {
//     try {
//         const response = await axios.get(`${BASE_URL}about/`);
//         setabout(response.data);
//       }
//        catch (error: any) {
//         console.log("about error", error.message);
//       }
//     }
//     useEffect(() => {
//         fetch();
//     }, [])
    const [aboutContent, setaboutContent] = useState<any>()
    const [show, setshow] = useState(false)
    const arr = [1, 2, 3, 4]
    const settings = {
        dots: true, // Enable dots navigation
        infinite: true, // Enables infinite loop sliding
        speed: 500, // Transition speed
        slidesToShow: 1.7, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed in milliseconds
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 1.5, // Adjust the number of slides to show
                    slidesToScroll: 1, // Adjust the number of slides to scroll
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 1450, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 1, // Adjust the number of slides to show
                    slidesToScroll: 1, // Adjust the number of slides to scroll
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 1, // Adjust the number of slides to show
                    slidesToScroll: 1, // Adjust the number of slides to scroll
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 1, // Adjust the number of slides to show
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 480, // For screens smaller than 480px
                settings: {
                    slidesToShow: 1, // Show only one slide on very small screens
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                }
            }
        ]
    };
    useEffect(() => {
        setaboutContent(about?.aboutus_image?.filter((elem: any) => elem.id > 1));
    }, [about]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutContent.length);
    };
    const handlePrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + aboutContent.length) % aboutContent.length
        );
    };
    const { image, title, description, link } = aboutContent?.[currentIndex] || {};

    return (
        <div>
{/* { !basic_details && !about&&
            <Loader/>
} */}
{
// basic_details && about&&

        <div>
            {/* <Header /> */}
            <DownNavbar/>

            <Navbar />
            <div className='w-full px-4 bg-[url("/images/aboutbg.png")] h-[388px] flex justify-center items-center'>
            <h1 className="text-homeblack text-[32px] font-bold lg:text-[48px]">About US</h1>
            </div>
            <div className='full'>
                <div className='w-full pt-12 lg:pt-16 xl:w-[95%]  2xl:w-[75%] mx-auto px-4' >
                    <div>
                        <p className=' text-[20px] lg:text-[32px] text-homeblack font-medium'>About</p>
                        <h2 className=' text-homeblack font-bold mb-2'>{about?.aboutus[0]?.title}</h2>
                        <div className=' text-[16px] lg:text-[18px] text-homegrey' dangerouslySetInnerHTML={{ __html:about?.aboutus[0]?.description }} />
                    </div>
                  
                </div>
                <div className=' w-full bg-[url("/images/aboutwave.png")] flex items-end min-h-[345px]'>
                    <div  className='w-full xl:w-[95%]  2xl:w-[75%] mx-auto px-4 mt-8 sm:mt-0' >
                        <h2 className=' font-bold text-homeblack text-center'>{about?.who_youare[0].title}</h2>
                            <div className=' text-[16px] lg:text-[18px] 2xl:text-[20px] px-10 text-center text-homegrey'
                              dangerouslySetInnerHTML={{ __html: about?.who_youare[0].description }} ></div>
                    </div>
                </div>
                <div className=' w-full bg-grey '>
                    <div className='w-full xl:w-[95%]  2xl:w-[75%] py-12 flex flex-wrap gap-5 justify-between mx-auto px-4'>
                        {
                            about?.who_youare[0].cards.map((elem: any ,index:any) => {
                                return (
                                    <div className='bg-white rounded-md p-8 mt-6 group  md:w-[48%]' key={index}>
                                        <div className='bg-pink flex size-[60px] lg:size-[94px] rounded-xl justify-center items-center'>
                                            <div className=' size-[30px] lg:size-[50px]  rounded-full border-2 border-white flex justify-center items-center'>
                                                <Image
                                                    src={elem.icon} // Ensure this path is correct
                                                    alt={elem.icon_alt}
                                                    height={24}
                                                    width={30}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 mt-4'>
                                            <h3 className=' text-[23px] lg:text-[26px] text-homeblack group-hover:text-pink font-medium'>{elem.title}</h3>
                                            <p className=' text-[20px] lg:text-[22px] text-homeblack     font-medium'>{elem.subtitle}</p>
                                            <p className=' text-[16px] text-homegrey lg:text-[18px]'>
                                                {
                                                    elem.description
                                                } </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='w-full bg-[url("/images/aboutbg2.png")] py-12   flex flex-col justify-center '>
                    <div className='md:w-[55%] flex flex-col gap-3 mx-auto text-white text-center'>
                        <h2 className=' font-bold '>{about?.ourvalue[0].title}</h2>
                        <p className='text-[16px] lg:text-[18px] xl:text-[20px] leading-[24px]'>
                            {about?.ourvalue[0].description}
                        </p>
                    </div>
                    <div className='flex justify-center  items-center mt-16'>
                        <Image
                            src={about?.ourvalue[0].image}// Ensure this path is correct
                            alt={about?.ourvalue[0]?.image_alt}
                            height={646}
                            width={700}
                        />
                    </div>
                </div>

                <div className='w-full hidden lg:block  py-8 lg:py-16 bg-grey'>
                    <div className='md:w-[55%] mx-auto'>

                        <h2 className='  font-bold pb-4 text-center text-homeblack'> {about?.about_client[0]?.title}
                        </h2>
                        <p className=' text-[16px] lg:text-[20px] fomt-medium text-center text-homegrey'>{about?.about_client[0]?.description}</p>
                    </div>
                    <div className='  mt-8 md:mt-12 overflow-hidden'>
                        <Slider {...settings}>
                            {
                                about?.about_client[0].cards.map((value: any, index: number) => (
                                    <div key={index} className='slide-item'>
                                        <div className=' w-full max-w-[940px] h-[300px] flex  justify-between rounded-sm  bg-white'>
                                            <Image
                                                src={value?.image} // Ensure this path is correct
                                                alt={value?.image_alt}
                                                height={400}
                                                width={290}
                                            />
                                            <div className='p-6 w-[80%] flex flex-col   justify-center'>
                                                <div className='border-l-2 mb-6 border-slate-800 pl-2'>
                                                    <p className='text-[24px] text-homeblack font-semibold mb-3'>{value?.title}</p>
                                                    <p className='text-[20px] text-homegrey'>{value?.description}</p>
                                                </div>
                                                <div>
                                                 <Link href="/contact-us">
                                                    <button className='text-[18px] font-medium py-2 px-10 text-pink border-pink border-2 rounded-lg'>
                                                        Let&apos;s Connect
                                                    </button>
                                                 </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>

                <div className=' pt-12 lg:pt-16 bg-white md:flex-row flex-col flex justify-between  items-start px-4 mx-auto xl:w-[95%]  2xl:w-[75%]'>
                    <div className='md:w-[342px] text-center md:text-left mb-16 md:mb-0'>
                        <h2 className='  text-homeblack font-semibold'>{about?.milestone[0]?.title}</h2>
                        <p className=' text-[16px] lg:text-[18px] xl:text-[20px] text-homegrey font-medium'>{about?.milestone[0]?.description}</p>
                    </div>
                    <div>
                        <Image
                            src={about?.milestone[0]?.image||'/images/road.png'} // Ensure this path is correct
                            alt={about?.milestone[0]?.image_alt}
                            height={600}
                            width={1109}
                            className='max-h-[700px]'
                        />
                    </div>
                </div>
                     <div className='w-full'>
                 <div className='w-full rounded-xl pt-12 bg-lightblue bg-cover bg-center '>
                     <div className='w-full relative rounded-xl  xl:w-[95%]  2xl:w-[75%] mx-auto  bg-white flex justify-between items-center '>
                         <div className=' bg-white md:w-[55%] flex-col flex text-center md:text-left px-4 sm:px-12 py-10 md:py-0 '>
                             <h2 className=' lg:text-[30px] font-bold text-homeblack leading-[] lg:leading-[48px]'>
                                 {about?.ourapproach[0].title}
                             </h2>
                             <div className='text-textGrey text-[16px] lg:text-[18px] mt-4 leading-[21px]'  dangerouslySetInnerHTML={{ __html:about?.ourapproach[0].description }} >
                            
                             </div>
                             <div className='flex-col flex gap-3 w-fit items-center mt-4'>
                            
                       <ClientsCount/>
                       <Link href={'/work'}>
                             <Button content={'Learn How We Work'}/>   
                       </Link>
                                 
                             </div>
                         </div>
                         <div className='rounded-2xl '>
                             <Image src={about?.ourapproach[0].image} height={312} width={488}
                              alt={about?.ourapproach[0]?.image_alt} className='hidden md:block  rounded-r-2xl '/>
                         </div>
                     </div>
                 </div>
                 <div className='w-full bg-blue -mt-44 h-52'>
                 </div>
             </div> 

                <div className='w-full bg-grey'>
                    <div className='w-full xl:w-[95%]  2xl:w-[75%] mx-auto pb-16 px-4'>
                        <div className='md:w-[60%] mx-auto mb-8 py-4 text-center flex flex-col gap-3'>
                            <h2 className='  text-homeblack font-semibold'>{about?.ourvision[0].title}</h2>
                            <p className=' text-[18px] lg:text-[20px] text-homegrey font-medium'>{about?.ourvision[0].description} </p>
                        </div>
                        {
                            about?.ourvision_point.map((elem: any, index:any) => (
                                <div key={elem.id} className='bg-white mb-5 flex gap-10 group items-start py-4 px-4 md:px-16 rounded-lg'>
                                    <div className=''>
                                        <h2 className='text-textGrey group-hover:text-pink text-[32px] lg:text-[38px]'>0{index+1}</h2>
                                    </div>
                                    <div>
                                        <h3 className=' text-[22px] lg:text-[24px] font-semibold group-hover:text-pink text-homeblack'>{elem.title}</h3>
                                        <p className='text-textGrey text-[18px] mt-1 leading-[21px] mb-4'>{elem.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            
            {/* <Footer /> */}
        </div>
        }
        </div>
    )
}

export default AboutUS