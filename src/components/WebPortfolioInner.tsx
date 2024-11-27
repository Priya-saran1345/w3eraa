'use client';
import Choose from '@/components/Choose';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Loader from '@/components/loader';
import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Useapi } from '@/helpers/apiContext';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { BASE_URL } from '@/util/api';
import DownNavbar from '@/components/DownNavbar'
import CustomerChoose from "@/components/CustomerChoose";
const PortfolioInner = () => {
  const { apidata } = Useapi();
  const pathname = usePathname();
  const segments = pathname.replace(/\/$/, '').split('/');
  const lastSegment = segments.pop(); // This will be the 'slug' from the URL
  const [data, setData] = useState<any>(null);

  // Fetch portfolio data
  const fetchPortfolioData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}portfolio/`);
      setData(response.data); // Assuming the response is an array and we need the first item
    } catch (error: any) {
      console.error('Service error', error.message);
    }
  };

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  // Match the card based on the slug in the URL
  const matchedCard = data?.flatMap((category: any) =>
    category.card.filter((card: any) => card.slug === lastSegment)
  )[0]; // Get the first matched card if any

  // if (!apidata) {
  //   return <Loader />;
  // }

  return (
    <div>
      {apidata && (
        <div>
          <Header />
          <DownNavbar/>

          <Navbar />
          <div className="border-b-2 border-lightblue">
            <div className="py-12 xl:w-[70%] px-6 mx-auto items-center lg:py-16 flex-col gap-12">
              <div className="flex justify-center items-center">
                {/* Display the matched card's image */}
                {matchedCard?.image && (
                  <Image
                    src={matchedCard.image || ''}
                    height={550}
                    width={550}
                    alt={matchedCard.image_alt}
                  />
                )}
              </div>
              <div className="mx-auto mt-8 lg:mt-16 text-center">
               
                <p className="text-homeblack text-[38px] font-bold">
                  {matchedCard?.title || 'Title Not Found'}
                </p>
                <p className="text-[18px] text-homegrey mt-3 text-left leading-[30px]" dangerouslySetInnerHTML={{ __html: matchedCard?.description || '' }}>
                  {/* Display the matched card's description */}
                  {/* {matchedCard?.description || 'Description not available'} */}
                </p>
              </div>
            </div>
          </div>
          {/* Conditional rendering of Choose component */}
          {/* <Choose props={apidata?.why_choose[0] || ''} /> */}
          <CustomerChoose />

          <Footer />
        </div>
      )}
    </div>
  );
};

export default PortfolioInner;
