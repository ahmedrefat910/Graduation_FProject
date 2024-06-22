import "../CSS/Sign.css";
import emailIcon from "../images/Message_fill.png";
import padlockIcon from "../images/Lock_duotone_line.png";
import userIcon from "../images/User_fill.png";
import image from "../images/Rectangle 14.png";
import upload from "../images/upload.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Base_URl } from "../App";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
  certificate_image: "",
};

function SignRegisterDoctor() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, files, type } = event.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Store the file object in formData
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirm_password) {
      swal({
        title: "كلمات المرور غير متطابقة!",
        icon: "warning",
        button: "حسناّ!",
      });
      return;
    }

    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataObj.append(key, formData[key]);
      });
      await axios.post(`${Base_URl}/users/register/doctor/`, formDataObj);

      setFormData(initialState);
      swal({
        title: "تم تسجيل حسابك بنجاح!",
        icon: "success",
        button: "حسناّ!",
      }).then(() => {
        navigate("/logindoctor");
      });

    } catch (e) {
      swal({
        title: "راجع بياناتك تاني!",
        icon: "warning",
        button: "حسناّ!",
      });
      console.log(e);
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
                // required
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
                // required
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
                // required
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
                // required
              />
            </div>
          </div>

          <div className="V-Content">
            <img src={upload} alt="logo" />
            <input type="file" name="certificate_image" onChange={handleInputChange}  />
            <p>Click here to upload the image</p>
          </div>

          <div className="submit-container">
            <button className="submit-register" type="submit">
              Sign Up
            </button>
            <button
              className="submit-register"
              type="button"
              onClick={() => navigate("/logindoctor")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignRegisterDoctor;
