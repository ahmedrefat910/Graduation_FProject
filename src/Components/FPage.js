
import "../CSS/FPage.css";
import { Link } from "react-router-dom";  
import image from "../images/Rectangle 14.png";

function Home(){
    return(
    <>
        <div className="H-Page">
            <div className='corrupted-image'>
                <img src={image} alt="" />
            </div>
                <div className="links">
                <Link to="/Choose"> BT CARE </Link>
            </div>
    </div>
    </>
    );
}

export default Home;