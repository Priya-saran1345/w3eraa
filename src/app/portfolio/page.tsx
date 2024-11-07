"use client";
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { FaArrowRightLong } from "react-icons/fa6";
import { useapi } from '@/helpers/apiContext';
import Link from 'next/link';
import Loader from '@/components/loader';

const CaseStudy = () => {
  const { portfolio } = useapi();
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All'); // Track active category

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  }, []);

  // Define filtered cards based on active category
  const filteredCards = activeCategory === 'All'
    ? portfolio?.portfolio_category.flatMap((category: any) => category.card)
    : portfolio?.portfolio_category.find((category: any) => category.title === activeCategory)?.card || [];

  return (
    <div>
      {!portfolio && <Loader />}
      {portfolio && (
        <div className="w-full">
          <Header />
          <Navbar />
          <div className="w-full h-[40vh] bg-[url('/images/casebanner.png')]" />
          <div className="w-full px-4 xl:px-9 mx-auto bg-white pb-16">
            <div className="bg-[url('/images/casebaner2.png')] pt-8 lg:pt-20 md:mt-8 bg-center bg-no-repeat flex justify-center items-end">
              <div className="flex flex-col gap-3 text-center md:w-[75%]">
                <p className="text-black text-[32px] font-bold">
                  {portfolio?.port_folio[0].title}
                </p>
                <p
                  className="text-textGrey text-[18px]"
                  dangerouslySetInnerHTML={{ __html: portfolio?.port_folio[0]?.description }}
                />
              </div>
            </div>

            {/* Category Buttons */}
            <div className="w-full bg-grey xl:w-[75%] mx-auto rounded-lg justify-center flex flex-wrap gap-4 my-8 p-4 md:p-7">
            <button
  onClick={() => setActiveCategory('All')}
  className={`px-4 md:px-8 py-1 md:py-2 text-black bg-white rounded-md hover:text-white hover:bg-pink text-[18px] font-medium ${
    activeCategory === 'All' ? ' !text-white !bg-pink' : ''
  }`}
>
  All
</button>

              {portfolio?.portfolio_category.map((category: any) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.title)}
                  className={`px-4 md:px-8 py-1 md:py-2 text-black bg-white rounded-md hover:text-white hover:bg-pink text-[18px] font-medium ${
                    activeCategory === category.title ? '!text-white !bg-pink' : ''
                  }`}>
                  {category.title}
                </button>
              ))}
            </div>

            {/* Portfolio Cards */}
            <div className="w-full xl:w-[75%] mx-auto my-4 flex flex-wrap gap-7 justify-center">
              {filteredCards.map((elem: any, index: number) => (
                <div
                  key={elem.id}
                  className="rounded-lg w-full sm:w-[45%] lg:w-[31%] h-[319px] flex group justify-center items-center bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${elem?.image})` }}
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                  {hoveredCardIndex === index && (
                    <div
                      className="bg-white/80 rounded-md px-6 py-6 w-[380px] h-[180px]"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      {/* <p className="font-medium text-[18px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      </p> */}
                      <div className="flex flex-col  mt-4 gap-5 items-center">
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
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
