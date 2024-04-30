import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/Auth";
import Jumbotron from "../../components/cards/Jumbotron";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Menu from "../../components/NavBar";
import Footer from "../../components/Footer";
import AdminProductCard from "../../components/cards/AdminProductCard";
import { toast } from "react-toastify";
import AdminMenu from "../../components/nav/AdminMenu";

const AdminProductDetail = () => {
  // context
  const { auth, setAuth } = useAuth();
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);

  // state
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`/product/slug/${slug}`);
      setProduct(data?.product);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const { data } = await axios.delete(`/product/${product?._id}`);
      if (!data?.error) {
        setLoading(false);
        toast.success(`"${product?.name}" is deleted`);
        setShow(false);
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data?.error;
      toast.error(msg);
      setLoading(false);
      setTimeout(() => {
        navigate("/dashboard/admin-products");
      }, 5000);
    }
  };

  // console.log(product);

  return (
    <>
      <Menu />
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Admin Dashboard"
      />

      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
              <AdminProductCard
                product={product}
                slug={slug}
                handleDelete={handleDelete}
                loading={loading}
              />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProductDetail;
