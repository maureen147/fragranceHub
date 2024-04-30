import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../css/DetailCards.css";
import Star from "../assets/images/Vector star.png";
import StarHalf from "../assets/icons/icons8-star-half-48.png"
import Plus from "../assets/images/ic_sharp-plus.png";
import Minus from "../assets/images/ic_sharp-minus.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios"; 

const DetailCard = ({ product }) => {
  const { productId } = useParams();
  const { name, description, images, price, quantity, isAvailable, avgRating, size} = product;

  let Price = price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  const [selectedImage, setSelectedImage] = useState(images[0]?.url);

  // const [rating, setRating] = useState(0); // State variable to store user's rating
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };

  // const handleSubmitRating = async () => {
  //   setIsSubmitting(true);
  //   try {
      // Make a POST request to the backend rating endpoint
      // const response = await axios.post(`/rating/${productId}`,{
      //   productId: product._id,
      //   userId: "user123", // Replace with actual user ID
      //   rating: rating,
      // });
      // console.log("Rating submitted:", response.data);
      // Optionally, update UI or provide feedback to the user
    // } catch (error) {
    //   console.error("Error submitting rating:", error);
      // Optionally, handle errors or provide feedback to the user
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  useEffect(() => {
    // Set the selected image to the first image in the array when component mounts
  
      setSelectedImage(images[0]?.url);
 
  }, [images]);
  const [count, setCount] = useState(1);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  let starRating;
  if (avgRating ) {
    const fullStars = Math.floor(avgRating);
    const halfStar = avgRating - fullStars >= 0.1;
    starRating = Array.from({ length: fullStars }, (_, index) => (
      <img key={index} src={Star} alt="Star" />
    ));
    if (halfStar) starRating.push(<img key="half" src={StarHalf} alt="Half Star" />);
  } else {
    starRating = <span style={{fontSize: "1.1rem"}}>No rating</span>;
  }

  return (
    <>
      <div className="productDetail ">
        <div className="productCont"> 
          <div className="productImg">
            <div className="selectImg">
              {/* Loop through images and show the selected image */}
              {images.length > 0 && images.map((image) => (
                <div className={`simg ${selectedImage === image?.url ? 'selected' : ''}`}>
                  <img
                  key={image?._id}
                  src={image?.url}
                  alt={image?.imagePubilicId}
                  className=""
                  onClick={() => handleImageClick(image?.url)}
                />
                </div>
              ))}
            </div>
            <div className="clickedImg">
              <img
                src={selectedImage || product?.images[0]?.url}
                alt={selectedImage === product?.images[0]?.url ? "selected" : ""}
                className="selected"
                style={{borderRadius: "10px"}}
              />
            </div>
          </div>
          <div className="productInfo p-3">
            <h1 className="hG">{name}</h1>
            <p style={{ fontSize: "1.13rem", fontWeight: "400" }}>
              {description} 
            </p>

              {/* Rating component */}
      {/* <div> */}
        {/* Display rating UI here (e.g., star rating component) */}
        {/* Example: */}
        {/* <select value={rating} onChange={(e) => handleRatingChange(parseInt(e.target.value))}>
          <option value={0}>Select Rating</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div> */}

      {/* Button to submit rating */}
      {/* <button onClick={handleSubmitRating} disabled={rating === 0 || isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Rating"}
      </button> */}


            <div style={{ display: "flex", alignItems: "center" }} className="">
              <span
                className="imgG d-flex gap-1"
                style={{ width: "5rem" }}
              >
                {starRating}
              </span>

              <span
                style={{
                  fontSize: "1.13rem",
                  fontWeight: "300",
                  marginLeft: "1.25rem",
                }}
              >
                {avgRating !== 0 ? (
                  <>
                    {avgRating} (<span style={{ fontSize: "1.13rem" }}>40 Reviews</span>)
                  </>
                ) : (
                  <>
                  {avgRating} (<span style={{ fontSize: "1.13rem" }}>No Review</span>)
                </>
                )}
              </span>
            </div>
            <p className="my-2" style={{ fontSize: "1.25rem" }}>
              Price:{" "}
              <span
                className=""
                style={{ fontSize: "1.8rem", fontWeight: "500", marginLeft:"1.2rem"}}
              >
                &#x20A6;{Price}
              </span>
            </p>
            <p className="mb-2" style={{ fontSize: "1.25rem" }}>
              Size:{" "}
              <button
                className="bg-light text-dark border border-dark btn-sm"
                style={{
                  width: "3rem",
                  height: "2rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  borderRadius: "4px",
                  marginLeft:"1.2rem"
                }}
              >
                {size} Oz
              </button>
              
            </p>
            

            <div className="d-flex my-2  align-items-center">
              <span className="pe-4" style={{ fontSize: "1.25rem" }}>
                Quantity:
              </span>
              <button
                className="btn1  bg-transparent rounded-0 rounded-start"
                onClick={handleDecrease}
              >
                <img src={Minus} alt="" />
              </button>
              <Button className="btnGg rounded-0 bg-transparent text-dark fw-bold ">
                {count}
              </Button>
              <button
                className="btn1  bg-transparent rounded-0 rounded-end"
                onClick={handleIncrease}
              >
                <img src={Plus} alt="" />
              </button>
            </div>

            <div className="d-flex gap-2">
              <p style={{ fontSize: "1.25rem" }}>Availability:</p>
              <ul
                className="d-flex"
                style={{ listStyle: "none", paddingLeft: "1rem" }}
              >
                <li
                  style={{
                    color: isAvailable ? "#009320" : "#E70000",
                    fontWeight: "500",
                    fontSize: "1.13rem",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: isAvailable
                        ? "#009320"
                        : "#E70000",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  {isAvailable ? `In Stock (${quantity})`  : "Out of Stock"} 
                </li>
              </ul>
            </div>

            <div className="d-flex flex-column">
              {isAvailable ? <Button variant="dark" className="buttonG mb-3" style={{ backgroundColor: "black", fontSize: "20px" }}>Buy Now</Button> : <Button variant="dark" className="buttonG mb-3" style={{ backgroundColor: "gray", fontSize: "20px" }} disabled>Sold Out</Button>}

              <Link to={`/cart/${product._id}`} style={{ textDecoration: "none" }} className="">
                <Button variant="light" className="buttonG  border border-dark" >
                  Add to Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;

