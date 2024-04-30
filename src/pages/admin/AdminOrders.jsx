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
import Menu from "../../components/NavBar"
import Footer from "../../components/Footer";

const AdminOrders = () => {
  // context
  const { auth, setAuth } = useAuth();
  // state
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(null);

  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);
  
  const getOrders = async () => {
    try {
      const { data } = await axios.get("orders/all");
      setOrders(data?.orders);
      setTotalOrders(data?.orderCount);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/orders/status/${orderId}`, {
        status: value,
      });
      if (data?.success) {
        toast.success(data.message);
      }
      // console.log(data);
      console.log(`Order status for ${orderId}  updated`, value);
      getOrders();
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
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">
              All Orders({totalOrders})
            </div>

            {orders?.map((o) => (
              <div
                key={o._id}
                className="border shadow bg-light rounded-4 mb-5"
              >
                <table className="table">
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
                    <tr key={o._id}>
                      <td>{o._id}</td>
                      <td>
                        <select
                          className="form-select"
                          value={o.status}
                          onChange={(e) => handleChange(o._id, e.target.value)}
                        >
                          <option value="Not processed">Not processed</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
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

export default AdminOrders;
