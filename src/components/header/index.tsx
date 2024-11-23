"use client";
import { IoCall, IoLocationOutline } from "react-icons/io5";
import Link from 'next/link';
import { Useapi } from '@/helpers/apiContext';
import { MdOutlineEmail, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest, FaSkype, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import Image from 'next/image';
const Header = () => {
  const { basic_details } = Useapi();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <>
      <div className='bg-purple text-white'>
        <div className='w-full  px-4 xl:w-[75%] mx-auto'>
          <div className='flex justify-between xl:justify-end 2xl:justify-between items-center '>
            <div className='block xl:hidden 2xl:block my-3'>
              <div className='flex gap-[3px] sm:gap-2 text-[19px]'>
                <Link target='_blank' href={`${basic_details?.basic_details[0].facebook_url}`}><FaFacebook /></Link>
                <Link target='_blank' href={`${basic_details?.basic_details[0].instagram_url}`}><FaInstagram /></Link>
                <Link target='_blank' href={`${basic_details?.basic_details[0].linkedin_url}`}><FaLinkedinIn /></Link>
                <Link target='_blank' href={`${basic_details?.basic_details[0].twitter_url}`}><BsTwitterX /></Link>
                <Link target='_blank' href={`${basic_details?.basic_details[0].skype_url}`}><FaSkype /></Link>
                <Link target='_blank' href={`mailto:${basic_details?.basic_details[0].email}`}><MdOutlineEmail /></Link>
                <Link target='_blank' href={`${basic_details?.basic_details[0].youtube_url}`}><FaYoutube /></Link>
                <Link target='_blank' href={`${basic_details?.basic_details[0].pinterest_url}`}><FaPinterest /></Link>
                <Link target='_blank' href={`${basic_details?.basic_details[0].gmb_url}`}><IoLocationOutline /></Link>

              </div>
              {/* <a href={`mailto:${basic_details?.basic_details[0].email}`}>
                <p className='text-[15px] text-white mt-1'>{basic_details?.basic_details[0].email} </p>
              </a> */}
            </div>
            <div className='flex text-white gap-4 py-3 items-center text-[14px] xl:text-[16px]'>
              <div className='items-center 2xl:font-semibold hidden lg:flex gap-5 2xl:gap-5'>

                {/* About Us Dropdown */}
                <div className='relative'>
                  <div
                    onClick={() => handleToggle("about-us")}
                    className='flex items-center gap-1 cursor-pointer'
                  >
                    About Us
                    {openDropdown === "about-us" ? <Image 
              src={'/images/down-arrow-header.svg'} 
              width={14} 
              height={11} 
              alt={basic_details?.basic_details[0]?.logo_alt} 
              className="cursor-pointer mt-1"
            /> : <Image 
              src={'/images/up-arrow-header.svg'} 
              width={14} 
             
              height={11} 
              alt={basic_details?.basic_details[0]?.logo_alt} 
              className="cursor-pointer mt-1"
            />}
                  </div>
                  {openDropdown === "about-us" && (
                    <div className='absolute w-[200px] text-homeblack text-left border-lightpink border-[2px] z-50 top-10 flex flex-col   bg-white  rounded-md ' onMouseLeave={() => handleToggle('')}>
                      <Link target='_blank' href={'/about-us'}><p className=' hover:bg-pink px-5 hover:text-white py-4   border-slate-300'>Who we are</p></Link>
                      <Link target='_blank' href={'/life-at-w3era'}><p className=' hover:bg-pink px-5 hover:text-white py-4   border-slate-300'>Life at w3era</p></Link>
                      <Link target='_blank' href={'/faq'}><p className=' hover:bg-pink hover:text-white  px-5  py-4 border-slate-300'>
                        Know More</p></Link>
                    </div>
                  )}
                </div>

                {/* Our Work Dropdown */}
                <div className='relative'>
                  <div
                    onClick={() => handleToggle("our-work")}

                    className='flex items-center text-white gap-1 cursor-pointer'
                  >
                    Our Work
                    {openDropdown === "our-work" ? <Image 
              src={'images/down-arrow-header.svg'} 
              width={14} 
              height={11} 
              alt={basic_details?.basic_details[0]?.logo_alt} 
              className="cursor-pointer mt-1"
            /> :
             <Image 
              src={'/images/up-arrow-header.svg'} 
              width={14} 
              height={11} 
              alt={basic_details?.basic_details[0]?.logo_alt} 
              className="cursor-pointer mt-1"
            />}
                  </div>
                  {openDropdown === "our-work" && (
                    <div className='absolute w-[200px] text-homeblack border-lightpink border-[2px] text-left z-50 top-10 flex flex-col   bg-white rounded-md ' onMouseLeave={() => handleToggle('')}>
                      <Link  target='_blank'  href={'/testimonials'}><p className='hover:text-white py-4 px-5 hover:bg-pink border-slate-300'>Testimonials</p></Link>
                      <Link  target='_blank' href={'/case-study'}><p className='hover:text-white py-4 px-5 hover:bg-pink border-slate-300'>Case Study</p></Link>
                      <Link  target='_blank' href={'/our-client-list'}><p className='hover:text-white py-4 px-5 hover:bg-pink '>Our Clients</p></Link>
                    </div>
                  )}
                </div>
                {/* Other Navbar Items */}
                <Link  target='_blank' href={'/blog'}>
                  <div>Blog</div>
                </Link>
                <Link  target='_blank' href={'/web-stories'}>
                  <div>Web Story</div>
                </Link>
                <div className=''>
                  <Link  target='_blank' href={'/website-seo-analyzer'} >
                    <div>Free Website Audit</div>
                  </Link>
                </div>
                <Link  target='_blank' href='/contact-us'>
                  <div>Contact Us</div>
                </Link>
              </div>
              {/* Proposal Button */}
              <a  href={`tel:${basic_details?.basic_details[0].contact_job}`}>
                <button
                  className='flex items-center justify-center px-4  md:px-6 text-white rounded-lg py-2 group bg-pink transition duration-300'>
                  <span className='transition-transform duration-300 group-hover:-translate-x-2'>Apply for Job</span>
                  <IoCall className='text-[20px] opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-x-2' />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
