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
import { useRouter } from 'next/navigation';

const PortfolioInner = ({ data }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.replace(/\/$/, '').split('/');
  const lastSegment = segments.pop(); // This will be the 'slug' from the URL

  // Match the card based on the slug in the URL
  const matchedCard = data?.flatMap((category: any) =>
    category.card.filter((card: any) => card.slug === lastSegment)
  )[0]; // Get the first matched card if any

  // If no matched card, navigate to the "Not Found" page
  useEffect(() => {
    if (!matchedCard) {
      router.push('/not-found'); // Replace with your 404 page route
    }
  }, []);

  return (
    <div>
      {matchedCard && (
        <>
          <Header />
          <DownNavbar />
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
                <div
                  className="text-[18px] text-homegrey mt-3 text-left leading-[30px]"
                  dangerouslySetInnerHTML={{ __html: matchedCard?.description || '' }}
                >
                  {/* Display the matched card's description */}
                </div>
              </div>
            </div>
          </div>
          <CustomerChoose />
          <Footer />
        </>
      ) 
      }
    </div>
  );
};

export default PortfolioInner;
