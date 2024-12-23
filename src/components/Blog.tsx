import React from 'react';
import Underline from './Underline';
import { GoClock } from 'react-icons/go';
import { SlCalender } from 'react-icons/sl';
import Image from 'next/image';

const Blog = () => {
  const blogData = [
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12<sup>th</sup> Oct 2022',
      src: '/images/Blog1.png',
    },
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12<sup>th</sup> Oct 2022',
      src: '/images/Blog2.png',
    },
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12<sup>th</sup> Oct 2022',
      src: '/images/Blog3.png',
    },
  ];

  return (
    <div className="min-h-[70vh] py-12 md:py-[5rem] bg-white w-full flex flex-col gap-4 px-6 md:px-8 lg:px-16">
      <h1 className="capitalize text-3xl font-[600] tracking-wider text-center">Our Blogs</h1>
      <p className="text-center tracking-wider font-medium text-lg text-[#9F9F9F]">
        Find a bright idea to suit your taste with our great medicine.
      </p>
      <div className="flex gap-4 flex-wrap mt-3 md:mt-[2.8rem] items-center justify-center">
        {blogData.map((value, index) => (
          <div
            key={index}
            className="md:w-[32%] p-3 flex flex-col items-center justify-center gap-2 sm:w-[47%] w-[90%]"
          >
            <Image
            width={100}
            height={100}
              src={value.src}
              alt={`Blog ${index + 1}`}
              className="object-cover"
            />
            <p className="tracking-wider text-left capitalize w-[95%] font-[500] text-[.9em] md:text-[1em]">
              {value.title}
            </p>
            <Underline title="Read More" />
            <div className="flex items-center mt-2 gap-4">
              {/* For Time */}
              <div className="flex items-center gap-2">
                <GoClock size={16} />
                <p className="font-medium text-[.8em] md:text-[.9em] tracking-wider">
                  {value.time}
                </p>
              </div>
              {/* For Date */}
              <div className="flex items-center gap-2">
                <SlCalender size={16} />
                <p
                  dangerouslySetInnerHTML={{ __html: value.date }}
                  className="font-medium text-[.8em] md:text-[.9em] tracking-wider"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-2 md:mt-4 grid place-content-center">
        <Underline title="View All Posts" />
      </div>
    </div>
  );
};

export default Blog;
