'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6"
import { Useapi } from '@/helpers/apiContext'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Loader from '@/components/loader'

export default function AnimatedFaqs() {
  const { faq } = Useapi()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div>
      {!faq && <Loader />}
      {

    faq &&
      <div className='w-full'>
        <Header />
        <Navbar />
        <div className='flex h-[45vh] w-full items-center justify-center bg-[url("/images/blog-bg.png")] px-4'>
          <p className='text-center text-[32px] font-bold text-white lg:text-[48px]'>Frequently Asked Questions</p>
        </div>
        <div className='mx-auto mb-8 flex w-full flex-wrap bg-lightblue mt-20 rounded-lg justify-between gap-5 px-4 lg:px-10 pt-10 text-white lg:mb-32 md:py-10 xl:w-[75%]'>
          {faq?.map((item: any, index: number) => (
            <motion.div
              key={index}
              className='h-fit w-full rounded-lg bg-white p-7  sm:w-[48%]'
              initial={false}
              // animate={{ backgroundColor: openIndex === index ? "#f0f0f0" : "#e0e0e0" }}
              transition={{ duration: 0.3 }}
            >
              <div
                className='flex cursor-pointer  justify-between'
                onClick={() => handleToggle(index)}
              >
                <p className='text-[20px] text-homeblack font-medium'>{item?.title}</p>
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
                      className='py-6 text-[18px]  text-homegrey'
                    >
<p
    className='!text-homegrey'
    dangerouslySetInnerHTML={{ __html: item?.description }}
  />                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <Footer />
      </div>
       }
    </div>
  )
}