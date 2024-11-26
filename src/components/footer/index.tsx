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
import { useState } from "react";
import FooterBanner from '@/components/footer-banner'
import toast from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "@/util/api";

const Footer = () => {
    const { basic_details } = Useapi();
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
          console.log('Message sent successfully');
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

    return (
        <>
     <FooterBanner/>
        <div className='w-full bg-blue' onClick={() => setOpenDropdown(null)}>
            <div  className='xl:w-[75%] text-white pt-0 lg:py-16 mx-auto px-4'>
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
                        <ul className='text-[14px font-medium] flex flex-col gap-2 py-3'>
                            <Link target="_blank"  href={'/about-us'}>
                                <li>About US</li>
                            </Link>
                            <Link target="_blank" href={'/case-study'}>
                                <li>Case Study</li>
                            </Link>
                            <Link target="_blank" href={'/portfolio'}>

                                <li>Portfolio</li>
                            </Link>
                            <Link target="_blank" href={'/contact-us'}>

                                <li>Contact Us</li>
                            </Link>
                            <Link target="_blank" href={'/testimonials'}>
                                <li>Testimonials</li>
                            </Link>
                            <Link target="_blank" href={'/faq'}>

                                <li>Frequently Asked Questions</li>
                            </Link>
                            <Link target="_blank" href={'/life-at-w3era'}>
                                <li>Life at W3era</li>
                            </Link>
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
                        <ul className='text-[14px font-medium] flex flex-col gap-2 py-3'>
                            <Link target="_blank" href={'/blog'}>
                                <li>Blogs</li>
                            </Link>
                            <Link target="_blank" href={'/career'}>
                                <li>Career</li>
                            </Link>
                            <Link target="_blank" href={'/tool'}>
                                <li>SEO Tools</li>
                            </Link>
                            <Link target="_blank" href={'/website-seo-analyzer'}>

                            <li>Website Audit Tool</li>
                            </Link>
                            <Link target="_blank" href={'/seo-by-industry'}>
                                <li>SEO By Industry</li>
                            </Link>
                            <Link target="_blank" href={'/our-client-list'}>
                                <li>Our Clients</li>
                            </Link>
                            <Link target="_blank" href={'/refund-policy'}>
                                <li>Refund Policy</li>
                            </Link>
                            <Link target="_blank" href={'/privacy-policy'}>
                                <li>Privacy Policy</li>
                            </Link>
                            <Link target="_blank" href={'/terms-conditions'}>
                                <li>Terms & Conditions</li>
                            </Link>
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
                    <div className=' w-full   sm:w-1/4'>
                        <div className='flex gap-2 items-center'>
                            <p className='text-[21px] flex  font-medium w-full  sm:border-b-2'>
                                Our Services <FaMinus className=' mt-2 mx-2 sm:hidden' />
                            </p>
                        </div>
                        <ul className='text-[14px font-medium] flex flex-col gap-2 py-3'>
                            <div className="">
                                <Link target="_blank" href={'/search-engine-optimization-services'}>
                                <li className='flex gap-1 items-center cursor-pointer'
                                    onMouseEnter={() => toggleDropdown(0)}
                                    // onMouseLeave={() => setOpenDropdown(null)}
                                    >Search Engine Optimization Services<IoMdArrowDropdown /></li>
                                    </Link>
                                {openDropdown === 0 && (
                                    <div className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 absolute" onMouseLeave={() => setOpenDropdown(null)}>
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
                                    </div>
                                )}
                            </div>
                            <div>
                                <Link target="_blank" href={'/digital-marketing-packages'}>
                                <li className='flex gap-1 items-center cursor-pointer' onMouseEnter={() => toggleDropdown(1)}
                                    //   onMouseLeave={() => setOpenDropdown(null)}
                                      >
                                    Digital Marketing Packages<IoMdArrowDropdown /></li>
                                          </Link>
                                {openDropdown === 1 && (
                                    <div className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 absolute overflow-y-auto h-1/2" onMouseLeave={() => setOpenDropdown(null)}>
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
                                    </div>
                                )}
                            </div>
                            <div>
                            <Link target="_blank" href={'/social-media-marketing-services'}>
                                <li className='flex gap-1 items-center cursor-pointer' onMouseEnter={() => toggleDropdown(2)}
                                    //   onMouseLeave={() => setOpenDropdown(null)}
                                      >
                                    Social Media Marketing <IoMdArrowDropdown /></li>
                                    </Link>
                                {openDropdown === 2 && (
                                    <div className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 absolute" onMouseLeave={() => setOpenDropdown(null)}>
                                        <ul className="flex  flex-col gap-3">
                                            <Link target="_blank" href={'/facebook-advertising-services'}><li className="hover:text-pink cursor-pointer">Facebook Advertising Services</li></Link>
                                            <Link target="_blank" href={'/instagram-marketing-services'}><li className="hover:text-pink cursor-pointer">Instagram Marketing Services</li></Link>
                                            <Link target="_blank" href={'/linkedin-marketing-services-india'}><li className="hover:text-pink cursor-pointer">Linkedin Marketing Services India</li></Link>
                                            <Link target="_blank" href={'/linkedin-marketing-services-usa'}><li className="hover:text-pink cursor-pointer">Linkedin Markting Services USA</li></Link>
                                            <Link target="_blank" href={'/pinterest-marketing-services-usa'}><li className="hover:text-pink cursor-pointer">  Pinterest Marketing Services</li></Link>
                                            <Link target="_blank" href={'/youtube-marketing-services'}><li className="hover:text-pink cursor-pointer"> Youtube Markting Services</li></Link>
                                            <Link target="_blank" href={'/twitter-marketing-services'}><li className="hover:text-pink cursor-pointer">Twitter Marketing Services</li></Link>

                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div>
                                <Link target="_blank" href={'/web-development-services'}>
                                <li className='flex gap-1 items-center cursor-pointer' onMouseEnter={() => toggleDropdown(3)}
                                    //   onMouseLeave={() => setOpenDropdown(null)}
                                      >
                                    Web Development Services <IoMdArrowDropdown /></li>
                                          </Link>
                                {openDropdown === 3 && (
                                    <div className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 absolute" onMouseLeave={() => setOpenDropdown(null)}>
                                        <ul className="flex  flex-col gap-3">
                                            <Link target="_blank" href={'/wordpress-development-services'}><li className="hover:text-pink cursor-pointer">WordPress Development Services</li></Link>
                                            <Link target="_blank" href={'/magento-web-development-services'}><li className="hover:text-pink cursor-pointer">Magneto Development Services</li></Link>
                                            <Link target="_blank" href={'/asp-dot-net-development-services'}><li className="hover:text-pink cursor-pointer">ASP.NET Development Services</li></Link>
                                            <Link target="_blank" href={'/laravel-development-services'}><li className="hover:text-pink cursor-pointer">Laravel Development Services</li></Link>

                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div>
                                <Link target="_blank" href={'/online-reputation-management'}>
                                    <li className='flex gap-1 items-center cursor-pointer' >Reputation Management</li>
                                </Link>
                            </div>
                            <div>
                              <Link target="_blank" href={'/google-ads-services'}>
                                <li className='flex gap-1 items-center cursor-pointer' 
                                onMouseEnter={() => toggleDropdown(5)}
                                // onMouseLeave={() => setOpenDropdown(null)}
                                >Pay Per Click (PPC)<IoMdArrowDropdown /></li>
                                </Link>
                                {openDropdown === 5 && (
                                    <div className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 absolute" onMouseLeave={() => setOpenDropdown(null)}>
                                        <ul className="flex  flex-col gap-3">
                                            <Link target="_blank" href={'/google-my-business-ads'}><li className="hover:text-pink cursor-pointer">Google My Business Ads</li></Link>
                                            <Link target="_blank" href={'/google-shopping-ads'}><li className="hover:text-pink cursor-pointer">Google Shopping Ads</li></Link>
                                            <Link target="_blank" href={'/ppc-company-in-usa'}><li className="hover:text-pink cursor-pointer">PPC Company In USA</li></Link>
                                            <Link target="_blank" href={'/ppc-company-in-florida'}><li className="hover:text-pink cursor-pointer">PPC Company In Florida</li></Link>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div>
                            <Link target="_blank" href={'/web-design-services'}>
                                <li className='flex gap-1 items-center cursor-pointer' 
                                 
                                onMouseEnter={() => toggleDropdown(6)}
                                >Web Design Services<IoMdArrowDropdown /></li>
                                </Link>
                                {openDropdown === 6 && (
                                    <div className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 absolute" onMouseLeave={() => setOpenDropdown(null)}>
                                        <ul className="flex  flex-col gap-3">
                                            <Link target="_blank" href={'/logo-design-services'}><li className="hover:text-pink cursor-pointer">Logo Designing Services</li></Link>
                                            <Link target="_blank" href={'/mobile-responsive-designing-services'}><li className="hover:text-pink cursor-pointer">Mobile Responsive Design</li></Link>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div>
                                <Link target="_blank" href={'/content-marketing-services'}>
                                <li className='flex gap-1 items-center cursor-pointer'
                                 onMouseEnter={() => toggleDropdown(7)} >Content Marketing Services<IoMdArrowDropdown /></li>
                                </Link>
                                {openDropdown === 7 && (
                                    <div className="mx-8 bg-white text-homeblack rounded-lg capitalize p-6 absolute" onMouseLeave={() => setOpenDropdown(null)}   >
                                        <ul className="flex  flex-col gap-3">
                                            <Link target="_blank" href={'/content-marketing-services-india'}><li className="hover:text-pink cursor-pointer">Content Marketing Services India</li></Link>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <Link target="_blank" href={'/digital-marketing-services'}>
                                <li>Digital Marketing Services</li>
                            </Link>
                            <Link target="_blank" href={'/social-media-optimization'}>
                                <li>Social Media Optimization</li>
                            </Link>
                            <Link target="_blank" href={'/google-business-profile-management-services'}>
                                <li>Google Business Profile</li>
                            </Link>
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
                            <Link target="_blank"  href={'https://www.google.com/maps/place/W3Era/@26.8427364,75.7465518,17z/data=!3m1!4b1!4m6!3m5!1s0x396db5e07f400001:0x2cbf92fc1b9cc85e!8m2!3d26.8427364!4d75.7465518!16s%2Fg%2F11dxh7mg8z?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D'}>
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