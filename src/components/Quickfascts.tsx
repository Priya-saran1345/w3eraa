import React from 'react';
import data from '@/components/Webdevelopment.json';

const QuickFacts = () => {
    return (
        <div className="w-full bg-blue py-10">
            <h2 className="text-center text-white text-[24px] lg:text-[32px] font-bold mb-8">Quick Facts</h2>
            <div className="flex   mx-auto lg:w-[75%] flex-wrap justify-center gap-6 px-4">
                {data.quickfacts.map((fact: any, index: number) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center  group bg-white/10 text-white hover:bg-white text-center rounded-lg shadow-lg p-6 w-[150px]
                         md:w-[180px] h-[180px] xl:w-[270px] hover:shadow-xl  duration-300"
                    >
                        <p className=" text-[28px] group-hover:text-blue lg:text-[42px] font-bold">{fact.counting}</p>
                        <p className=" text-[14px] lg:text-[18px] group-hover:text-homeblack mt-2">{fact.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuickFacts;
