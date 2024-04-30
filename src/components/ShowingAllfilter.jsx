import React from "react";
import '../css/ShowingFilter.css'

const ShowingAllfilter = ({ clearFilters, selectedFilters }) => {
  return (
    <>
      {selectedFilters.length > 0 && (
        <div className="selected-filters">
         <strong>Showing filter by:</strong>
          {selectedFilters.map((filter, index) => (
            <span key={index} className="selected-filter">
              {filter}
            </span>
          ))}
          {/* <button onClick={clearFilters}>Clear All</button> */}
        </div>
      )}
    </>
  );
};

export default ShowingAllfilter;
