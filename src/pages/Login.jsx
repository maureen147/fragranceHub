import React, { useState } from "react";
import "../css/Login.css";
import { toast } from "react-toastify";
import signinIcon from "../assets/icons/signinIcon.png";
import signin from "../assets/images/Signindan.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { Link } from "react-router-dom";
import img2 from "../assets/images/download-removebg-preview.png";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  // hooks/
  const [email, setEmail] = useState("gidi@email.com");
  const [password, setPassword] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Enter all fields");
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return toast.error("invalid email address");
    }
    const pwdTrim = password.trim();
    if (!password || pwdTrim.length < 6) {
      return toast.error("Enter a valid password");
    }
    try {
      setLoading(true);
      const success = await login(email, password);
      setLoading(false);

      if (success) {
        setTimeout(() => {
          toast.success("Login successful");
          navigate("/");
        }, 5000);
      } else {
        toast.error("Login failed. try again..");
      }
    } catch (err) {
      // console.log(err?.message);
      const msg = err?.message;
      toast.error(msg);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="col-md-6 offset-md-3">
        <div className="">
          <div className="text-center">
            <Link to="/">
              <img className="ww " src={signinIcon} alt="" />
            </Link>
            <h2>
              <b>Welcome to FragranceHub</b>
            </h2>
          </div>

          {/* <div className="middle-section">
            <p>Enter your details to access your account</p>
          </div> */}
          <form className="form-dan" onSubmit={handleSubmit}>
            <div className="form-action">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="form-action">
              <label>Password </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <IoEyeOutline className="icon-m" />
                  ) : (
                    <IoEyeOffOutline className="icon-m" />
                  )}
                </span>
              </div>
            </div>
          </form>

          <div className="ddd">
            <div className="yp">
              <input type="checkbox" />
              <h6>Remember me</h6>
            </div>

            <div>
              <a href="">
                <p>Forgot Password?</p>
              </a>
            </div>
          </div>

          <div className="black">
            <button onClick={handleSubmit}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div className="dat">
            <div className="line1"></div>
            <span>&nbsp;&nbsp; or &nbsp;&nbsp;</span>
            <div className="line2"></div>
          </div>

          <div className="white">
            <button>
              <img className="pic mx-2" src={img2} alt="" />
              <a href="https://www.google.com/">Continue with Google</a>
            </button>
          </div>
          <div className="dd">
            <p className="text-dark">
              New User? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
        {/* <div className="right-side">
          <div className="logo ">
            <img src={signin} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
