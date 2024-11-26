import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Index = () => {
  const [websiteUrl, setWebsiteUrl] = useState(''); // State to hold user input
  const router = useRouter(); // Next.js router for navigation

  const handleCheckNow = () => {
    if (websiteUrl.trim()) {
      router.push(`/website-seo-analyzer`);
    }
     else {
      alert('Please enter a valid website URL.');
    }
  };
  return (
    <div className='bg-[url("/images/home-middle-banner.webp")] w-full bg-no-repeat py-4 lg:py-16 bg-center'>
      <div className="xl:w-[50%] flex flex-col items-center justify-center text-white px-4 mx-auto w-full">
        <p className="text-[16px] lg:text-[18px] text-center font-semibold">LET’S GET STARTED.</p>
        <p className="text-[28px] md:text-[38px] font-bold text-center md:text-left capitalize">
          View your Website Report-
        </p>
        <div className="mt-5 w-full flex justify-center">
          <input
            type="text"
            placeholder="Your Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)} // Update state on input change
            className="text-textGrey p-4 border-none outline-none px-4 w-full sm:w-2/3 bg-white rounded-full"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleCheckNow} // Handle button click
            className="py-3 rounded-full px-10 hover:bg-pink duration-300 hover:border-pink text-[18px] border-[2px] border-white"
          >
            Check Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
