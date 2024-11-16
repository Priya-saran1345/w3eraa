"use client"

import { useState, useEffect } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { motion, AnimatePresence } from "framer-motion"
import { Useapi } from "@/helpers/apiContext"

export default function Component({ props ,title }: any) {
  const [faqdata, setFaqdata] = useState<any[]>([])
  const { apidata } = Useapi()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
    const result = splitStringByLastWords(
      title,3
    )
    setData(result)
  }, [])

  useEffect(() => {
    setFaqdata(apidata?.marketing_agency || [])
  }, [apidata])

 

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full bg-lightblue py-10 lg:py-16">
      <div className="mx-auto w-full px-4 md:w-[80%] xl:w-[70%]">
        <p className="my-3 text-center  text-[28px] lg:text-[38px] xl:text-[48px] font-bold lg:leading-[54px] text-textPurple ">
          {data.first} <br />
          <span className="text-pink">{data.second}</span>
        </p>

        <div className="mt-14 rounded-2xl bg-white p-4 md:p-16">
          {props?.map((item: any, index: number) => (
            <div key={index} className="flex items-start">
              <span className="mr-10 text-[28px] lg:text-[48px] font-bold text-blue">
                0{index + 1}
              </span>
              <div className="w-full border-b-[1px] border-slate-200 py-4">
                <motion.div
                  className="flex cursor-pointer items-start justify-between rounded-lg bg-white py-3 text-[16px] lg:text-[20px] font-medium text-purple"
                  onClick={() => toggleItem(index)}
                  initial={false}
                >
                  <div className="flex items-start">{item.title}</div>
                  <motion.div
                    className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-lightpink"
                    // animate={{ rotate: openIndex === index ? 45 : 0 }}
                  >
                    {openIndex === index ? (
                      <FaMinus className="text-pink" />
                    ) : (
                      <FaPlus className="text-pink" />
                    )}
                  </motion.div>
                </motion.div>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                     
                        <p className="py-3 pb-6 text-[18px] text-homegrey">{item.description}</p>
                     
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}