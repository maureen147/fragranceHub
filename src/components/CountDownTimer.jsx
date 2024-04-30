import React, { useState, useEffect } from "react";
import "../css/Countdown.css";
import flash from "../assets/icons/flash logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCardLoading from "./ProductCardLoadingM";

const CountDownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState();

  function calculateTimeRemaining() {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(24, 0, 0, 0);

    const timeDiff = endOfDay.getTime() - now.getTime();

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`/product/all`);
        setProduct(response?.data?.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
      console.log(product);
    };
    fetchData();
  }, []);

  const flashProduct = product?.slice(4, 8);

  return (
    <>
      <section className="flash-conatinerM">
        <div className="flash-header">
          <div className="left-flashM">
            <img src={flash} alt="flash" />
            <span>Flash Sale</span>
          </div>
          <span>
            Time Left:{" "}
            {`${timeRemaining.hours}h : ${timeRemaining.minutes}m : ${timeRemaining.seconds}s`}
          </span>
          <span>
            View all <FaArrowRightLong />
          </span>
        </div>
        <div className="flash-product">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <ProductCardLoading key={index} />
              ))
            : flashProduct.map((product) => {
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

export default CountDownTimer;
