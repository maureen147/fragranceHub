import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllFragance from "./pages/AllFragrance";
import Menu from "./components/NavBar";
import CartEmpty from "./pages/Chart";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
import CustomerDetails from "./components/CustomerDetails";
import CartItems from "./components/CartItems";
import Order from "./pages/Order";
import Newarrival from "./pages/Newarrival";
import DetailPages from "./pages/DetailPage";
import Login from "./pages/Login";
import Search from "./pages/Search";
import UserDashboard from "./pages/dashboard/User";
import AdminDashboard from "./pages/dashboard/Admin";
import { ScrollToTop } from "./components/utils/SmoothScrollToTop";
import { useAuth } from "./contexts/Auth";
import AdminCategory from "./pages/admin/Category";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AdminProduct from "./pages/admin/AdminProduct";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminProductDetail from "./pages/admin/AdminProductDetail";
import AdminProductUpdate from "./pages/admin/AdminProductUpdate";
import AdminOrders from "./pages/admin/AdminOrders";
import UserProfile from "./pages/user/UserProfile";
import UserOrders from "./pages/user/UserOrders";

// WARNING: Do Not change anything in this pages.

function App() {
  const { PrivateRoutes, AdminRoutes } = useAuth();

  return (
    <>
      <Router>
        <ToastContainer/>
        {/* <Breadcrumbs/>   */}
        <ScrollToTop />
         <Routes>
          <Route element={<Menu />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/all-fragrances" element={<AllFragance />} />
          <Route path="/cart-empty" element={<CartEmpty />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/all-fragrances" element={<AllFragance />} />
          <Route path="/new-arrivals" element={<Newarrival />} />
          <Route path="/detail/:productId" element={<DetailPages />} />
          <Route path="/search" element={<Search />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Protected Routes */}
          <Route path="/dashboard" element={<PrivateRoutes />}>
            <Route path="user" element={<UserDashboard />} />
            <Route path="user/order" element={<Order />} />
            <Route path="user/profile" element={<UserProfile/>} />
            <Route path="user/orders" element={<UserOrders/>} />
            {/* Admin Routes */}
            <Route path="" element={<AdminRoutes />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin-category" element={<AdminCategory />} />
              <Route path="admin-product" element={<AdminProduct />} />
              <Route path="admin-product/detail/:slug" element={<AdminProductDetail />}/>
              <Route path="admin-products" element={<AdminProducts />} />
              <Route path="admin-product/update/:slug" element={<AdminProductUpdate />}/>
              <Route path="admin-orders" element={<AdminOrders/>} />

            </Route>
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
