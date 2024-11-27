'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

export default function PortfolioFilter({ initialPortfolio }: any) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  React.useEffect(() => {
    AOS.init({
      duration: 500, // Smooth animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  const filteredCards =
    activeCategory === 'All'
      ? initialPortfolio.flatMap((category: any) => category.card)
      : initialPortfolio.find((category: any) => category.title === activeCategory)?.card || [];

  return (
    <>
      {/* Category Filters */}
      <div className="w-full bg-grey xl:w-[75%] mx-auto rounded-lg justify-center flex flex-wrap gap-4 my-8 p-4 md:p-7">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 md:px-8 py-1 md:py-2 text-black bg-white rounded-md transition-all duration-300 ease-in-out hover:text-white hover:bg-pink text-[18px] font-medium ${
            activeCategory === 'All' ? '!text-white !bg-pink shadow-lg' : ''
          }`}
        >
          All
        </button>
        {initialPortfolio.map((category: any) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.title)}
            className={`px-4 md:px-8 py-1 md:py-2 text-black bg-white rounded-md transition-all duration-300 ease-in-out hover:text-white hover:bg-pink text-[18px] font-medium ${
              activeCategory === category.title ? '!text-white !bg-pink shadow-lg' : ''
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Portfolio Cards */}
      <div className="w-full xl:w-[75%] mx-auto my-4 flex flex-wrap gap-7 justify-center">
        {filteredCards.length === 0 ? (
          <p className="text-center text-lg font-medium">No projects available in this category.</p>
        ) : (
          filteredCards.map((elem: any, index: number) => (
            <div
              key={elem.id}
              className="rounded-lg w-full sm:w-[45%] lg:w-[31%] h-[319px] flex group justify-center items-center relative overflow-hidden"
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              
            >
              {/* Image with hover effect */}
              <Image
                src={elem.image}
                alt={elem.image_alt}
                width={455}
                height={455}
                className="rounded-lg transition-transform duration-500 ease-in-out transform "
              />

              {/* Hover Overlay */}
              {hoveredCardIndex === index && (
                <div
                  className="absolute bg-white/90 rounded-md px-6 py-6 sm-[90%] md:w-[80%] 
                  h-[60%] flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out"
                  style={{
                    opacity: hoveredCardIndex === index ? 1 : 0,
                    // transform: hoveredCardIndex === index ? 'scale(1)' : 'scale(0.9)',
                  }}
                  data-aos="fade-up"
                >
                  <p className="text-[22px] mb-4 font-semibold leading-tight text-center">{elem.title}</p>
                  <Link href={`/blog/web-portfolios/${elem.slug}`}>
                    <div className="w-[65px] h-[40px] rounded-md bg-pink text-[24px] text-white flex justify-center items-center font-bold transition-transform duration-300 ease-in-out hover:scale-110">
                      <FaArrowRightLong className=' ' />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
