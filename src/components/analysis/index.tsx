"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Analysis = ({ cards, description }: any) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Function to handle scroll to card
  const scrollToCard = (index: number) => {
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const contentData = [
    {
      title: "Lorem text 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      subTitle: "Lorem text 1",
      stats: [
        { value: "$52 Million", label: "Lorem Ipsum" },
        { value: "$34 Million", label: "Lorem Ipsum" },
        { value: "$10 Million", label: "Lorem Ipsum" }
      ]
    },
    {
      title: "Lorem text 2",
      description: "Another text for Lorem Ipsum. It is simply dummy text used in typesetting and printing.",
      subTitle: "Lorem text 2",
      stats: [
        { value: "$70 Million", label: "Lorem Ipsum" },
        { value: "$21 Million", label: "Lorem Ipsum" },
        { value: "$8 Million", label: "Lorem Ipsum" }
      ]
    },
    {
      title: "Lorem text 3",
      description: "More dummy text that changes with the arrow click or button clicks at the bottom.",
      subTitle: "Lorem text 3",
      stats: [
        { value: "$80 Million", label: "Lorem Ipsum" },
        { value: "$12 Million", label: "Lorem Ipsum" },
        { value: "$5 Million", label: "Lorem Ipsum" }
      ]
    }
  ];

  const handleArrowClick = (direction: string) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex:any) => (prevIndex === 0 ? contentData.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex:any) => (prevIndex === contentData.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleBottomButtonClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className='w-full xl:w-[75%] mx-auto relative bg-white px-4'>
      <div className='w-full bg-purple mb-20 py-4 px-7 sticky top-16 left-0 rounded-lg hidden lg:block'>
        <ul className='text-white justify-center text-[16px] gap-3 flex '>
          {cards?.map((elem: any, index: number) => (
            <li
              key={index}
              className='hover:text-pink cursor-pointer'
              onClick={() => scrollToCard(index)}
            >
              {elem?.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className='md:w-[80%] mx-auto'>
          <p
            className="text-[18px] md:text-[22px] text-center leading-tight"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
      {cards?.map((elem: any, index: number) => (
        <div
          key={index}
          ref={(el) => {
            cardRefs.current[index] = el; // Assign ref without returning anything
          }}
          className='w-full my-6 rounded-xl hover:bg-grey px-4 py-4 md:px-10 md:py-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-5'
        >
          <div className='sm:w-[70%] lg:w-[47%] flex gap-4 flex-col text-center sm:text-left text-black'>
            <p className='text-[28px] lg:text-[38px] font-bold'>{elem.title}</p>
            <p className='text-[20px] lg:text-[24px] font-medium'>{elem.subtitle}</p>
            <p
              className="text-[18px] lg:text-[19px]"
              dangerouslySetInnerHTML={{ __html: elem.description }}
            />
          </div>
          <div>
            <Image
              src={elem.image || '/images/analysis1.png'}
              height={338}
              width={594}
              alt=''
              className='w-[280px] lg:w-[594px]'
            />
          </div>
        </div>
      ))}
         

         <div className='py-16 w-full'>
      <div className='flex lg:flex-row flex-col items-center gap-2 justify-between'>
        <div>
          <div className=' h-fit lg:h-[494px] rounded-2xl max-w-[553px] bg-[url("/images/footer-bg.png")]'>
            <div className='text-white  h-full flex flex-col justify-end p-8 rounded-2xl  bg-[url("/images/casestudy-bg.png")]'>
              <p className='text-[22px] lg:text-[32px] font-bold'>{contentData[currentIndex].title}</p>
              <p>{contentData[currentIndex].description}</p>
              <p className='mt-3 text-[24px] font-semibold'>{contentData[currentIndex].subTitle}</p>
              <div className='flex justify-start gap-6'>
                {contentData[currentIndex].stats.map((stat, index) => (
                  <div key={index}>
                    <p className='text-[24px] font-semibold'>{stat.value}</p>
                    <p className='text-[14px]'>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=' hidden lg:flex ml-4 font-bold mt-4 gap-3 text-[28px]'>
            <SlArrowLeft onClick={() => handleArrowClick('left')} className='cursor-pointer hover:text-pink' />
            <SlArrowRight onClick={() => handleArrowClick('right')} className='cursor-pointer hover:text-pink' />
      </div>
        </div>
        <div className='lg:w-[876px]'> {/* Fixed width applied here */}
          <div className='bg-grey rounded-2xl h-fit lg:h-[494px] p-8'>
            <p className='text-[20px] font-bold text-black mb-3 lg:text-[32px]'>{contentData[currentIndex].subTitle}</p>
            <p className='text-[18px] leading-[21px]'>{contentData[currentIndex].description}</p>
            <div className='flex gap-3 mt-5'>
              <div className='rounded-full size-[74px] flex justify-center items-center'>
                <Image src={''} height={34} width={56} alt='' className='rounded-lg' />
              </div>
              <div>
                <p className='text-[20px] font-semibold'>{contentData[currentIndex].subTitle}</p>
                <p>Lorem Ipsum is simply</p>
              </div>
            </div>
          </div>
          <div className='bg-grey mt-2 w-fit p-2 rounded-md hidden lg:flex gap-6'>
            {contentData.map((_, index) => (
              <p
                key={index}
                onClick={() => handleBottomButtonClick(index)}
                className={`text-homegrey font-medium cursor-pointer ${index === currentIndex ? 'text-pink' : ''}`} >
                Lorem
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className='flex gap-3 lg:hidden'>
      <div className='flex ml-4 font-bold mt-4 gap-3 text-[28px]'>
            <SlArrowLeft onClick={() => handleArrowClick('left')} className='cursor-pointer hover:text-pink' />
            <SlArrowRight onClick={() => handleArrowClick('right')} className='cursor-pointer hover:text-pink' />
      </div>
      <div className='bg-grey mt-2 w-fit p-2 rounded-md flex gap-6'>
            {contentData.map((_, index) => (
              <p
                key={index}
                onClick={() => handleBottomButtonClick(index)}
                className={`text-homegrey font-medium cursor-pointer ${index === currentIndex ? 'text-pink' : ''}`} >
                Lorem
              </p>
            ))}
      </div>


      </div>
    </div>
 
    </div>
  );
}

export default Analysis;
