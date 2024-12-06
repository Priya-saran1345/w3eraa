'use client'
import React, { useState } from 'react';
import data from '@/components/Webdevelopment.json';
import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OurProcess = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="w-full py-10 px-4 lg:px-20">
            <h2 className="text-center text-3xl lg:text-4xl font-bold text-homeblack mb-8">
                Our Process
            </h2>
            <p className="text-center text-homegrey text-lg lg:text-xl max-w-2xl mx-auto mb-12">
                At W3era, we follow a streamlined process to deliver exceptional web development solutions.
            </p>
            <div className=" lg:w-[90%] w-full mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between  2xl:w-[75%]  gap-8">
                {/* Left Accordion Section */}
                <div className=" lg:w-[40%]">
                    {data.ourprocess.map((step, index) => (
                        <div key={index} className="border-y-[1px] border-grey  overflow-hidden">
                            <div
                                className="p-5 bg-blue-50 flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className=" text-[18px] lg:text-[20px] font-semibold text-homeblack">{step.title}</h3>
                                <span className="text-blue-500 text-xl">
                                    {activeIndex === index ? <IoChevronDownSharp className='text-pink' /> : <IoChevronUpSharp />
                                    }
                                </span>
                            </div>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
                                    animate={
                                        activeIndex === index
                                            ? { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }
                                            : { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }
                                    }
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="p-4 pt-0 bg-white text-[18px] text-gray-600 overflow-hidden"
                                    style={{ willChange: 'clip-path, opacity' }}
                                >
                                    {step.description}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Right Circular Workflow Section */}
                <div className=" hidden md:flex justify-center items-center">
                    <Image src={'/images/webProcess.png'} height={534} width={649} alt='web development process'></Image>

                </div>
            </div>
        </div>
    );
};

export default OurProcess;
