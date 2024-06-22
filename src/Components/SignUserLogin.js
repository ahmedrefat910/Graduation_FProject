import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Sign.css";
import emailIcon from "../images/Message_fill.png";
import padlockIcon from "../images/Lock_duotone_line.png";
import image from "../images/Rectangle 14.png";
import axios from "axios";
import swal from "sweetalert";
import { Base_URl } from "../App";

function SignUserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    // setLoading(true);
    try {
      await axios
        .post(`${Base_URl}/users/login/`, { username, password })
        .then((response) => {
          const token = response.data.data.token;
          console.log(token);
          console.log(response.data);
          // const role = response.data.data.user.role;
          localStorage.setItem("token", token);

          swal({
            title: "تم تسجيل الدخول بنجاح!",
            icon: "success",
            button: "حسنا!",
          }).then(() => {
            //   setLoggedIn(true);
            // if (role > 0) {
            //   navigate("/admin");
            // } else {
            //   navigate("/");
            // }
            navigate("/dashboard");

            window.location.reload();
          });
        });
      setUsername("");
      setPassword("");
    } catch (e) {
      swal({
        title: "فشل تسجيل الدخول! راجع بياناتك تاني",
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
          <div className="Text">Login to your account</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="inputs">
            <div className="input">
              <img src={emailIcon} alt="" />
              <input
                type="text"
                placeholder="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={padlockIcon} alt="" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                //  required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="forgot-password">
            Forget Password? <span> Click Here </span>
          </div>
          <div className="submit-container">
            <button className="submit" type="submit">
              Login
            </button>
            <div
              className="submit gray"
              onClick={() => navigate("/registeruser")}
            >
              Sign Up
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUserLogin;
