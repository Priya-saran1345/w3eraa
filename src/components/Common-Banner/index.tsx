import React from 'react'
 import Image from 'next/image'
import { IoMdStar } from 'react-icons/io'
import Link from 'next/link'
import Button from '@/components/button'
const index = ({title,description,image,btnlink,btntext,image_alt ,status='false'}:any) => {
  return (
    <div> <div className='bg-lightblue md:bg-[url("/images/banner-bg.png")] flex justify-center  w-full  h-fit py-4   bg-center bg-no-repeat'>
    <div className='mx-auto xl:w-[75%] px-6 flex justify-center '>
        <div className='flex justify-between items-center py-4 md:py-10 gap-7'>
            <div className={`lg:w-1/2 flex flex-col  gap-6`}>
                <p className=' text-[32px] leading-[45px] font-bold lg:text-[38px] '>{title}</p>
                <p className="text-[18px] text-homegrey "  dangerouslySetInnerHTML={{ __html:description }}
                                    >
                                        </p>

                <div className='flex flex-wrap justify-center md:justify-start sm:gap-5'>
                <Link href={'/get-a-free-quote'}>
                    <Button content={'Get a Free Quote'}></Button>
                    </Link>
                    {
                     btntext&&btnlink&&
                        <Link href={`/${btnlink}`}>
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
                {
                    !image && status=='true' &&
                    <div className='w-full  flex flex-col justify-center lg:justify-start gap-4 lg:flex-nowrap flex-wrap  '>
                    <div className='w-[357px] h-[104px] flex bg-blue text-white  px-3  rounded-md items-center gap-3'>
                      <div className='min-w-[88px] min-h-[88px] bg-white/10  rounded-xl flex justify-center items-center'>
                        <Image src={'/images/revenue1.svg'} alt=' ' height={55} width={57} />
                      </div>
                      <div className=' leading-[29px]'>
                      <p className='  font-medium text-[16px]'>Access the data</p>
                        <p className=' text-[28px] font-bold'>$302,010</p>
                        <p className=' leading-tight font-medium text-[18px]'>in client revenue</p>
                      </div>
                    </div>
                   
                    <div className='w-[357px] h-[104px] text-white  flex bg-blue px-3  rounded-md items-center gap-3'>
                      <div className='min-w-[88px] min-h-[88px] bg-white/10 rounded-xl flex justify-center items-center'>
                        <Image src={'/images/revenue2.svg'} alt=' ' height={55} width={57} />
                      </div>
                      <div className=' leading-[29px]'>
                      <p className='  font-medium text-[16px]'>Accelerate ROI with</p>

                        <p className=' text-[28px] font-bold'>1+ BILLION</p>
                        <p className=' leading-tight font-medium capitalize text-[18px]'>data points from marketing</p>
                      </div>
                    </div>
                    <div className='w-[357px] h-[104px] flex text-white  gap-3 bg-blue  px-3 rounded-md items-center '>
                      <div className='min-w-[88px] min-h-[88px] bg-white/10 rounded-xl flex justify-center items-center'>
                        <Image src={'/images/revenue3.svg'} alt=' ' height={55} width={57} />
                      </div>
                      <div className=' leading-[29px]'>
                      <p className='  font-medium text-[16px] leading-tight'>Use the expert-led tactics behind</p>

                        <p className=' text-[28px] font-bold'>7,839,684</p>
                        <p className=' leading-tight font-medium capitalize text-[18px]'>in leads for our clients  </p>
                      </div>
                    </div>
                    <div className='w-[357px] h-[104px] flex text-white  gap-3 bg-blue  px-3 rounded-md items-center '>
                      <div className='min-w-[88px] min-h-[88px] bg-white/10 rounded-xl flex justify-center items-center'>
                        <Image src={'/images/revenue4.svg'} alt=' ' height={55} width={57} />
                      </div>
                      <div className=' leading-[29px]'>
                      <p className='  font-medium leading-tight text-[16px]'>Unlock do-it-for-me marketing with</p>

                        <p className=' text-[28px] font-bold'>500</p>
                        <p className=' leading-tight font-medium text-[18px] capitalize'>digital marketing expert</p>
                      </div>
                    </div>
                  </div>
                }
            </div>
        </div>
    </div>
</div></div>
  )
}

export default index