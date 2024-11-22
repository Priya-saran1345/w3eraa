import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div>
        <video 
          src="/images/loader.webm" 
          height={700} 
          width={700} 
          autoPlay 
          loop 
          muted
        />
      </div>
    </div>
  )
}

export default Loader
