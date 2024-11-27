'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'
import {useRouter} from 'next/navigation'
export default function Component({ props }: any) {
  const [data, setData] = useState({ first: '', second: '' })
  const [expandedTitle, setExpandedTitle] = useState<number | null>(null)
  const [expandedSummary, setExpandedSummary] = useState<number | null>(null)
  const Router = useRouter()
  // Split string into two parts, with the second part consisting of the last few words
  function splitStringByLastWords(text: string, numOfWords: number) {
    const words = text.split(' ')
    if (numOfWords >= words.length) {
      return { first: '', second: text }
    }
    const splitIndex = words.length - numOfWords
    const firstPart = words.slice(0, splitIndex).join(' ')
    const secondPart = words.slice(splitIndex).join(' ')
    return { first: firstPart, second: secondPart }
  }

  // Truncate text by a specific character limit
  function truncateText(text: string, limit: number) {
    if (text.length > limit) {
      return text.substring(0, limit) + '...'
    }
    return text
  }

  useEffect(() => {
    const result = splitStringByLastWords('Our Latest Blogs', 2)
    setData(result)
  }, [])

  return (
    <div className="w-full px-4 mx-auto py-10 lg:py-16 xl:w-[95%]  2xl:w-[75%]">
      <h2 className="  text-homeblack font-bold text-center my-4">
        {data.first} <span className="text-pink">{data.second}</span>
      </h2>
      <p className="text-homegrey text-[16px] lg:text-[18px] text-center">
        Dive into our latest blogs to keep up with the newest trends, insights, and tips in the digital marketing world.
      </p>
      <div className="flex justify-center flex-wrap lg:flex-nowrap mt-12 gap-7">
        {props?.slice(0, 3).map((elem: any, i: number) => (
          <div key={i} className="relative border-[2px] border-lightblue hover:shadow-xl duration-300 w-[461px] pb-2 rounded-lg">
            <div className="bg-pink absolute top-3 left-3 text-white text-[17px] font-medium rounded-lg py-1 px-4">
              {elem?.blog_date ? (() => {
                const date = new Date(elem.blog_date);
                const day = String(date.getDate()).padStart(2, '0'); // Get day with leading zero
                const month = date.toLocaleString('en-US', { month: 'short' }); // Get abbreviated month
                const year = date.getFullYear(); // Get year
                return `${day} ${month}, ${year}`; // Format as "06 Nov, 2024"
              })() : ''}            </div>
            <div className="text-blue font-medium px-3 py-1 w-fit absolute top-3 right-3 rounded-md bg-lightblue">
              <Link href={`/blog/category/${elem?.category?.category_slug}`}>
                <span>{elem?.category?.name || 'Uncategorized'}</span>
              </Link>{' '}
              {/* | &nbsp;<span>Latest</span> */}
            </div>
            <div>
              <Image src={elem?.image || '/images/blog1.png'} alt={elem?.image_alt || elem?.title}
                height={218} width={461} className="rounded-lg max-h-[218px]" />
            </div>
            <div className="p-4 flex flex-col  gap-3 justify-between">
              <p className="font-bold text-center sm:text-left text-homeblack text-[20px] lg:text-[24px] leading-tight cursor-pointer"
               onClick={() => setExpandedTitle(expandedTitle === i ? null : i)}>
                {expandedTitle === i ? elem?.title : truncateText(elem?.title, 30)} {/* Truncate title to 30 characters */}
              </p>
              <p className="text-homegrey text-center sm:text-left leading-[21px] text-[16px] lg:text-[18px] cursor-pointer"
               onClick={() => setExpandedSummary(expandedSummary === i ? null : i)}>
                {expandedSummary === i ? elem?.summary : truncateText(elem?.summary, 60)} {/* Truncate summary to 60 characters */}
              </p>
              <div className='flex justify-center sm:justify-start'>
                {/* <Link href={`/blog/${elem?.slug_link}`}> */}
                <div onClick={()=>Router.push(`/blog/${elem?.slug_link}`)} className='w-fit'>

                  <Button content={'View'} ></Button>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-10 flex justify-center items-center">
        <div className='w-fit' onClick={()=>Router.push('/blog')}>

        {/* <Link href="/blog"> */}
          <Button content={'View All'}></Button>
        {/* </Link> */}
        </div>
      </div>
    </div>
  )
}
