
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/Nav.css";
import Logo from "../assets/images/Frame 579.png";
import Profileimg from "../assets/icons/humprofile.png";
import Cartimg from "../assets/icons/blackcart.png";
import Seicon from "../assets/icons/Vector (5).png";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "../contexts/Auth.jsx";
import { useNavigate, Link } from "react-router-dom";
import Search from "./forms/Search.jsx";





function Menu() {
  const { auth, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="sticky-top header">
        <div className="top-nav">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="search-sec">
            <Search />
          </div>

          <div className="profile-con">
            <div className="profile">
              <div className="pro-img">
                <img src={Profileimg} alt="" />
              </div>
              <div className="select-container">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {auth?.user ? auth.user.name : "My Account"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {!auth.user ? (
                      <div className="text-center">
                        <Dropdown.Item href="/login" className="first-drop">
                          Login
                        </Dropdown.Item>
                        <Dropdown.Item href="/signup" className="first-drop">
                          Sign Up
                        </Dropdown.Item>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Dropdown.Item
                          className="first-drop"
                          href={
                            auth?.user.role === 1
                              ? "/dashboard/admin"
                              : "/dashboard/user"
                          }
                        >
                          Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="first-drop text-danger"
                          onClick={handleLogout}
                        >
                          Logout
                        </Dropdown.Item>
                      </div>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

          <div className="everything-cart">
          <div className="cart-sec">
              <Link to="/cart">
                <img src={Cartimg} alt="" />
              </Link>
            </div>
            <div className="cartcount">
              <span>3</span>
            </div>
          </div>
          </div>
        </div>

        <Navbar expand="lg" className="bg-body-primary fs-5" id="bottom">
          <Container className="">
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Nav className="me-auto">
                <Nav.Link href="/" className="text-white">
                <Link to="/" className="text-white text-decoration-none">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href="/all-fragrances" className="text-white">
                  <Link to="/all-fragrances" className="text-white text-decoration-none">
                    All Fragrance
                  </Link>
                </Nav.Link>
                <NavDropdown
                  className="dropp text-white"
                  id="basic-nav-dropdown"
                  title="All Brands"
                >
                  <NavDropdown.Item href="#action/3.1">Adidas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Armaf</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Armani</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Calvin klein
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Dior</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Dolce & Gabbana
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Essenza
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Giorgio Armani
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Hugo Boss
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    jimmy Choo
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Lattafa
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Mont Blanc
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Ralph Lauren
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Versace
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Yves Saint Laurent
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Zaien</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/new-arrivals" className="text-white">
                <Link to="/new-arrivals" className="text-white text-decoration-none">
                    New Arrivals
                  </Link>
                </Nav.Link>
                <Nav.Link href="/blog" className="text-white">
                <Link to="/blog" className="text-white text-decoration-none">
                    Blog
                  </Link>
                </Nav.Link>
                <Nav.Link href="/contact" className="text-white">
                <Link to="/contact" className="text-white text-decoration-none">
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Menu;