'use client'
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import Image from 'next/image';
import data from '@/components/Webdevelopment.json'
import { useState } from 'react';
const IndustriesSection = () => {
    const [expandedIndex, setExpandedIndex] = useState<any >(0);

    const toggleCard = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null: index);
    };

    return (
        <div className="w-full">
            <h2 className="text-center text-[36px] font-bold text-blue my-8">{data?.industries?.title}</h2>
            <p className="text-center text-homegrey text-[18px] lg:text-[20px] w-[90%] lg:w-[75%] mx-auto mb-10">
                {data?.industries?.description}
            </p>
            <div className="w-full mx-auto space-y-8">
            {data?.industries?.cards.map((card: any, index: number) => (
                <div key={index} className="w-full border-b-2 border-grey">
                    <div className="2xl:w-[75%] lg:w-[95%] mx-auto">
                        {/* Header Section */}
                        <div className="w-full flex justify-between mx-auto">
                            <div className="flex justify-start gap-10 items-center">
                                <p className="text-[70px] font-bold  text-blue">{card.index}</p>
                                <p className="text-homeblack text-[20px] font-semibold lg:text-[24px]">
                                    {card.title}
                                </p>
                            </div>
                            <div
                                className="text-pink text-[34px] cursor-pointer"
                                onClick={() => toggleCard(index)}
                            >
                                {expandedIndex === index ? <HiMinus /> : <GoPlus />}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div
                            className={`w-[90%] lg:w-[80%] pb-6 mx-auto flex flex-col lg:flex-row justify-between gap-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                expandedIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="flex flex-col space-y-4">
                                {card.points.map((point: any, i: number) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-1 text-[18px] lg:text-[22px]"
                                    >
                                        <IoCheckmarkDoneOutline />
                                        <p className="text-homegrey">{point}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Image
                                    height={190}
                                    width={351}
                                    src={card.image}
                                    alt={card.title}
                                    className="rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default IndustriesSection;
