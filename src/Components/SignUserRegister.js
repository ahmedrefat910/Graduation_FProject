
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Sign.css";
import emailIcon from "../images/Message_fill.png";
import padlockIcon from "../images/Lock_duotone_line.png";
import userIcon from "../images/User_fill.png";
import image from "../images/Rectangle 14.png";
import axios from "axios";
import swal from "sweetalert";
import { Base_URl } from "../App";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

function SignUserRegister() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, files, type } = event.target;

    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataObj.append(key, formData[key]);
      });

      await axios.post(
        `${Base_URl}/users/register/patient/`,
        formDataObj
      );

      setFormData(initialState);
      swal({
        title: "تم تسجيل حسابك بنجاح!",
        icon: "success",
        button: "حسناّ!",
      }).then(() => {
        navigate("/loginuser");
      });
    } catch (e) {
      if (e.response && e.response.status === 422) {
        // Handle validation error
      }
      swal({
        title: " !راجع بياناتك تاني  ",
        icon: "warning",
        button: "حسناّ!",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <img src={image} alt="" />
          <div className="Text">Create your new account</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleRegister}>
          <div className="inputs">
            <div className="input">
              <img src={userIcon} alt="" />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.username}
                name="username"
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <img src={emailIcon} alt="" />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <img src={padlockIcon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <img src={padlockIcon} alt="" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                name="confirm_password"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="forgot-password2">
            <span>By signing you agree to our </span>Terms of use
            <br />
            <span>and</span> privacy notice
          </div>
          <div className="submit-container">
            <button className="submit" type="submit">
              Sign Up
            </button>
            <div className="submit gray" onClick={() => navigate("/loginuser")}>
              Login
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUserRegister;