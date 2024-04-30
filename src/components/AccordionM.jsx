import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "../css/AccordionM.css";
import { IoSearch } from "react-icons/io5";
// import { data } from "../Db/ProductDb";
import { GoDotFill } from "react-icons/go";
import axios from "axios";

const Accord = ({
  handleCheckboxChange,
  handleAvailabilityChange,
  handleSelectedFilter,
}) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

// Fetching from database
const fetchData = async () => {
  try {
    const response = await axios.get(`product/all?page=1&limit=100000`);
    setData(response?.data?.products);
    console.log(response?.data?.products);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

useEffect(() => {
  fetchData();
}, []);

// All Gender
const genderList = Array.from(
  new Set(
    data.map((product) => {
      return product.gender;
    })
  )
).sort();

// All brand
const brandList = Array.from(
  new Set(
    data.map((product) => {
      return product.brand;
    })
  )
).sort();

// All Fragrant Type
const fragrantType = Array.from(
  new Set(
    data.map((product) => {
      return product.fragranceType;
    })
  )
).sort();

// All scent type
const scentType = Array.from(
  new Set(
    data.map((product) => {
      return product.scentType;
    })
  )
).sort();
  // console.log(genderList);

  //Alphabet
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <>
      <Accordion defaultActiveKey={[""]} alwaysOpen>
        <Accordion.Item eventKey="0" className="accord">
          <Accordion.Header className="">
            <span className="accord-text">Gender</span>
          </Accordion.Header>
          <Accordion.Body className="accord-gender">
            {genderList.map((gender, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name={gender}
                  value={gender}
                  onChange={(e) => {
                    handleCheckboxChange(e, gender, "gender");
                    handleSelectedFilter(gender);
                  }}
                />
                {gender}
              </label>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accord">
          <Accordion.Header>
            <span className="accord-text">Brand</span>
          </Accordion.Header>
          <Accordion.Body className="accord-brand">
            <div className="brand-alpha">
              {alphabets.map((letter, index) => (
                <span
                  key={index}
                  onClick={() => {
                    handleButtonClick(letter);
                    setSearch(inputValue);
                  }}
                >
                  {letter.toUpperCase()}
                </span>
              ))}
            </div>
          </Accordion.Body>
          <Accordion.Body className="accord-input">
            <div className="input-body">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
              />
              <span>
                <IoSearch />
              </span>
            </div>
            <div className="brand-list">
              {brandList
                .filter((brand) =>
                  search.toLowerCase() === ""
                    ? true
                    : brand.toLowerCase().includes(search)
                )
                .map((brand, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      value={brand}
                      onChange={(e) => {
                        handleCheckboxChange(e, brand, "brandType");
                        handleSelectedFilter(brand);
                      }}
                    />
                    {brand}
                  </label>
                ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accord">
          <Accordion.Header>
            <span className="accord-text">Fragrance Type</span>
          </Accordion.Header>
          <Accordion.Body className="accord-price">
            {fragrantType.map((fragrant, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={fragrant}
                  onChange={(e) => {
                    handleCheckboxChange(e, fragrant, "fragranceType");
                    handleSelectedFilter(fragrant);
                  }}
                />
                {fragrant}
              </label>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="accord">
          <Accordion.Header>
            <span className="accord-text">Scent Type</span>
          </Accordion.Header>
          <Accordion.Body className="accord-price">
            {scentType.map((scent, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={scent}
                  onChange={(e) => {
                    handleCheckboxChange(e, scent, "scentType");
                    handleSelectedFilter(scent);
                  }}
                />
                {scent}
              </label>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="accord">
          <Accordion.Header>
            <span className="accord-text">Price</span>
          </Accordion.Header>
          <Accordion.Body className="accord-price">
            <label>
              <input
                type="checkbox"
                value="Under10K"
                onChange={(e) => {
                  handleCheckboxChange(e, "Under10K", "price");
                  handleSelectedFilter("Price less than 10K");
                }}
              />
              Under &#x20A6;10,000
            </label>
            <label>
              <input
                type="checkbox"
                value="10kTo15K"
                onChange={(e) => {
                  handleCheckboxChange(e, "10kTo50K", "price");
                  handleSelectedFilter("Price between 10k to 15k");
                }}
              />
              &#x20A6;10,000 - &#x20A6;50,000
            </label>
            <label>
              <input
                type="checkbox"
                value="Over50k"
                onChange={(e) => {
                  handleCheckboxChange(e, "Over50k", "price");
                  handleSelectedFilter("Price over 50k");
                }}
              />
              &#x20A6;50,000+
            </label>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" className="accord">
          <Accordion.Header>
            <span className="accord-text">Availability</span>
          </Accordion.Header>
          <Accordion.Body className="accord-availability">
            <ul>
              <li
                onClick={() => {
                  handleAvailabilityChange("true");
                  handleSelectedFilter("Product In stock");
                }}
              >
                <GoDotFill className="" />
                In Stock
              </li>
              <li
                onClick={() => {
                  handleAvailabilityChange("false");
                  handleSelectedFilter("Product Out of stock");
                }}
              >
                <GoDotFill />
                Out of Stock
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Accord;
