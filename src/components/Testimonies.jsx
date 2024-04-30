import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/testimonies.css";
import { FaQuoteRight } from "react-icons/fa";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircle,
} from "react-icons/io5";
import img1 from "../assets/images/Wizkid-Image-Kevin-Amato.webp";
import img2 from "../assets/images/burna.jpg";
import img3 from "../assets/images/baddo.jpg";
import img4 from "../assets/images/Davido-3.webp";
import img5 from "../assets/images/Blard.jpg";
import img6 from "../assets/images/kcee.jpg";

const Testimonies = () => {
  const [next, setNext] = useState(true);
  const [slide, setSlide] = useState(true);

  function handleChange() {
    setNext(!next);
  }

  function handleSlide() {
    setSlide(!slide);
  }

  return (
    <div className="main">
      <div className="main-body">
        <div className="heading">
          <div className="content">
            <p>See Our Reviews</p>
          </div>
          <div className="arrow-container">
            <h1>What Our Customers Says About Us</h1>
            <div className="arrow-icon">
              <IoArrowBackCircleOutline
                className="head-icon"
                onClick={handleChange}
              />
              <IoArrowForwardCircle
                className="head-icon"
                onClick={handleChange}
              />
            </div>
          </div>
        </div>
        {next ? (
          <div className="box-container">
            <div className="box">
              <div className="icon">
                <FaQuoteRight className="quote" />
              </div>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illum itaque, asperiores vel cum atque
              </p>
              <div className="pics-celeb">
                <div className="pic-story">
                  <img src={img1} alt="" width="100%" height="100%" />
                </div>
                <div className="pic-text">
                  <h6>Ayo Balogun</h6>
                  <p>Customer</p>
                </div>
                <div className="star">*****</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaQuoteRight className="quote" />
              </div>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                minima magni dolor delectus assumenda perspi
              </p>
              <div className="pics-celeb">
                <div className="pic-story">
                  <img src={img2} alt="" width="100%" height="100%" />
                </div>
                <div className="pic-text">
                  <h6>Damini Ogulu</h6>
                  <p>Customer</p>
                </div>
                <div>*****</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaQuoteRight className="quote" />
              </div>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illum itaque, asperiores vel cum atque repellendus.
              </p>
              <div className="pics-celeb">
                <div className="pic-story">
                  <img src={img3} alt="" width="100%" height="100%" />
                </div>
                <div className="pic-text">
                  <h6>Olamide Adedeji</h6>
                  <p>Customer</p>
                </div>
                <div>*****</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaQuoteRight className="quote" />
              </div>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illum itaque, asperiores vel cum atque repellendu.
              </p>
              <div className="pics-celeb">
                <div className="pic-story">
                  <img src={img4} alt="" width="100%" height="100%" />
                </div>

                <div className="pic-text">
                  <h6>David Adeleke</h6>
                  <p>Customer</p>
                </div>
                <div>*****</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="box-container">
            <div className="box">
              <div className="icon">
                <FaQuoteRight className="quote" />
              </div>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illum itaque, asperiores vel cum atque
              </p>
              <div className="pics-celeb">
                <div className="pic-story">
                  <img src={img1} alt="" width="100%" height="100%" />
                </div>
                <div className="pic-text">
                  <h6>Matic</h6>
                  <p>Customer</p>
                </div>
                <div className="star">*****</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaQuoteRight className="quote" />
              </div>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                minima magni dolor delectus assumenda
              </p>
              <div className="pics-celeb">
                <div className="pic-story">
                  <img src={img5} alt="" width="100%" height="100%" />
                </div>
                <div className="pic-text">
                  <h6>Blard</h6>
                  <p>Customer</p>
                </div>
                <div>*****</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaQuoteRight className="quote" />
              </div>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illum itaque, asperiores vel cum atque repellendus.
              </p>
              <div className="pics-celeb">
                <div className="pic-story">
                  <img src={img3} alt="" width="100%" height="100%" />
                </div>
                <div className="pic-text">
                  <h6>Shinel</h6>
                  <p>Customer</p>
                </div>
                <div>*****</div>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaQuoteRight className="quote" />
              </div>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illum itaque, asperiores vel cum atque repellendus.
              </p>
              <div className="pics-celeb">
                <div className="pic-story">
                  <img src={img6} alt="" width="100%" height="100%" />
                </div>

                <div className="pic-text">
                  <h6>kcee</h6>
                  <p>Customer</p>
                </div>
                <div>*****</div>
              </div>
            </div>
          </div>
        )}

        {/* mobile section */}
        <div className="box-container-mobile">
          <div className="box">
            <div className="icon">
              <FaQuoteRight className="quote" />
            </div>
            <p className="para">
             What more of a rewiew do you crave than your STARBOY smelling in star ways
            </p>
            <div className="pics-celeb">
              <div className="pic-story">
                <img src={img1} alt="" width="100%" height="100%" />
              </div>
              <div className="pic-text">
                <h6>Ayo Balogun</h6>
                <p>Customer</p>
              </div>
              <div className="star">*****</div>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaQuoteRight className="quote" />
            </div>
            <p className="para">
             I trust no man,not even my shadow but with ALLFRAGRANCE Hub its all trust. ODG
            </p>
            <div className="pics-celeb">
              <div className="pic-story">
                <img src={img2} alt="" width="100%" height="100%" />
              </div>
              <div className="pic-text">
                <h6>Damini Ogulu</h6>
                <p>Customer</p>
              </div>
              <div>*****</div>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaQuoteRight className="quote" />
            </div>
            <p className="para">
             As the voice of the street, I trust All fragrance hub for a great smell for the street 
            </p>
            <div className="pics-celeb">
              <div className="pic-story">
                <img src={img3} alt="" width="100%" height="100%" />
              </div>
              <div className="pic-text">
                <h6>Olamide Adedeji</h6>
                <p>Customer</p>
              </div>
              <div>*****</div>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaQuoteRight className="quote" />
            </div>
            <p className="para">
              Shop at All fragrance hub to smell like the baddest SHEKPE!
            </p>
            <div className="pics-celeb">
              <div className="pic-story">
                <img src={img4} alt="" width="100%" height="100%" />
              </div>

              <div className="pic-text">
                <h6>David Adeleke</h6>
                <p>Customer</p>
              </div>
              <div>*****</div>
            </div>
          </div>
        </div>

        {/* {
      slide ?
     <div className="box-container-mobile" onClick={handleSlide}>
      <div className="box">
        <div className="icon">
          <FaQuoteRight  className='quote'/>
        </div>
        <p className='para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum itaque, asperiores vel cum atque
        </p>
        <div className='pics-celeb'>
        <div className="pic-story">
          <img  src={img1} alt="" width='100%' height='100%' />
        </div>
          <div className='pic-text'>
            <h6>Ayo Balogun</h6>
            <p>Customer</p>
          </div>
          <div className='star'>*****</div>
        </div>
        
      </div>
      <div className="box">
      <div className="icon">
          <FaQuoteRight  className='quote'/>
        </div>
        <p className='para'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minima magni dolor delectus assumenda perspiciatis non ad
        </p>
        <div className="pics-celeb">
        <div className="pic-story">
          <img  src={img2} alt="" width='100%' height='100%' />
        </div>
          <div className='pic-text'>
            <h6>Damini Ogulu</h6>
            <p>Customer</p>
          </div>
          <div>*****</div>
       </div>
        
      </div>


  
      </div>
        :
      <div className="container-mobile" onClick={handleSlide}>
          <div className="box">
        <div className="icon">
          <FaQuoteRight  className='quote'/>
        </div>
        <p className='para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum itaque, asperiores vel cum atque
        </p>
        <div className='pics-celeb'>
        <div className="pic-story">
          <img  src={img1} alt="" width='100%' height='100%' />
        </div>
          <div className='pic-text'>
            <h6>Ayo Balogu</h6>
            <p>Customer</p>
          </div>
          <div className='star'>*****</div>
        </div>
        
      </div>
      <div className="box">
      <div className="icon">
          <FaQuoteRight  className='quote'/>
        </div>
        <p className='para'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minima magni dolor delectus assumenda perspiciatis non ad
        </p>
        <div className="pics-celeb">
        <div className="pic-story">
          <img  src={img2} alt="" width='100%' height='100%' />
        </div>
          <div className='pic-text'>
            <h6>Damini Ogulu</h6>
            <p>Customer</p>
          </div>
          <div>*****</div>
       </div>
        
      </div>
      <div className="box">
      <div className="icon">
          <FaQuoteRight  className='quote'/>
        </div>
        <p className='para'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minima magni dolor delectus assumenda perspiciatis non ad
        </p>
        <div className="pics-celeb">
        <div className="pic-story">
          <img  src={img2} alt="" width='100%' height='100%' />
        </div>
          <div className='pic-text'>
            <h6>Damini Ogulu</h6>
            <p>Customer</p>
          </div>
          <div>*****</div>
       </div>
        
      </div>
      <div className="box">
      <div className="icon">
          <FaQuoteRight  className='quote'/>
        </div>
        <p className='para'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minima magni dolor delectus assumenda perspiciatis non ad
        </p>
        <div className="pics-celeb">
        <div className="pic-story">
          <img  src={img2} alt="" width='100%' height='100%' />
        </div>
          <div className='pic-text'>
            <h6>Damini Ogulu</h6>
            <p>Customer</p>
          </div>
          <div>*****</div>
       </div>
        
      </div>
      </div>
 } */}

        {/* <div className="box-container-mobile">
      <div className="box">
        <div className="icon">
          <FaQuoteRight  className='quote'/>
        </div>
        <p className='para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum itaque, asperiores vel cum atque
        </p>
        <div className='pics-celeb'>
        <div className="pic-story">
          <img  src={img1} alt="" width='100%' height='100%' />
        </div>
          <div className='pic-text'>
            <h6>Ayo Balogun</h6>
            <p>Customer</p>
          </div>
          <div className='star'>*****</div>
        </div>
        
      </div>
      <div className="box">
      <div className="icon">
          <FaQuoteRight  className='quote'/>
        </div>
        <p className='para'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minima magni dolor delectus assumenda perspiciatis non ad
        </p>
        <div className="pics-celeb">
        <div className="pic-story">
          <img  src={img2} alt="" width='100%' height='100%' />
        </div>
          <div className='pic-text'>
            <h6>Damini Ogulu</h6>
            <p>Customer</p>
          </div>
          <div>*****</div>
       </div>
        
      </div>
      <div className="box">
      <div className="icon">
          <FaQuoteRight  className='quote'/>
        </div>
        <p className='para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum itaque, asperiores vel cum atque repellendus perferendis ab error ex.
        </p>
        <div className="pics-celeb">
        <div className="pic-story">
          <img  src={img3} alt="" width='100%' height='100%' />
          </div>
          <div className='pic-text'>
            <h6>Olamide Adedeji</h6>
            <p>Customer</p>
          </div>
          <div>*****</div>
        </div>
       
      </div>
      <div className="box">
      <div className="icon">
          <FaQuoteRight className='quote'/>
        </div>
        <p className='para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum itaque, asperiores vel cum atque repellendus perferendis ab error ex.
        </p>
          <div className='pics-celeb'>
            <div className="pic-story">
            <img  src={img4} alt="" width='100%' height='100%' />
          </div>

            <div className='pic-text'>
              <h6>David Adeleke</h6>
              <p>Customer</p>
            </div>
            <div>*****</div>
          </div>
        
          
      </div>
      </div> */}
      </div>
    </div>
  );
};

export default Testimonies;

// import Card from 'react-bootstrap/Card';

// function Testimonies() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>

//         </Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//         <Card.Text>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quod commodi qui quia quam illo iusto quibusdam laboriosam fugit unde.
//         </Card.Text>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Testimonies;
