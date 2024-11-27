import Link from 'next/link'
import React from 'react'
import Button from '@/components/button'

const Quicklinks = ({ props }: any) => {
  console.log('this is the quicklinks component', props)
  return (
    <div className="w-full px-6 mx-auto pt-10 pb-8 lg:pt-20 xl:w-[95%]  2xl:w-[75%]">
      <div className="md:w-[50%] px-4 mx-auto text-center flex flex-col gap-3">
        <h2 className=" text-homeblack font-bold ">Quick Links </h2>
        {/* Optionally, you can add a description */}
        {/* <p className='text-homegrey text-[18px]'>Find all the essential resources at your fingertips. Explore our services, get in touch, or access important information easily.</p> */}
      </div>
      <div className="flex lg:flex-nowrap flex-wrap justify-center lg:justify-between gap-5 mt-12">
        {props?.map((category: any, index: number) => (
          <div className="w-[445px] bg-lightblue rounded-xl p-8" key={index}>
            <p className="text-homeblack text-[24px] font-semibold mb-6">{category?.category || ''}</p>

            <div className="flex flex-col">
              {category?.card?.map((link: any, linkIndex: number) => (
                <Link key={linkIndex} href={`/${link?.link}` || '#'}>
                  <Button content={link?.title} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quicklinks
