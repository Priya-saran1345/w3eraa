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
    } catch (error) {
      console.error('Error submitting data:', error);
      
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
        <div className=" mx-auto xl:w-[75%]  px-4  py-24 flex flex-wrap md:flex-nowrap justify-center gap-8 items-start">
         
          <div className="w-full xl:w-[75%]  shadow-xl rounded-2xl bg-white">
            <div className="w-full bg-gray-200 text-center py-6 rounded-t-xl text-[22px] md:text-[28px] font-semibold">
              STAY IN TOUCH WITH US
            </div>
            <div className="p-8 flex flex-col gap-5">
              <div className="flex sm:flex-nowrap flex-wrap justify-between gap-10">
                <input
                  type="text"
                  className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                  name="first_name"
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
                  <input
                  type="email"
                  className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                 <input
                  type="number"
                  className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                  name="phone_number"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>
            <div></div>
              <div>
                <p className="my-3 text-[18px] font-semibold">Select Our Services</p>
                <select
                  name="our_service"
                  className="border-slate-300 text-[16px] rounded-md outline-0 w-full p-2 border-[2px]"
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                 
                </select>
              </div>
              <div>
                <p className="my-3 text-[16px] md:text-[18px] font-semibold">Monthly Spent Budget for Digital Marketing</p>
                <input
                  type="text"
                  placeholder="E.g., $250"
                  name="monthly_spent"
                  className="text-textGrey border-slate-200 border-[2px] outline-none w-full py-2 px-4 text-[18px] rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  name="message"
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
      
      <Footer />
    </div>
    }

    </div>
  )
}

export default Contact