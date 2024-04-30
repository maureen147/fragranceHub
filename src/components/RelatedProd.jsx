import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/RelatedProd.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";


const RelatedProd = () => {
  const { productId } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Detecting device screen width
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  // Setting the limit for related products
  const limit = isMobile ? 5 : 2 && isTablet ? 6 : 2;
  // const limit = isMobile ? (isTablet ? 5 : 4) : 2;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/product/related/${productId}`);
        console.log("Fetched data:", response.data);
        // setRelatedProducts(response.data.relatedProducts);
        const shuffledProducts = shuffle(response.data.relatedProducts);
        setRelatedProducts(shuffledProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [productId]);

   // Fisher-Yates shuffle algorithm
   const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle
    while (0 !== currentIndex) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // Swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  return (
    <div className="rpB">
      <div className="rpg-container pb-lg-4">
        <div className="">
          <h3>Related Products</h3>
        </div>
        <div className="rpG  rounded px-lg-4  pt-lg-4 d-flex flex-row flex-lg-column justify-content-md-between gap-2">
          {relatedProducts
          .slice(0, limit )
          .map((product) =>{ 
            const { _id, images, name, price, isAvailable } = product;
            let Price = price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            });
            return (
              <Link className="link" to={`/detail/${product._id}`}>
                <div key={_id}>
                  <div className="m-card-Container mt-lg-4" key={_id} >
                    <div className="m-image">
                      <img src={images[0].url} alt={name} />
                    </div>
                    <div className="m-card-info">
                      <div className="m-card-text">
                        <h4>{name}</h4>
                        {/* <p>{description}</p> */}
                        <h2>&#x20A6;{Price}</h2>
                      </div>
                      <div className="m-card-btn pb-2">
                        {isAvailable ? (
                          <button className="">Add to cart</button>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProd;
