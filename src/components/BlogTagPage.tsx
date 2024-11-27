"use client"; // Ensures this component runs on the client side
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/button';
import Image from 'next/image';
import axios from 'axios';
import { BASE_URL } from '@/util/api';
import Loader from '@/components/loader';
import { Pagination } from 'antd';
import DownNavbar from '@/components/DownNavbar'

const Category = () => {
  const pathname = usePathname();
  const segments = pathname.replace(/\/$/, '').split('/');
  const lastsegment = segments.pop();
  const [descripton, setdescriton] = useState<any>('');
  const [blog, setBlogs] = useState<any>(); // Initialize as an empty array
  const [totalBlogs, setTotalBlogs] = useState<number>(0); // Track total number of blogs
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1); // Track current page
  const [expandedTitle, setExpandedTitle] = useState<number | null>(null)
  const [expandedSummary, setExpandedSummary] = useState<number | null>(null)

  // Fetch blog data
  const fetch = async (page: number = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}blogs/?tag=${lastsegment}&page=${page}`);
      setBlogs(response?.data?.results.blogs);
      setdescriton(response.data.results.category_details);
      setTotalBlogs(response.data.count); // Set the total count of blogs
      const totalPages = Math.ceil(response.data.count / 10); // Calculate total pages
      setPages(totalPages); // Update pages count

    } catch (error: any) {
      console.log("client error", error.message);
    }
  };
  function truncateText(text: string, limit: number) {
    if (text.length > limit) {
      return text.substring(0, limit) + '...'
    }
    return text
  }
  useEffect(() => {
    fetch(currentPage); // Fetch data when component mounts
  }, [currentPage]); // Add `currentPage` as a dependency so it re-fetches on page change

  // Handle page change in pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update current page state
  };
  // Effect to scroll to the top after fetching data
  useEffect(() => {
    // Wait for a slight delay (100ms) to ensure data is fully rendered
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scroll to the top
      });
    }, 100); // Adjust the delay if necessary
    // Cleanup timeout if the component unmounts before the timeout triggers
    return () => clearTimeout(scrollTimeout);
  }, [blog]); // Trigger the scroll effect when the `blog` data changes
  return (
    <div>
      {/* {!blog && <Loader />} */}
      {
      // blog && 
      (
        <div>
          <Header />
          <DownNavbar/>

          <Navbar />
          <div className="w-full xl:w-[95%]  2xl:w-[75%] mx-auto px-4 bg-white">
            <div className="mt-5 py-3 w-full border-b-[2px] border-lightblue">
              <p className="text-homegrey font-medium">
                <Link href={'/blog'}>Blog</Link> / tag/<span className="text-pink capitalize">{lastsegment}</span>
              </p>
            </div>
            {/* <div className="w-full leading-[21px] bg-lightblue text-[18px] text-homegrey p-4 md:p-10 mt-3 rounded-2xl">
              <div
                dangerouslySetInnerHTML={{
                  __html: descripton?.description || 'data not available',
                }}
              />
            </div> */}

            <div className="w-full mt-16">
              <div className="w-full border-b-2 border-lightblue pb-5">
                <p className="text-homeblack text-[38px] font-bold">
                  <span className="uppercase">{lastsegment}&nbsp;</span>- Blogs
                </p>
              </div>
              <div className="flex mt-4 mb-16 justify-center flex-wrap gap-5">
                {blog?.map((elem: any, i: number) => (

                  <div key={i} className="relative border-[2px] border-lightblue hover:shadow-xl duration-300 sm:w-[45%] w-[9] lg:w-[32%] pb-2 rounded-lg">


                    <div className="bg-pink absolute top-3 left-3 text-white text-[17px] font-medium rounded-lg py-1 px-4">
                      {elem?.blog_date ? (() => {
                        const date = new Date(elem.blog_date);
                        const day = String(date.getDate()).padStart(2, '0'); // Get day with leading zero
                        const month = date.toLocaleString('en-US', { month: 'short' }); // Get abbreviated month
                        const year = date.getFullYear(); // Get year
                        return `${day} ${month}, ${year}`; // Format as "06 Nov, 2024"
                      })() : ''}
                    </div>


                    <div className="text-blue font-medium px-3 py-1 w-fit absolute top-3 right-3 rounded-md bg-lightblue">
                      <Link href={`/blog/category/${elem?.category?.category_slug}`}>
                        <span>{elem?.category?.name || 'Uncategorized'}</span>
                      </Link>{' '}
                      {/* | &nbsp;<span>Latest</span> */}
                    </div>
                    <div>
                      <Image src={elem?.image || '/images/blog1.png'} alt={elem?.image_alt || "alt"} height={218} width={461} className="rounded-lg max-h-[218px]" />
                    </div>
                    <div className="p-4 flex flex-col  gap-3 justify-between">

                      <p className="font-bold text-homeblack text-[24px] leading-tight cursor-pointer" onClick={() => setExpandedTitle(expandedTitle === i ? null : i)}>
                        {expandedTitle === i ? elem?.title : truncateText(elem?.title, 30)} {/* Truncate title to 30 characters */}
                      </p>
                      <p className="text-homegrey leading-[21px] text-[18px] cursor-pointer" onClick={() => setExpandedSummary(expandedSummary === i ? null : i)}>
                        {expandedSummary === i ? elem?.summary : truncateText(elem?.summary, 60)} {/* Truncate summary to 60 characters */}
                      </p>
                      <div>
                        <Link href={`/blog/${elem?.slug_link}`}>
                          <Button content={'View'}></Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center  mb-6">
              {/* Pagination */}
              <Pagination
                current={currentPage}
                total={totalBlogs} // Total number of blogs
                pageSize={10} // Blogs per page
                onChange={handlePageChange} // Handle page change
                showTotal={(total) => `Total ${total} blogs`} // Display total number of blogs
              />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Category;
