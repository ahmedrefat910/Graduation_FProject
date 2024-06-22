import "../CSS/Home.css";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Gliomas from "../icons/Gliomas.png";
import Tumor from "../icons/Rectangle 561.png";
import Meningioma from "../icons/Gliomas.png";

import D1 from "../icons/Frame 1000005880 (1).png";
import D2 from "../icons/Frame 1000005880.png";
import D3 from "../icons/Frame 1000005880 (10).png";
import D4 from "../icons/Frame 1000005880 (2).png";
import D5 from "../icons/Frame 1000005881 (1).png";
import D6 from "../icons/Frame 1000005881 (2).png";
import D7 from "../icons/Frame 1000005881 (3).png";
import D8 from "../icons/Frame 1000005881 (5).png";
import D9 from "../icons/Frame 1000005882.png";
import D10 from "../icons/Frame 1000005882 (1).png";
import D11 from "../icons/Frame 1000005882 (5).png";
import D12 from "../icons/Frame 1000005889.png";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="recommendation">
        <Link className="rec" to="/rec">
          {" "}
          <h3> Recommendation Doctors </h3>{" "}
        </Link>
        <div class="images">
          <div class="item">
            <img className="item-img" src={D1} alt="..." />
            <img className="item-img" src={D2} alt="..." />
            <img className="item-img" src={D3} alt="..." />
            <img className="item-img" src={D4} alt="..." />
            <img className="item-img" src={D5} alt="..." />
            <img className="item-img" src={D6} alt="..." />
            <img className="item-img" src={D7} alt="..." />
            <img className="item-img" src={D8} alt="..." />
            <img className="item-img" src={D9} alt="..." />
            <img className="item-img" src={D10} alt="..." />
            <img className="item-img" src={D11} alt="..." />
            <img className="item-img" src={D12} alt="..." />
          </div>
        </div>

        <h4> Types of brain tumor </h4>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="box">
                <h3 className="h3"> Gliomas </h3>
                <p className="paragraph">
                  {" "}
                  Gliomas are tumors originating in glial cells that support and
                  nourish nerve cells in the brain. They are the most common
                  type of primary brain tumors and can occur in different parts
                  of the brain. Gliomas are classified into different grades
                  based on their aggressiveness and how quickly they are likely
                  to grow. The grades range from low-grade (slow-growing) to
                  high-grade (fast-growing) tumors. Common symptoms of gliomas
                  include headaches, seizures, cognitive changes, and
                  neurological deficits. Treatment options for gliomas may
                  include surgery, radiation therapy, and chemotherapy,
                  depending on the tumor's location, grade, and the overall
                  health of the patient. The prognosis for gliomas varies
                  depending on several factors, including the tumor grade, size,
                  location, and the patient's age and overall health.{" "}
                </p>

                <img src={Gliomas} alt="" />
              </div>

              <div className="box">
                <h3 className="h3"> Pituitary Tumor </h3>
                <p className="paragraph">
                  {" "}
                  Pituitary tumors are growths that develop in the pituitary
                  gland. These tumors can be noncancerous (benign) or cancerous
                  (malignant). Pituitary tumors can disrupt the normal
                  functioning of the pituitary gland, which is responsible for
                  producing and regulating various hormones in the body. As a
                  result, they can cause hormonal imbalances and lead to a range
                  of symptoms, such as headaches, vision problems, hormonal
                  changes, fatigue, and infertility. Treatment options for
                  pituitary tumors include medication, surgery, and radiation
                  therapy, depending on the size, type, and location of the
                  tumor. The prognosis for pituitary tumors varies depending on
                  several factors, including tumor size, type, and the
                  individual's overall health.
                </p>

                <img className="Tumor-img" src={Tumor} alt="" />
              </div>

              <div className="box">
                <h3 className="h3"> Meningioma </h3>
                <p className="paragraph">
                  Meningioma is a type of tumor that develops from the meninges,
                  the membrane that surrounds the brain and spinal cord. These
                  tumors are typically benign (non-cancerous), but they can
                  occasionally be malignant (cancerous). Meningiomas are the
                  most common type of primary brain tumor, accounting for about
                  one-third of all brain tumors.Meningioma is a type of tumor
                  that develops from the meninges, the membrane that surrounds
                  the brain and spinal cord. These tumors are typically benign
                  (non-cancerous), but they can occasionally be malignant
                  (cancerous). Meningiomas are the most common type of primary
                  brain tumor, accounting for about one-third of all brain
                  tumors.
                </p>

                <img src={Meningioma} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
