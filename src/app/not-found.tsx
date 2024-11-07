import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-lightblue'>
      <div className='flex flex-col justify-center items-center max-h-[500px] xl:w-[75%] px-6 mx-auto'>
        {/* Ensure the image path is correct */}
        <Image src='/images/loader.gif' height={500} width={500} alt='Loading Animation' />
        
        <p className='text-[48px] font-extrabold  text-center mt-6 drop-shadow-lg'>
          Page Not Found
        </p>

        <div className='mt-8 flex gap-4'>
          <Link href="/" passHref>
            <Button content='Home' />
          </Link>
          <Link href="/blog" passHref>
            <Button content='Blog' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
