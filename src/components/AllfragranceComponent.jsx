import React, { useState, useEffect } from "react";
import "../css/Countdown.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCardLoading from "./ProductCardLoadingM";

import "../css/AllfragranceComponent.css";
const AllfragranceComponent = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState();

    // Detecting device screen width
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;
  
    // Setting the limit for related products
    const limit = isMobile ? 17 : 17 && isTablet ? 18 : 17;
    // const limit = isMobile ? (isTablet ? 5 : 4) : 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/product/all?page=1&limit=200`);
        setProduct(response?.data?.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
      console.log(product);
    };
    fetchData();
  }, []);

  const allFragrance = product?.slice(9, limit);

  return (
    <>
      <section className="home-all-fragrance">
        <div className="home-all-fragrance-header">
          <span>All Featured Fragrance</span>
          <span>
            View all <FaArrowRightLong />
          </span>
        </div>
        <div className="home-all-fragrnace-product">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <ProductCardLoading key={index} />
              ))
            : allFragrance.map((product) => {
                const { _id, images, name, description, price, isAvailable } =
                  product;
                let Price = price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                });
                return (
                  <>
                    <Link className="link" to={`/detail/${product._id}`}>
                      <div key={_id}>
                        <div className="m-card-Container" key={_id}>
                          <div className="m-image">
                            <img src={images[0].url} />
                          </div>
                          <div className="m-card-info">
                            <div className="m-card-text">
                              <h4>{name}</h4>
                              <p>{description}</p>
                              <h2>&#x20A6;{Price}</h2>
                            </div>
                            <div className="m-card-btn">
                              {isAvailable ? (
                                <button>Add to cart</button>
                              ) : (
                                <button className="not-ava" disabled>
                                  Sold Out
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
        </div>
      </section>
    </>
  );
};

export default AllfragranceComponent;
