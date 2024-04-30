import moment from "moment";
import { useCart } from "../../contexts/Cart";

export default function ProductCardHorizontal({ p, remove = true }) {
  // context
  const {cart, setCart} = useCart();

  const removeFromCart = (productId) => {
    let myCart = [...cart];
    let index = myCart.findIndex((item) => item._id === productId);
    myCart.splice(index, 1);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
  };

  // console.log(cart);
  return (
    <div
      className="mb-3"
    >
      <div className="row g-0 shadow">
        <div className="col-md-4">
          <img
            src={p?.images[0].url}
            alt={p?.images[0].imagePublicId}
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              borderRopRightRadius: "0px",
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {p?.name}
            </h5>
            <p><b>Price: N</b> {p?.price}</p>
            <p className="card-text">{`${p?.description?.substring(
              0,
              50
            )}..`}</p>
          </div>
        </div>

        <div className=" d-flex justify-content-between">
          <p className="card-text">
            <small className="text-muted">
              Listed {moment(p.createdAt).fromNow()}
            </small>
          </p>
          { remove && (
            <p
              className="text-danger mb-2 pointer"
              onClick={() => removeFromCart(p._id)}
            >
              Remove
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
