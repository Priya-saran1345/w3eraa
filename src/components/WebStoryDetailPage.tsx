'use client';
import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { RxCross2, RxResume } from "react-icons/rx";
import { RiPauseFill } from "react-icons/ri";
import { GrShareOption } from "react-icons/gr";
import axios from "axios";
import { BASE_URL } from "@/util/api";
import { usePathname, useRouter } from 'next/navigation';
import { motion } from "framer-motion";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname?.replace(/\/$/, '').split('/') || [];
  const lastsegment = segments.pop() || '';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [backgroundAnimationClass, setBackgroundAnimationClass] = useState("slide-up");
  const [stories, setStories] = useState<any[]>([]);
  const [cards, setCards] = useState<any[]>([]);
  const [animationInProgress, setAnimationInProgress] = useState(false); // State to track animation progress

  const fetch = async () => {
    const newCard = {
      title: "Follow us for expert insights and stay ahead in the world of Digital Marketing.",
      description: "Visit: www.w3era.com \n Contact: +91-7073197281",
      image: "/images/w3erapic.png" // Optionally set a background image for this card
    };

    try {
      if (lastsegment) {
        const response = await axios.get(`${BASE_URL}web-story/${lastsegment}/`);
        if (response.data) {
          setStories([response.data]);
        }
      }
    } catch (error: any) {
      console.log('Error:', error.message);
    }
  };

  useEffect(() => {
    fetch();
  }, [lastsegment]);

  useEffect(() => {
    if (stories.length > 0) {
      const storyIndex = stories.findIndex(
        story => story.id === parseInt(lastsegment) || story.slug === lastsegment
      );
      if (storyIndex !== -1) {
        const originalCards = stories[storyIndex].card || [];

        // Append a new card to the end of the original cards
        const newCard = {
          title: "Follow us for expert insights and stay ahead in the world of Digital Marketing.",
          description: "Visit: www.w3era.com \n Contact: +91-7073197281",
          image: "/images/w3erapic.png" // Optionally set a background image for this card
        };


        setCards([...originalCards, newCard]);
      }
    }
  }, [stories, lastsegment]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused && cards.length > 0) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused, currentIndex, cards]);

  const handleNext = () => {
    if (animationInProgress) return; // Prevent animation if one is in progress

    setAnimationInProgress(true); // Start animation
    setBackgroundAnimationClass("slide-up");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
      resetAnimations();
    }, 500);
  };

  const handlePrev = () => {
    if (animationInProgress) return; // Prevent animation if one is in progress

    setAnimationInProgress(true); // Start animation
    setBackgroundAnimationClass("slide-up");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
      resetAnimations();
    }, 500);
  };

  const resetAnimations = () => {
    setBackgroundAnimationClass("slide-up");
    setAnimationInProgress(false); // Animation done
  };
  return (
    <div className="relative w-full h-[100vh]">
      {/* Background overlay with blur using motion for animation */}
      <motion.div
        className="absolute inset-0 bg-black backdrop-blur-lg z-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${cards[currentIndex]?.image || ''})`,
          filter: 'blur(80px)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
      </motion.div>
      {/* Main content */}
      <div className="relative   w-full flex justify-center items-center h-[100vh] z-10">
        <div className="flex relative items-center px-2 justify-center  gap-2 md:gap-5">
          <div className="absolute top-3 left-1/2 z-50 transform -translate-x-1/2 w-full md:w-[74%] lg:w-[75%] px-4">
            <div className="flex gap-1">
              {cards.map((_, index: number) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full ${index <= currentIndex ? "bg-green-500" : "bg-gray-300"}`}
                  style={{ transition: "width 0.3s ease" }}
                />
              ))}
            </div>
          </div>
          {/* Previous button */}
          <motion.div
            className={`bg-white hidden sm:flex min-w-[34px] lg:min-w-[44px] text-[18px] lg:text-[24px]  justify-center items-center min-h-[34px] lg:min-h-[44px] rounded-full cursor-pointer ${currentIndex === 0 || animationInProgress ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={currentIndex > 0 && !animationInProgress ? handlePrev : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BsArrowLeft />
          </motion.div>
          <motion.div
            key={currentIndex} // Add key to trigger re-render with animation on index change
            className="bg-white min-w-[350px] md:min-w-[450px] lg:min-w-[440px]   bg-center bg-contain bg-no-repeat  relative rounded-xl h-[80vh] lg:h-[650px] p-5 z-20"
            style={{ backgroundImage: `url(${cards[currentIndex]?.image || ''})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {cards.length > 0 && (
              <div className="w-2/3 bg-black/50 p-4 absolute bottom-4 left-[15%] text-center mx-auto rounded-lg">
                <motion.p
                  className="text-white text-[18px] lg:text-[26px] leading-tight font-semibold text-center"
                  dangerouslySetInnerHTML={{ __html: cards[currentIndex]?.title }}
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
                <motion.p
                  className="transition-opacity mt-2 text-[14px] lg:text-[18px] font-medium text-white duration-500"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  dangerouslySetInnerHTML={{
                    __html: cards[currentIndex]?.description.replace(/\n/g, '<br>').replace('www.w3era.com', '<a href="/">www.w3era.com</a>')
                  }}
                />
              </div>
            )}
            <div className="absolute w-full flex justify-between top-6 px-4 left-0">
              <div className="text-[24px] p-[2px] hover:bg-blue hover:text-pink duration-100 rounded-sm cursor-pointer" onClick={() => router.push("/web-stories")}>
                <RxCross2 />
              </div>
              <div className="text-[18px] lg:text-[24px] flex gap-4">
                <div className="cursor-pointer p-[2px] hover:bg-blue hover:text-pink rounded-sm" onClick={() => setIsPaused(!isPaused)}>
                  {isPaused ? <RxResume /> : <RiPauseFill />}
                </div>
                <div className="p-[2px] hover:bg-blue hover:text-pink rounded-sm">
                  <GrShareOption />
                </div>
              </div>
            </div>
          </motion.div>
          {/* Next button */}
          <motion.div
            className={`bg-white hidden sm:flex justify-center text-[18px] lg:text-[24px] items-center min-w-[34px] lg:min-w-[44px] min-h-[34px] lg:min-h-[44px] rounded-full cursor-pointer ${currentIndex === cards.length - 1 || animationInProgress ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={currentIndex < cards.length - 1 && !animationInProgress ? handleNext : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <BsArrowRight />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
