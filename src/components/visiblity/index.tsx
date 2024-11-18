import React from 'react'
import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

const index = ({props}:any) => {
    return (
        <div className='w-full py-12 lg:py-16'>
            <div className='xl:w-[75%] px-4 xl:px-2 mx-auto'>
                <div className='md:w-1/2 text-center lg:leading-[45px] mx-auto'>
                    <h2 className='text-homeblack text-[28px] font-bold lg:text-[38px]'>{props?.title}</h2>
                </div>
                <div className='flex justify-center mb-12 mt-12 gap-5 flex-wrap'>
                    {
                        props?.card.map((elem: any, i:number) => (
                            <div key={i} className=' flex flex-col gap-10 sm:w-[80%] md:w-[48%] bg-white rounded-xl hover:shadow-xl border-[1px] border-lightblue p-4'>
                                <div className='bg-lightblue items-center flex gap-6 p-5 rounded-xl'>
                                     <Image src={elem?.image} height={107} width={132} alt={elem?.image_alt}/>
                                     <p className='text-[26px] pr-4 text-homeblack leading-[31px] font-semibold '>{elem?.title}</p>
                                </div>
                                <div className='px-7 text-justify'>
                                    <p className='text-[18px] text-homegrey'>
                                      {elem?.description}
                                         </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex  justify-center'>
                <Link href={`/get-a-free-quote`}>
                        <Button content={'Learn More'}/>
                            </Link>
                </div>
            </div>

        </div>
    )
}

export default index
