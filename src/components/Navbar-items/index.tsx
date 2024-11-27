import { Useapi } from '@/helpers/apiContext'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { MdOutlineRocketLaunch } from 'react-icons/md'
import Image from 'next/image'
import Button from '@/components/button'
import ClientsCount from '../ClientsCount'
import { useRouter } from 'next/navigation'

const Index = ({show}:any) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { basic_details } = Useapi();
  const Router = useRouter()
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <div  className=' lg:flex gap-1 2xl:gap-3 py-3 items-center text-[17px] lg:text-[14px] 2xl:text-[17px] '>
          <div className={`lg:items-center font-medium ${show ? "flex flex-col" : "flex"} gap-2 2xl:gap-4`}>
              {/* SEO Dropdown */}
              <Link target='_blank' href={'/blog'}>
              <li  className='flex  lg:hidden gap-1 items-center mb-2 cursor-pointer'>
               Blogs
              </li>
              </Link>
              <Link target='_blank' href={'/contact-us'}>
              <li  className='flex  lg:hidden gap-1 items-center cursor-pointer'>
                Contact us 
              </li>
              </Link>
              <Link target='_blank' href={'/web-stories'}>
              <li  className='flex  lg:hidden gap-1 items-center cursor-pointer'>
               web Story
              </li>
              </Link>
              <li onClick={() => toggleDropdown('seo')} className='flex font-semibold gap-[2px] 2xl:gap-1 items-center cursor-pointer'>
                SEO {openDropdown === 'seo' ?  <Image 
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
            /> } 
              </li>
              {openDropdown === 'seo' && (
                <div className=' absolute text-homegrey shadow-md text-[17px] w-[85%] lg:w-[95%] overflow-y-scroll lg:overflow-auto  max-h-[70vh] lg:h-fit
                  flex-wrap lg:flex-nowrap px-12 py-14 z-[99999] top-20 left-10 bg-white justify-start lg:justify-around flex 
                   gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h1.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Improve Your Organic Search</p>
                    </div>
                    <ul className=' flex flex-col mt-5  gap-2'>
                      <Link target='_blank' className='hover:text-pink' href='/search-engine-optimization-services'><li>Search Engine Optimization Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/local-seo-services'><li>Local SEO</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/on-page-seo-services'><li>On Page SEO</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/off-page-seo'><li>Off Page SEO</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/mobile-seo-services'><li>Mobile SEO</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/small-business-seo-services'><li>Small Business SEO</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/ecommerce-seo-services'><li>Ecommerce SEO</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/app-store-optimization'><li>App Store Optimization</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/google-business-profile-management-services'><li>GMB Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/online-reputation-management'><li>Improve your brand’s Online Reputation</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8]  hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h2.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Increase Authority of Your</p>
                    </div>
                    <ul className=' mt-5  flex flex-col gap-2 '>
                      <Link target='_blank' className='hover:text-pink' href='/link-building-services'><li>Link Building Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/guest-posting-services'><li>Guest Posting Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/article-submission-services'><li>Article Submission Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/citation-submission'><li>Citation Submission</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/blog-commenting-service'><li>Blog Commenting Service</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/content-marketing-services'><li>Content Marketing</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8]  hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h3.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      
                      <p className='text-[22px] text-homeblack font-semibold'>Our Free SEO Tools</p>
                    </div>
                    <ul className='  flex flex-col gap-2 mt-5 '>
                      <Link target='_blank' className='hover:text-pink' href='/tool/backlink-maker'><li>Create Backlinks</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/website-seo-analyzer'><li>Website SEO Analyzer</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/tool'><li>Free SEO Tools</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/tool/keyword-position-checker'><li>Keyword Position Checker</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/tool/google-index-checker/'><li>Google Index Checker</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/tool/xml-sitemap-generator'><li>XML Sitemap Generator</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8]   hidden lg:block w-[2px] min-h-full'>
                  </div>
                  <div className='min-h-full lg:w-[20%] flex justify-center items-start  lg:items-center'>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                      <p className='text-[20px] text-homeblack font-medium'>For More Information</p>
                      {/* <Link target='_blank' href={'/contact-us'}> */}
                      <div className='w-fit' onClick={()=>Router.push('/contact-us')}>
                      <Button content={'Contact Us'} />
                      </div>
                      {/* </Link> */}
                     
                      <ClientsCount/>
                    </div>
                  </div>
                </div>
              )}

              {/* Pay Per Click Dropdown */}
              <li onClick={() => toggleDropdown('ppc')} className='flex font-semibold gap-[2px] 2xl:gap-1 items-center cursor-pointer'>
                Pay Per Click {openDropdown === 'ppc' ? <Image 
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
              {openDropdown === 'ppc' && (
                <div className='shadow-md absolute text-homegrey text-[17px]
                w-[85%] lg:w-[95%] overflow-y-scroll lg:overflow-auto max-h-[70vh] lg:h-fit flex-wrap lg:flex-nowrap 
                  px-12 py-14 z-[99999] top-20 left-10 bg-white  justify-start lg:justify-around flex gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h6.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Google Ads Marketing</p>
                    </div>
                    <ul className=' flex flex-col mt-5  gap-2'>
                      <Link target='_blank' className='hover:text-pink' href='/google-my-business-ads/'><li>GMB Ads</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/google-shopping-ads'><li>Google Shopping Ads</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/google-ads-services'><li>Google Ads Service</li></Link>

                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h5.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Generate Quality Leads</p>
                    </div>
                    <ul className=' mt-5  flex flex-col gap-2 rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/conversion-rate-optimization'><li>Conversion Rate Optimization</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/performance-marketing'><li>Performance Marketing</li></Link>

                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h4.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Learn About Us</p>
                    </div>
                    <ul className='  flex flex-col gap-2 mt-5 rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/case-study'><li>Case study</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/our-client-list'><li>Our Clients</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div className='min-h-full lg:w-[20%] flex justify-center items-start  lg:items-center'>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                      <p className='text-[20px] text-homeblack font-medium'>For More Information</p>
                      <div className='w-fit' onClick={()=>Router.push('/contact-us')}>
                      <Button content={'Contact Us'} />
                      </div>
                      <ClientsCount/>

                    </div>
                  </div>
                </div>
              )}

              {/* SMM Dropdown */}
              <li onClick={() => toggleDropdown('smm')} className='flex  font-semibold gap-[2px] 2xl:gap-1 items-center cursor-pointer'>
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
                <div className='shadow-md absolute text-homegrey 
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
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Social Organic Growth</p>
                    </div>
                    <ul className=' flex flex-col mt-5  gap-2'>
                      <Link target='_blank' className='hover:text-pink' href='/social-media-optimization'><li>Social Media Optimization</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/social-media-marketing-services'><li>Social Media Marketing</li></Link>
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
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Paid Social Basket</p>
                    </div>
                    <ul className=' mt-5  flex flex-col gap-2 rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/twitter-marketing-services'><li>Twitter Marketing</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/instagram-marketing-services'><li>Instagram Marketing</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/pinterest-marketing-services-usa'><li>Pinterest Marketing Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/facebook-advertising-services'><li>Facebook Marketing</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/linkedin-marketing-services-usa'><li>LinkedIn Marketing</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/email-marketing-services'><li>Email Marketing</li></Link>
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
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Promote Brand with Video</p>
                    </div>
                    <ul className='  flex flex-col gap-2 mt-5 rounded-lg'>
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
                </div>
              )}
              {/* Our Packages Dropdown */}
              <li onClick={() => toggleDropdown('packages')} className=' font-semibold flex gap-[2px] 2xl:gap-1 items-center cursor-pointer'>
                Our Packages {openDropdown === 'packages' ? <Image 
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
              className="cursor-pointer 2xl:w-[14px] w-[12px]"
            />}
              </li>
              {openDropdown === 'packages' && (
                <div className='shadow-md absolute text-homegrey text-[17px]  w-[85%] lg:w-[95%] lg:h-fit overflow-y-scroll lg:overflow-auto max-h-[70vh]
                  flex-wrap lg:flex-nowrap px-12 py-14 z-[99999] top-20 left-10 bg-white  justify-start lg:justify-around flex gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h10.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Increase Your Traffic With SEO</p>
                    </div>
                    <ul className=' flex flex-col mt-5  gap-2'>
                      <Link target='_blank' className='hover:text-pink' href='/seo-packages'><li>SEO Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/blog-review-service'><li>Blog Review Service</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/small-business-seo-packages'><li>Small Business SEO Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/local-seo-packages'><li>Local SEO Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/guest-posting-service-packages'><li>Guest Posting Service Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/app-store-aso-packages'><li>App Store ASO Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/link-building-packages'><li>Link Building Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/ecommerce-seo-packages'><li>Ecommerce Seo Packages</li></Link>

                    </ul>
                  </div>
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
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>E-commerce Marketing</p>
                    </div>
                    <ul className=' mt-5  flex flex-col gap-2 rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/ecommerce-seo-packages'><li>Ecommerce Seo Packages</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div> */}
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h12.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Paid & Social Media Marketing</p>
                    </div>
                    <ul className='  flex flex-col gap-2 mt-5 rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/orm-packages'><li>Online Reputation Management Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/ppc-services-packages'><li>PPC Service Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/digital-marketing-packages'><li>Digital Marketing Packages </li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/facebook-marketing-packages'><li>Facebook Marketing Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/social-media-marketing-packages'><li>Social Media Marketing Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/cro-packages'><li>Conversion Rate Optimization Packages</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h13.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Modern Technology Web Development</p>
                    </div>
                    <ul className='  flex flex-col gap-2 mt-5 rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/web-development-package'><li>Web Development Packages </li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/video-marketing-packages'><li>Video Marketing Packages</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/content-marketing-packages'><li>Content Marketing Packages </li></Link>

                    </ul>
                  </div>
                </div>
              )}

              {/* Web Development Dropdown */}
              <li onClick={() => toggleDropdown('web-dev')} className='flex  font-semibold gap-[2px] 2xl:gap-1 items-center cursor-pointer'>
                Web Development {openDropdown === 'web-dev' ? <Image 
             src={'/images/up.svg'} 
              width={14} 
              height={11} 
              alt={"w3era digital marketing company"} 
              className="cursor-pointer 2xl:w-[14px] w-[12px]"
            /> :
             <Image 
              src={'/images/down-icon.svg'} 
              width={14} 
              height={11} 
              alt={"w3era digital marketing company"} 
              className="cursor-pointer2xl:w-[14px] w-[12px]"
            />}
              </li>
              {openDropdown === 'web-dev' && (
                <div className='shadow-md absolute text-homegrey text-[17px]  w-[85%] lg:w-[95%] lg:h-fit overflow-y-scroll lg:overflow-auto 
               max-h-[70vh]  flex-wrap lg:flex-nowrap px-12 py-14 z-[99999] top-20 left-10 bg-white  justify-start lg:justify-around flex gap-5  p-7 rounded-xl' onMouseLeave={() => toggleDropdown('')}>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h14.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Web Development Services</p>
                    </div>
                    <ul className=' flex flex-col mt-5  gap-2'>
                      <Link target='_blank' className='hover:text-pink' href='/web-development-services'><li>Web Development Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/magento-web-development-services'><li>Magento Web Development</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/laravel-development-services'><li>Laravel Development Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/custom-php-development-services-company'><li>PHP Development Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/asp-dot-net-development-services'><li>ASP Dot net Development Services</li></Link>

                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h15.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Web Design Services</p>
                    </div>
                    <ul className=' mt-5  flex flex-col gap-2 rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/web-design-services'><li>Web Design Services</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/wordpress-development-services'><li>WordPress Development</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/logo-design-services'><li>Logo Design</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/mobile-responsive-designing-services'><li>Mobile Responsive Website</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/website-speed-optimization'><li>Website Speed Optimization</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div>
                    <div className='flex justify-start gap-2 items-center'>
                      <div className='bg-lightblue w-[80px] h-[80px] justify-center items-center flex rounded-lg'>
                        <Image
                          src={'/images/h16.svg'}
                          alt={''}
                          height={54}
                          width={41}
                          className="ml-3"
                        />
                      </div>
                      <p className='text-[22px] text-homeblack font-semibold'>Learn About Us</p>
                    </div>
                    <ul className='  flex flex-col gap-2 mt-5 rounded-lg'>
                      <Link target='_blank' className='hover:text-pink' href='/case-study'><li>SEO Case Studies</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/testimonials'><li>Client Testimonials</li></Link>
                      <Link target='_blank' className='hover:text-pink' href='/blog'><li>Read Our Super Blogs</li></Link>
                    </ul>
                  </div>
                  <div className='bg-[#DFF0F8] hidden lg:block  w-[2px] min-h-full'>
                  </div>
                  <div className='min-h-full lg:w-[20%] flex justify-center items-start   lg:items-center'>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                      <p className='text-[20px] text-homeblack font-medium'>For More Information</p>
                      <div className='w-fit' onClick={()=>Router.push('/contact-us')}>
                      <Button content={'Contact Us'} />
                      </div>
                      <ClientsCount/>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Buttons */}
            <div className='flex gap-2 lg:gap-1 mt-2 lg:mt-0 flex-col lg:flex-row'>
           <Link target='_blank' href={'https://meetings.hubspot.com/sakshi-jass?uuid=ae684c90-b22d-4aed-a972-4de20bef7f87'}>
            <button className=' max-w-[180px]  py-[8px] 2xl:py-[10px]  border-2 px-4 border-pink rounded-full meeting-btn'>
              <span className="meeting-text font-semibold">Book a Meeting</span>
            </button>
           </Link>
           {/* <Link target='_blank' href={'/get-a-free-quote'}> */}
           <div className='w-fit' onClick={()=>Router.push('/get-a-free-quote')}>
              <button
                className='flex items-center justify-center px-3 2xl:w-[180px] text-white rounded-full py-[11px] 2xl:py-3 group bg-pink transition duration-300'>
                <span className='transition-transform duration-300 group-hover:-translate-x-2 font-semibold'>
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