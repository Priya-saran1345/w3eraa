'use client';

import React from 'react';
import { Pagination } from 'antd';

interface BlogPaginationProps {
  currentPage: number;
  totalBlogs: number;
  onPageChange: (page: number) => void;
}

const BlogPagination: React.FC<BlogPaginationProps> = ({ currentPage, totalBlogs, onPageChange }) => {
  return (
    <div className="flex justify-center mb-6">
      <Pagination
        current={currentPage}
        total={totalBlogs}
        pageSize={10}
        onChange={onPageChange}
        showTotal={(total) => `Total ${total} blogs`}
      />
    </div>
  );
};

export default BlogPagination;

