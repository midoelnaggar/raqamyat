import "../styles/ContactUsPage.css";
import PageHeader from "./PageHeader";
import { Link } from "react-router-dom";
import arrow from "../img/Icon ionic-ios-arrow-round-forward.png";
import image from "../img/Group 162418.png";
import Motion from "./Motion";


function StakeholdersPage() {
  return (
    <Motion>
      <PageHeader
        title="Stakeholders"
        breadcrumbs="Home / About Us / Our Company / Stakeholders"
      />
      <div className="ecommerce">
        <div className="ecommerce-left">
        <h1>
            <span>
              Stakeholders <span />
            </span>
          </h1>
          <div  className="lp">
            As we provide a fully-fledged set of services within ePayment and
            eCommerce services, it's integral to fulfill our four core groups of
            stakeholders. Providing services, Raqamyat serves not only
            investors, but also ePayment Facilitators, ePayment Gateways, and
            Merchants. We also have wider obligations to shoppers. Ultimately,
            we seek creating value for all our key stakeholder groups.
          </div>
          <button className="lmbtn">
            <Link to="">
              Learn More
              <img alt="ar" src={arrow} />
            </Link>
          </button>
        </div>
        <div className="ecommerce-right">
        <img src={image} alt="back" />
        </div>
      </div>
    </Motion>
  );
}

export default StakeholdersPage;
