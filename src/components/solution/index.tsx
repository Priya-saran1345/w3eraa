"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Slider from "react-slick"
import { Useapi } from "@/helpers/apiContext"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import Button from '@/components/button'
const Solution = () => {
  const [solutionData, setSolutionData] = useState<any>(null)
  const { apidata } = Useapi()

  const [data, setData] = useState({ first: "", second: "" })

  function splitStringByLastWords(text: string, numOfWords: number) {
    const words = text.split(" ")
    
    if (numOfWords >= words.length) {
      return { first: "", second: text }
    }
    
    const splitIndex = words.length - numOfWords
    const firstPart = words.slice(0, splitIndex).join(" ")
    const secondPart = words.slice(splitIndex).join(" ")
    
    return { first: firstPart, second: secondPart }
  }
    
  useEffect(() => {
    const result = splitStringByLastWords(solutionData?.title || "", 4)
    setData(result)
  }, [solutionData])

  useEffect(() => {
    if (apidata && apidata?.achieve_your_goal[0]) {
      setSolutionData(apidata?.achieve_your_goal[0])
    }
  }, [apidata])

  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    slidesToShow: 3.1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }
  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  return (
    <div className="w-full border-t border-slate-100">
      <div className="mx-auto w-full px-4 py-10 md:py-16 xl:w-[75%]">
        <h2 className="mb-4 text-[24px] lg:text-[30px] font-bold leading-tight text-black xl:text-[37px]">
          {data.first} <span className="text-pink">{data.second}</span>
        </h2>
        <p className="mb-8 text-[16px] lg:text-[18px] leading-tight text-muted-foreground">
          {solutionData?.description}
        </p>
        <Slider ref={sliderRef} {...settings} className="flex justify-between  pb-4 gap-7 overflow-x-hidden">
        {solutionData?.cards.map((elem: any, index: number) => (
            <div key={index} className="px-2">
              <div className="flex h-[270px]   max-w-[401px] flex-col justify-between rounded-xl border border-slate-100
               bg-white p-8 transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-between  flex-col">
                  <div  className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-xl bg-lightblue">
                    <Image
                      src={elem.icon}
                      alt=""
                      height={44}
                      width={30}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="mb-3 text-[22px] lg:text-[26px] font-medium leading-[31px] text-foreground">
                    {elem.title}
                  </h3>
                  <p className="text-[16px] lg:text-[18px] leading-[22px] text-muted-foreground">
                    {elem?.description}
                  </p>
                  {/* <div className="mt-4">
                  <Button content={'  Learn more'}/>
                  </div> */}
                  </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex mt-5 justify-end">
          <div className="mr-6 flex gap-3">
            <button
              onClick={prevSlide}
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full
               bg-lightpink text-[24px] text-foreground transition-colors hover:text-white
               hover:bg-pink"
              aria-label="Previous slide">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full
               bg-lightpink text-[24px] text-foreground transition-colors hover:text-white
               hover:bg-pink"
              aria-label="Next slide">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution