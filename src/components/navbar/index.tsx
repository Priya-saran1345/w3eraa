"use client";
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import { Useapi } from '@/helpers/apiContext';
import Image from 'next/image';
import NavbarItems from '@/components/Navbar-items';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const { basic_details } = Useapi();
  const [showmenu, setshowmenu] = useState(false);
  return (
    <div className='text-homeblack py-3 lg:py-0 bg-white sticky shadow-md -top-2 z-20'>
      <div className='w-full px-4 xl:w-[75%] mx-auto'>
        <div className='flex justify-between items-center '>
          {/* Logo */}
          <Link href="/">
            <Image 
              src={'/images/logo.png'} 
              width={137} 
              loading='lazy'
              height={58} 
              alt={basic_details?.basic_details[0]?.logo_alt|| 'w3era'} 
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden lg:block">
            <NavbarItems  show={0} />
          </div>
          {/* Mobile Menu Icon */}
          <div className='text-[26px] lg:hidden cursor-pointer' onClick={() => setshowmenu((prev)=>!prev)}>
            {!showmenu&&
              <IoMdMenu  />}
              {
               showmenu&&
            <RxCross2 />
              }

          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {showmenu && (
        <div className=' lg:hidden absolute px-6 top-[72px] left-0 w-full bg-white shadow-md z-30'>
          <NavbarItems show={1} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
