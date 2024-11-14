"use client"
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRef } from "react";
import { Useapi } from '@/helpers/apiContext';
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import FooterBanner from '@/components/footer-banner'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Loader from '@/components/loader'
import index from '@/components/Navbar-items'
import toast from 'react-hot-toast'
const Contact = () => {
  const { basic_details } = Useapi();
  const [data, setdata] = useState<any>()
  const [message, setMessage] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
    our_service: "",
    monthly_spent: ""
  });
  const [isChecked, setIsChecked] = useState(false); // Track checkbox state
  const handleSubmit = async () => {
    if (!isChecked || !validateFields()) return; // Ensure all fields are valid and checkbox is checked
    
    try {
      const response = await axios.post(`${BASE_URL}contact-form/`, message);
      console.log('Message sent successfully');
      toast.success('Message send successfully')

      setMessage({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message: "",
        our_service: "",
        monthly_spent: ""
      });
      setIsChecked(false);
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error('Try again')
      
    }
  };
  const handleChange = (e: any) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked); // Update the checkbox state
  };

  const validateFields = () => {
    // Check if all fields are filled
    return (
      message.first_name &&
      message.last_name &&
      message.email &&
      message.phone_number &&
      message.message &&
      message.our_service &&
      message.monthly_spent
    );
  };

  const isFormValid = isChecked && validateFields();
  
  const sliderRef = useRef<Slider | null>(null); 
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

const fetchdata=async()=>{
  try {
      const response = await axios.get(`${BASE_URL}contact-page/`);
      setdata (response.data);
    } catch (error: any) {
      console.log("service error", error.message);
    }
}
useEffect(()=>{
fetchdata()
},[])

  return (
    <div>
    {  !data&& !basic_details&&
                <Loader/>
    }

{
data&& basic_details&&
    <div>
      <Header />
      <Navbar />
      <div className="w-full bg-no-repeat bg-[url('/images/contactbanner.png')] ">
        <div className="w-full xl:w-[75%]  px-4 mx-auto py-12 md:py-24 flex flex-wrap md:flex-nowrap justify-between gap-8 items-start">
          <div className=" relative  md:min-h-[600px] h-full">
            <div className="max-w-[543px]">
            <p className=" text-[48px] xl:text-[68px] text-white font-bold leading-[] mb-4 xl:leading-[82px]">{data?.contact_page[0]?.banner_title}</p>
            <p className="text-[18px] font-medium text-white">
            {data?.contact_page[0]?.banner_subtitle}
            </p>
            <div className="flex mt-5 gap-2">
              <button className="text-[18px] font-medium py-3  px-9 xl:w-[211px] bg-pink text-white rounded-lg">Lorem</button>
              <button className="text-[18px] font-medium py-3  px-9 xl:w-[211px] bg-white text-pink rounded-lg">Lorem</button>
            </div>
            </div>
            <div className='absolute hidden md:flex gap-3 bottom-0 '>
              {
               data?. contact_image?.map((elem:any ,index:any)=>(

                  <Image src={elem?.image||'/images/mirchi.png'} height={71} width={108} alt='' key={index}></Image>
                ))
              }
            </div>
          </div>
          <div className="w-[791px] relative shadow-xl min-h-[840px] rounded-2xl bg-white">
            <div className="w-full bg-gray-200 text-center py-6 rounded-t-xl text-[22px] md:text-[28px] font-semibold">
              STAY IN TOUCH WITH US
            </div>
            <div className="p-8 flex flex-col gap-5">
              <div className="flex sm:flex-nowrap flex-wrap justify-between gap-10">
                <input
                  type="text"
                  className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                  name="first_name"
                  value={message.first_name}
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                  name="last_name"
                  value={message.last_name}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>
              <div className="flex sm:flex-nowrap flex-wrap justify-between gap-10">
                <input
                  type="email"
                  className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                  name="email"
                  value={message.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                  name="phone_number"
                  value={message.phone_number}
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="my-3 text-[18px] font-semibold">Select Our Services</p>
                <select
                  name="our_service"
                  className="border-slate-300 text-[16px] rounded-md outline-0 w-full p-2 border-[2px]"
                  onChange={handleChange}
                  value={message.our_service} 
                >
                  <option value="">Select a Service</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                  <option value="Google Ads">Google Ads</option>
                  <option value="Yahoo Ads">Yahoo Ads</option>
                  <option value="Facebook Ads">Facebook Ads</option>
                  <option value="LinkedIn Marketing">LinkedIn Marketing</option>
                  <option value="Instagram Growth Marketing">Instagram Growth Marketing</option>
                  <option value="Twitter Marketing">Twitter Marketing</option>
                  <option value="Pinterest Marketing">Pinterest Marketing</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Backlinks Creation">Backlinks Creation</option>
                  <option value="YouTube Marketing">YouTube Marketing</option>
                  <option value="GMB Listing & Optimization">GMB Listing & Optimization</option>
                </select>
              </div>
              <div>
                <p className="my-3 text-[16px] md:text-[18px] font-semibold">Monthly Spent Budget for Digital Marketing</p>
                <input
                  type="text"
                  placeholder="E.g., $250"
                  name="monthly_spent"
                  value={message.monthly_spent}
                  className="text-textGrey border-slate-200 border-[2px] outline-none w-full py-2 px-4 text-[18px] rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  name="message"
                  value={message.message}
                  className="text-textGrey h-[115px] mt-5 border-slate-200 border-[2px] outline-none w-full py-2 px-4 text-[18px] rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  className={`rounded-md bg-pink text-white mt-3 py-2 px-16 text-[18px] font-semibold ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                  onClick={handleSubmit}
                  disabled={!isFormValid} // Disable button if the form is not valid
                >
                  Submit
                </button>
              </div>
              <p className="text-textGrey">Your idea is 100% protected by our non-disclosure agreement.</p>
              <div className="flex gap-3 items-center text-textGrey">
                <input
                  type="checkbox"
                  className="size-[15px] rounded-md border-[1px] border-slate-200"
                  onChange={handleCheckboxChange}
                />
                <p>Keep me updated on the upcoming technology trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className='w-full'>
      <div className='w-full xl:w-[75%] mx-auto px-4'>
        <p className='text-center text-[32px] mt-4 lg:text-[48px] font-bold'>{data?.contact_page[0]?.card_title} </p>
        <div className='bg-grey flex flex-wrap md:flex-nowrap mt-12 justify-between p-8 rounded-lg'>
          <div className='mb-5 md:mb-0'>
            <p className=' text-[24px] lg:text-[32px] font-semibold mb-6'>Milestones Unboxed With Our Expertise
            </p>
            <button className='bg-pink rounded-lg py-3 px-3 lg:px-6 text-white text-[18px] font-medium'>Talk To Our Expert</button>
          </div>
          <div className="w-full lg:w-[892px] p-6 rounded-md bg-white relative overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
              {data?.card_scroll?.map((slide:any, index:number) => (
                <div key={index} className="min-w-full mr-6 pb-3 flex-shrink-0">
                  <Image
                    src={slide.image}
                    height={71}
                    width={108}
                    alt=""
                    className="transition-all duration-200"
                  />
                  <p className="text-[24px] text-homeblack font-medium mb-2">{slide.title}</p>
                  <p className="text-[18px] p-0 text-textGrey leading-[21px]">{slide.description}</p>
                </div>
              ))}
            </Slider>
            <div className='flex justify-end gap-3 absolute bottom-4 right-4'>
              <FaArrowLeftLong 
                onClick={handlePrev} 
                className="text-[22px] cursor-pointer" 
              />
              <FaArrowRightLong 
                onClick={handleNext} 
                className="text-[22px] text-pink cursor-pointer" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='w-full bg-white px-4 py-12 lg:py-16'>
        <div className='w-full mx-auto xl:w-[75%] px-4'>
          <p className='text-center text-[32px] lg:text-[48px] font-bold'>
          {data?.contact_page[0]?.score_title}
          </p>
          <div className='flex mt-6 md:mt-16 lg:flex-nowrap flex-wrap justify-center lg:justify-between'>
            <div className=' w-[200px]  lg:w-[344px] min-h-[234] py-8 rounded-lg duration-200 group hover:shadow-xl border-[1px] border-white hover:border-[1px] hover:border-slate-200 flex flex-col justify-evenly items-center'>
              <Image
                src={'/images/contacticon.svg'}
                height={32}
                width={32}
                alt=''
                className='transition-all duration-200'
              />
              <p className='text-[38px] lg:text-[60px] font-medium'>7000+</p>
              <p className='text-[19px] font-medium'>Projects</p>
            </div>
            <div className=' w-[200px] lg:w-[344px] min-h-[234] py-8 rounded-lg duration-200 group hover:shadow-xl border-[1px] border-white hover:border-[1px] hover:border-slate-200 flex flex-col justify-evenly items-center'>
              <Image
                src={'/images/contacticon1.svg'}
                height={32}
                width={32}
                alt=''
                className='transition-all duration-200'
              />
              <p className='text-[38px] lg:text-[60px] font-medium'>130+</p>
              <p className='text-[19px] font-medium'>Employees</p>
            </div>
            <div className=' w-[200px] lg:w-[344px] min-h-[234] py-8 rounded-lg duration-200 group hover:shadow-xl border-[1px] border-white hover:border-[1px] hover:border-slate-200 flex flex-col justify-evenly items-center'>
              <Image
                src={'/images/contacticon2.svg'}
                height={32}
                width={32}
                alt=''
                className='transition-all duration-200'
              />
              <p className='text-[38px] lg:text-[60px] font-medium'>67+</p>
              <p className='text-[19px] font-medium'>Countries</p>
            </div>
            <div className=' w-[200px] lg:w-[344px] min-h-[234] py-8 rounded-lg duration-200 group hover:shadow-xl border-[1px] border-white hover:border-[1px] hover:border-slate-200 flex flex-col justify-evenly items-center'>
              <Image
                src={'/images/contacticon3.svg'}
                height={32}
                width={32}
                alt=''
                className='transition-all duration-200'
              />
              <p className='text-[38px] lg:text-[60px] font-medium'>2,377+</p>
              <p className='text-[19px] font-medium'>Guests</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white text-center text-[32px] px-4 lg:text-[48px] font-bold pb-12'>
      {data?.contact_page[0]?.image_title}

      </div>
      <div  className='w-full bg-[url("/images/havamahal.png")] py-8 min-h-[47vh] px-4 flex-wrap bg-center  flex justify-center items-center gap-10 lg:gap-20 '>
        <div className='flex flex-col w-[266px] gap-4 text-center h-[304px] text-white items-center justify-center'>
          <Image src={'/images/india.png'} height={85} width={85} alt=''></Image>
          <p className=' text-[22px] lg:text-[25px] uppercase border-b-2 border-pink font-medium'>india(HQ)</p>
          <p className='leading-[19px]'>
            {basic_details?.basic_details[0].address1}
          </p>
          <p className='flex gap-3 items-center text-[18px]'> <IoCall className='text-pink' />
          {basic_details?.basic_details[0].phonenumber}</p>
          <p className='flex gap-3 items-center text-[18px]'><IoMdMail className='text-pink' />
          {basic_details?.basic_details[0].email}</p>
        </div>
        <div className='min-h-[300px] bg-pink w-[1px] hidden md:block'></div>
        <div className='flex flex-col w-[266px] h-[304px]  gap-4 text-center text-white items-center justify-center'>
          <Image src={'/images/mother.png'} height={85} width={85} alt=''></Image>
          <p className='text-[22px] lg:text-[25px] uppercase border-b-2 border-pink font-medium'>US OFFICE</p>
          <p className='leading-[19px]'> {basic_details?.basic_details[0].address2}</p>
          <p className=' text-[18px] flex gap-3 items-center'><IoMdMail className='text-pink' />
          {basic_details?.basic_details[0].email}</p>
        </div>
      </div>
     
      <Footer />
    </div>
    }

    </div>
  )
}

export default Contact