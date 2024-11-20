'use client'
import React, { useState } from 'react'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import MarketingServices from '@/components/marketingServices'
import Data from '@/components/Json/Data.json'
import { Useapi } from '@/helpers/apiContext';
import ClientSays from "@/components/clientSays"
import Image from 'next/image'
import { BarChartIcon as ChartBar, Users, Phone, Newspaper } from 'lucide-react'
import HubspotForm from '@/components/HubspotForm'

const DigitalMarketingConsultationPage = () => {
  const { apidata } = Useapi();
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Free Digital Marketing Consultation",
      subtitle:'Take Your Business to the Next Level. Improve Your Online Visibility',
      description: "We build and manage online marketing campaigns to engage your customers across channels including search engine, social media, mobile marketing, and display ads.",
      icons: [ChartBar, Users, Phone, Newspaper]
    },
    {
      title: "Promote your Business across Digital Marketing Channels",
      subtitle:'',
      description: "We build and manage online marketing campaigns to engage your customers across channels including search engine, social media, mobile marketing, and display ads.",
      icons: [Users, ChartBar, Newspaper, Phone]
    },
    {
      title: "Assured Business Growth via  Performance Driven Digital Marketing",
      subtitle:'',
      description: "Our performance marketing strategies ensure that new customers can find your business in the online space. We assure you of  business growth by improving your brand’s visibility. ",
      icons: [ChartBar, Newspaper, Users, Phone]
    }
  ]
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex lg:flex-row  bg-gray-50">
        <div className='flex lg:flex-nowrap flex-wrap px-4 xl:w-[75%] mx-auto'>
      {/* Slider Section */}
      <div className="flex-1 relative p-8 lg:p-12 flex items-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="  leading-[55px] text-homeblack font-bold ">
             {slides[currentSlide].title}
            </h1>
            <p className=" text-homeblack  text-[18px] lg:text-[22px] leading-[45px] font-medium mb-6">
              {slides[currentSlide].subtitle.split('Digital Marketing').map((part, i) => (
                <span key={i}>
                  {part}
                  {/* {i === 0 && <span className="text-red-500">Digital Marketing</span>} */}
                </span>
              ))}
            </p>
            <p className="text-gray-600 text-lg mb-8">
              {slides[currentSlide].description}
            </p>
            <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              {slides[currentSlide].icons.map((Icon, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-full">
                  <Icon className="w-6 h-6 text-gray-600" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className=" bg-blue p-8 text-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4">ENQUIRE NOW</h2>
          <p className="mb-8">Fill out the information below and we will call you soon</p>
          
         
                      <HubspotForm  portalId="20095080" formId={"f27c7197-db33-4e7e-a06c-eb8df7887b66"} region={'na1'} />
          
          <p className="mt-6 text-sm text-center">
            Create your own free forms to generate leads from your website.
          </p>
        </div>
      </div>

      </div>
    </div>
      <MarketingServices props={Data?.Digital_Marketing_Channels} />
      <div className='w-full bg-blue py-10 text-white  lg:py-16'>
        <div className=' md:w-[85%] mx-auto xl:w-[70%]'>
          <h2 className=' text-[28px] font-bold text-center lg:leading-[46px] lg:text-[38px]'>
            Performance Driven Digital Marketing Solutions
          </h2>
          <p className='   text-center lg:leading-[46px] mt-3 text-[28px] font-semibold'>
            10X Your Organic Website Traffic
          </p>
          <p className='   text-center lg:leading-[26px] mt-2 text-[20px] '>
            <strong> W3Era Technology</strong> 
            is a productivity marketing firm that focuses on 100% quantifiable returns and 
            is result-driven. Our quality marketing strategies will always provide the outcomes for which you have paid. 
            Individual medium-specific strategies don&apos;t always have a significant impact. As a result, we combine them to establish 
            a stronger web presence. Our team uses a combination of communication and technology channels to conceptualize, design, and enhance performance-centric campaigns that lower risks and increase ROI. Regardless of the size of your business, we ensure that every promotional dollar is effective and maximizes your overall return on investment.
          </p>

        </div>
      </div>
      <div className='bg-[#E8E6E7] w-full'>


<div className='   xl:w-[75%] py-10 px-4 xl:px-0 mx-auto'>
  <div className='flex justify-between mt-6 items-center lg:gap-16'>

    <div className='w-full '>

      <div className='flex items-center  py-2 border-b-[1px] border-lightblue gap-2'>
        <Image
          src='/images/bulb1.png'
          height={80}
          width={85}
          alt={''}
          className=''
        />
        <div>

          <p className='text-[18px] font-medium'>Effective</p>
          <p className='text-[18px] font-medium'>Brand Communication</p>
        </div>
      </div>
      <div className='flex border-b-[1px] border-lightblue  items-center py-2 gap-2'>
        <Image
          src='/images/bulb2.png'
          height={80}
          width={85}
          alt={''}
          className=''
        />
        <div>

          <p className='text-[18px] font-medium'>Targeting</p>
          <p className='text-[18px] font-medium'>Right Audience</p>
        </div>
      </div>
      <div className='flex border-b-[1px] border-lightblue items-center py-2 gap-2'>
        <Image
          src='/images/bulb3.png'
          height={80}
          width={85}
          alt={''}
          className=''
        />
        <div>

          <p className='text-[18px] font-medium' >Reliable </p>
          <p className='text-[18px] font-medium'>Conversion Strategies
          </p>
        </div>
      </div>
    </div>
    <div className=' hidden  rounded-xl py-3  lg:block min-w-[477px]'>
      <Image
        src='/images/bulb.jpg'
        height={400}
        width={400}
        alt={''}
        className=''
      />
    </div>

  </div>
</div>
</div>
      <MarketingServices props={Data?.Digital_Marketing_Process} />
      <div className="flex xl:w-[75%] flex-col md:flex-row gap-6 p-4  mx-auto">
        {/* Numbers Speak Panel */}
        <div className="flex-1 border-2 border-red-500 p-8">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-red-500">NUMBERS</span> SPEAK
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold mb-1">5000+</p>
              <p>
                <span className="text-red-500">Clients</span> Served
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">7000+</p>
              <p>
                <span className="text-red-500">Project</span> Handled
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">$100M+</p>
              <p>
                <span className="text-red-500">Budget</span> Managed
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">97%</p>
              <p>
                <span className="text-red-500">Client</span> Retention
              </p>
            </div>
          </div>
        </div>

        {/* We Are In Nutshell Panel */}
        <div className="flex-1 border-2 border-black p-8">
          <h2 className="text-2xl font-bold mb-8">
            WE ARE IN <span className="text-red-500">NUTSHELL</span>
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold mb-1">14+</p>
              <p>
                <span className="text-red-500">Years</span> in Business
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">300+</p>
              <p>
                <span>Strong</span> <span className="text-red-500">Team</span>
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">50+</p>
              <p>
                <span className="text-red-500">Countries</span> Covered
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">15+</p>
              <p>
                <span>Affiliate</span> <span className="text-red-500">Partners</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div  className='bg-white mt-12 mb-8 xl:w-[75%] px-4 xl:px-0 mx-auto'>
        <div className='flex justify-between mt-6 items-center lg:gap-16'>
          <div className=' hidden  rounded-xl py-3  lg:block min-w-[477px]'>
            <Image
              src='/images/group-team.jpg'
              height={400}
              width={545}
              alt={''}
              className=''
            />
          </div>
          <div className='w-full '>
            <h2 className='text-homeblack  text-center font-bold '>
              From 2008 Empowering Businesses at W3era
            </h2>
            <div
              className='text-homegrey  text-[18px] mt-4'
            >
              Since its founding in 2008&lsquo; W3era has provided countless online businesses using digital solutions specifically created to handle their unique business difficulties. Our performance-based digital marketing programs are the ideal fusion of team, strategy, and technique to assist organizations in spotting opportunities at the moment&lsquo; connecting with their target audience&lsquo; and gaining new clients. We are the ideal choice if you &apos;re looking for a Digital Marketing Agency to boost your search engine ranks&lsquo; expand your audience or produce business leads. We provide several coordinated digital marketing strategies. Without being bound by a lengthy contract&lsquo; pick the finest.
            </div>
          </div>
        </div>
      </div>
      <ClientSays props={apidata?.clients_say[0]} />
      <Footer />
    </div>
  )
}

export default DigitalMarketingConsultationPage