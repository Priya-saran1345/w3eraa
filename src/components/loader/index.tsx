import React from 'react'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center '>
      <div>
          <Image src={'/images/loader.gif'} height={700} width={700} alt=''></Image>
        </div>

    </div>
  )
}

export default Loader