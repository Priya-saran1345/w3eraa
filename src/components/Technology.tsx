import React from 'react';
import data from '@/components/Webdevelopment.json';
import Image from 'next/image'
const Technology = () => {
  const { title, description, fields } = data.technologies;
  return (
    <div className="py-16 bg-blue">
      <div className="2xl:w-[75%] lg:w-[90%] mx-auto text-center px-4">
        {/* Title Section */}
        <h2 className="text-3xl text-white font-bold ">{title}</h2>
        <p className="text-white md:w-[85%] mx-auto lg:w-[75%] mt-4  text-[16px] lg:text-[18px]">{description}</p>

        {/* Cards */}
        <div className="justify-center flex-wrap flex gap-8">
          {fields.map((field, index) => (
            <div
              key={index}
              className="bg-white w-[95%] md:w-[45%] lg:w-[30%] mt-24 rounded-lg shadow-lg relative p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex bg-white rounded-full absolute -top-12 left-[37%] shadow-lg w-[99px] h-[99px] items-center  justify-center">
              <Image
                   height={23}
                   width={40}
                  src={field.icon}
                  alt={field.title}
                  className="w-12 h-12 "
                />
              </div>
              {/* Title */}
              <h3 className="text-xl text-blue font-semibold mt-12 mb-5 ">
                {field.title}
              </h3>
              {/* Technologies */}
              <ul className="space-y-4 flex items-center gap-2 sm:gap-5  border-t-2 pt-2 justify-between flex-wrap">
                {field.technology.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="flex w-[47%] sm:w-[45%] h-[60px]  bg-lightblue rounded-md p-2 px-2 sm:px-4 justify-between items-center gap-4 text-gray-700"
                  >
                      <span className=" text-[15px] md:text-[18px] font-semibold text-homeblack">{tech.name}</span>
                   <Image
                   height={35}
                   width={24}
                      src={tech.image}
                      alt={tech.name}
                      className="w-8 h-8"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
