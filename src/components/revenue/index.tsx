import React from 'react'
import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';
import ClientsCount from '../ClientsCount';

const Revenue = () => {
  return (
    <div className='w-full py-10 md:py-16  text-white bg_rev'>
      <div className='w-full xl:w-[95%]  2xl:w-[75%] text-center lg:text-left text-white mx-auto px-4'>
       
        <h2 className=' mt-4 font-bold '>Need Revenue? We Can Help!</h2>
        <p className='  text-[16px] lg:text-[18px]'>Experience the competence of our digital marketing services as we amplify brand visibility,
           cultivate high-quality leads, and yield result-driven results. </p>

        <div className='w-full mt-12 flex justify-center lg:justify-start gap-4 lg:flex-nowrap flex-wrap  '>
          <div className=' w-[97%] sm:w-[307px] h-[164px] flex text-white bg-white/10 px-6  rounded-md items-center gap-3'>
            <div className='min-w-[108px] min-h-[108px] bg-white/10  rounded-xl flex justify-center items-center'>
              <Image src={'/images/revenue1.svg'} alt='revenue1' height={55} width={57} />
            </div>
            <div className=' leading-[29px]'>
              <p className='  text-[28px] lg:text-[38px] xl:text-[48px] font-bold'>1M+</p>
              <p className=' mt-3 font-medium text-[18px] lg:text-[22px]'>Ecommerce Transactions</p>
            </div>
          </div>
         
          <div className=' w-[97%] sm:w-[307px] h-[164px] text-white  flex bg-white/10  px-6  rounded-md items-center gap-3'>
            <div className='min-w-[108px] min-h-[108px] bg-white/10 rounded-xl flex justify-center items-center'>
              <Image src={'/images/revenue2.svg'} alt='revenue2' height={55} width={57} />
            </div>
            <div className=' leading-[29px]'>
              <p className='  text-[28px] lg:text-[38px] xl:text-[48px] font-bold'>3M+</p>
              <p className=' mt-3 font-medium text-[18px] lg:text-[22px]'>Qualified Leads</p>
            </div>
          </div>
          <div className=' w-[97%]  sm:w-[307px] h-[164px] flex text-white  gap-3 bg-white/10 px-6 rounded-md items-center '>
            <div className='min-w-[108px] min-h-[108px] bg-white/10 rounded-xl flex justify-center items-center'>
              <Image src={'/images/revenue3.svg'} alt='revenue3' height={55} width={57} />
            </div>
            <div className=' leading-[29px]'>
              <p className='  text-[28px] lg:text-[38px] xl:text-[48px] font-bold'>10K+</p>
              <p className=' mt-3 font-medium text-[18px] lg:text-[22px]'>Happy <br /> Clients</p>
            </div>
          </div>


        </div>
        <div className='w-full mt-8 flex flex-wrap justify-center lg:justify-start gap-3  items-center'>
        <Link href='/get-a-free-strategy-review'>
                            <button className="text-white text-[18px] gap-3 flex items-center border-[2px] rounded-full p-[2px]  border-lightpink 
            font-medium  group  transition-all duration-300">
                                <div className="w-[45px] h-[45px] flex bg-white/10 justify-center items-center rounded-full
               border-lightpink border-[1px] transform transition-transform duration-300  group-hover:rotate-45 group-hover:translate-x-2">
                                    <GoArrowUpRight className="-rotate-30 group-hover:text-white text-[28px] text-white" />
                                </div>
                                <span className="transform mr-4 transition-transform  duration-300 group-hover:translate-x-2">
                                    <p >Get a Free Strategy Review</p>
                                </span>
                            </button>
                 </Link>
                       
                  <ClientsCount/>

        </div>
      </div>

    </div>
  )
}

export default Revenue