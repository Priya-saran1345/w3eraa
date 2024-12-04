"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { Useapi } from '@/helpers/apiContext'
import { useEffect, useRef, useState } from "react";
import FooterBanner from '@/components/footer-banner'
import toast from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "@/util/api";
import { motion } from 'framer-motion'
const Footer = ({basic_details}:any) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    // const { basic_details } = Useapi();
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (index: any) => {
        setOpenDropdown(openDropdown === index ? null : index); // Toggle the dropdown
    };
    const [message, setMessage] = useState({
        name: "",
        email: "",
    });
    const handleChange = (e: any) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    };
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${BASE_URL}subscription/`, message);

            toast.success('Message send successfully')

            setMessage({
                name: "",
                email: "",
            });
        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error('Try again')
        }
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenDropdown]);
    return (
        <>
            <FooterBanner />
            <div className='w-full bg-blue'>
                <div className='xl:w-[95%]  2xl:w-[75%] text-white pt-0 lg:py-16 mx-auto px-4'>
                    <div className='flex justify-between md:flex-row gap-5 flex-col '>
                        <div className='md:w-1/2'>
                            <p className=' text-[30px] lg:text-[36px] font-semibold leading-tight text-center sm:text-left'>
                                {basic_details?.subscribeto[0].title}
                                {basic_details?.subscribeto[0].subtitle}
                            </p>
                        </div>
                        <div className='md:w-[45%]'>
                            <div className='flex sm:flex-row flex-col gap-6 justify-between'>
                                <input
                                    name="name"
                                    value={message.name}
                                    onChange={handleChange}
                                    type="text" placeholder='Full Name' className='py-3 px-5 bg-white w-full border-none rounded-lg outline-none text-textGrey' />
                                <input
                                    name="email"
                                    value={message.email}
                                    onChange={handleChange}
                                    type="email" placeholder='Email Address' className='py-3 px-5 bg-white w-full rounded-lg border-none outline-none text-textGrey' />
                            </div>
                            <div className='mt-2 sm:flex justify-between gap-10'>
                                {/* <div className="flex justify-start items-start gap-3">
                                <input type="checkbox" className="min-h-[15px] min-w-[15px] rounded-md mt-2" />
                                <p className='text-[18px] block'>{basic_details?.subscribeto[0].description}</p>
                            </div> */}
                                <div className="flex justify-end w-full mt-3 sm:mt-0 ">
                                    <button
                                        onClick={handleSubmit}
                                        className='flex items-center h-[50px] justify-end px-8  text-white  rounded-lg py-3 text-[18px] group bg-pink transition duration-300'>
                                        <span className=' transition-transform duration-200 group-hover:-translate-x-2'>   Subscribe</span>
                                        <FaArrowRightLong className='text-[20px] opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-x-2' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* put here */}
                    <div className=' mt-12 lg:mt-28  flex-wrap  lg:flex-nowrap flex lg:justify-around gap-8 px-7'>
                        <div className=' w-full sm:w-1/4'>
                            <div className=''>
                                <p className='text-[21px] flex  font-medium w-full  sm:border-b-2'>About Company <FaMinus className='mt-2 mx-2 sm:hidden' />
                                </p></div>
                            <ul className='text-[14px] font-medium flex flex-col gap-2 py-3'>

                                <li className="group relative">
                                    <Link target="_blank" href={'/about-us'} className="hover:no-underline">
                                        About Us
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>
                                </li>
                                <li className="group relative">
                                    <Link target="_blank" href={'/case-study'} className="hover:no-underline">
                                        Case Study
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>

                                </li>
                                <li className="group relative">
                                    <Link target="_blank" href={'/portfolio'} className="hover:no-underline">
                                        Portfolio
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>

                                </li>
                                <li className="group relative">
                                    <Link target="_blank" href={'/contact-us'} className="hover:no-underline">
                                        Contact Us
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>

                                </li>
                                <li className="group relative">
                                    <Link target="_blank" href={'/testimonials'} className="hover:no-underline">
                                        Testimonials
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[80px]"></span>

                                </li>
                                <li className="group relative">
                                    <Link target="_blank" href={'/faq'} className="hover:no-underline">

                                        Frequently Asked Questions
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[180px]"></span>

                                </li>
                                <li className="group relative">
                                    <Link target="_blank" href={'/life-at-w3era'} className="hover:no-underline">
                                        Life at W3era
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[80px]"></span>

                                </li>
                            </ul>
                            <div className='flex gap-2 items-center'>
                                <p className='text-[21px] flex  font-medium w-full  sm:border-b-2'>Connect with Social<FaMinus className=' mt-2 mx-2 sm:hidden' />
                                </p>
                            </div>
                            <div className='flex
                         gap-2 mt-5 text-black'>
                                <Link target="_blank" href={`${basic_details?.basic_details[0].facebook_url}`}>
                                    <div className='w-[26px] h-[26px] rounded-full flex justify-center items-center bg-white'>
                                        <FaFacebook />
                                    </div>
                                </Link>
                                <Link target="_blank" href={`${basic_details?.basic_details[0].instagram_url}`} >
                                    <div className='w-[26px] h-[26px] flex justify-center items-center rounded-full  bg-white'>
                                        <FaInstagram />
                                    </div>
                                </Link>
                                <Link target="_blank" href={`${basic_details?.basic_details[0].linkedin_url}`}>

                                    <div className='w-[26px] h-[26px] flex justify-center items-center rounded-full  bg-white'>
                                        <FaLinkedin />
                                    </div>
                                </Link>
                                <Link target="_blank" href={`${basic_details?.basic_details[0].twitter_url}`}>

                                    <div className='w-[26px] h-[26px] flex justify-center items-center rounded-full  bg-white'>
                                        <FaXTwitter />
                                    </div>

                                </Link>
                                <Link target="_blank" href={`${basic_details?.basic_details[0].youtube_url}`}>

                                    <div className='w-[26px] h-[26px] flex justify-center items-center rounded-full  bg-white'>
                                        <FaYoutube />

                                    </div>
                                </Link>
                                <Link target="_blank" href={`${basic_details?.basic_details[0].skype_url}`}>

                                    <div className='w-[26px] h-[26px] flex justify-center items-center rounded-full  bg-white'>
                                        <FaSkype />
                                    </div>
                                </Link>
                                <Link target="_blank" href={`${basic_details?.basic_details[0].pinterest_url}`}>

                                    <div className='w-[26px] h-[26px] flex justify-center items-center rounded-full  bg-white'>
                                        <FaPinterest />
                                    </div>
                                </Link>
                                <Link target="_blank" href={`${basic_details?.basic_details[0].gmb_url}`}>

                                    <div className='w-[26px] h-[26px] flex justify-center items-center rounded-full  bg-white'>
                                        <IoLocationOutline />
                                    </div>
                                </Link>
                            </div>
                            <Link target="_blank" href={'https://clutch.co/profile/w3era-web-technology?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=num_reviews&utm_term=www.w3era.com#reviews'}>
                                <Image
                                    src={'/images/footer1.png'} // Ensure this path is correct
                                    alt={''}
                                    height={106}
                                    width={200}
                                    className='mt-7'
                                />
                            </Link>
                        </div>
                        <div className='   w-full sm:w-1/4'>
                            <div className='flex gap-2 items-center'>
                                <p className='text-[21px] flex  font-medium w-full  sm:border-b-2'>
                                    Resources <FaMinus className='mt-2 mx-2 sm:hidden' />

                                </p> 
                            </div>
                            <ul className='text-[14px] font-medium flex flex-col gap-2 py-3'>
                                    <li className="group relative" >
                                <Link target="_blank" href={'/blog'} className="hover:no-underline">
                                        Blogs
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[40px]"></span> 
                                        </li>
                                    <li className="group relative" >
                                <Link target="_blank" href={'/career'} className="hover:no-underline">
                                        Career
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[40px]"></span>

                                        </li>
                                    <li  className="group relative" >
                                <Link target="_blank" href={'/tool'} className="hover:no-underline">
                                        SEO Tools
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>
                                        </li>
                                    <li  className="group relative">
                                <Link target="_blank" href={'/website-seo-analyzer'} className="hover:no-underline">

                                        Website Audit Tool
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[110px]"></span>

                                        </li>
                                    <li  className="group relative">
                                <Link target="_blank" href={'/seo-by-industry'} className="hover:no-underline">
                                        SEO By Industry
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[80px]"></span>

                                        </li>
                                    <li className="group relative">
                                <Link target="_blank" href={'/our-client-list'} className="hover:no-underline">
                                        Our Clients
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[80px]"></span>

                                        </li>
                                    <li className="group relative">
                                <Link target="_blank" href={'/refund-policy'} className="hover:no-underline">
                                        Refund Policy
                                        
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[80px]"></span>

                                    </li>
                                    <li  className="group relative">
                                <Link target="_blank" href={'/privacy-policy'} className="hover:no-underline">
                                        Privacy Policy
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[80px]"></span>

                                        </li>
                                    <li className="group relative" >
                                <Link target="_blank" href={'/terms-conditions'} className="hover:no-underline">
                                        Terms & Conditions
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[120px]"></span>

                                        </li>
                            </ul>
                            <Link target="_blank" href={'https://www.semrush.com/agencies/w3era-web-technology-pvt-ltd/'}>
                                <Image
                                    src={'/images/footer2.png'}
                                    alt={''}
                                    height={108}
                                    width={108}
                                    className='mt-3'
                                />
                            </Link>
                        </div>
                        <div className=' w-full   sm:w-1/4' ref={dropdownRef}>
                            <div className='flex gap-2 items-center'>
                                <p className='text-[21px] flex  font-medium w-full  sm:border-b-2'>
                                    Our Services <FaMinus className=' mt-2 mx-2 sm:hidden' />
                                </p>
                            </div>
                            <ul className='text-[14px] font-medium flex flex-col gap-2 py-3'>
                                <div className="">
                                        <li className=' cursor-pointer group relative'   onMouseEnter={() => toggleDropdown(0)}
                                        // onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                    <Link target="_blank" href={'/search-engine-optimization-services'} className="flex items-center gap-1 hover:no-underline">
                                          
                                       Search Engine Optimization Services<IoMdArrowDropdown />
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>

                                        </li>
                                    {openDropdown === 0 && (
                                        <motion.div
                                        initial={{ opacity: 0}}
                                        animate={{opacity: 1}}
                                        className="mx-8 bg-white text-homeblack rounded-lg z-50 capitalize p-6  absolute" onMouseLeave={() => setOpenDropdown(null)}>
                                            <ul className="flex  flex-col gap-3">
                                                <Link target="_blank" href={'/on-page-seo-services'}><li className="hover:text-pink cursor-pointer ">On Page SEO Services</li></Link>
                                                <Link target="_blank" href={'/off-page-seo'}><li className="hover:text-pink cursor-pointer ">Off Page SEO Service</li></Link>
                                                <Link target="_blank" href={'/guest-posting-services'}><li className="hover:text-pink cursor-pointer ">Guest Posting Services</li></Link>
                                                <Link target="_blank" href={'/link-building-services'}><li className="hover:text-pink cursor-pointer ">Link Building Service</ li></Link>
                                                <Link target="_blank" href={'/private-label-seo-services'}><li className="hover:text-pink cursor-pointer ">Private Label SEO Service</li></Link>
                                                <Link target="_blank" href={'/mobile-seo-services'}><li className="hover:text-pink cursor-pointer ">Mobile SEO Service</li></Link>
                                                <Link target="_blank" href={'/enterprise-seo'}><li className="hover:text-pink cursor-pointer ">Enterprise SEO Service</li></Link>
                                                <Link target="_blank" href={'/local-seo-services'}><li className="hover:text-pink cursor-pointer ">Local SEO Service</li></Link>
                                                <Link target="_blank" href={'/small-business-seo-services'}><li className="hover:text-pink cursor-pointer ">Small Business SEO Service</li></Link>
                                                <Link target="_blank" href={'/ecommerce-seo-services'}><li className="hover:text-pink cursor-pointer ">E-Commerce SEO service</li></Link>
                                                <Link target="_blank" href={'/white-label-seo-services'}><li className="hover:text-pink cursor-pointer ">White Label SEO Service</li></Link>
                                                <Link target="_blank" href={'/seo-reseller-services'}><li className="hover:text-pink cursor-pointer ">SEO Reseller Services</li></Link>
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                                <div>
                                    <li className='flex gap-1 items-center cursor-pointer group relative' onMouseEnter={() => toggleDropdown(1)}
                                        //   onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                    <Link target="_blank" href={'/digital-marketing-packages'} className='flex gap-1 items-center cursor-pointer hover:no-underline'>
                                            Digital Marketing Packages<IoMdArrowDropdown />
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>
                                            </li>
                                    {openDropdown === 1 && (
                                        <motion.div
                                        initial={{ opacity: 0}}
                                        animate={{opacity: 1}} 
                                        className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 z-50 absolute overflow-y-auto h-1/2" onMouseLeave={() => setOpenDropdown(null)}>
                                            <ul className="flex  flex-col gap-3">
                                                <Link target="_blank" href={'/seo-packages'}><li className="hover:text-pink cursor-pointer">SEO Packages</li></Link>
                                                <Link target="_blank" href={'/app-store-aso-packages'}><li className="hover:text-pink cursor-pointer">App Store Packages</li></Link>
                                                <Link target="_blank" href={'/content-marketing-packages'}><li className="hover:text-pink cursor-pointer">Content Marketing Packages</li></Link>
                                                <Link target="_blank" href={'/cro-packages'}><li className="hover:text-pink cursor-pointer">CRO Packages</li></Link>
                                                <Link target="_blank" href={'/ecommerce-seo-packages'}><li className="hover:text-pink cursor-pointer">Ecommerce Packages</li></Link>
                                                <Link target="_blank" href={'/facebook-marketing-packages'}><li className="hover:text-pink cursor-pointer"> Facebook Marketing Packages</li></Link>
                                                <Link target="_blank" href={'/guest-posting-service-packages'}><li className="hover:text-pink cursor-pointer">Guest Posting Service Packages</li></Link>
                                                <Link target="_blank" href={'/link-building-packages'}><li className="hover:text-pink cursor-pointer">Link Building  Packages</li></Link>
                                                <Link target="_blank" href={'/local-seo-packages'}><li className="hover:text-pink cursor-pointer">Local SEO Packages</li></Link>
                                                <Link target="_blank" href={'/mobile-seo-packages'}><li className="hover:text-pink cursor-pointer">Mobile SEO Packages</li></Link>
                                                <Link target="_blank" href={'/orm-packages'}><li className="hover:text-pink cursor-pointer">ORM Packages</li></Link>
                                                <Link target="_blank" href={'/social-media-marketing-packages/'}><li className="hover:text-pink cursor-pointer">Social Media Marketing Packages</li></Link>
                                                <Link target="_blank" href={'/video-marketing-packages'}><li className="hover:text-pink cursor-pointer">Video Marketing Packages</li></Link>
                                                <Link target="_blank" href={'/wordpress-development-packages'}><li className="hover:text-pink cursor-pointer">WordPress Development Packages</li></Link>
                                                <Link target="_blank" href={'/website-migration-package'}><li className="hover:text-pink cursor-pointer">Website Migration Packages</li></Link>
                                                <Link target="_blank" href={'/web-development-package'}><li className="hover:text-pink cursor-pointer">Web Development Packages</li></Link>
                                                <Link target="_blank" href={'/small-business-seo-packages'}><li className="hover:text-pink cursor-pointer">Small Business SEO Packages</li></Link>
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                                <div>
                                        <li className=' cursor-pointer group relative ' onMouseEnter={() => toggleDropdown(2)}
                                        //   onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                    <Link target="_blank" href={'/social-media-marketing-services'} className="hover:no-underline flex gap-1 items-center">
                                            Social Media Marketing <IoMdArrowDropdown />
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>

                                            </li>
                                    {openDropdown === 2 && (
                                      <motion.div
                                      initial={{ opacity: 0}}
                                      animate={{opacity: 1}}
                                         className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 z-50 absolute" onMouseLeave={() => setOpenDropdown(null)}>
                                            <ul className="flex  flex-col gap-3">
                                                <Link target="_blank" href={'/facebook-advertising-services'}><li className="hover:text-pink cursor-pointer">Facebook Advertising Services</li></Link>
                                                <Link target="_blank" href={'/instagram-marketing-services'}><li className="hover:text-pink cursor-pointer">Instagram Marketing Services</li></Link>
                                                <Link target="_blank" href={'/linkedin-marketing-services-india'}><li className="hover:text-pink cursor-pointer">Linkedin Marketing Services India</li></Link>
                                                <Link target="_blank" href={'/linkedin-marketing-services-usa'}><li className="hover:text-pink cursor-pointer">Linkedin Markting Services USA</li></Link>
                                                <Link target="_blank" href={'/pinterest-marketing-services-usa'}><li className="hover:text-pink cursor-pointer">  Pinterest Marketing Services</li></Link>
                                                <Link target="_blank" href={'/youtube-marketing-services'}><li className="hover:text-pink cursor-pointer"> Youtube Markting Services</li></Link>
                                                <Link target="_blank" href={'/twitter-marketing-services'}><li className="hover:text-pink cursor-pointer">Twitter Marketing Services</li></Link>

                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                                <div>
                                        <li className='flex gap-1 items-center cursor-pointer group relative' onMouseEnter={() => toggleDropdown(3)}
                                        //   onMouseLeave={() => setOpenDropdown(null)}
                                        >
                                    <Link target="_blank" href={'/web-development-services'} className="flex gap-1 hover:no-underline items-center ">
                                            Web Development Services <IoMdArrowDropdown />
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>

                                            </li>
                                    {openDropdown === 3 && (
                                        <motion.div
                                        initial={{ opacity: 0}}
                                        animate={{opacity: 1}}
                                        className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 z-50 absolute" onMouseLeave={() => setOpenDropdown(null)}>
                                            <ul className="flex  flex-col gap-3">
                                                <Link target="_blank" href={'/wordpress-development-services'}><li className="hover:text-pink cursor-pointer">WordPress Development Services</li></Link>
                                                <Link target="_blank" href={'/magento-web-development-services'}><li className="hover:text-pink cursor-pointer">Magneto Development Services</li></Link>
                                                <Link target="_blank" href={'/asp-dot-net-development-services'}><li className="hover:text-pink cursor-pointer">ASP.NET Development Services</li></Link>
                                                <Link target="_blank" href={'/laravel-development-services'}><li className="hover:text-pink cursor-pointer">Laravel Development Services</li></Link>

                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                                <div>
                                        <li className='flex gap-1 items-center cursor-pointer group relative' >
                                    <Link target="_blank" href={'/online-reputation-management'} className="hover:no-underline">
                                            Reputation Management
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[160px]"></span>

                                            </li>
                                </div>
                                <div>
                                        <li className='flex gap-1 items-center group relative cursor-pointer'
                                            onMouseEnter={() => toggleDropdown(5)}
                                        // onMouseLeave={() => setOpenDropdown(null)}
                                        >Pay Per Click (PPC)<IoMdArrowDropdown />
                                    <Link target="_blank" href={'/google-ads-services'} className="flex gap-1 items-center hover:no-underline">
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>

                                        </li>
                                    {openDropdown === 5 && (
                                     <motion.div
                                     initial={{ opacity: 0}}
                                     animate={{opacity: 1}}
                                         className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 z-50 absolute" onMouseLeave={() => setOpenDropdown(null)}>
                                            <ul className="flex  flex-col gap-3">
                                                <Link target="_blank" href={'/google-my-business-ads'}><li className="hover:text-pink cursor-pointer">Google My Business Ads</li></Link>
                                                <Link target="_blank" href={'/google-shopping-ads'}><li className="hover:text-pink cursor-pointer">Google Shopping Ads</li></Link>
                                                <Link target="_blank" href={'/ppc-company-in-usa'}><li className="hover:text-pink cursor-pointer">PPC Company In USA</li></Link>
                                                <Link target="_blank" href={'/ppc-company-in-florida'}><li className="hover:text-pink cursor-pointer">PPC Company In Florida</li></Link>
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                                <div>
                                        <li className='flex gap-1 items-center group relative cursor-pointer'
                                            onMouseEnter={() => toggleDropdown(6)}
                                        >
                                    <Link target="_blank" href={'/web-design-services'} className="flex gap-1 items-center hover:no-underline">
                                            Web Design Services<IoMdArrowDropdown />
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>

                                            </li>
                                    {openDropdown === 6 && (
                                        <motion.div
                                        initial={{ opacity: 0}}
                                        animate={{opacity: 1}}
                                         className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 z-50 absolute" onMouseLeave={() => setOpenDropdown(null)}>
                                            <ul className="flex  flex-col gap-3">
                                                <Link target="_blank" href={'/logo-design-services'}><li className="hover:text-pink cursor-pointer">Logo Designing Services</li></Link>
                                                <Link target="_blank" href={'/mobile-responsive-designing-services'}><li className="hover:text-pink cursor-pointer">Mobile Responsive Design</li></Link>
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                                <div>
                                        <li className='flex gap-1 items-center group relative cursor-pointer'
                                            onMouseEnter={() => toggleDropdown(7)} >
                                    <Link target="_blank" href={'/content-marketing-services'}className="flex gap-1 items-center hover:no-underline">
                                                Content Marketing Services<IoMdArrowDropdown />
                                    </Link>
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[60px]"></span>
                                            </li>
                                    {openDropdown === 7 && (
                                        <motion.div
                                        initial={{ opacity: 0}}
                                        animate={{opacity: 1}}
                                        className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 z-50 absolute" onMouseLeave={() => setOpenDropdown(null)}   >
                                            <ul className="flex  flex-col gap-3">
                                                <Link target="_blank" href={'/content-marketing-services-india'}><li className="hover:text-pink cursor-pointer">Content Marketing Services India</li></Link>
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                                    <li className="group relative">
                                <Link target="_blank" href={'/digital-marketing-services'} className="hover:no-underline">
                                        Digital Marketing Services
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[170px]"></span>
                                        </li>
                                    <li className="group relative">
                                <Link target="_blank" href={'/social-media-optimization'} className="hover:no-underline">
                                        Social Media Optimization
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[170px]"></span>
                                        </li>
                                    <li className="group relative">
                                <Link target="_blank" href={'/google-business-profile-management-services'} className="hover:no-underline">
                                        Google Business Profile
                                </Link>
                                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[140px]"></span>
                                    </li>
                            </ul>
                        </div>
                        <div className=' w-full  sm:w-1/4'>
                            <div className='flex gap-2 items-center'><p className='text-[21px] flex  font-medium w-full  sm:border-b-2'>Head Office </p>
                                <FaMinus className='mt-2 mx-2 sm:hidden' />
                            </div>
                            <div className='flex gap-6 mt-4'>
                                <IoLocationSharp className='text-[48px]' /><p>
                                    {basic_details?.basic_details[0].address1}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <p className='text-[21px] flex  font-medium w-full mt-4 sm:border-b-2'>
                                    US Office </p><FaMinus className='mt-2 mx-2 sm:hidden' />
                            </div>
                            <div className='flex gap-6 mt-4  pb-3 '>
                                <IoLocationSharp className='text-[38px]' />
                                <p>{basic_details?.basic_details[0].address2}
                                </p>
                            </div>
                            <a href={`tel:7073197281`}>
                                <p className='mt-4 '>{basic_details?.basic_details[0].phonenumber}</p>
                            </a>
                            <div className='w-[276px]'>
                                <Link target="_blank" href={'https://www.google.com/maps/place/W3Era/@26.8427364,75.7465518,17z/data=!3m1!4b1!4m6!3m5!1s0x396db5e07f400001:0x2cbf92fc1b9cc85e!8m2!3d26.8427364!4d75.7465518!16s%2Fg%2F11dxh7mg8z?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D'}>
                                    <Image
                                        src={'/images/footer3.png'} // Ensure this path is correct
                                        alt={''}
                                        height={155}
                                        width={236}
                                        className='mt-7 rounded-xl'
                                    />
                                </Link>
                                <div>
                                    <div className='flex mt-5 justify-center text-yellow-500 gap-2 text-[24px]'>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStarHalf />
                                    </div>
                                    <p className='text-center'>W3era is rated 4.6 / 5 average from 229
                                        reviews on Google.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full  border-t-[1px] border-white/50 py-4">
                    <p className="text-white max-w-[95%] mx-auto text-[14px] text-center">Copyright © 2008-2024 Powered by W3era Web Technology PVT Ltd</p>

                </div>
            </div>
        </>
    )
}

export default Footer