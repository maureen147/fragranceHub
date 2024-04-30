import React from "react";
import "../css/ProductM.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { _id, images, name, description, price, isAvailable } = product;
  let Price = price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  return (
    <Link className="link" to={`/detail/${product._id}`}>
      <div key={_id}>
        <div className="m-card-Container" key={_id}>
          <div className="m-image">
            <img src={images[0].url} alt={name} />
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
  );
};

export default ProductCard;
