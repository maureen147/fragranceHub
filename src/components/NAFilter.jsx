import React, { useState } from "react";
import "../css/FilterbyM.css"; // Create a CSS file for styling
import { LuFilter } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import NewAccordion from "./NAAccordion";
import Button from 'react-bootstrap/Button';
import Accord from "./AccordionM";

const OffCanvasButton = ({
  handleCheckboxChange,
  handleAvailabilityChange,
  handleSelectedFilter,
  selectedFilters,
  clearFilters
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filtered, setFiltered] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDelete = (indexToDelete) => {
    const newfilters = [...selectedFilters];
    newfilters.splice(indexToDelete, 1);
    setFiltered(newfilters);
  };

  return (
    <div className="offcanvas-container">
      <h6 onClick={toggleMenu}>
        <span className="filter-iconM">
          <LuFilter />
        </span>
      {selectedFilters.length > 0 && (<span className="red-dotM"><GoDotFill /></span>)}
        Filter By
      </h6>
      {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}
      <div className={`offcanvas-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="filter-info">
          <div className="info-left-f">
            <span className="close-button-f" onClick={closeMenu}>
              X
            </span>
            <span className="filter-text">
              Filters {selectedFilters.length > 0 && (<span>({selectedFilters.length})</span>)}
            </span>
          </div>
          <button onClick={clearFilters}>Clear</button>
        </div>
        <p className="p-2 border px-3">FILTERS
        {/* {selectedFilters.length > 0 && (
          <div className="selected-filters">
            {selectedFilters.map((filter, index) => (
              <span key={index} className="selected-filter">
                {filter}
              </span>
            ))}
          </div>
        )} */}
        </p>
        <div className="accord-offcanvas">
          <Accord
            handleCheckboxChange={handleCheckboxChange}
            handleAvailabilityChange={handleAvailabilityChange}
            selectedFilters={selectedFilters}
            handleSelectedFilter={handleSelectedFilter}
          />
        </div>

        <Button className="btn-primary w-100" onClick={closeMenu}>
                  View Results
        </Button>

      </div>
     

        
    </div>
  );
};

export default OffCanvasButton;
