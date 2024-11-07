import Link from 'next/link'
import React from 'react'
import Button from '@/components/button'
const Quicklinks = () => {
  return (
    <div className='w-full px-4 mx-auto pt-10 pb-8 lg:pt-20 xl:w-[75%]'>
    <div className='md:w-[50%] px-4 mx-auto text-center flex flex-col gap-3'>
        <p className=' text-[28px] text-homeblack font-bold lg:text-[38px] '>Quick Links</p>
        <p className='text-homegrey text-[18px]'>Find all the essential resources at your fingertips. Explore our services, get in touch, or access important information easily.</p>
    </div>
    <div className='flex lg:flex-nowrap flex-wrap justify-center lg:justify-between gap-5 mt-12'>
        <div className='w-[445px] bg-lightblue rounded-xl p-8'>
            <p className='text-homeblack text-[24px] font-semibold mb-6'>Pay Per Click</p>
            <div className='flex flex-col '>
                <Link href={''}>
                    <Button content={'Google Shopping Ads'} />
                </Link>
                <Link href={''}>
                    <Button content={'Google My Business Ads'} />
                </Link>
                <Link href={''}>
                    <Button content={'PPC Services'} />
                </Link>
            </div>
        </div>
        <div className='w-[445px] bg-lightblue rounded-xl p-8'>
            <p className='text-homeblack text-[24px] font-semibold mb-6'>Packages</p>
            <div className='flex flex-col '>
                <Link href={''}>
                    <Button content={'PPC Services Packages'} />
                </Link>
                <Link href={''}>
                    <Button content={'Local Seo Packages'} />
                </Link>
                <Link href={''}>
                    <Button content={'Content Marketing Packages'} />
                </Link>
            </div>
        </div>
        <div className='w-[445px] bg-lightblue rounded-xl p-8'>
            <p className='text-homeblack text-[24px] font-semibold mb-6'>Social Media Marketing</p>
            <div className='flex flex-col '>
                <Link href={''}>
                    <Button content={'Pinterest Marketing Services'} />
                </Link>
                <Link href={''}>
                    <Button content={'Youtube Marketing Services'} />
                </Link>
                <Link href={''}>
                    <Button content={'LinkedIn Marketing Services USA'} />
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Quicklinks