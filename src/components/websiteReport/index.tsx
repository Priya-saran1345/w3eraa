import React from 'react'

const index = () => {
  return (
    <div className='bg-[url("/images/home-middle-banner.png")] w-full bg-no-repeat py-4 lg:py-16 bg-center '>
    <div className="xl:w-[50%] flex flex-col  items-center justify-center text-white px-4 mx-auto w-full ">
      <p className="text-[18px] text-center font-semibold">LET’S GET STARTED.</p>
      <p className=" text-[28px] md:text-[38px] font-bold text-center md:text-left capitalize">View your Website Report-</p>
      <div className="mt-5 w-full flex justify-center">
        <input type="text" placeholder="Your Website URL" className="text-textGrey  p-4 border-none outline-none px-4 w-full sm:w-2/3 bg-white rounded-full" />
      </div>
      <div className="flex justify-center mt-4">
               <button className="py-3 rounded-full px-10 hover:bg-pink duration-300 hover:border-pink text-[18px] border-[2px] border-white"> Check Now</button>
      </div>
    </div>
  </div>
  )
}

export default index