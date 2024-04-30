import React from 'react'
import "../css/Footer.css"
import { PiTwitterLogoLight } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const Footer = () => {
  return (
    <div className='footer-bg'>
        <div className="footer-top">
            <div className="footer-info">
                <div className="footer-head">
                <svg className='frg-logo' width="26" height="25" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.724138 18.375C2.625 12.9621 8.06508 9.05172 14.4828 9.05172C21.6463 9.05172 27.5951 13.9234 28.7591 20.3229C27.5734 19.8233 26.0346 19.4087 24.4777 19.1498C21.3367 18.6284 18.938 19.7146 16.8833 20.6524L16.8634 20.6615C14.7742 21.6155 13.0417 22.4066 10.7625 22.1496C8.94672 21.945 7.31198 21.3711 5.77681 20.6904C5.08164 20.3827 4.42086 20.0604 3.76733 19.74L3.54827 19.6332C2.84811 19.2832 2.13624 18.9571 1.41388 18.6556L0.724138 18.375Z" fill="white"/>
<path d="M0.0959483 21.0507C0.0319664 21.5714 -7.62205e-05 22.0956 1.36143e-07 22.6202C1.36143e-07 26.0871 1.38672 29.2497 3.67138 31.6484C4.48603 32.5047 4.89336 32.932 6.60051 33.6652C8.30948 34.3965 9.4862 34.3965 11.8433 34.3965H17.1222C19.4793 34.3965 20.656 34.3965 22.365 33.6652C24.0721 32.932 24.4795 32.5047 25.2959 31.6484C27.3923 29.4452 28.732 26.5976 28.9384 23.4657L28.3065 23.1145C27.4539 22.6402 25.8553 22.1315 24.0323 21.8291C21.7893 21.4562 20.0785 22.1785 18.0111 23.1235L17.812 23.214C15.8315 24.1192 13.4925 25.1909 10.4584 24.8488C8.25879 24.6008 6.33983 23.9092 4.67612 23.1724C3.93388 22.8429 3.22784 22.499 2.57612 22.1803L2.35888 22.0735C1.71508 21.751 1.06057 21.4503 0.396466 21.172L0.0959483 21.0507ZM19.1172 0.796552C19.7581 1.4356 19.883 2.38965 19.9084 4.07327H22.3034C23.9192 4.07338 25.5127 4.4496 26.9578 5.17215L28.4713 5.92888C29.7041 4.935 31.7299 4.8662 33.4914 5.88362C35.6565 7.13276 36.6015 9.54957 35.6004 11.2821C34.6011 13.0128 32.034 13.4038 29.8707 12.1546C28.3427 11.2712 27.4213 9.80663 27.3652 8.41267L25.7431 7.60163C24.6751 7.06744 23.4975 6.78915 22.3034 6.78879H19.9138V8.11758C18.1624 7.53501 16.3285 7.23913 14.4828 7.24138C12.5819 7.24138 10.7534 7.54914 9.05172 8.11758V6.78879H9.24543C9.42103 6.7906 9.6256 6.79241 9.79939 6.78879C10.051 6.77974 10.3914 6.7562 10.7335 6.6512C11.0992 6.53715 11.5246 6.31086 11.8342 5.8637C12.1347 5.43284 12.2198 4.94948 12.2198 4.52586C12.2198 4.10224 12.1347 3.61888 11.8342 3.18621C11.566 2.80728 11.1774 2.53035 10.7317 2.40052C10.4278 2.31384 10.1136 2.26817 9.79758 2.26474C9.61416 2.26082 9.43068 2.26021 9.24724 2.26293H9.17844C9.28525 1.62207 9.48258 1.15862 9.84465 0.796552C10.6448 1.10821e-07 11.9229 0 14.4828 0C17.0426 0 18.3225 1.10821e-07 19.1172 0.796552Z" fill="white"/>
</svg>
                <h3>
                    <span>F</span>RAGRANCE<span>H</span>UB
                </h3>
                </div>
                
                <p>FragranceHub is an e-commerce platform specializing in selling perfumes. FragranceHub offer a wide range of fragrances from various brands, catering to different preferences and budgets.</p>
            </div>
            <div className="footer-news">
            <div className="footer-nl">
                <h5>Subscribe to our newsletter</h5>
                <p>To get update on our latest offers</p>
            </div>
           
            <div className="footer-forms">
            <input class="form-control p-2" type="email" placeholder="Email Address" id="emailInput"></input>
            <button className='form-buttons'>
                <p>Subscribe</p>
                <svg className="form-image" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.172 7.00017L6.808 1.63617L8.222 0.222168L16 8.00017L8.222 15.7782L6.808 14.3642L12.172 9.00017H0V7.00017H12.172Z" fill="white"/>
</svg></button>
            </div>
            
        </div>
        <div className="footer-links ">
        <DropdownButton className='footer-dropdown' id="dropdown-basic-button" title="Quick Links">
      <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
      <Dropdown.Item href="#/action-2">About us</Dropdown.Item>
      <Dropdown.Item href="#/action-3">All fragrance</Dropdown.Item>
      <Dropdown.Item href="#/action-3">All brands</Dropdown.Item>
      <Dropdown.Item href="#/action-3">New Arrival</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Blog</Dropdown.Item>
    </DropdownButton>
    <DropdownButton className='footer-dropdown' id="dropdown-basic-button" title="Useful Links">
      <Dropdown.Item href="#/action-1">Help</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Faq</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Shipping and Information</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Return and exchnages</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Privacy policies</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Terms and Conditions</Dropdown.Item>
    </DropdownButton>
    <DropdownButton className='footer-dropdown'id="dropdown-basic-button" title="Contact Us">
      <Dropdown.Item href="#/action-1">+234 8021479293</Dropdown.Item>
      <Dropdown.Item href="#/action-2">+234 8142882866</Dropdown.Item>
    </DropdownButton>
        </div>
        
            <div className="q-links">
                <ul className='q-link'> <h5>Quick Links</h5>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">All fragrance</a>
                    </li>
                    <li>
                        <a href="#">All brands</a>
                    </li>
                    <li>
                        <a href="#">New Arrival</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    
                </ul>
                
            </div>
            <div className="u-links">
            <ul className='u-link'> <h5>Useful Links</h5>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">Faq</a>
                    </li>
                    <li>
                        <a href="#">Shipping and Information</a>
                    </li>
                    <li>
                        <a href="#">Return and exchnages</a>
                    </li>
                    <li>
                        <a href="#">Privacy policies</a>
                    </li>
                    <li>
                        <a href="#">Terms and Conditions</a>
                    </li>
                    
                </ul>
            </div>
            <div className="contact-info">
            <ul> <h5>Contact Us</h5>
                   <p>+234 8021479293</p>
                   <p>+234 8142882866</p>

                   <h6>Follow us on</h6>
                <div className="footer-logo">
                <PiTwitterLogoLight />
                <LuFacebook />
                <IoLogoInstagram />
                </div>
            </ul>
                
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-nl">
                <h5>Subscribe to our newsletter</h5>
                <p>To get update on our latest offers</p>
            </div>
           
            <div className="footer-form">
            <input class="form-control p-2" type="email" placeholder="Email Address" id="emailInput"></input>
            <button className='form-button'>
                <p>Subscribe</p>
                <svg className="form-image" width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.172 7.00017L6.808 1.63617L8.222 0.222168L16 8.00017L8.222 15.7782L6.808 14.3642L12.172 9.00017H0V7.00017H12.172Z" fill="white"/>
</svg></button>
            </div>  
        </div>


    </div>
  )
}

export default Footer;