import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/Auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Jumbotron from "../../components/cards/Jumbotron";
import { IoImages } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import "../../css/Admin.css";
import AdminMenu from "../../components/nav/AdminMenu";
import Menu from "../../components/NavBar";
import Footer from "../../components/Footer";

const AdminProductUpdate = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState(false);
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [usage, setUsage] = useState("");
  const [about, setAbout] = useState("");
  const [brand, setBrand] = useState("");
  const [scentType, setScentType] = useState("");
  const [scentProfile, setScentProfile] = useState("");
  const [fragranceType, setFragranceType] = useState("");
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const { auth } = useAuth();
  const fileInputRef = useRef(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  // /fetch categories
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("/category/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const { data } = await axios.get(`/product/slug/${slug}`);
      const pd = data?.product;
      setName(pd.name);
      setDescription(pd.description);
      setPrice(pd.price);
      setQuantity(pd.quantity);
      setCategory(pd.category?._id);
      setShipping(pd.shipping);
      setImages(pd.images);
      setGender(pd.gender);
      setUsage(pd.usage);
      setAbout(pd.about);
      setBrand(pd.brand);
      setScentType(pd.scentType);
      setScentProfile(pd.scentProfile);
      setFragranceType(pd.fragranceType);
      setSize(pd.size);
      setId(pd._id);
    } catch (err) {
      console.log(err);
    }
  };

  // handleFormSubmit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("name", name);
    productData.append("description", description);
    productData.append("price", price);
    productData.append("quantity", quantity);
    productData.append("category", category);
    productData.append("shipping", shipping);
    productData.append("gender", gender);
    productData.append("usage", usage);
    productData.append("about", about);
    productData.append("brand", brand);
    productData.append("scentType", scentType);
    productData.append("scentProfile", scentProfile);
    productData.append("fragranceType", fragranceType);
    productData.append("size", size);
    images.forEach((image) => {
      productData.append("images", image);
    });

    try {
      setLoading(true);
      const { data } = await axios.put(`/product/update/${id}`, productData);

      if (data?.success) {
        fetchCategories();
        setName("");
        setDescription("");
        setPrice("");
        setQuantity(1);
        setCategory("");
        setShipping(false);
        setImages([]);
        setGender("");
        setUsage("");
        setAbout("");
        setBrand("");
        setScentType("");
        setFragranceType("");
        setSize("");
        toast.success("Product updated successfully");
        setLoading(false);
        setTimeout(() => {
          navigate("/dashboard/admin-products");
        }, 5000);
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data?.error;
      toast.error(msg);
      setLoading(false);
    }
  };

  const handleAddMoreImages = () => {
    fileInputRef.current.click();
  };

  const handleDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div>
      <Menu />
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Admin Dashboard"
      />

      <div className="container mt-md-4">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Update Products</div>

            <div className="pt-2">
              {/* Display uploaded images */}
              <div className="mb-3" style={{ position: "relative" }}>
                {images &&
                  images.map((image, index) => (
                    <>
                      {images && images.length > 0 && (
                        <span
                          className="bg-danger text-light p-1 rounded-5 text-center"
                          style={{
                            position: "absolute",
                            left: "13 %",
                            width: "20px",
                            height: "20px",
                            fontSize: "10px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDelete(index)}
                        >
                          X
                        </span>
                      )}
                      <img
                        key={image.imagePublicId || index}
                        src={images ? (image.url || URL.createObjectURL(image)) : null}
                        alt={`Image ${index + 1}`}
                        className="img-thumbnail mr-2 mx-2"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </>
                  ))}
                {images && images.length > 0 && (
                  <span className="text-center text-dark p-2">
                    Add
                    <FaPlus className="ms-1" onClick={handleAddMoreImages} />
                  </span>
                )}
              </div>

              <label className="btn btn-outline-dark mb-3">
                <IoImages /> Upload images
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setImages([...images, ...Array.from(e.target.files)])
                  }
                  multiple
                  hidden
                  ref={fileInputRef}
                />
              </label>
            </div>

            <div className="col-md-6" style={{ marginTop: "1rem" }}>
              <div className="">
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  placeholder="Write name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="">
                <textarea
                  className="form-control p-2 mb-3"
                  placeholder="Write description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control p-2 mb-3"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="row">
                <div className="col-md-5">
                  <select
                    className="form-select p-2 mb-3"
                    placeholder="Choose category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Select Category">Select category</option>
                    {categories?.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-5">
                  <select
                    className="form-select p-2 mb-3"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Gender">Select gender</option>
                    <option value="Unisex">Unisex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              {/*  */}
              <div className="">
                <div className="">
                  <textarea
                    className="form-control p-2 mb-3"
                    placeholder="Write usage..."
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                  />
                </div>
                <div className="">
                  <textarea
                    className="form-control p-2 mb-3"
                    placeholder="About perfume..."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>
                <div className="">
                  <textarea
                    className="form-control p-2 mb-3"
                    placeholder="Write scent profile..."
                    value={scentProfile}
                    onChange={(e) => setScentProfile(e.target.value)}
                  />
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <select
                      className="p-2 mb-3 form-select"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    >
                      <option value="">Brand</option>
                      <option value="Armaf">Armaf</option>
                      <option value="Armani">Armani</option>
                      <option value="Dior">Dior</option>
                      <option value="Dolce & Gabbana">Dolce & Gabbana</option>
                      <option value="Essenza">Essenza</option>
                      <option value="Hugo Boss">Hugo Boss</option>
                      <option value="Jimmy Choo">Jimmy Choo</option>
                      <option value="Lataffa">Lataffa</option>
                      <option value="Mont Blanc">Mont Blanc</option>
                      <option value="Ralph Lauren">Ralph Lauren</option>
                      <option value="Versace">Versace</option>
                      <option value="Yves Saint Laurent">
                        Yves Saint Laurent
                      </option>
                      <option value="Zaien">Zaien</option>
                    </select>
                  </div>
                  <div className="col-md-5">
                    <select
                      className=" p-2 mb-3  form-select"
                      value={scentType}
                      onChange={(e) => setScentType(e.target.value)}
                    >
                      <option value="">Scent Type</option>
                      <option value="Fresh">Fresh</option>
                      <option value="Citrus">Citrus</option>
                      <option value="Cedar">Cedar</option>
                      <option value="Vanilla">Vanilla</option>
                      <option value="Lemon">Lemon</option>
                      <option value="Rose">Rose</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <select
                      className=" p-2 mb-3 form-select"
                      value={fragranceType}
                      onChange={(e) => setFragranceType(e.target.value)}
                    >
                      <option value="">Fragrance Type</option>
                      <option value="Body Spray">Body Spray</option>
                      <option value="Eau De Parfum">Eau De Parfum</option>
                      <option value="Eau De Cologne">Eau De Cologne</option>
                      <option value="Eau De Toilette">Eau De Toilette</option>
                      <option value="Perfum Oil">Perfum Oil</option>
                      <option value="Deodorant">Deodorant</option>
                    </select>
                  </div>
                  <div className="col-md-5">
                    <select
                      className="p-2 mb-3 form-select"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      <option value="">Select Size</option>
                      <option value="2.3">2.3 oz</option>
                      <option value="3.4">3.4 oz</option>
                      <option value="5.0">5.0 oz</option>
                      <option value="6.3">6.3 oz</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-4" style={{ marginBottom: "1rem" }}>
                <button
                  className="btn btn-primary w-100"
                  onClick={handleFormSubmit}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminProductUpdate;
