import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import hamburger from "../assets/icons/ham.png";
import Logo from "../assets/icons/Frame 579 (0).png";
import "../css/SideBar.css";
import Searchi from "../assets/icons/Vector (5).png";
import Humani from "../assets/icons/person.png";
import Carti from "../assets/icons/cart.png";
import SearchB from "../assets/icons/Vector (searchb).png";
import HumanB from "../assets/icons/humprofile.png";
import CartB from "../assets/icons/blackcart.png";
import FragLogo from "../assets/images/Frame 579.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import Search from "./forms/Search";
// import Search from "./forms/Search";
// import { useNavigate } from "react-router-dom";

function SideNav() {
  const [show, setShow] = useState(false);
  const { auth, login } = useAuth();

  const navigate = useNavigate();

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarVisible((prev) => !prev);
  };

  return (
    <>
      <div className="off-body sticky-top">
        <div className="upNav " style={{ color: "white" }}>
          <div className="left-nav">
            <img src={hamburger} alt="" onClick={handleShow} />

            <Link to="/" className="logs">
              <img src={Logo} alt="" className="logoimg" />
            </Link>
          </div>

          <div className="right-icons">
            <div className="search-icon" onClick={toggleSearchBar}>
              <img src={Searchi} alt="Search" />
            </div>
            <div className="search">
            {isSearchBarVisible && <Search toggleSearchBar={toggleSearchBar}/>}
            </div>

            {!auth?.user ? (
              <Link to="/login">
                <img src={Humani} alt="" />
              </Link>
            ) : (
              <Link
                to={
                  auth?.user.role === 1 ? "/dashboard/admin" : "/dashboard/user"
                }
              >
                <img src={Humani} alt="" />
              </Link>
            )}

            <Link to="/cart">
              <img src={Carti} alt="" />
            </Link>
             <div className="cartcount-s">
              0
            </div>
              </div>
          </div>  
        </div>

        <Offcanvas className="w-75" show={show} onHide={handleClose}>
          <div className="show-header ">
            <div className="left-logo">
              <Offcanvas.Header
                closeButton
                className="off-header"
              ></Offcanvas.Header>
              <img src={FragLogo} alt="" />
            </div>
          </div>
          <Offcanvas.Body className="off-main">
            <div className="">
              <ul className="first-li">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Home</li>
                </Link>

                <Link
                  to="/all-fragrances"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>All Fragrance</li>
                </Link>

                <Link
                  to="/new-arrivals"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>New Arrival</li>
                </Link>

                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Blogs</li>
                </Link>

                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>

            <div className="straight-line"></div>

            <div>
              <ul className="last-li">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>My Account</li>
                </Link>

                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Help</li>
                </Link>

                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>FAG</li>
                </Link>

                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Shipping Information</li>
                </Link>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
    </>
  );
}

export default SideNav;
