'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import axios from 'axios';
import { BASE_URL } from '@/util/api';
import toast from 'react-hot-toast';
import HubspotForm from '@/components/HubspotForm'

const Footerbanner = ({ content, slug, image, description, btncontent }: any) => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
    monthly_budget: "",
    url: '',
    country: ''
  });
  const [errors, setErrors] = useState<any>({});
  // const [isChecked, setIsChecked] = useState(false);
  const handleSubmit = async () => {
    if (!validateFields()) return;
    try {
      await axios.post(`${BASE_URL}business-form/`, message);
      console.log('Message sent successfully');
      toast.success('Message send successfully')
      setMessage({
        name: "",
        email: "",
        phone_number: "",
        message: "",
        monthly_budget: "",
        url: '',
        country: ''
      });
      setErrors({});
      // setIsChecked(false);
    } catch (error) {
      console.error('Error submitting data:', error);
      toast.error('Try again')

    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };
  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsChecked(e.target.checked);
  //   if (errors.isChecked) setErrors({ ...errors, isChecked: "" });
  // };
  const validateFields = () => {
    let isValid = true;
    const newErrors: any = {};
    if (!message.name) {
      newErrors.name = "First Name is required";
      isValid = false;
    }
    if (!message.email) {
      newErrors.email = "Email Address is required";
      isValid = false;
    }
    if (!message.phone_number) {
      newErrors.phone_number = "Phone Number is required";
      isValid = false;
    }
    if (!message.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    if (!message.monthly_budget) {
      newErrors.monthly_budget = "Monthly Budget is required";
      isValid = false;
    }
    if (!message.url) {
      newErrors.url = "Website URL is required";
      isValid = false;
    }
    if (!message.country) {
      newErrors.country = "Country/Region is required";
      isValid = false;
    }
    // if (!isChecked) {
    //   newErrors.isChecked = "You must agree to the terms and conditions";
    //   isValid = false;
    // }
    setErrors(newErrors);
    return isValid;
  };
  return (
    <div className='w-full border-t-[1px]'>
      <div className='w-full mx-auto rounded-xl pt-12 bg-lightblue bg-cover bg-center'>
        <div className='w-full relative rounded-xl xl:w-[75%] mx-auto bg-white flex justify-between items-center'>
          <div className='bg-white md:w-[55%]  flex-col flex text-center md:text-left px-4 sm:px-12 py-10 md:py-0'>
            <p className='text-homeblack font-semibold my-3 mb-5 lg:leading-[45px] text-[24px] lg:text-[38px]'>
              Discover How We Can Help Your Business Grow.
            </p>
            {/* <div className="px-2 py-2 flex flex-col gap-5">
              <div className="flex sm:flex-nowrap flex-wrap justify-between gap-10">
                <div className='sm:w-1/2 flex flex-col'>
                <input
                  type="text"
                  className="text-textGrey  text-[16px] lg:text-[18px] outline-none p-2 border-b-[2px] border-slate-200"
                  name="name"
                  value={message.name}
                  placeholder="First Name"
                  onChange={handleChange}
                  />
                {errors.name &&
                 <span className="text-red-500">{errors.name}</span>}
                 </div>
                 <div className='sm:w-1/2 flex flex-col'>
                <input
                  type="number"
                  className="text-textGrey  text-[16px] lg:text-[18px] outline-none p-2 border-b-[2px] border-slate-200"
                  name="phone_number"
                  value={message.phone_number}
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
                {errors.phone_number && <span className="text-red-500">{errors.phone_number}</span>}
                </div>
              </div>
              <div className="flex sm:flex-nowrap flex-wrap justify-between gap-10">
              <div className='sm:w-1/2 flex flex-col'>
                <input
                  type="email"
                  className="text-textGrey text-[16px] lg:text-[18px] outline-none p-2 border-b-[2px] border-slate-200"
                  name="email"
                  value={message.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div className='sm:w-1/2 flex flex-col'>
                <input
                  type="text"
                  value={message.url}
                  className="text-textGrey  text-[16px] lg:text-[18px] outline-none p-2 border-b-[2px] border-slate-200"
                  name="url"
                  placeholder="Website URL"
                  onChange={handleChange}
                />
                {errors.url && <span className="text-red-500">{errors.url}</span>}
                </div>
              </div>
              <div>
                <p className="my-1 text-[16px] md:text-[16px] lg:text-[18px] font-semibold">Monthly Spent Budget for Digital Marketing</p>
                <input
                  type="text"
                  placeholder="E.g., $250"
                  name="monthly_budget"
                  value={message.monthly_budget}
                  className="text-textGrey border-slate-200 border-[2px] outline-none w-full py-2 px-4 text-[16px] lg:text-[18px] rounded-md"
                  onChange={handleChange}
                />
                {errors.monthly_budget && <span className="text-red-500">{errors.monthly_budget}</span>}
              </div>
              <div>
                <p className="my-1 text-[16px] md:text-[16px] lg:text-[18px] text-left font-semibold">Country/Region</p>
                <input
                  type="text"
                  name="country"
                  value={message.country}
                  className="text-textGrey border-slate-200 border-[2px] outline-none w-full py-2 px-4 text-[16px] lg:text-[18px] rounded-md"
                  onChange={handleChange}
                />
                {errors.country && <span className="text-red-500">{errors.country}</span>}
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  name="message"
                  value={message.message}
                  className="text-textGrey h-[115px] mt-2 border-slate-200 border-[2px] outline-none w-full py-2 px-4 text-[16px] lg:text-[18px] rounded-md"
                  onChange={handleChange}
                />
                {errors.message && <span className="text-red-500">{errors.message}</span>}
              </div>
              <div>
               
              </div>
              <div className='w-fit'>
                <button 
                  className={`text-pink text-[16px] lg:text-[18px] bg-white gap-3 flex items-center rounded-full p-[2px] mb-4 border-lightpink border-[2px] font-medium group hover:bg-lightpink transition-all duration-300`} 
                  onClick={handleSubmit}
                >
                  <div className="min-w-[45px] h-[45px] flex bg-lightpink justify-center items-center rounded-full border-lightpink border-[1px] transform transition-transform duration-300 group-hover:bg-pink group-hover:rotate-45 group-hover:translate-x-2">
                    <GoArrowUpRight className="-rotate-30 group-hover:text-white text-[28px] text-pink" />
                  </div>
                  <span className="transform pr-6 transition-transform duration-300 group-hover:translate-x-2">
                    <p>Hear From Expert </p>
                  </span>
                </button>
              </div>
            </div> */}
            <HubspotForm  portalId="20095080" formId={"2a841ab2-9b37-41a6-a33e-6e1321aa9bff"} region={'na1'}/>

          </div>
          <div className='rounded-2xl'>
            <Image src={'/images/girlFooter1.png'}  height={312} width={488} alt='w3era' className='hidden md:block rounded-r-2xl' />
          </div>
        </div>
      </div>
      <div className='w-full bg-blue -mt-[400px] min-h-[450px]'></div>
    </div>
  );
};

export default Footerbanner;
