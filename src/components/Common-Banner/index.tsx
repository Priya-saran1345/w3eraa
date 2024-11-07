import React from 'react'
 import Image from 'next/image'
import { IoMdStar } from 'react-icons/io'
import Link from 'next/link'
import Button from '@/components/button'
const index = ({title,description,image,btnlink,btntext,image_alt}:any) => {
  return (
    <div> <div className='bg-lightblue md:bg-[url("/images/banner-bg.png")] flex justify-center items-center w-full  h-fit py-4 lg:py-12  bg-center bg-no-repeat'>
    <div className='mx-auto xl:w-[75%] px-6 flex justify-center '>
        <div className='flex justify-between items-center py-4 md:py-10 gap-7'>
            <div className={`lg:w-1/2 flex flex-col  gap-6`}>
                <p className=' text-[32px] leading-[45px] font-bold lg:text-[38px] '>{title}</p>
                <p className="text-[18px] text-homegrey"  dangerouslySetInnerHTML={{ __html:description }}
                                    >
                                        
                                        </p>

                
                {/* <div className='flex  flex-wrap justify-center md:justify-start sm:flex-nowrap mt-5  gap-2'>
                    <div className='bg-white h-[92px] p-3 flex gap-3 rounded-xl'>
                        <div className='rounded-full flex justify-center items-center size-[63px]'>
                            <Image
                                src={'/images/growth-person.png'}
                                alt={''}
                                height={60}
                                width={163}
                                className={''}
                            />
                        </div>
                        <div>
                            <p className='text-homeblack text-[18px]'>Rajat Sharma</p>
                            <div className='flex gap-1 text-[20px] text-blue'>
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>
                            <p className='text-homegrey text-[14px]'>“Great Work, boost conve...</p>
                        </div>
                    </div>
                    <div className='bg-white p-3 h-[92px] flex gap-3 rounded-xl'>
                        <div className='rounded-full flex justify-center items-center size-[63px]'>
                            <Image
                                src={'/images/growth-person.png'}

                                alt={''}
                                height={60}
                                width={163}
                                className={''}
                            />
                        </div>
                        <div>
                            <p className='text-homeblack text-[18px]'>Rajat Sharma</p>
                            <div className='flex gap-1 text-[20px] text-blue'>
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>
                            <p className='text-homegrey text-[14px]'>“Great Work, boost conve...</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg h-[92px] flex items-center  p-3'>
                        <p className='text-blue text-[20px]'>5k+</p>
                    </div>
                </div> */}
                <div className='flex flex-wrap justify-center md:justify-start sm:gap-5'>
                <Link href={'/contact-us'}>
                    <Button content={'Get a Free Quote'}></Button>
                    </Link>
                    {
                     btntext&&btnlink&&
                        <Link href={`${btnlink}`}>
                        <Button content={btntext}></Button>
                    </Link>
                    }
                </div>
            </div>
            <div className='hidden lg:block'>
                {
                    image&&
                <Image src={image} height={405} width={513} alt={image_alt||''}></Image>
                }
            </div>
        </div>
    </div>
</div></div>
  )
}

export default index