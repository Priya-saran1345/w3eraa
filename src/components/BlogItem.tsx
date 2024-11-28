'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/button';

interface BlogItemProps {
  elem: any;
}

const BlogItem: React.FC<BlogItemProps> = ({ elem }) => {
  const [expandedTitle, setExpandedTitle] = useState(false);
  const [expandedSummary, setExpandedSummary] = useState(false);

  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  return (
    <div className="relative border-[2px] border-lightblue hover:shadow-xl duration-300 sm:w-[45%] w-[9] lg:w-[32%] pb-2 rounded-lg">
      <div className="bg-pink absolute top-3 left-3 text-white text-[17px] font-medium rounded-lg py-1 px-4">
        {elem?.blog_date
          ? (() => {
              const date = new Date(elem.blog_date);
              const day = String(date.getDate()).padStart(2, '0');
              const month = date.toLocaleString('en-US', { month: 'short' });
              const year = date.getFullYear();
              return `${day} ${month}, ${year}`;
            })()
          : ''}
      </div>
      <div className="text-blue font-medium px-3 py-1 w-fit absolute top-3 right-3 rounded-md bg-lightblue">
        <Link href={`/blog/category/${elem?.category?.category_slug}`}>
          <span>{elem?.category?.name || 'Uncategorized'}</span>
        </Link>
      </div>
      <div>
        <Image
          src={elem?.image || '/images/blog1.png'}
          alt={elem?.image_alt || "alt"}
          height={218}
          width={461}
          className="rounded-lg max-h-[218px]"
        />
      </div>
      <div className="p-4 flex flex-col gap-3 justify-between">
        <p
          className="font-bold text-homeblack text-[24px] leading-tight cursor-pointer"
          onClick={() => setExpandedTitle(!expandedTitle)}
        >
          {expandedTitle ? elem?.title : truncateText(elem?.title, 30)}
        </p>
        <p
          className="text-homegrey leading-[21px] text-[18px] cursor-pointer"
          onClick={() => setExpandedSummary(!expandedSummary)}
        >
          {expandedSummary ? elem?.summary : truncateText(elem?.summary, 60)}
        </p>
        <div>
          <Link href={`/blog/${elem?.slug_link}`}>
            <Button content={'View'}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

