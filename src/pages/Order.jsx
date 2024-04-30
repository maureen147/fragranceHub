import { FaCheckCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";

const Order = () => {
  return (
    <>
      <Menu />
      <SideNav />
      <div className=" d-flex justify-content-center mx-3 align-items-center top-10 z-2 w-100 pt-5 ">
        <FaCheckCircle
          size="10%"
          className="text-success  text-center text-md-start"
        />
      </div>

      <div className="d-flex flex-column justify-content-center mx-3 align-items-center top-10 z-2 w-100 px-2">
        <h3 className="fw-bold text-center text-md-start">
          YOUR ORDER HAS BEEN RECEIVED
        </h3>
        <p className="fs-4">Thank You For placing an Order</p>
        <p className="fs-6"> Order no: 12345678</p>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="outline-secondary bg-dark text-white border-rounded"
              onClick={() => scroll("right")}
            >
              see order details
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Order;
