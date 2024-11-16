import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/button';
import Link from 'next/link';

const CaseStudy = ({ props }: { props: any }) => {
  // Step 1: Set up state for selected category
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All'

  // Step 2: Create an array of unique categories
  const categories = ['All', ...props?.case_study.map((item: any) => item.title) || []];

  // Step 3: Filter the case studies based on selected category
  const filteredStudies = selectedCategory === 'All'
    ? props?.case_study.flatMap((category: any) => category.card)
    : props?.case_study.find((category: any) => category.title === selectedCategory)?.card || [];

  return (
    <div className='w-full py-12'>
      <div className='px-6 xl:px-0 xl:w-[75%] mx-auto'>
        <p className='text-[38px] font-bold text-center'>Case Study</p>

        {/* Step 4: Render category buttons with active state */}
        <div className='flex gap-2 text-homeblack justify-center items-center my-4 mb-10'>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 text-[20px] font-semibold py-1 border-b-[2px] 
                ${selectedCategory === category 
                  ? 'text-pink border-pink' // Active category
                  : 'text-homeblack border-white' // Inactive category
                } 
                hover:text-pink hover:border-pink`}
              onClick={() => setSelectedCategory(category)} // Set selected category
            >
              {category}
            </button>
          ))}
        </div>

        {/* Step 5: Render filtered case studies */}
        <div className='flex flex-wrap gap-8 justify-center'>
          {filteredStudies?.map((study: any) => (
            <div
              key={study.id} // Adding a key prop to each case study
              className='w-[455px] sm:max-w-[45%] rounded-xl md:max-w-[31%] group relative'
            >
              <div className='w-full  border-2 border-lightblue h-[301px] rounded-xl relative overflow-hidden'>
                <Image
                  src={study.image} // Use the actual image URL from the study data
                  height={301}
                  width={455}
                  alt={study?.image_alt} // Adding alt text for accessibility
                  className='rounded-xl w-full h-full'
                />
                {/* Overlay with button */}
                <div className='w-full h-full bg-white/30 absolute rounded-xl top-0 left-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                  <div className='absolute translate-y-100 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0'>
                    <Link href={`/blog/case-studies/${study?.slug}`}>
                      <Button content={"View More"} />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-center text-[22px] mt-3 uppercase font-semibold'>{study.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
