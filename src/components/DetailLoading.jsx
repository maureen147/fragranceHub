import React from "react";
import "../css/DetailCardLoading.css";

const DetailCardLoading = () => {
  return (
    <div className="detail-card-loading">
      <div className="detail-image-loading">
        <div className="detail-side-image-loading">
          <div className="side-image"></div>
          <div className="side-image"></div>
          <div className="side-image"></div>
        </div>
        <div className="detail-main-image-loading"></div>
      </div>
      <div className="detail-info-loading">
        <div className="detail-name-loading"></div>
        <div className="detail-description-loading"></div>
        <div className="detail-price-loading"></div>
        <div className="detail-size-loading"></div>
        <div className="detail-quantity-loading"></div>
        <div className="">
        <div className="detail-button-loading"></div>
        <div className="detail-button-loading"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailCardLoading;
