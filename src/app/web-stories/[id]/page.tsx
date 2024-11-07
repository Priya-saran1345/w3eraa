"use client";
import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { RxCross2, RxResume } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { RiPauseFill } from "react-icons/ri";
import { GrShareOption } from "react-icons/gr";

const stories = [
  {
    id: 1,
    title: "Cognitive SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae, amet aliquam harum possimus vero iusto ipsa.",
    imageUrl: "/images/story.png",
  },
  {
    id: 2,
    title: "Another Story",
    description:
      "Nesciunt beatae, amet aliquam harum possimus vero iusto ipsa. Neque, sequi quos.",
    imageUrl: "/images/story.png",
  },
  {
    id: 3,
    title: "Another Story",
    description:
      "Nesciunt beatae, amet aliquam harum possimus vero iusto ipsa. Neque, sequi quos.",
    imageUrl: "/images/story.png",
  },
  {
    id: 4,
    title: "Another Story",
    description:
      "Nesciunt beatae, amet aliquam harum possimus vero iusto ipsa. Neque, sequi quos.",
    imageUrl: "/images/story.png",
  },{
    id: 5,
    title: "Another Story",
    description:
      "Nesciunt beatae, amet aliquam harum possimus vero iusto ipsa. Neque, sequi quos.",
    imageUrl: "/images/story.png",
  },{
    id: 6,
    title: "Another Story",
    description:
      "Nesciunt beatae, amet aliquam harum possimus vero iusto ipsa. Neque, sequi quos.",
    imageUrl: "/images/story.png",
  },
  // Add more stories as needed
];

const Page = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [backgroundAnimationClass, setBackgroundAnimationClass] = useState("slide-up");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused && stories.length > 0) {
      interval = setInterval(() => {
        handleNext(); // Automatically go to the next story
      }, 3000); // Change stories every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setBackgroundAnimationClass("slide-up");

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < stories.length - 1 ? prevIndex + 1 : 0
      );
      resetAnimations();
    }, 500); // Allow fade-out to complete before changing story
  };

  const handlePrev = () => {
    setBackgroundAnimationClass("slide-up");

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : stories.length - 1
      );
      resetAnimations();
    }, 500); // Allow fade-out to complete before changing story
  };

  const resetAnimations = () => {
    setBackgroundAnimationClass("slide-up");
  };

  return (
    <div className="w-full flex justify-center items-center h-[100vh] bg-black/80">
      <div className="flex relative items-center px-2 justify-center gap-2 md:gap-5">
        {/* Progress Bar */}
        <div className="absolute top-3 left-1/2 z-50 transform -translate-x-1/2 w-[78%] px-4 ">
          <div className="flex gap-1">
            {stories.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full ${
                  index <= currentIndex ? "bg-green-500" : "bg-gray-300"
                }`}
                style={{
                  transition: "width 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <div
          className={`bg-white min-w-[34px] lg:min-w-[44px] text-[24px] flex justify-center items-center min-h-[34px] lg:min-h-[44px] rounded-full cursor-pointer ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={currentIndex > 0 ? handlePrev : undefined}
        >
          <BsArrowLeft />
        </div>
        {/* Main Content */}
        <div className="bg-lightpink relative rounded-xl h-[90vh] bg-no-repeat bg-center lg:h-[650px] lg:w-[450px] p-5">
          {/* Pink Background at the Bottom */}
          <div
            className={`w-full absolute bottom-0 left-0 right-0 rounded-b-xl rounded-t-full min-h-[250px] bg-lightblue`}
          >
            <div className="w-2/3 bg-black/20 p-4 absolute bottom-4 left-[15%] text-center mx-auto rounded-lg">
              <p className={`text-homeblack text-[28px] font-semibold text-center`}>
                {stories[currentIndex].title}
              </p>
              <p className={`transition-opacity duration-500`}>
                {stories[currentIndex].description}
              </p>
            </div>
          </div>
          {/* Close Button */}
          <div className="absolute w-full flex justify-between top-6 px-4 left-0">
            <div
              className="text-[24px] cursor-pointer"
              onClick={() => router.push("/web-stories")}
            >
              <RxCross2 />
            </div>
            <div className="text-[24px] flex gap-4">
              <div
                className="cursor-pointer"
                onClick={() => setIsPaused(!isPaused)}
              >
                {isPaused ? <RxResume /> : <RiPauseFill />}
              </div>
              <div>
                <GrShareOption />
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <div
          className={`bg-white flex justify-center text-[24px] items-center min-w-[34px] lg:min-w-[44px] min-h-[34px] lg:min-h-[44px] rounded-full cursor-pointer ${
            currentIndex === stories.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={currentIndex < stories.length - 1 ? handleNext : undefined}
        >
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Page;
