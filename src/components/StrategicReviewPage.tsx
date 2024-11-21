"use client"
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import { Useapi } from '@/helpers/apiContext';
import axios from 'axios'
import { BASE_URL } from '@/util/api'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from '@/components/loader'
import toast from 'react-hot-toast'
import HubspotForm from '@/components/HubspotForm'

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
    monthly_budget: "",
    profile: "",
    url: "",
  });
  const [isChecked, setIsChecked] = useState(false); // Track checkbox state
  const handleSubmit = async () => {
    if (!isChecked || !validateFields()) return; // Ensure all fields are valid and checkbox is checked

    try {
      const response = await axios.post(`${BASE_URL}review-form/`, message);
      console.log('Message sent successfully');
      toast.success('Message send successfully')

      setMessage({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message: "",
        our_service: "",
        monthly_budget: "",
        profile: "",
        url: "",
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
      message.monthly_budget &&
      message.url &&
      message.profile
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

  const fetchdata = async () => {
    try {
      const response = await axios.get(`${BASE_URL}contact-page/`);
      setdata(response.data);
    } catch (error: any) {
      console.log("service error", error.message);
    }
  }
  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div>
      {!data && !basic_details &&
        <Loader />
      }

      {
        data && basic_details &&
        <div>
          <Header />
          <Navbar />
          <div className="w-full bg-no-repeat bg-[url('/images/contactbanner.png')] ">
          <h1 className='text-[32px] lg:text-[44px] text-center pt-12 font-bold text-white'>Get a Free Strategy Review</h1>

            <div className=" mx-auto xl:w-[75%]  px-4  py-24 flex flex-wrap md:flex-nowrap justify-center gap-8 items-start">
              <div className="w-full p-8 xl:w-[75%]  shadow-xl rounded-2xl bg-white">
                {/* <div className="w-full bg-gray-200 text-center py-6 rounded-t-xl text-[22px] md:text-[28px] font-semibold">
                  STAY IN TOUCH WITH US
                </div> */}
                {/* <div className="p-8 flex flex-col gap-5">
                  <div className="flex sm:flex-nowrap flex-wrap justify-between gap-10">
                    <input
                      type="text"
                      className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                      name="first_name"
                      placeholder="First Name"
                      value={message.first_name}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                      name="last_name"
                      placeholder="Last Name"
                      value={message.last_name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                      name="email"
                      placeholder="Email Address"
                      value={message.email}
                      onChange={handleChange}
                    />
                    <input
                      type="number"
                      className="text-textGrey sm:w-1/2 text-[18px] outline-none p-4 border-b-[2px] border-slate-200"
                      name="phone_number"
                      placeholder="Phone Number"
                      value={message.phone_number}
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
                      name="monthly_budget"
                      value={message.monthly_budget}
                      className="text-textGrey border-slate-200 border-[2px] outline-none w-full py-2 px-4 text-[18px] rounded-md"
                      onChange={handleChange}
                    />
                  </div>
                  <div className='flex justify-between w-full gap-3 flex-col md:flex-row '>
                    <div className='w-full md:w-1/2'>

                      <p className="my-3 text-[16px] md:text-[18px] font-semibold">Social Media Profiles
                      </p>
                      <input
                        type="text"
                        // placeholder="E.g., $250"
                        name="profile"
                        value={message.profile}
                        className="text-textGrey border-slate-200 border-[2px] outline-none w-full py-2 px-4 text-[18px] rounded-md"
                        onChange={handleChange}
                      />
                    </div>
                    <div className='w-full md:w-1/2'>

                      <p className="my-3 text-[16px] md:text-[18px] font-semibold">
                        Website URL
                      </p>
                      <input
                        type="text"
                        // placeholder="E.g., $250"
                        name="url"
                        value={message.url}
                        className="text-textGrey border-slate-200 border-[2px] outline-none w-full py-2 px-4 text-[18px] rounded-md"
                        onChange={handleChange}
                      />
                    </div>
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
                  <p className="text-textGrey">Your idea is 100% protected by our non-disclosure agreement.</p>
                  <div className="flex gap-3 items-center text-textGrey">
                    <input
                      type="checkbox"
                      className="size-[15px] rounded-md border-[1px] border-slate-200"
                      onChange={handleCheckboxChange}
                    />
                    <p>Keep me updated on the upcoming technology trends</p>
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
                  
                </div> */}
                <HubspotForm  portalId="20095080" formId={"7b540091-e853-46ae-9e7e-a89a6f91230f"} region={'na1'}/>
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