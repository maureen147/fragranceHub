import React from "react";
import ThinArrow from "../assets/images/Thin Arrow.png";
import { Link } from "react-router-dom";
import "../css/Newarrival.css";
import "../css/NAProductcard.css";
import ProductCard from "./NAProductCard";
import { data } from "../Db/ProductDb";

const NewArrivalComponent = ({ title, link }) => {
  // Mobile
  const limit = 10;
  const limitedData = data.slice(0, limit);

  // Desktop
  const limit_desktop = 4;
  const limitedDataDesktop = data.slice(0, limit_desktop);

  // axios

  return (
    <>
      <div className="d-flex justify-content-between home-new-arrival">
        <div>
          <h5>{title}</h5>
        </div>
        <div>
          <Link
            to={link}
            className="text-decoration-none"
            style={{ color: "teal" }}
          >
            View All{" "}
            <span>
              <img src={ThinArrow} alt="" />
            </span>
          </Link>
        </div>
      </div>

      {/* Product Cards for Desktop */}
      <div>
        <div className="d-md-flex d-lg-flex d-none d-md-none d-lg-block justify-content-lg-center align-items-lg-center gap-3">
          {limitedDataDesktop.map((product) => {
            return (
              <div className="" key={product._id}>
                <ProductCard products={product} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Cards for Mobile */}
      <div>
        <div className="d-flex d-md-flex d-block d-md-block d-lg-none home-new-products gap-3">
          {limitedData.map((product) => {
            return (
              <div className="" key={product._id}>
                <ProductCard products={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewArrivalComponent;
