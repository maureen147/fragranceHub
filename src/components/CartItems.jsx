import "../css/CartItems.css";
import img from "../assets/images/image 18.png";
import { ImBin2 } from "react-icons/im";
import Menu from "./NavBar";
import SideNav from "./SideNav";
import Footer from "./Footer";

const CartItems = () => {
  return (
    <>
    <Menu/>
    <SideNav/>
    <div className="main-cont " style={{marginTop: "1rem", marginBottom: "2rem"}}>
      <div className="container-kc">
        <div className="left-cont">
          <div className="card-kc">
            <div className="img-card-kc">
              <div className="left-img-kc">
                <div className="img-kc-kc">
                  <img src={img} />
                </div>
                <div className="text-card-kc">
                  <h5>Maison Francis Kurkdijan Paris</h5>
                  <p>Grand Soir Eau De Parfum 2.3 Oz</p>
                  <p className="stock-kc">In stock</p>
                </div>
              </div>
              <div className="btn-kc">
                <h4>&#8358;46,000.00</h4>
              </div>
            </div>
            <div className="del-items">
             <div className="r"><ImBin2 />Remove item</div>
             <div className="add-btn-kc">
               <button className="btn-kc-kc">-</button>
               <span><b>0</b></span>
               <button className="btn-kc-kcee">+</button>
             </div>
            </div>
          </div>
        </div>
        <div className="right-cont">
          <div className="kc-card">
            <div className="sum">
              <h4>Cart Summary</h4>
            </div>
            <div className="kcee"></div>
            <div className="total">
              <div className="tot">
                <h5>Subtotal</h5>
                <h4>&#8358;46,000.00</h4>
              </div>
              <div className="delivery">
                <p>Delivery Fees not included yet.</p>
              </div>
              <div></div>
            </div>
            <div className="btn-btn">
              <button>
                <h4>Checkout Now</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CartItems;
