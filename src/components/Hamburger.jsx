import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import closeImage from "../assets/images/Vector star.png"
import NewAccordion from '../components/NAAccordion';
import { CiFilter } from "react-icons/ci";
import { data } from "../Db/ProductDb";



function Hamburger({handleCheckboxChange,handleAvailabilityChange}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const handleSho = () => setShowFilter(!showFilter);
    const [showFilter, setShowFilter] = useState(false);


    return (
        <div className='d-block d-md-none'>
            <Button variant="" onClick={handleShow}  className="me-2" >
            <span className="" >
              <span>
                <CiFilter />
              </span>{" "}
              <b>Filter By </b>
            </span>
            {showFilter && (
              <div className="arrival-filter-div">
                <NewAccordion
                  handleCheckboxChange={handleCheckboxChange}
                  handleAvailabilityChange={handleAvailabilityChange}
                />
              </div>
            )}
            </Button>
            <Offcanvas show={show} onHide={handleClose} handleCheckboxChange={handleCheckboxChange}
                  handleAvailabilityChange={handleAvailabilityChange} className="hamburger-body w-75 ">
                <div className="d-flex justify-content-between">
                    <div></div>
                    <Offcanvas.Header >
                        <Button variant="" onClick={handleClose} className="">
                            <img src={closeImage} alt="" />
                        </Button>
                    </Offcanvas.Header>
                </div>

                <Offcanvas.Body>
                <NewAccordion
                  handleCheckboxChange={handleCheckboxChange}
                  handleAvailabilityChange={handleAvailabilityChange}
                />

                </Offcanvas.Body>

                <Button  style={{backgroundColor: "teal"}} onClick={handleClose}>
                  View Results
                </Button>
                
            </Offcanvas>
            
        </div>
    );
}








export default Hamburger

