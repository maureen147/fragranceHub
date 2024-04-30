import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import '../css/SortByM.css'

const SortBy = ({ handleSort }) => {
  const [selectedOption, setSelectedOption] = useState("Best Seller");

  const handleSortClick = (option) => {
    setSelectedOption(option);
    handleSort(option);
  };

  return (
    <div className="sort-by">
      <DropdownButton id="dropdown-item-button" title={selectedOption} className="drop-button">
        <Dropdown.Item as="button" onClick={() => handleSortClick("BestSeller")}>
          Best Seller
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSortClick("A-Z")}>
          {selectedOption === "A-Z"
            ? setSelectedOption("Alphabetically, A-Z")
            : null}
          Alphabetically, A-Z
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSortClick("Z-A")}>
          {selectedOption === "Z-A"
            ? setSelectedOption("Alphabetically, Z-A")
            : null}
          Alphabetically, Z-A
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSortClick("LowToHigh")}>
        {selectedOption === "LowToHigh"
            ? setSelectedOption("Price, low to high")
            : null}
          Price, low to high
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSortClick("HighToLow")}>
        {selectedOption === "HighToLow"
            ? setSelectedOption("Price, high to low")
            : null}
          Price, high to low
        </Dropdown.Item>
        {/* Add more buttons for other sorting options if needed */}
      </DropdownButton>
    </div>
  );
};

export default SortBy;
