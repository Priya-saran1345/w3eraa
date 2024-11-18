import Image from 'next/image'
import React from 'react'

const Certificate = () => {
    return (
        <div className='w-full  border-b-[1px] border-lightblue py-12 lg:py-16'>
            <p className='w-full xl:w-[75%] mx-auto px-4 lg:px-[30px]'>
                <h2 className=' text-[28px] text-homeblack leading-none lg:leading-[45px] text-center lg:text-[38px]  xl:text-[38px] capitalize   font-bold'>
                    W3era wins Certification of Recognition in India 5000 Best MSME Award for Quality excellence

                </h2>

            </p>
            <div className="flex flex-wrap lg:flex-nowrap mt-10 justify-center gap-5  items-center px-4 lg:px-3 w-full xl:w-[75%] mx-auto">
                <div className=' hidden lg:block '>
                    <Image
                        src={'/images/Certificate.jpg'}
                        width={500}
                        height={300}
                        alt='Awards'
                        className="cursor-pointer lg:min-w-[300px] "
                    />
                </div>
                <div className=''>
                    <div className='text-[16px] gap-2 mt-2 flex items-center text-homegrey lg:text-[18px]'>
                        We are thrilled to announce that W3era, the best digital marketing company, has been awarded the Certification
                         of Recognition in India 5000 Best MSME Award for Quality Excellence.
                        This award is a testament to our team&apos;s unwavering commitment to delivering high-quality digital marketing services to our clients.
                        <br /><br />
                        The India 5000 Best MSME Award is a prestigious recognition program that celebrates outstanding
                         Micro, Small, and Medium Enterprises (MSMEs) in India. The certification process involves a rigorous evaluation of each nominee&apos;s business 
                         practices, quality standards, innovation, and customer service.

                        <br /><br />
                        At W3era, we are deeply honored to have received this award, 
                        and we believe it reflects the hard work and dedication of our talented team. Our commitment to quality excellence is
                         at the heart of everything we do, and we strive to provide our clients with the best possible digital marketing solutions tailored to their unique business needs.

                        <br /><br />
                        By choosing W3era as your digital marketing partner, you can be assured of receiving exceptional
                         service and results that will help your business grow and succeed in today&apos;s competitive online landscape. We are grateful for
                          the recognition provided by India 5000 Best MSME Award, and we look forward to continuing to exceed our client &apos;s expectations.


                    </div>

                </div>


            </div>

        </div>
    )
}

export default Certificate