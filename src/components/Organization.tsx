'use client'
import React, { useState } from "react";
import data from "@/components/Webdevelopment.json";
import ClientsCount from '@/components/ClientsCount';
import Link from 'next/link';
import Button from '@/components/button';
import Image from 'next/image';

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const Organization = () => {
    const { title, description, cards } = data.organization;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="py-20">
            <div className="lg:w-[95%] flex flex-wrap justify-center  lg:flex-nowrap lg:justify-between 2xl:w-[75%] mx-auto px-4">
                <div className="w-full text-center lg:text-left sm:w-[85%] md:w-[65%]  lg:w-[40%]">
                    <h2 className="leading-[44px] font-bold text-homeblack">{title}</h2>
                    <p className="text-gray-600 mt-4 text-lg">{description}</p>
                    <div className="flex flex-col lg:w-[200px] mt-4 items-center gap-2">
                        <div>
                            <Link href="/contact-us">
                                <Button content={`Contact US`} />
                            </Link>
                        </div>
                        <ClientsCount />
                    </div>
                </div>
                {/* Slider */}
                <div className="lg:w-1/2 flex items-center justify-center">
                    <div className="">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex} // Ensures animation happens when `currentIndex` changes
                                initial={{ opacity: 0, x: 100 }} // Start position for incoming slide
                                animate={{ opacity: 1, x: 0 }} // End position for the current slide
                                exit={{ opacity: 0, x: -100 }} // Exit position for outgoing slide
                                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                                className="w-full bg-white rounded-lg shadow-lg p-6 "
                            >
                                {/* Company Info */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-blue">
                                        {cards[currentIndex].company}
                                    </h3>
                                    <Image
                                        width={149}
                                        height={45}
                                        src={cards[currentIndex].logo}
                                        alt={`${cards[currentIndex].company} Logo`}
                                    />
                                </div>
                                <div className="pb-5 w-full">
                                    <h3 className="text-2xl font-bold text-homeblack">
                                        Technologies Used:
                                    </h3>
                                </div>
                                {/* Technologies */}
                                <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center sm:justify-between mb-4">
                                    {cards[currentIndex].technologies.map((tech: any, index: any) => (
                                        <div
                                            key={index}
                                            className="flex bg-lightblue py-2 px-4 w-[47%] sm:w-1/3 rounded-lg justify-around gap-5 items-center text-gray-600"
                                        >
                                            <Image
                                                width={37}
                                                height={40}
                                                src={tech.image}
                                                alt={tech.name}
                                            />
                                            <span className="text-[16px] text-blue font-medium">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pb-2 w-full">
                                    <h3 className="text-2xl font-bold text-homeblack">
                                        Impact:
                                    </h3>
                                </div>
                                {/* Impact */}
                                <p className="text-homegrey w-[80%]">
                                    {cards[currentIndex].impact}
                                </p>
                                <div className="w-full justify-center flex mt-4 gap-4">
                                    <button
                                        className=""
                                        onClick={prevSlide}
                                    >
                                        <GoArrowLeft className="text-[30px] hover:text-pink text-homeblack" />
                                    </button>
                                    <button
                                        className=""
                                        onClick={nextSlide}
                                    >
                                        <GoArrowRight className="text-[30px] hover:text-pink text-homeblack" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organization;
