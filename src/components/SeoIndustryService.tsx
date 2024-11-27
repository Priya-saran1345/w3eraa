import Link from 'next/link'
import React from 'react'
import Button from '@/components/button'
import Image from 'next/image'
const SeoIndustryService = ({props}:any) => {
  return (
    <div className='xl:w-[95%]  2xl:w-[75%] mx-auto my-8 px-4 xl:px-0'>
    <h2 className='text-center my-3 text-homeblack font-semibold'>{props?.title}</h2>
   <div className='flex w-full justify-center mt-6 gap-3 flex-wrap'>
       {
        props?.cards.map((elem: any, i: number) => (
               <div key={i} className='rounded-xl p-8 text-center w-[90%] sm:w-[45%] lg:w-[23%] bg-lightblue  flex flex-col gap-2 justify-between hover:shadow-xl'>
                     <div className='h-[100px] w-[100px] flex justify-center items-center bg-white rounded-full mx-auto'>
                         <Image
                          src={elem?.icons} alt='w3era' width={60} height={60} />

                     </div>
                   <p className='text-[26px] text-blue font-bold  leading-[31px]'>{elem?.plan}</p>
                   <p
                       className='text-[16px] lg:text-[22px] font-medium mt-2 text-homeblack leading-[22px]'
                       dangerouslySetInnerHTML={{ __html: elem?.title }}
                   />
                   <p
                       className='text-[16px] lg:text-[18px] mt-2 text-homegrey leading-[22px]'
                       dangerouslySetInnerHTML={{ __html: elem?.description }}
                   />
                   <div className='flex justify-center'>
                       <Link href={`/${elem?.link}`} className='mt-3'>
                           <Button content='Read More' />
                       </Link>
                   </div>
                   <div>
                   </div>
               </div>
           ))
       }
   </div>
</div>
  )
}

export default SeoIndustryService