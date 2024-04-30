import React from 'react';
import '../css/paginationM.css'
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange, totalProductsPerPage }) => {
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    // Add the current page and its adjacent pages (if they exist)
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 0 && i <= totalPages) {
        pageNumbers.push(
          <button key={i} onClick={() => handlePageClick(i)} className={currentPage === i ? 'active-m' : ''}>
            {i}
          </button>
        );
      }
    }
    return pageNumbers;
  };

  // Conditionally render pagination based on total products per page
  if (totalPages <= totalProductsPerPage) {
    return null; // If total pages are less than or equal to products per page, hide pagination
  }

  return (
    <div className="pagination-btn">
      {/* <strong onClick={() => onPageChange(1)} className={currentPage === 1 ? 'disabled' : ''}>&lt;&lt;</strong> */}
      {/* <strong onClick={() => onPageChange(currentPage - 1)} className={currentPage === 1 ? 'disabled' : ''}>&lt;&lt;</strong> */}
      {renderPageNumbers()}
      {/* <strong onClick={() => onPageChange(currentPage + 1)} className={currentPage === totalPages ? 'disabled' : 'disable'}>&gt;&gt;</strong> */}
      {/* <strong onClick={() => onPageChange(totalPages)} className={currentPage === totalPages ? 'disabled' : 'disable'}></strong> */}
    </div>
  );
};

export default Pagination;
