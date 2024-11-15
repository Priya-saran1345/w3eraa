import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'
import Link from 'next/link'
const Index = ({props}:any) => {
  return (
    <div className='bg-white w-full py-10 lg:py-16'>
             <div className='xl:w-[75%] px-6 mx-auto'>
                <div  className=' md:w-[75%] lg:w-[50%] leading-[45px] mx-auto text-center'>
                    <p className=' text-[24px]  leading-tight lg:leading-[] lg:text-[38px] font-bold '>
                    {props?.title}</p>
                </div>
                <div className='mt-12 flex flex-wrap justify-center gap-4'>
               {
               props?.card?.map((elem:any, i:number)=>(

                           <div key={i} className='sm:w-[47%] lg:w-[32%] bg-lightblue min-h-[583px] rounded-xl p-3'>
                            <div className='min-w-full bg-white h-[244px] flex justify-center items-center rounded-xl'>
                            <Image src={elem?.image} alt='' height={167} width={249} className='rounded-lg' />
                            </div>
                             <div className='p-3 flex text-center flex-col '>
                                <p className='text-homeblack text-[26px] font-semibold'>{elem?.title}</p>
                                <p className='text-homegrey text-[18px] mt-4'>
                        {
                          elem?.description
                        }
                                    </p>
                             </div>
                           </div>
                ))
               }
                </div>
                <div className='flex justify-center mt-12'>
                  <Link href='/get-a-free-quote'>
                     <Button content={'Get a Quote Now!'}/>
                  </Link>
                </div>
             </div>
           </div>
  )
}

export default Index