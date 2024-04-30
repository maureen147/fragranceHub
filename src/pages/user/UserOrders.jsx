import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/Auth";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import moment from "moment";
import ProductCardHorizontal from "../../components/cards/ProductCardHorizontal";
import { toast } from "react-toastify";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import UserMenu from "../../components/nav/UserMenu";
import Menu from "../../components/NavBar"
import Footer from "../../components/Footer";

const UserOrders = () => {
  // context
  const { auth, setAuth } = useAuth();
  // state
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/orders");
      setOrders(data?.orders);
    } catch (err) {
      console.log(err);
    }
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        className="btn text-light"
        type="button"
        style={{ backgroundColor: "#0098B8" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  // console.log(orders);

  return (
    <>
    <Menu/>
      <Jumbotron title={`Hello ${auth?.user?.name}`} subTitle="Dashboard" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">
              All Orders
            </div>

            {orders?.map((o) => (
              <div
                key={o._id}
                className="border shadow bg-light rounded-4 mb-5"
              >
                <table className="table table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">#OrderId</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Ordered</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{o._id}</td>
                      <td>
                        {o.status}
                      </td>
                      <td>{o.buyer.name}</td>
                      <td>{moment(o.createdAt).fromNow()}</td>
                      <td>{o.payment.paymentStatus ? "Success" : "Failed"}</td>
                      <td>{o.products.length} products</td>
                    </tr>
                  </tbody>
                </table>

                {/* accordion */}
                <Accordion defaultActiveKey="0">
                  {o.products.length > 0 && (
                    <CustomToggle eventKey="0">
                      {o.products.length} products
                    </CustomToggle>
                  )}
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="container">
                        <div className="row m-2">
                          {o.products.map((p) => (
                            <ProductCardHorizontal
                              key={p._id}
                              p={p}
                              remove={false}
                            />
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default UserOrders;
