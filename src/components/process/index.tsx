import React from 'react'
import Button from '@/components/button'
import Image from 'next/image'
const index = () => {
  return (
    <div className='w-full bg-lightblue py-10 lg:py-16'>
        <div className=' px-6 mx-auto xl:w-[75%]'>
        <div className=' md:w-2/3 text-center md:text-left xl:w-1/2'>
            <p className='text-homeblack font-bold text-[24px] mb-4 lg:text-[38px]'>W3Era’s SEO Process</p>
            <p>Our SEO plans consist of multiple phases that are constantly reviewed and updated to ensure their effectiveness.</p>
        </div>
        <div className='flex justify-center mt-7 gap-7  flex-wrap'>

{
    [1,2,3,4,5,6,7,8].map((elem:any,index:any)=>(
        <div key={index} className='bg-white w-[459px] md:w-[45%] lg:w-[31%] rounded-2xl p-8 flex flex-col gap-4'>
            <div className='flex justify-start  items-center gap-3'>
                 <div className='bg-lightblue flex justify-center items-center rounded-2xl size-[131px]'>
                       <p className=' text-[54px] xl:text-[75px] font-semibold text-blue'>0{index+1}</p>
                 </div>
                 <p className='text-[26px] text-homeblack font-medium'>Website Analysis</p>
            </div>
            <p className='text-[18px] text-homegrey'>At the beginning of the SEO process, we conduct a comprehensive evaluation and investigation of every element that impacts your online presence. We understand the significance of your business and industry in this analysis, and thus we approach the initial website analysis with great importance.
                 By conducting this analysis, we gain insights into the most suitable strategy that will effectively work for your website. </p>

        </div>
    ))
}
          <div className=' w-[459px] md:w-[45%] lg:w-[31%] rounded-2xl p-8 flex  justify-center items-center'>
          <div className='flex flex-col gap-3 justify-center items-center'>
                      <p className='text-[20px] text-homeblack font-semibold'>For More Information</p>
                      <Button content={'Contact Us'} />
                      <div className="flex -ml-3">
                        <Image
                          src={'/images/banner-circle.png'}
                          alt={''}
                          height={34}
                          width={34}
                          className="ml-3"
                        />
                        <Image
                          src={'/images/banner-circle.png'}
                          alt={''}
                          height={34}
                          width={34}
                          className="-ml-3"
                        />
                        <Image
                          src={'/images/banner-circle.png'}
                          alt={''}
                          height={34}
                          width={34}
                          className="-ml-3"
                        />
                        <Image
                          src={'/images/banner-circle.png'}
                          alt={''}
                          height={34}
                          width={34}
                          className="-ml-3"
                        />
                        <div className="w-[34px] h-[34px] rounded-full border-[2px] flex justify-center items-center text-[14px] -ml-3 border-white bg-pink text-white">
                          <p>6K+</p>
                        </div>
                      </div>
                    </div>
        </div>

        </div>






        </div>
    </div>
  )
}

export default index