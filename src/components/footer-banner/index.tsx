import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'
const Footerbanner = ({content,slug,image,description,btncontent}:any) => {
  return (
    <div className='w-full'>
                <div className='w-full rounded-xl pt-12 bg-lightblue bg-cover bg-center '>
                    <div className='w-full relative rounded-xl  xl:w-[75%] mx-auto  bg-white flex justify-between items-center '>
                        <div className=' bg-white md:w-[55%] flex-col flex text-center md:text-left px-4 sm:px-12 py-10 md:py-0 '>
                            <p className=' lg:text-[30px] font-bold leading-[] lg:leading-[48px]'>
                                {content}
                            </p>
                            <p className='text-textGrey text-[18px] mt-4 leading-[21px]'  dangerouslySetInnerHTML={{ __html: description }} >
                                  
                            </p>
                            <div className='flex-col flex gap-3 w-fit items-center mt-4'>
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
                            <Button content={btncontent}/>   
                                {/* <button className='px-10 mt-6 py-4 text-[18px] text-white rounded-lg bg-pink'>
                                  {btncontent}
                                </button> */}
                            </div>
                        </div>
                        <div className='rounded-2xl '>
                            <Image src={image} height={312} width={488} alt='' className='hidden md:block  rounded-r-2xl '/>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-blue -mt-44 h-52'>
                </div>
            </div> 
  )
}
export default Footerbanner