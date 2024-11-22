"use client";
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import Loader from '@/components/loader';
import Image from 'next/image';
import Button from '@/components/button';
import { BASE_URL } from '@/util/api';

const CaseStudy = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All'); // Track active category
  const [portfolio, setPortfolio] = useState<any>();
  const [err, setErr] = useState<any>();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  }, []);
  // Fetch portfolio data with caching and revalidation


  // Effect to fetch portfolio data on component mount
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch(`${BASE_URL}portfolio/`, {
         
        });
  
        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio. Status: ${response.status}`);
        }
  
        const data = await response.json();
        setPortfolio(data);
      } catch (error: any) {
        console.error('Error fetching portfolio:', error);
        if (error?.response?.status === 404) {
          setErr(true);
        }
      }
    };

    fetchPortfolio();
  }, []);

  // Filter cards based on the active category
  const filteredCards =
    activeCategory === 'All'
      ? portfolio?.flatMap((category: any) => category.card)
      : portfolio?.find((category: any) => category.title === activeCategory)?.card || [];

  return (
    <div>
      {!portfolio && <Loader />}
      {portfolio && (
        <div className="w-full">
          <Header />
          <Navbar />
          <div className="w-full h-[40vh] flex justify-center items-center bg-[url('/images/casebanner.png')]">
            <h1 className="text-white text-[32px] font-bold lg:text-[48px]">Portfolio</h1>
          </div>
          <div className="w-full px-4 xl:px-9 mx-auto bg-white pb-16">
            <div className="w-full bg-grey xl:w-[75%] mx-auto rounded-lg justify-center flex flex-wrap gap-4 my-8 p-4 md:p-7">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-4 md:px-8 py-1 md:py-2 text-black bg-white rounded-md hover:text-white hover:bg-pink text-[18px] font-medium ${
                  activeCategory === 'All' ? ' !text-white !bg-pink' : ''
                }`}
              >
                All
              </button>

              {portfolio?.map((category: any) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.title)}
                  className={`px-4 md:px-8 py-1 md:py-2 text-black bg-white rounded-md hover:text-white hover:bg-pink text-[18px] font-medium ${
                    activeCategory === category.title ? '!text-white !bg-pink' : ''
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Portfolio Cards */}
            <div className="w-full xl:w-[75%] mx-auto my-4 flex flex-wrap gap-7 justify-center">
              {filteredCards?.length === 0 ? (
                <p className="text-center text-lg font-medium">No projects available in this category.</p>
              ) : (
                filteredCards?.map((elem: any, index: number) => (
                  <div
                    key={elem.id}
                    className="rounded-lg w-full sm:w-[45%] lg:w-[31%] h-[319px] flex group justify-center items-center relative"
                    onMouseEnter={() => setHoveredCardIndex(index)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                  >
                    <Image
                      src={elem.image}
                      alt={elem?.image_alt}
                      width={455}
                      height={455}
                      className="rounded-lg"
                    />

                    {hoveredCardIndex === index && (
                      <div
                        className="absolute bg-white/80 rounded-md px-6 py-6 w-[380px] h-[180px]"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                      >
                        <div className="flex flex-col mt-4 gap-5 items-center">
                          <p className="text-[22px] font-semibold leading-tight">{elem.title}</p>
                          <Link href={`/blog/web-portfolios/${elem.slug}`}>
                            <div className="w-[65px] h-[50px] rounded-md bg-pink text-[24px] text-white flex justify-center items-center font-bold">
                              <FaArrowRightLong />
                            </div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="w-full bg-blue py-10 text-white lg:py-16">
            <div className="md:w-[75%] mx-auto xl:w-[50%]">
              <p className="text-[28px] font-bold text-center lg:leading-[46px] lg:text-[38px]">
                Get A Top Rank on Google Search Results, Qualified Leads and Increased Sales
              </p>
              <div className="flex flex-wrap mt-8 justify-center gap-4">
                <Link href={'/get-a-free-quote'}>
                  <Button content={'Get a Quote Now!'} />
                </Link>
                <Link href={'/get-a-free-strategy-review'}>
                  <Button content={'Analyse my Website for Free!'} />
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
