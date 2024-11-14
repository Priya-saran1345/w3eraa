import React from 'react'
import Image from 'next/image';
const ClientsCount = () => {
  return (
    <div>
         <div className="flex -ml-3">
                      <Image
                        src={'/images/6k1.png'}
                        alt={''}
                        height={34}
                        width={34}
                        className="ml-3"
                      />
                      <Image
                        src={'/images/6k2.png'}
                        alt={''}
                        height={34}
                        width={34}
                        className="-ml-3"
                      />
                      <Image
                        src={'/images/6k3.png'}
                        alt={''}
                        height={34}
                        width={34}
                        className="-ml-3"
                      />
                      <Image
                        src={'/images/6k4.png'}
                        alt={''}
                        height={34}
                        width={34}
                        className="-ml-3"
                      />
                      <div className="w-[34px] h-[34px] rounded-full border-[2px] flex justify-center items-center text-[14px] -ml-3 border-white bg-pink text-white">
                        <p>6K+</p>
                      </div>
                    </div>
    </div>
  )
}

export default ClientsCount