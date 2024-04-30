import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/Hero.css";
import img1 from "../assets/images/Frame 1171276215.png";
import img2 from "../assets/images/Frame 1171276214.png";
import img3 from "../assets/images/Frame 1171276219.png";
import img4 from "../assets/images/Frame 1171276220.png";
import cusIcon from "../assets/icons/Customer service.png";
import cardIcon from "../assets/icons/Online payment.png";
import badgeIcon from "../assets/icons/Badge.png";

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="hero">
      <Carousel className="main-pb" activeIndex={index} onSelect={handleSelect} controls={false}>
        <Carousel.Item className="">
          <div className="img-pb">
              <img src={img1} text="First slide" width="100%" height="450px" />
          </div>
          <div className="main-b">
            <Carousel.Caption>
              <div className="text-body1">
                <h1>Classic Elegance</h1>
                <p className="hero-p">
                  Discover timeless fragrances that exude sophistication and
                  charm.
                </p>
              </div>

              <button type="button" className="btn-pb btn-dark btn-p">
                Shop Now
              </button>
              <button type="button" className="btn-mobile btn-dark ">
                Shop Now
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-pb">
            <img src={img2} text="Second slide" width="100%" height="450px" />
          </div>
          
          <Carousel.Caption>
            <div className="text-body2">
              <h1>Sensual & Seductive</h1>
              <p className="hero-p">
                Delve into alluring scents that ignite passion and intrigue.
              </p>
            </div>

            <button type="button" className="btn-pb btn-dark">
              Shop Now
            </button>
            <button type="button" className="btn-mobile btn-dark ">
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-pb">
              <img src={img3} text="Third slide" width="100%" height="450px" />
          </div>
          
          <Carousel.Caption>
            <div className="text-body3">
              <h1>Fresh & Crisp</h1>
              <p className="hero-p">
                Experience invigorating fragrances that captures the essence of
                pure freshness.
              </p>
            </div>

            <button type="button" className="btn-pb btn-dark">
              Shop Now
            </button>
            <button type="button" className="btn-mobile btn-dark ">
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-pb">
              <img src={img4} text="Fourth slide" width="100%" height="450px" />
          </div>
          
          <Carousel.Caption>
            <div className="text-body4">
              <h1>Modern Chic</h1>
              <p className="hero-p">
                Uncover contemporary scents designed for the trendsetter in you.
              </p>
            </div>

            <button type="button" className="btn-pb btn-dark">
              Shop Now
            </button>
            <button type="button" className="btn-mobile btn-dark ">
              Shop Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="section-b">
        <div className="texts">
          <div className="text py-3">
            <img src={badgeIcon} alt="" />
            <p>100% Authentic Fragrance</p>
          </div>
          <div className="text">
            <img src={cardIcon} alt="" />
            <p>Secure & Safe Payment</p>
          </div>
          <div className="text">
            <img src={cusIcon} alt="" />
            <p>Top-notch Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
