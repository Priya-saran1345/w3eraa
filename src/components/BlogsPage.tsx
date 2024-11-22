'use client';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React, { useEffect, useState, useRef } from 'react';
import Footer from '@/components/footer';
import Image from 'next/image';
import Loader from '@/components/loader';
import axios from 'axios';
import { BASE_URL } from '@/util/api';
import { Pagination } from 'antd';
import Link from 'next/link';

const Blogs = () => {
  const [blogs, setBlogs] = useState<any>(null);
  const [allBlogs, setAllBlogs] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1); // Track the current page
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Fetch blogs on page load
  const fetchBlogs = async (page: number = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}blogs/?page=${page}`);
      setBlogs(response.data);
      setAllBlogs(response.data.results.blogs);
      const totalPages = Math.ceil(response.data.count / 10); // Assuming 10 blogs per page
      setPages(totalPages);
    } catch (error: any) {
      console.error('Error fetching blogs:', error.message);
    }
  };
  useEffect(() => {
    fetchBlogs(currentPage); // Fetch blogs for the current page
  }, [currentPage]);

  // Filter blogs based on search query
  const filteredBlogs = allBlogs.filter((elem: any) =>
    elem?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    elem?.summary?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle page change for pagination with smooth scroll to top
  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the current page on pagination change
    fetchBlogs(page); // Fetch blogs for the selected page

    // Scroll to the top of the page smoothly
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Align to the start of the section
    });
  };
  return (
    <div>
      {
      // !blogs ? <Loader /> : 
      (
        <div className="w-full">
          <Header />
          <Navbar />
          <div className="w-full px-4 bg-[url('/images/blog-bg.png')] h-[45vh] flex justify-center items-center">
            <h1 className="text-white text-[32px] font-bold lg:text-[48px]">W3era Blogs</h1>
          </div>
          <div className="bg-lightblue py-5">
            <div className="w-full flex gap-5 relative h-full justify-between lg:flex-nowrap flex-wrap mx-auto xl:w-[95%] 2xl:w-[75%] px-4 text-white mb-8 lg:mb-32">
              <aside>
                <div className="xl:min-w-[414px] w-[314px] sticky top-32 flex flex-col gap-6">
                  <div className="bg-white w-full flex text-[18px] font-medium justify-between rounded-lg p-3">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="p-2 text-black w-full bg-grey border-0 outline-none"
                    />
                    <button className="bg-pink rounded-md text-white py-2 px-6">Search</button>
                  </div>
                  <div className="bg-white leading-tight p-8 rounded-lg text-textGrey text-[18px] hidden lg:block">
                    <div className="border-b-2 border-pink w-fit mb-4 text-black">
                      <p className="text-[24px] font-medium mb-1 text-homeblack">Recent Posts</p>
                    </div>
                    <ul className="flex flex-col gap-3 list-disc mx-4">
                      {blogs?.results?.blogs?.slice(0, 5).map((elem: any) => (
                        <div key={elem?.slug_link}>
                          <Link href={`/blog/${elem?.slug_link}`} key={elem?.slug_link}>

                            <p>{elem?.title}</p>
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div className='bg-white p-8 rounded-lg max-h-[280px]  overflow-y-auto text-textGrey text-[18px] hidden lg:block'>
                    <div className='border-b-2 border-pink w-fit mb-4 text-black'>
                      <p className='text-[24px] font-medium mb-1'>Categories</p>
                    </div>
                    <ul className='flex flex-col leading-tight gap-3 list-disc mx-4'>
                      {blogs?.results?.category?.map((elem: any) => (
                        <Link href={`/blog/category/${elem?.category_slug}`} key={elem.name}>
                          <li className='hover:text-pink cursor-pointer'>{elem?.name}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
              <div className="w-full">
                <div className='bg-white p-3 md:p-8 mt-5 block lg:hidden  rounded-lg text-textGrey text-[18px] '>
                  <div>

                    <div className='border-b-2 border-pink w-fit mb-4 text-black'>
                      <p className='text-[24px] font-medium mb-1'>Categories</p>
                    </div>
                    <div className='flex flex-wrap mt-6  leading-tight gap-3 list-disc md:mx-4'>
                      {blogs?.results?.category?.map((elem: any) => (
                        <Link href={`/blog/category/${elem?.category_slug}`} key={elem.name}>
                          <div className='hover:text-pink p-2 rounded-md bg-grey cursor-pointer'>{elem?.name}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:px-5 " ref={sectionRef}>
                  <div className="border-b-2 border-pink w-fit mb-4 text-black">
                    <p className="text-[28px] text-homeblack font-semibold mb-1">Latest Blogs</p>
                  </div>

                  {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((elem: any, index: number) => (
                      <Link href={`/blog/${elem?.slug_link}`} key={index}>

                        <div key={index} className="bg-white rounded-lg my-4 w-full p-4 flex sm:flex-row flex-col
                       sm:text-left items-start gap-2 ">
                        {
                          elem?.image &&
                          <Image
                            src={elem?.image || ''}
                            height={175}
                            width={328}
                            alt={elem?.image_alt}
                            className="w-full sm:w-[300px] min-h-[175px] xl:min-w-[328px]"
                          />
                        }
                          <div className="flex flex-col ml-4 items-start gap-2">
                            <p className="text-[20px] text-homeblack font-medium">{elem?.title}</p>
                            <p className="text-homegrey text-[18px]">
                              <Link href={`/blog/category/${elem?.category?.category_slug}`}>
                                <span className="text-blue font-medium">{elem?.category?.name || 'Uncategorized'}</span> |
                              </Link>
                              &nbsp;<span className="text-homegrey">{elem?.blog_date || ''}</span>
                            </p>
                            <p className="text-[18px] text-textGrey">
                              {elem?.summary && elem?.summary.length > 100
                                ? `${elem?.summary.substring(0, 80)}...`
                                : elem?.summary}
                            </p>
                            <button className="text-pink text-[18px]  font-medium">Read More</button>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p>No blogs available.</p>
                  )}

                  <div className="flex w-full  justify-center mt-3">
                    <Pagination
                      current={currentPage}
                      total={blogs?.count || 0} // Total blogs count
                      pageSize={10} // Assuming 10 blogs per page
                      onChange={handlePageChange} // Handle page change
                    // showQuickJumper
                    // showTotal={(total) => `Total ${total} blogs`} // Display total number of blogs
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Blogs;
