import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { BiSort } from "react-icons/bi";
import "../css/Newarrival.css";
import "../css/NAProductcard.css";
import BreadCrumb from "../components/NABreadcCumbs";
import NewAccordion from "../components/NAAccordion";
import Mydropdown1, { Mydropdown2 } from "../components/NADropdown";
import { data } from "../Db/ProductDb";
import ProductCard from "../components/NAProductCard";
import Footer from "../components/Footer";
import OffCanvasButton from "../components/NAFilter";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";
import ShowingAllfilter from "../components/ShowingAllfilter";
import Hamburger from "../components/Hamburger";
import { RenderPaginationButtons } from "../components/NAPagination";

const Newarrival = () => {
  const [currentProducts, setCurrentProducts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedAlphabet, setSelectedAlphabet] = useState("");
  const [selectedFragranceTypes, setSelectedFragranceTypes] = useState([]);
  const [selectedScentType, setSelectedScentType] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const itemsPerPage = 15;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginate = currentProducts.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / itemsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  // function prePage() {
  //   if (currentPage !== 1) { setCurrentPage(currentPage - 1); }
  // }
  function nextPage() {
    if (currentPage !== nPage) { setCurrentPage(currentPage + 1); }
  }
  function changeCurrentPage(index) {
    setCurrentPage(index);
  }
  const handleDelete = (indexToDelete) => {
    const newfilters = [...selectedFilters];
    newfilters.splice(indexToDelete, 1);
    setSelectedFilters(newfilters);
  };
 
  useEffect(() => {
    let filteredProducts = data;
    //filtering by Gender
    if (selectedGender.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>selectedGender.includes(product.gender));
    }
    //filtering by Brand
    if (selectedBrand.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>selectedBrand.includes(product.brand));
    }
    //filtering by Fragrance Type
    if (selectedFragranceTypes.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>selectedFragranceTypes.includes(product.fragrance_type));
    }
    //filtering by Scent Type
    if (selectedScentType.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>selectedScentType.includes(product.scent_type));
    }
    // filtering by Price
    if (selectedPrice.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        if (selectedPrice.includes("Under10K")) {
          return product.price <= 1000000;
        }
        if (selectedPrice.includes("10kTo50K")) {
          return product.price >= 1000000 && product.price <= 5000000;
        }
        if (selectedPrice.includes("Over50k")) {
          return product.price >= 5000000;
        }
      });
    }
    // Filtering by availability
    if (selectedAvailability !== null) {
      if (selectedAvailability === "true") {
        filteredProducts = filteredProducts.filter(
          (product) => product.isavailability === true
        );
      } else {
        filteredProducts = filteredProducts.filter(
          (product) => product.isavailability === false
        );
      }
    }
    setCurrentProducts(filteredProducts);
  }, [selectedGender,selectedBrand,selectedFragranceTypes,selectedScentType,selectedAvailability,selectedPrice,selectedAlphabet]);

  console.log(currentProducts);
  localStorage.setItem('currentProducts', JSON.stringify(currentProducts))
  
  const handleCheckboxChange = (event, value, category) => {
    const isChecked = event.target.checked;
    switch (category) {
      case "gender":
        setSelectedGender((prevState) => isChecked ? [...prevState, value]: prevState.filter((item) => item !== value)
        );
        break;
      case "brandType":
        setSelectedBrand((prevState) => isChecked ? [...prevState, value] : prevState.filter((item) => item !== value)
        );
        break;
      case "fragranceType":
        setSelectedFragranceTypes((prevState) => isChecked ? [...prevState, value] : prevState.filter((item) => item !== value)
        );
        break;
      case "scentType":
        setSelectedScentType((prevState) => isChecked ? [...prevState, value] : prevState.filter((item) => item !== value)
        );
        break;
      case "price":
        setSelectedPrice((prevState) => isChecked ? [...prevState, value] : prevState.filter((item) => item !== value)
        );
        break;
      case "":
      default:
        break;
    }

  };
  const handleShow = () => setShowFilter(!showFilter);
  const handleClick = () => setShowSort(!showSort);

  const handleAvailabilityChange = (availability) => {
    setSelectedAvailability(availability);
  };

  const handleSelectedFilter = (filter) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };
  const clearFilters = () => {
    setSelectedFilters([]);
    setSelectedGender([]);
    setSelectedBrand([]);
    setSelectedFragranceTypes([]);
    setSelectedScentType([]);
    setSelectedPrice([]);
    setSelectedAvailability([]);
  };
  return (
    <>
      <Menu />
      <SideNav />
      <div className="arrival-desk-div ">
        <div className="arrival-top-div-desk ">
          <div className="d-none d-md-none d-lg-block">
            {/* <BreadCrumb /> */}
          </div>
          <div className="d-flex justify-content-between ">
            <div className="d-block d-md-none d-lg-none mx-3 my-3">
              <h3>New Arrivals</h3>
              <span>Showing {lastIndex} Products</span>
              {/* <span> Showing {firstIndex + 1} - {lastIndex} of{" "}
                {currentProducts.length} Products</span> */}
            </div>
            <div className="d-none d-md-block d-lg-block w-75">
              <h3>New Arrivals</h3>
              <span>Showing {lastIndex} Products</span>
              {/* <span>Showing {firstIndex + 1} - {lastIndex} of{" "}
                {currentProducts.length} Products</span> */}
            </div>

            <div className="d-none d-md-none d-lg-block mt-2">
              <span>
                {/* Dropdown for desktop */}
                <Mydropdown1 />
              </span>
            </div>
          </div>
        </div>

        <div className=" d-flex justify-content-between d-md-flex justify-md-content-between arrival-top-div-mob d-block d-md-block d-lg-none px-3 mb-3">
          <div className="mt-2">
            <div className="arrival-filter-div">
            
            <OffCanvasButton
                handleCheckboxChange={handleCheckboxChange}
                handleAvailabilityChange={handleAvailabilityChange}
                handleSelectedFilter={handleSelectedFilter}
                selectedFilters={selectedFilters}
                clearFilters={clearFilters}
              />
            </div>
          </div>
          
          <div className="me-lg-3 mt-2">
          <h6 onClick={handleClick}>
        <span className="">
        <BiSort />
        </span>
        Sort By
      </h6>
            
            {/* Dropdown for mobile */}
            {showSort && <Mydropdown2 />}
          </div>
        </div>

        {selectedFilters.length > 0 && (
          <div className="selected-filters w-50">
            {selectedFilters.map((filter, index) => (
              <span key={index} className="selected-filter">
                {filter}

                <span
                            className="bg-danger text-light p-1 mb-5 rounded-5 text-center"
                            style={{
                              position: "absolute",
                              left: "13 %",
                              width: "20px",
                              height: "20px",
                              fontSize: "10px",
                              cursor: "pointer",
                            }}
                            onClick={() => handleDelete(index)}
                          >
                            X
                          </span>
              </span>
            ))}
          </div>
        )}
        <div className="arrival-products-div-mob d-flex justify-content-center align-items-center flex-wrap gap-3 ">
        {currentProducts.length > 0 ? <>
            {paginate.map((product, index) => {
              return (     
                <div className=" d-block d-md-block d-lg-none" key={index}>
                  <ProductCard products={product} />
                </div>
              );
            })}
            <div className="pagination d-block d-md-block d-lg-none "><RenderPaginationButtons numbers={numbers} currentPage={currentPage} changeCurrentPage={changeCurrentPage} nPage= {nPage} nextPage={nextPage}/></div>
          </> : <><h3 className="text-center d-block d-md-block d-lg-none">No Products Found</h3></>} 
        </div>
        <div className="arrival-main-div">
          <div className="arrival-filter-div d-none d-md-none d-lg-block me-3">
            <h6 className="ms-3 mt-3 mb-2">
              <b>Filter By</b>
            </h6>
            <NewAccordion
              handleCheckboxChange={handleCheckboxChange}
              handleAvailabilityChange={handleAvailabilityChange}
            />
          </div>

          {/* Desktop */}
          
          <div className="arrival-products-div-desk d-flex flex-wrap gap-3 ">
          {currentProducts.length > 0 ? <>
            {paginate.map((product, index) => {
              return (     
                <div className=" d-none d-md-none d-lg-block" key={index}>
                  <ProductCard products={product} />
                </div>
              );
            })}
            <div className="pagination d-none d-md-none d-lg-block"><RenderPaginationButtons numbers={numbers} currentPage={currentPage} changeCurrentPage={changeCurrentPage} nPage= {nPage} nextPage={nextPage}/></div>
          </> : <><h3 className="text-center d-none d-md-none d-lg-block">No Products Found</h3></>} 
            
            {/* Sort by for desktop drop down is in a dropdown component */}
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default Newarrival;
