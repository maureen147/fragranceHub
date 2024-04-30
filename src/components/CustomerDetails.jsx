import React from 'react'
import '../css/CustomerDetails.css'
import visa from "../assets/icons/visa.png"
import paypal from "../assets/icons/paypal.png"
import master from "../assets/icons/master.png"



const CustomerDetails = () => {
  return (
    <div className='buni'>
      <div className="case-1">
        <div className="customer">
          <div className="heading">
            <h3>Customer Details</h3>
          </div>

          <div className="customer-form row mb-2 ">
            <div className="form col-6">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="Enter First Name" />
            </div>
            <div className="form col-6">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Enter Last Name" />
            </div>

            <div className="form col-6">
              <label>Phone Number</label>
              <input type="text" className="form-control" placeholder="+234" />
            </div>
            <div className="form col-6">
              <label>Phone 2 (Optional)</label>
              <input type="text" className="form-control" placeholder="+234" />
            </div>
            <div className="form">
              <label>Delivery Address</label>
              <input type="text" className="form-control" placeholder="Enter your email address" />
            </div>
            <div className="form col-6 d-flex flex-column">
              <label>Region</label>
              <select className="sect" id="region">
                <option value="">Select Region</option>
                <option value="">Africa</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
              </select>
            </div>
            <div className="form col-6 d-flex flex-column">
              <label>City</label>
              <select className="sect" id="city">
                <option value="">Select City</option>
              </select>
            </div>
          </div>
        </div>

        <div className="id d-none d-md-block">
          <h3>Total Items(1)</h3>
          <div className="id-1">
            <p>Subtotal <b> &#8358;46,000.00</b></p>
            <p>Delivery Cost <b>&#8358;1000.00</b> </p>
          </div>
          <div className="id-2">
            <p>Total <b>&#8358;47,000.00</b></p>
          </div>
          <div className="firm">
            <div className="firm-botn">
              <a className="" href="" id="">Confirm order</a>
            </div>
            <h6>(complete the steps in order to proceed)</h6>
          </div>
        </div>
      </div>


      <div className="case-2">
        <div className="heading">
          <h3>Delivery Details</h3>
        </div>
        <div className="details">
          <div className="delivery">
            <input type="radio" name='door' value="Door Delivery" /><span className='ms-2'>Door Delivery</span>
          </div>
          <div className="pick">
            <input type="radio" name='door' value="Pick up" /> <span className='ms-2'>Pick up</span>
          </div>
        </div>
      </div>


      <div className="case-3">
        <div className="heading">
          <h3>Select Payment Method</h3>
        </div>
        <div className="hero">
          <div className="icons">
            <div className="icon-1 d-flex">
              <div className="details">
                <input type="radio" name='card' value="Door Delivery" /><span className='ms-2'>Pay With Credit Card</span>
              </div>
              <div className="minus d-flex justify-content-around align-items-center me-2">
                <img src={visa} alt=""  className='me-2'/>
                <img src={master} alt="" />
              </div>
            </div>
            <div className="payment-form row mb-2 ">
              <div className="form">
                <label>Name On Card</label>
                <input type="text" className="form-control" placeholder="Enter Name on Card" />
              </div>
              <div className="form">
                <label>Card Number</label>
                <input type="text" className="form-control" placeholder="Enter your card number" />
              </div>
              <div className="form col-6">
                <label>Expiring Date</label>
                <input type="text" className="form-control" placeholder="DD/MM/YY" />
              </div>
              <div className="form col-6">
                <label>CVV</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
            </div>
          </div>
          <div className="pay d-flex">
            <div className="details">
              <input type="radio" name='card' value="Pick up" /> <span className='ms-2'>Pay With Paypal</span>
            </div>
            <div className="plus">
              <img src={paypal} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="total-m d-lg-none">
        <h3>Total Items(1)</h3>
        <div className="total-1">
          <p>Subtotal <b> &#8358;46,000.00</b></p>
          <p>Delivery Cost <b>&#8358;1000.00</b> </p>
        </div>
        <div className="total-2">
          <p>Total <b>&#8358;47,000.00</b></p>
        </div>
        <div className="firm">
          <div className="firm-botn">
            <a className="" href="" id="">Confirm order</a>
          </div>
          <h6>(complete the steps in order to proceed)</h6>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails