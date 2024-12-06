'use client'
import React, { useRef } from 'react';
import data from '@/components/Webdevelopment.json';
import Image from 'next/image';
import Button from '@/components/button';
import Link from 'next/link';
import ClientsCount from '@/components/ClientsCount';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const Service = () => {
    const sliderRef = useRef<Slider | null>(null);

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    // Function to go to a specific slide
    // const goToSlide = (index: number) => {
    //     sliderRef.current?.slickGoTo(index);
    // };
    // Function for next/previous buttons
    const nextSlide = () => sliderRef.current?.slickNext();
    const prevSlide = () => sliderRef.current?.slickPrev();

    const goToSlide = (index: number) => {
        sliderRef.current?.slickGoTo(index);
        const sliderElement = document.querySelector(".slidehere");
        sliderElement?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <div className="2xl:w-[75%] px-4 mx-auto lg:w-[90%] py-12">
                <h2 className="text-center text-3xl lg:text-4xl font-bold text-homeblack mb-8">
                    {data.service.title}
                </h2>
                <p className="text-center text-homegrey text-[16px] lg:text-[18px] md:w-[80%] mx-auto mb-12">
                    {data.service.description}
                </p>
                <div className="w-full gap-5 justify-center my-8 flex flex-wrap">
                    {data.service.services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => goToSlide(index)} // Go to the corresponding slide
                            className="flex justify-center h-[214px] w-[214px] border-grey group border-2 items-center flex-col gap-3 hover:bg-blue rounded-lg hover:text-white text-blue bg-white duration-300 cursor-pointer"
                        >
                            <Image
                                src={service.icon}
                                height={60}
                                width={60}
                                alt="web development process"
                                className="group-hover:filter group-hover:brightness-0 group-hover:invert"
                            />
                            <p className="text-center text-[18px] font-medium">{service.icon_title}</p>
                        </div>
                    ))}
                    <div className="flex xl:w-[31%] slidehere flex-col mt-8 justify-center items-center gap-2">
                        <div>
                            <Link href="/contact-us">
                                <Button content={`Let's Discuss Your Project`} />
                            </Link>
                        </div>
                        <ClientsCount />
                    </div>
                </div>
            </div>
            <div className="bg-lightblue  py-8">
                <div className="2xl:w-[75%] mx-auto px-4 lg:w-[90%]">
                    <Slider ref={sliderRef} {...settings}>
                        {data.service.services.map((service, index) => (
                            <div key={index}>
                                <div>
                                    <div className='flex border-b-[2px] pb-5 border-blue justify-between w-full'>
                                        <p className="text-[38px] text-homeblack font-bold">{service.title}</p>
                                        <div className="flex justify-center gap-3">
                                            <button
                                                onClick={prevSlide}
                                                className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-lightpink text-[24px] text-foreground transition-colors hover:text-white hover:bg-pink"
                                                aria-label="Previous slide"
                                            >
                                                <GoArrowLeft 
                                                className="h-6 w-6" />
                                            </button>
                                            <button
                                                onClick={nextSlide}
                                                className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-lightpink text-[24px] text-foreground transition-colors hover:text-white hover:bg-pink"
                                                aria-label="Next slide"
                                            >
                                                <GoArrowRight className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div>
                                            <p className="text-[20px] text-homegrey">{service.description}</p>
                                            <p className="text-[22px] mt-3 font-semibold lg:text-[24px] text-homeblack">
                                                {service.subtitle}
                                            </p>
                                            <div>
                                                {service.pionts.map((point: any, i: any) => (
                                                    <div key={i} className="flex items-center gap-1 text-[17px]">
                                                        <IoCheckmarkDoneOutline className="text-blue" />
                                                        <p className="text-homeblack font-semibold">{point.title}</p>
                                                        <p className="text-homegrey">{point.descritpion}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex w-[245px] flex-col mt-4   items-center gap-2">
                                                <div>
                                                    <Link href="/contact-us">
                                                        <Button content="Get a Quote Now!" />
                                                    </Link>
                                                </div>
                                                <ClientsCount />
                                            </div>
                                        </div>
                                        <div   className='hidden lg:flex '
                                        >

                                        <Image
                                            src={service.image}
                                            height={407}
                                            width={557}
                                            alt="web development process"
                                            />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </>
    );
};

export default Service;
