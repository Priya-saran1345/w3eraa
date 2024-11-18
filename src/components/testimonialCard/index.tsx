import React, { useState } from 'react';
import Image from 'next/image';
import { TiStar } from 'react-icons/ti';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const TestimonialCard = ({ props }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(props?.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentItems = props?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className='w-full bg-white py-12'>
      <p className='text-[38px] font-bold text-homeblack text-center'>Testimonials</p>
      <div className='xl:w-[75%] mx-auto flex-wrap justify-center mt-8 flex gap-6'>
        {currentItems?.map((item: any, index: number) => (
          <div key={index} className='md:w-[45%] w-[95%] lg:w-[30%] rounded-lg border-[2px] border-lightblue p-6'>
            <div className='flex justify-between mb-4 items-center'>
              <div className='flex gap-2 items-center'>
                <div className='flex justify-center items-center w-[63px] h-[63px] rounded-full'>
                  <Image
                    src={item?.image||'/images/testimonial-user.png'}
                    height={63}
                    width={63}
                    alt={item?.image_alt}
                    className='rounded-full'
                  />
                </div>
                <div>
                  <p className='text-[20px] font-medium text-homeblack'>{item.client_name}</p>
                  <p className='text-homeblack'>{item.date}</p>
                </div>
              </div>
              <div className='flex text-blue text-[20px]'>
                {Array.from({ length: item.rating }, (_, i) => (
                  <TiStar key={i} />
                ))}
              </div>
            </div>
            <div>
              <Image
                src={'/images/uppercoma.svg'}
                height={13}
                width={13}
                alt="Upper Coma"
              />
                <p className='text-[18px] my-2 text-homegrey' dangerouslySetInnerHTML={{ __html: item.description }} />

              <div className='w-full flex justify-end'>
                <Image
                  src={'/images/lovercoma.svg'}
                  height={13}
                  width={13}
                  alt="Lower Coma"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-center mt-12 items-center gap-3'>
          <div
            className={`flex justify-center size-[45px] items-center rounded-full ${currentPage === 1 ? 'bg-pink text-white cursor-not-allowed' : 'bg-grey text-pink cursor-pointer'}`}
            onClick={handlePrevious}
          >
            <FaAngleLeft />
          </div>
          <div className='text-textGrey text-[18px]'>
            {currentPage} of {totalPages}
          </div>
          <div
            className={`flex justify-center size-[45px] items-center rounded-full ${currentPage === totalPages ? 'bg-pink text-white cursor-not-allowed' : 'bg-grey text-pink cursor-pointer'}`}
            onClick={handleNext}
          >
            <FaAngleRight  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
