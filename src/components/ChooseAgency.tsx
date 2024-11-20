import Image from 'next/image'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const ChooseAgency = () => {
    return (
        <div className='w-full  border-b-[1px] border-blue py-12 lg:py-16'>
            <p className='w-full xl:w-[75%] mx-auto px-4 lg:px-[30px]'>
                <h2 className=' text-center  capitalize   font-bold'>
                    What to look for when choosing a digital marketing agency?
                </h2>
                <p className='text-[16px] text-homegrey lg:text-[18px] mt-2 text-center'>In the digital marketing world,
                     finding the perfect agency partner requires careful consideration. There are various factors that need
                      to be considered when selecting a digital marketing agency:
                </p>
            </p>
            <div className="flex flex-wrap lg:flex-nowrap mt-10 justify-between gap-6 items-center px-4 lg:px-3 w-full xl:w-[75%] mx-auto">
                <div className='lg:w-1/2'>
                    <div className='flex '>

                        <MdKeyboardDoubleArrowRight className='text-pink text-[30px] mt-3' />
                        <p className='text-[16px] gap-2 text-justify mt-2  items-center text-homegrey lg:text-[18px]'>
                            <span className='font-semibold text-[20px] text-homeblack'>Expertise and Track Record:</span>
                            Evaluate the agency&apos;s experience and success in delivering effective campaigns across diverse industries.
                        </p>
                    </div>
                    <div className='flex '>

                        <MdKeyboardDoubleArrowRight className='text-pink text-[30px] mt-3' />
                        <p className='text-[16px] gap-2 text-justify mt-2  items-center text-homegrey lg:text-[18px]'>
                            <span className='font-semibold text-[20px] text-homeblack'>Transparency Matters:</span>
                            Seek an agency that is transparent about its strategies, methods, and past results, avoiding those promising unrealistic overnight success.
                        </p>
                    </div>
                    <div className='flex '>

                        <MdKeyboardDoubleArrowRight className='text-pink text-[30px] mt-3' />
                        <p className='text-[16px] gap-2 text-justify mt-2  items-center text-homegrey lg:text-[18px]'>
                            <span className='font-semibold text-[20px] text-homeblack'>Comprehensive Service Offering:</span>
                            Opt for an agency that provides a wide range of services encompassing SEO, social media, content creation, and analytics.    </p>
                    </div>


                    <div className='flex '>

                        <MdKeyboardDoubleArrowRight className='text-pink text-[30px] mt-3' />
                        <p className='text-[16px] gap-2 text-justify mt-2  items-center text-homegrey lg:text-[18px]'>
                            <span className='font-semibold text-[20px] text-homeblack'>Skillful Team:</span>
                            Ensure the agency&apos;s team possesses a diverse skill set, from strategic planning and design to copywriting and data analysis.
                        </p>
                    </div>
                    <div className='flex '>

                        <MdKeyboardDoubleArrowRight className='text-pink text-[30px] mt-3' />
                        <p className='text-[16px] gap-2 text-justify mt-2  items-center text-homegrey lg:text-[18px]'>
                            <span className='font-semibold text-[20px] text-homeblack'>Customized Approach:</span>
                            Inquire about their approach to understanding your business and target audience, aiming for a strategy aligned with your brand&apos;s unique identity.
                        </p>
                    </div>
                    <div className='flex '>

                        <MdKeyboardDoubleArrowRight className='text-pink text-[30px] mt-3' />
                        <p className='text-[16px] gap-2 text-justify mt-2  items-center text-homegrey lg:text-[18px]'>
                            <span className='font-semibold text-[20px] text-homeblack'> Budget Alignment:</span>
                            Select a digital marketing agency that offers the best quality services at affordable prices.
                        </p>
                    </div>
                    <div className='flex '>

                        <MdKeyboardDoubleArrowRight className='text-pink text-[30px] mt-3' />
                        <p className='text-[16px] gap-2 text-justify mt-2  items-center text-homegrey lg:text-[18px]'>
                            <span className='font-semibold text-[20px] text-homeblack'>Effective Communication: </span>
                            Emphasize open communication and collaboration, seeking an agency that maintains regular updates and engages closely with your team.
                        </p>
                    </div>


                    <p className='text-[16px] text-homegrey lg:text-[18px] mt-4'>You can grow your business to new digital heights by partnering with the right internet marketing agency.</p>
                </div>
                <div className='  hidden lg:block lg:w-1/2'>
                    <Image
                        src={'/images/marketin.png'}
                        width={500}
                        height={58}
                        alt='Digital Marketing Agency'
                        className="cursor-pointer"
                    />
                </div>

            </div>

        </div>
    )
}

export default ChooseAgency