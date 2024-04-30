import { useState } from "react";
import "../css/SignUp.css";
import { toast } from "react-toastify";
import img1 from "../assets/images/Frame 579.png";
import registerImg from "../assets/images/signin.png";
import img2 from "../assets/images/download-removebg-preview.png";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/Auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  // hooks
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      console.log("enter all fields....");
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
      // sending form data to server
      setLoading(true);
      const data = await signup(name, email, password);

      // check for successful registration
      if (!data?.error) {
        toast.success("Registration successful");
        setLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        toast.error("Registration failed");
      }
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data;
      toast.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="text-center">
            <Link to="/" className="">
              <img src={img1} alt="" />
            </Link>
            <p>
              <b>Join Us To Discover The Perfect Scent For You!.</b>
            </p>
          </div>

          {/* <div className="middle-section-milly">
            <p>Let's get started by filling the information below:</p>
          </div> */}
          <div className="">
            <form className="form-milly" onSubmit={handleSubmit}>
              <div className="form-action">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>

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

              <div className="form-action">
                <label>Confirm Password </label>
                <div className="password-input-wrapper">
                  <input
                    type={!showConfirmPassword ? "password" : "ConfirmPassword"}
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <IoEyeOutline className="icon-m" />
                    ) : (
                      <IoEyeOffOutline className="icon-m" />
                    )}
                  </span>
                </div>
              </div>
            </form>

            <div className="hhh-milly my-2">
              <input type="checkbox" />
              <p>
                I agree to <span className="span-milly">Terms of service</span>{" "}
                and <span className="span-milly">Privacy policies</span>
              </p>
            </div>

            <div className="black-milly">
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
                  "Submit"
                )}
              </button>
            </div>
            <div className="dis my-2">
              <div className="line"></div>
              <span>&nbsp;&nbsp; or &nbsp;&nbsp;</span>
              <div className="line"></div>
            </div>

            <div className="white-milly">
              <button>
                <img className="pic mx-2" src={img2} alt="" />
                <a href="https://www.google.com/">Continue with Google</a>
              </button>
            </div>
            <div className="bb">
              <p className="text-dark">
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="right-side-milly">
          <img src={registerImg} className="image-fluid" />
        </div> */}
      </div>
    </>
  );
};

export default SignUp;
