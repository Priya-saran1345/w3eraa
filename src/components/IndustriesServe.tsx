import React from 'react'
import data from '@/components/Webdevelopment.json'

const IndustriesServe = () => {
    console.log("'''''''" ,data)
  return (
    <>
    <div className='w-full lg:w-[95%] 2xl:w-[75%] py-10 lg:py-16 mx-auto'>
        <div className='md:w-[85%] xl:w-[75%] px-4 mx-auto text-center '>
            <h2 className='font-bold text-homeblack  '>{data?.industries?.title} </h2>
             <p className=' text-[16px] text-homegrey mt-2 xl:text-[18px]'>{data?.industries?.description}</p>
        </div>
    </div>
        <div className='w-full'>
            <div className='w-full border-b-2 border-grey py-6'>
                <div className='w-full lg:w-[95%] 2xl:w-[75%] flex'>
                    <div className='flex justify-start gap-10'>
                        <p className='text-[70px] font-bold text-blue'>{data?.industries?.cards[0]?.index}</p>
                         <div>

                         </div>
                    </div>

                </div>
            </div>
        </div>
    </>

  )
}
export default IndustriesServe