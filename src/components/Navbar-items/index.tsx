import { Useapi } from '@/helpers/apiContext'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { MdOutlineRocketLaunch } from 'react-icons/md'
import Image from 'next/image'
import Button from '@/components/button'
import ClientsCount from '../ClientsCount'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const Index = ({ show }: any) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { basic_details } = Useapi();
  const Router = useRouter()
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <div className=' lg:flex gap-[10px] w-full justify-between 2xl:gap-3 py-3 items-center text-[17px] lg:text-[15px] bg-blu  xl:text-[15px] 2xl:text=[17px] '>
      <div className={`lg:items-center font-medium ${show ? "flex flex-col" : "flex"}  gap-4 w-2/3 justify-evenly`}>
        {/* SEO Dropdown */}
        <Link target='_blank' href={'/blog'}>
          <li className='flex  lg:hidden gap-1 items-center mb-2 cursor-pointer'>
            Blogs
          </li>
        </Link>
        <Link target='_blank' href={'/contact-us'}>
          <li className='flex  lg:hidden gap-1 items-center cursor-pointer hover:text-pink '>
            Contact us
          </li>
        </Link>
        <Link target='_blank' href={'/web-stories'}>
          <li className='flex  lg:hidden gap-1 items-center cursor-pointer hover:text-pink '>
            Web Story
          </li>
        </Link>
        <div className='flex gap-1 items-center'>
          <li onMouseOver={() => toggleDropdown('seo')} className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'seo' && "text-pink"}`}>
            SEO              </li>

            <Image
    src={'/images/down-icon.svg'}
    width={14}
    height={11}
    alt={"w3era digital marketing company"}
    className={`cursor-pointer 2xl:w-[14px] w-[12px] transition-transform duration-300 ease-in-out ${openDropdown === 'seo' ? 'rotate-180' : ''}`}
  /> </div>

        {openDropdown === 'seo' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            className=' absolute text-homegrey shadow-md text-[17px] w-[85%] lg:w-[95%] overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                  flex-wrap lg:flex-nowrap px-12 py-14 z-[99999] top-20 left-10 bg-white justify-start lg:justify-around flex 
                   gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
            <motion.div
                        initial={{ x: -50 , opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{delay:0.1, easings:["easeIn", "easeOut"] }}

            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h1.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=" "
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Improve Your Organic Search</p>
              </div>
              <ul className='  flex flex-col mt-5 text-[15px]    gap-[5px]'>
                <Link target='_blank' className='hover:text-pink' href='/search-engine-optimization-services'><li>Search Engine Optimization Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/local-seo-services'><li>Local SEO</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/on-page-seo-services'><li>On Page SEO</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/off-page-seo'><li>Off Page SEO</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/app-store-optimization'><li>App Store Optimization</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/ecommerce-seo-services'><li>Ecommerce SEO</li></Link>
                {/* <Link target='_blank' className='hover:text-pink' href='/google-business-profile-management-services'><li>GMB Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/online-reputation-management'><li>Improve your brand’s Online Reputation</li></Link> */}
              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8]  hidden lg:block  w-[2px] min-h-full'>
            </div>
            <motion.div
                                    initial={{ x: -50 , opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{delay:0.2, easings:["easeIn", "easeOut"]}}
            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h2.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Increase Website Authority</p>
              </div>
              <ul className=' mt-5  text-[15px]  gap-[5px] flex flex-col '>
                <Link target='_blank' className='hover:text-pink' href='/link-building-services'><li>Link Building Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/guest-posting-services'><li>Guest Posting Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/article-submission-services'><li>Article Submission Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/citation-submission'><li>Citation Submission</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/blog-commenting-service'><li>Blog Commenting Service</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/content-marketing-services'><li>Content Marketing</li></Link>
              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8]  hidden lg:block  w-[2px] min-h-full'>
            </div>
            <motion.div
                                                initial={{ x: -50 , opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{delay:0.3, easings:["easeIn", "easeOut"]}}>
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h3.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>

                <p className='text-[22px] text-homeblack font-semibold'>Our Free SEO Tools</p>
              </div>
              <ul className='  flex flex-col mt-5 text-[15px]  gap-[5px] '>
                <Link target='_blank' className='hover:text-pink' href='/tool/backlink-maker'><li>Create Backlinks</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/website-seo-analyzer'><li>Website SEO Analyzer</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/tool'><li>Free SEO Tools</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/tool/keyword-position-checker'><li>Keyword Position Checker</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/tool/google-index-checker/'><li>Google Index Checker</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/tool/xml-sitemap-generator'><li>XML Sitemap Generator</li></Link>
              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8]   hidden lg:block w-[2px] min-h-full'>
            </div>
            <motion.div
                                                initial={{ x: -50 , opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{delay:0.4, easings:["easeIn", "easeOut"]}}
            className='min-h-full lg:w-[20%] flex justify-center items-start  lg:items-center'>
              <div className='flex flex-col gap-3 justify-center items-center'>
                <p className='text-[20px] text-homeblack font-medium'>For More Information</p>
                {/* <Link target='_blank' href={'/contact-us'}> */}
                <div className='w-fit' onClick={() => Router.push('/contact-us')}>
                  <Button content={'Contact Us'} />
                </div>
                {/* </Link> */}

                <ClientsCount />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Pay Per Click Dropdown */}
        <div className='flex gap-1 items-center'>
          <li onMouseOver={() => toggleDropdown('ppc')} className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'ppc' && "text-pink"}`}>
            Performance Marketing               </li>

            <Image
    src={'/images/down-icon.svg'}
    width={14}
    height={11}
    alt={"w3era digital marketing company"}
    className={`cursor-pointer 2xl:w-[14px] w-[12px] transition-transform duration-300 ease-in-out ${openDropdown === 'ppc' ? 'rotate-180' : ''}`}
  /></div>

        {openDropdown === 'ppc' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='shadow-md absolute text-homegrey text-[17px]
                w-[85%] lg:w-[95%] overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit flex-wrap lg:flex-nowrap 
                  px-12 py-14 z-[99999] top-20 left-10 bg-white  justify-start lg:justify-around flex gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
            <motion.div
            initial={{ x: -50 , opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{delay:0.1, easings:["easeIn", "easeOut"]}}
            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h6.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Generate Quality Leads</p>
              </div>
              <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px]  '>
                {/* <Link target='_blank' className='hover:text-pink' href='/google-my-business-ads/'><li>GMB Ads</li></Link> */}
                <Link target='_blank' className='hover:text-pink' href='/google-shopping-ads'><li>Google Shopping Ads</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/google-ads-services'><li>Google Ads Service</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/google-ads-services'><li>Bing Ads</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/performance-marketing'><li>Performance Marketing</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/linkedin-marketing-services-usa'><li>LinkedIn Marketing</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/facebook-advertising-services'><li>Facebook Marketing</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/conversion-rate-optimization'><li>Conversion Rate Optimization</li></Link>

              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
            </div>
            <motion.div
                        initial={{ x: -50 , opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{delay:0.2, easings:["easeIn", "easeOut"]}}
            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h5.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Social Media</p>
              </div>
              <ul className=' mt-5 text-[15px]  gap-[5px]  flex flex-col rounded-lg'>
                <Link target='_blank' className='hover:text-pink' href='/social-media-optimization'><li>Social Media Optimization</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/social-media-marketing-services'><li>Social Media Marketing</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/twitter-marketing-services'><li>Twitter Marketing</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/instagram-marketing-services'><li>Instagram Marketing</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/pinterest-marketing-services-usa'><li>Pinterest Marketing Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/video-marketing'><li>Video Marketing</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/youtube-marketing-services'><li>YouTube Marketing Services</li></Link>

              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
            </div>
            <motion.div
                        initial={{ x: -50 , opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{delay:0.3, easings:["easeIn", "easeOut"]}}
            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h4.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Learn About Us</p>
              </div>
              <ul className='  flex flex-col  mt-5 text-[15px]  gap-[5px] rounded-lg'>
                <Link target='_blank' className='hover:text-pink' href='/case-study'><li>Case study</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/our-client-list'><li>Our Clients</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/blog/40-ppc-tools-for-any-task'><li>PPC Tools</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/google-ads-services'><li>PPC Case study</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/blog/what-are-ppc-services/'><li>What are PPC Services?</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/blog/social-media-management-everything-you-need-to-know/'><li>Social Media Management</li></Link>
              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
            </div>
            <motion.div 
                        initial={{ x: -50 , opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{delay:0.4, easings:["easeIn", "easeOut"]}}
            className='min-h-full lg:w-[20%] flex justify-center items-start  lg:items-center'>
              <div className='flex flex-col gap-3 justify-center items-center'>
                <p className='text-[20px] text-homeblack font-medium'>For More Information</p>
                <div className='w-fit' onClick={() => Router.push('/contact-us')}>
                  <Button content={'Contact Us'} />
                </div>
                <ClientsCount />

              </div>
            </motion.div>
          </motion.div>
        )}

        {/* SMM Dropdown */}
        {/* <li onMouseOver={() => toggleDropdown('smm')} className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'smm' && "text-pink"}`}>
                SMM {openDropdown === 'smm' ? <Image 
              src={'/images/up.svg'} 
              width={14} 
           
              height={11} 
              alt={"w3era digital marketing company"} 
              className="cursor-pointer 2xl:w-[14px] w-[12px] "
            /> :
             <Image 
              src={'/images/down-icon.svg'} 
              width={14} 
           
              height={11} 
              alt={"w3era digital marketing company"} 
              className="cursor-pointer 2xl:w-[14px] w-[12px] "
            />}
              </li>
              {openDropdown === 'smm' && (
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className='shadow-md absolute text-homegrey 
                w-[85%] lg:w-[95%] overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit flex-wrap lg:flex-nowrap text-[17px]  px-12 py-14 z-[99999] 
                top-20 left-10 bg-white justify-start  lg:justify-around flex gap-5 p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h7.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className=""
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Social Organic Growth</p>
                    </div>
                    <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px]  '>
                      <Link target='_blank' className='hover:text-pink' href='/social-media-optimization'><li>Social Media Optimization</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/social-media-marketing-services'><li>Social Media Marketing</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/email-marketing-services'><li>Email Marketing</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h8.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className=""
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Paid Social Basket</p>
                    </div>
                    <ul className=' mt-5 text-[15px]  gap-[5px]  flex flex-col  rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/twitter-marketing-services'><li>Twitter Marketing</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/instagram-marketing-services'><li>Instagram Marketing</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/pinterest-marketing-services-usa'><li>Pinterest Marketing Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/facebook-advertising-services'><li>Facebook Marketing</li></Link>

                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h9.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className=""
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Promote Brand with Video</p>
                    </div>
                    <ul className='  flex flex-col mt-5 text-[15px]  gap-[5px] rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/video-marketing'><li>Video Marketing</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/youtube-marketing-services'><li>YouTube Marketing Services</li></Link>

                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div className='min-h-full lg:w-[20%] flex justify-center items-start  lg:items-center'>
                    <div className='flex flex-col gap-3 justify-center  items-center'>
                      <p className='text-[20px] text-homeblack font-medium'>For More Information</p>

                      <div className='w-fit' onClick={()=>Router.push('/contact-us')}>
                      <Button content={'Contact Us'} />
                      </div>
                      <ClientsCount/>
                    </div>
                  </div>
                </motion.div>
              )} */}


        {/* Web Development Dropdown */}
        <div className='flex gap-1 items-center'>
          <li onMouseOver={() => toggleDropdown('web-dev')} className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink text-[16px ] ${openDropdown === 'web-dev' && "text-pink"}`}>
            Web Development & UI/UX
          </li>
          <Image
    src={'/images/down-icon.svg'}
    width={14}
    height={11}
    alt={"w3era digital marketing company"}
    className={`cursor-pointer 2xl:w-[14px] w-[12px] transition-transform duration-300 ease-in-out ${openDropdown === 'web-dev' ? 'rotate-180' : ''}`}
  /></div>

        {openDropdown === 'web-dev' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='shadow-md absolute text-homegrey text-[17px]  w-[85%] lg:w-[95%] lg:h-fit overflow-y-scroll lg:overflow-auto 
               max-h-[70vh]  flex-wrap lg:flex-nowrap px-12 py-14 z-[99999] top-20 left-10 bg-white  justify-start lg:justify-around flex gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
            <motion.div
                                    initial={{ x: -50 , opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{delay:0.1, easings:["easeIn", "easeOut"]}}
            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h14.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Web Development Services</p>
              </div>
              <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px]  '>
                <Link target='_blank' className='hover:text-pink' href='/web-development-services'><li>Web Development Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/magento-web-development-services'><li>Magento Web Development</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/laravel-development-services'><li>Laravel Development Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/custom-php-development-services-company'><li>PHP Development Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/asp-dot-net-development-services'><li>ASP Dot Net Development Services</li></Link>

              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
            </div>
            <motion.div
                                    initial={{ x: -50 , opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{delay:0.2, easings:["easeIn", "easeOut"]}}
            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h15.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Web Design Services</p>
              </div>
              <ul className=' mt-5 text-[15px]  gap-[5px]  flex flex-col  rounded-lg'>
                <Link target='_blank' className='hover:text-pink' href='/web-design-services'><li>Web Design Services</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/wordpress-development-services'><li>WordPress Development</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/logo-design-services'><li>Logo Design</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/mobile-responsive-designing-services'><li>Mobile Responsive Website</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/website-speed-optimization'><li>Website Speed Optimization</li></Link>
              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
            </div>
            <motion.div
                                    initial={{ x: -50 , opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{delay:0.3, easings:["easeIn", "easeOut"]}}
            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h16.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Learn About Us</p>
              </div>
              <ul className='  flex flex-col mt-5 text-[15px]  gap-[5px] rounded-lg'>
                <Link target='_blank' className='hover:text-pink' href='/case-study'><li>SEO Case Studies</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/testimonials'><li>Client Testimonials</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/blog'><li>Read Our Super Blogs</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/blog/website-migration-guide-boost-seo'><li>Website Migration Guide</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/blog/free-wordpress-website-migration-plugins'><li>Website Migration Plugins</li></Link>
              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
            </div>
            <motion.div
                                    initial={{ x: -50 , opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{delay:0.4, easings:["easeIn", "easeOut"]}}
            className='min-h-full lg:w-[20%] flex justify-center items-start   lg:items-center'>
              <div className='flex flex-col gap-3 justify-center items-center'>
                <p className='text-[20px] text-homeblack font-medium'>For More Information</p>
                <div className='w-fit' onClick={() => Router.push('/contact-us')}>
                  <Button content={'Contact Us'} />
                </div>
                <ClientsCount />
              </div>
            </motion.div>
          </motion.div>
        )}
        {/* Our Packages Dropdown */}
        <div className='flex gap-1 items-center'>
          <li onMouseOver={() => toggleDropdown('packages')} className={`flex  font-semibold  gap-1 items-center cursor-pointer hover:text-pink  ${openDropdown === 'packages' && "text-pink"}`}>
            Our Packages               </li>
            
            <Image
    src={'/images/down-icon.svg'}
    width={14}
    height={11}
    alt={"w3era digital marketing company"}
    className={`cursor-pointer 2xl:w-[14px] w-[12px] transition-transform duration-300 ease-in-out ${openDropdown === 'packages' ? 'rotate-180' : ''}`}
  />
        </div>

        {openDropdown === 'packages' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='shadow-md absolute text-homegrey text-[17px]  w-[85%] lg:w-[95%] lg:h-fit overflow-y-scroll lg:overflow-auto max-h-[70vh]
                  flex-wrap lg:flex-nowrap px-12 py-14 z-[99999] top-20 left-10 bg-white  justify-start lg:justify-around flex gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
            <motion.div
                                    initial={{ x: -50 , opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{delay:0.1, easings:["easeIn", "easeOut"]}}>
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h10.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Increase Your Traffic With SEO</p>
              </div>
              <ul className=' flex flex-col mt-5 text-[15px]  gap-[5px] '>
                <Link target='_blank' className='hover:text-pink' href='/seo-packages'><li>SEO Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/ecommerce-seo-packages'><li>Ecommerce Seo Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/local-seo-packages'><li>Local SEO Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/guest-posting-service-packages'><li>Guest Posting Service Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/app-store-aso-packages'><li>App Store ASO Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/link-building-packages'><li>Link Building Packages</li></Link>

              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
            </div>
            {/* <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h11.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className=""
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>E-commerce Marketing</p>
                    </div>
                    <ul className=' mt-5 text-[15px]  gap-[5px]  flex flex-col gap-2 rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/ecommerce-seo-packages'><li>Ecommerce Seo Packages</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div> */}
            <motion.div
                                    initial={{ x: -50 , opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{delay:0.2, easings:["easeIn", "easeOut"]}}
            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h12.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Paid & Social Media Marketing</p>
              </div>
              <ul className='  flex flex-col  mt-5 text-[15px]  gap-[5px] rounded-lg'>
                <Link target='_blank' className='hover:text-pink' href='/orm-packages'><li>Online Reputation Management Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/ppc-services-packages'><li>PPC Service Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/digital-marketing-packages'><li>Digital Marketing Packages </li></Link>
                <Link target='_blank' className='hover:text-pink' href='/facebook-marketing-packages'><li>Facebook Marketing Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/social-media-marketing-packages'><li>Social Media Marketing Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/cro-packages'><li>Conversion Rate Optimization Packages</li></Link>
              </ul>
            </motion.div>
            <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
            </div>
            <motion.div
                                    initial={{ x: -50 , opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{delay:0.3, easings:["easeIn", "easeOut"]}}
            >
              <div className='flex justify-start gap-2 items-center'>
                <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                  <Image
                    src={'/images/h13.svg'}
                    alt={''}
                    height={54}
                    width={41}
                    className=""
                  />
                </div>
                <p className='text-[22px] text-homeblack font-semibold'>Modern Technology Web Development</p>
              </div>
              <ul className='  flex flex-col  mt-5 text-[15px]  gap-[5px] rounded-lg'>
                <Link target='_blank' className='hover:text-pink' href='/web-development-package'><li>Web Development Packages </li></Link>
                <Link target='_blank' className='hover:text-pink' href='/video-marketing-packages'><li>Video Marketing Packages</li></Link>
                <Link target='_blank' className='hover:text-pink' href='/content-marketing-packages'><li>Content Marketing Packages </li></Link>

              </ul>
            </motion.div>
          </motion.div>
        )}
      </div>
      {/* Buttons */}
      <div className='flex gap-2 lg:gap-1 mt-2 lg:mt-0 flex-col lg:flex-row w-fullm md:w-1/3 justify-end'>
        <Link target='_blank' href={'https://meetings.hubspot.com/sakshi-jass?uuid=ae684c90-b22d-4aed-a972-4de20bef7f87'}>
          <button className=' max-w-[180px]  py-[8px]   border-2 px-2 2xl:px-4 border-pink rounded-full meeting-btn'>
            <span className="meeting-text font-semibold text-sm ">Book a Meeting</span>
          </button>
        </Link>
        {/* <Link target='_blank' href={'/get-a-free-quote'}> */}
        <div className='w-fit' onClick={() => Router.push('/get-a-free-quote')}>
          <button
            className='flex items-center justify-center px-2 2xl:w-[180px] text-white rounded-full h-full py-[11px] 2xl:py-3 group bg-pink transition duration-300'>
            <span className='transition-transform duration-300 group-hover:-translate-x-2 font-semibold text-sm '>
              Get a Proposal
            </span>
            <MdOutlineRocketLaunch className='text-[20px] hidden 2xl:block opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-x-2' />
          </button>
        </div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Index