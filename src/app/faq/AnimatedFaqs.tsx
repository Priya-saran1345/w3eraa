'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6"
import Header from '@/components/header'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import DownNavbar from '@/components/DownNavbar'

interface FaqItem {
  title: string;
  description: string;
}

interface AnimatedFaqsProps {
  faqData: FaqItem[];
}

export default function AnimatedFaqs({ faqData }: AnimatedFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <div className='w-full'>
      {/* <Header /> */}
      <DownNavbar/>
      <Navbar />
      <div className='flex h-[45vh] w-full items-center justify-center bg-[url("/images/blog-bg.png")] px-4'>
        <h1 className='text-center font-bold text-white'>Frequently Asked Questions</h1>
      </div>
      <div className='mx-auto mb-8 flex w-full flex-wrap bg-lightblue mt-20 rounded-lg justify-between gap-5 px-4 lg:px-10 pt-10 text-white lg:mb-32 md:py-10 xl:w-[95%]  2xl:w-[75%]'>
        {faqData.map((item: FaqItem, index: number) => (
          <motion.div
            key={index}
            className='h-fit w-full rounded-lg bg-white p-7 sm:w-[48%]'
            initial={false}
            transition={{ duration: 0.3 }}
          >
            <div
              className='flex cursor-pointer justify-between'
              onClick={() => handleToggle(index)}
            >
              <p className='text-[20px] text-homeblack font-medium'>{item.title}</p>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <FaArrowUpLong className='transition-transform text-homeblack duration-200' />
                ) : (
                  <FaArrowDownLong className='transition-transform text-homeblack duration-200' />
                )}
              </motion.div>
            </div>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className='py-6 text-[18px] text-homegrey'
                  >
                    <div
                      className='!text-homegrey'
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

