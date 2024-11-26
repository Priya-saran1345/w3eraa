import React, { useState, useRef } from 'react';
import { CiPlay1 } from 'react-icons/ci';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const Index = ({ props }: any) => {
  const [active, setActive] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(props?.length / itemsPerPage);

  // UseRef should be inside the component function
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Scroll to the section
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Align to the start of the section
      });
    }
  };
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll to the section
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Align to the start of the section
      });
    }
  };

  const getEmbedUrl = (url: string) => {
    // Convert standard YouTube URL to embed format if needed
    const urlParts = url.split("v=");
    return urlParts.length > 1 ? `https://www.youtube.com/embed/${urlParts[1]}` : url;
  };

  const currentItems = props?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="w-full bg-lightblue py-12 " ref={sectionRef}>
      <div className="w-full px-4 xl:w-[70%] mx-auto">
      <div className="flex flex-wrap justify-center gap-8 items-center mt-12">
      {currentItems?.map((cardData: any, index: number) => (
        <div
        key={index}
        className="min-h-[535px] rounded-xl w-[350px] sm:w-[47%] lg:w-[31%] bg-white overflow-hidden flex flex-col"
      >
        {/* Toggle YouTube Video or Image */}
        {active === index && cardData.video ? (
          <div className="max-h-[317px] w-full">
            <ReactPlayer
              url={cardData?.video}
              controls
              playing={true} // This will automatically start playing when the video is loaded
              autoplay={true} // Ensures the video starts automatically
              className="w-full max-h-[317px]"
              onClick={() => setActive(null)}
            />
          </div>
        ) : (
          <div
            className="h-[317px] w-full relative cursor-pointer"
            onClick={() => setActive(index)}
          >
            <div className="relative min-h-[317px] w-[404px] bg-cover">
              <div className="h-full w-full">
                <Image
                  src={cardData?.thumbnail || "/images/slient-says-card.png"}
                  height={317}
                  width={404}
                  alt={cardData?.thumbnail_alt||cardData.description}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black flex flex-col justify-between h-full p-4">
                <div className="flex flex-col justify-center items-center py-20">
                  <div className="bg-pink w-[53px] h-[53px] flex justify-center items-center rounded-full">
                    <CiPlay1 className="text-[28px] text-white" />
                  </div>
                </div>
                <div className="text-left border-l-2 border-pink px-4">
                  <p className="text-white/80 text-[15px] uppercase">
                    customer story
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col justify-between flex-grow p-4">
          <div className="m-2 flex flex-col -gap-2">
            <Image
              src={"/images/uppercoma.svg"}
              height={18}
              width={18}
              alt="Upper Coma"
            />
            <p className=" text-[20px] lg:text-[24px] 2xl:text-[26px] text-center font-semibold text-homeblack">
              {cardData.description ||
                "Professionals at W3Era are incredible. Simply dummy text of the printing."}
            </p>
            <div className="flex w-full justify-end">
              <Image
                src={"/images/lovercoma.svg"}
                height={18}
                width={18}
                alt="Lower Coma"
              />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex justify-center w-full mt-auto">
            <div className="flex flex-col mb-4 items-center gap-2">
              <p className="text-[26px] lg:text-[30px] font-semibold text-blue text-center">
                {cardData?.card1_title}
              </p>
              <p className="text-center text-homegrey text-[16px]">
                {cardData?.card1_content}
              </p>
            </div>
            <div className="w-[2px] min-h-full mx-2 bg-pink"></div>
            <div className="flex flex-col pb-4 items-center gap-2">
              <p className="text-[26px] lg:text-[30px] font-semibold text-blue text-center">
                {cardData?.card2_title}
              </p>
              <p className="text-center text-homegrey text-[16px]">
                {cardData?.card2_content}
              </p>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
        {/* Pagination Controls */}
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
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
