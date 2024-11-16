import { PiArrowUpRight } from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Stories = ({ props }: any) => {
    const router = useRouter()
    return (
        <div className='relative'>
            <div className='w-full py-12'>
                <div className='xl:w-[75%] w-full px-6 xl:px-0 mx-auto'>
                    <p className='text-[32px] text-center lg:text-[48px] font-bold text-homeblack'>Stories</p>
                    <div className='flex gap-3 mt-6 flex-wrap justify-center'>
      {props?.map((elem: any, index: number) => (
        <div
          key={index}
          className='relative h-[573px] w-full sm:w-[48%] md:w-[32%] lg:w-[24%] justify-center group rounded-lg overflow-hidden'
          onClick={() => router.push(`/web-stories/${elem?.slug}`)}
        >
         
          <Image
            src={elem.image}
            alt={elem?.image_alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          
          <div className='absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-t from-black to-transparent flex flex-col justify-between p-4'>
            <div className='flex justify-end'>
              <div className='min-w-[42px] h-[42px] rounded-full flex justify-center items-center group-hover:bg-white duration-200'>
                <PiArrowUpRight className='text-pink text-[28px] duration-200 group-hover:rotate-[45deg]' />
              </div>
            </div>
            <div className='text-white'>
              <p
                className="text-[18px] font-bold leading-[21px]"
                dangerouslySetInnerHTML={{ __html: elem?.title }}
              ></p>
              <p className='text-[14px] mt-1'>
                {elem?.description}
              </p>
              <div className='mt-4'>
                <p className='font-medium'>{elem?.author}</p>
                <p>On {elem?.post_date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
                </div>
            </div>

        </div>
    );
}

export default Stories;
