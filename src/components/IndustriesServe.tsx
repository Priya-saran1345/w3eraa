'use client';

import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import Image from 'next/image';
import data from '@/components/Webdevelopment.json';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const IndustriesSection = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (imageRef.current) {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - rect.left - imageRef.current.offsetWidth / 2;
            const y = event.clientY - rect.top - imageRef.current.offsetHeight / 2;
            setMousePosition({ x, y });
        }
    };

    const toggleCard = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    useEffect(() => {
        const handleMouseLeave = () => {
            setMousePosition({ x: 0, y: 0 });
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="w-full" >
            <h2 className="text-center text-[36px] font-bold text-blue my-8">{data?.industries?.title}</h2>
            <p className="text-center text-homegrey  text-[18px] lg:text-[20px] w-full md:w-[80%] lg:w-[75%] 2xl:w-[55%] mx-auto mb-10">
                {data?.industries?.description}
            </p>
            <div className="w-full mx-auto">
                {data?.industries?.cards.map((card: any, index: number) => (
                    <div
                        key={index}
                        className="w-full  border-b-2 border-grey"
                        onMouseEnter={() => toggleCard(index)}
                        onMouseMove={handleMouseMove}
                    >
                        <div className="2xl:w-[75%] relative lg:w-[95%] mx-auto">
                            {/* Header Section */}
                            <div className="w-full flex justify-between items-center mx-auto">
                                <div className="flex justify-start gap-10 items-center">
                                    <p className="text-[70px] font-bold text-blue">{card.index}</p>
                                    <p className="text-homeblack text-[20px] font-semibold lg:text-[24px]">
                                        {card.title}
                                    </p>
                                </div>
                                <div className="text-pink text-[34px]">
                                    {expandedIndex === index ? <HiMinus /> : <GoPlus />}
                                </div>
                            </div>

                            {/* Content Section */}
                            <motion.div
                                className="w-[90%] lg:w-[80%] pb-6 mx-auto flex flex-col lg:flex-row justify-between gap-6 overflow-hidden"
                                initial={{ maxHeight: 0, opacity: 0 }}
                                animate={
                                    expandedIndex === index
                                        ? { maxHeight: 500, opacity: 1 }
                                        : { maxHeight: 0, opacity: 0 }
                                }
                                transition={{
                                    maxHeight: { duration: 0.6, ease: 'easeInOut' },
                                    opacity: { duration: 0.4, ease: 'easeInOut' },
                                }}
                            >
                                <div className="flex flex-col space-y-1">
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
                                <div
                                    ref={imageRef}
                                    className="absolute top-0 transition-transform duration-200 ease-out"
                                    style={{
                                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                                    }}
                                >
                                    <Image
                                        height={190}
                                        width={351}
                                        src={card.image}
                                        alt={card.title}
                                        className="rounded-md"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustriesSection;
