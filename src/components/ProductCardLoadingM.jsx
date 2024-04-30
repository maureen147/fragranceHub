import React from "react";
import '../css/ProductLoading.css'

const ProductCardLoading = () => {
    return (
      <div className="product-card-loading">
        <div className="product-image-loading"></div>
        <div className="product-details-loading">
          <div className="product-title-loading"></div>
          <div className="product-description-loading"></div>
          <div className="product-price-loading"></div>
        </div>
        <div className="product-button-loading"></div>
      </div>
    );
  };
  
  export default ProductCardLoading;
