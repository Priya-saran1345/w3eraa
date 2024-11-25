"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";
import ReactPlayer from "react-player";

export default function Data({ props }: any) {
  const [active, setActive] = useState<number | null>(null);
  const [heading, setheading] = useState({ first: "", second: "" });

  function splitStringByLastWords(text: any, numOfWords: number) {
    const words = text.split(" "); // Split the string by spaces to get individual words

    if (numOfWords >= words.length) {
      return { first: "", second: text };
    }

    const splitIndex = words.length - numOfWords;
    const firstPart = words.slice(0, splitIndex).join(" ");
    const secondPart = words.slice(splitIndex).join(" ");

    return { first: firstPart, second: secondPart };
  }

  useEffect(() => {
    const result = splitStringByLastWords(props?.title || "", 3);
    setheading(result);
  }, [props]);

  return (
    <div className="w-full bg-lightblue py-12">
      <div className="w-full px-4 xl:w-[75%] mx-auto">
        <div className="md:w-[60%] mx-auto text-center">
          {/* Title */}
          <h2 className="font-bold text-homeblack mt-4 text-center leading-tight">
            {heading.first} <span className="text-pink">{heading.second}</span>
          </h2>
          {/* Description */}
          <div
            className="text-[16px] lg:text-[18px] text-homegrey mt-4 text-center lg:leading-tight"
            dangerouslySetInnerHTML={{ __html: props?.description || "" }}
          ></div>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 items-center mt-12">
          {props?.cards?.map((cardprops: any, index: number) => (
            <div
              key={index}
              className="min-h-[535px] rounded-xl w-[350px] sm:w-[404px] bg-white overflow-hidden flex flex-col"
            >
              {/* Toggle YouTube Video or Image */}
              {active === index && cardprops.video ? (
                <div className="max-h-[317px] w-full">
                  <ReactPlayer
                    url={cardprops?.video}
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
                        src={cardprops?.thumbnail || "/images/slient-says-card.png"}
                        height={317}
                        width={404}
                        alt={cardprops?.thumbnail_alt}
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
                  <p className=" text-[20px] xl:text-[24px] 2xl:text-[26px] text-center font-semibold text-homeblack">
                    {cardprops.description ||
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
                      {cardprops?.card1_title}
                    </p>
                    <p className="text-center text-homegrey text-[16px]">
                      {cardprops?.card1_content}
                    </p>
                  </div>
                  <div className="w-[2px] min-h-full mx-2 bg-pink"></div>
                  <div className="flex flex-col pb-4 items-center gap-2">
                    <p className="text-[26px] lg:text-[30px] font-semibold text-blue text-center">
                      {cardprops?.card2_title}
                    </p>
                    <p className="text-center text-homegrey text-[16px]">
                      {cardprops?.card2_content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
