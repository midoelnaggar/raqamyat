import Motion from "../../Motion";
import PageHeader from "../../PageHeader";
import Retail from "../../../img/Retail.svg";
import Healthcare from "../../../img/healthcare.svg";
import Education from "../../../img/education.svg";
import Restaurants from "../../../img/resturant.svg";
import SpecialProjects from "../../../img/Special Projects.svg";
import { Link, useLocation } from "react-router-dom";

function BusinessTypePage() {
  const location = useLocation();
  return (
    <Motion>
      <div className="head_bg">
        <PageHeader
          title="Services"
          breadcrumbs={"Services / Business Types"}
        />
      </div>
      <div className="business_type_hero">
        <h1>
          <span>
            Business Types
            <span />
          </span>
        </h1>
        <div>
          <p className="sp">
            We Offer a Comprehensive Range of E-Commerce Solutions & Services
            for any Industries
          </p>
          <p className="lp">
            We provide solutions and enable online sales across a variety of
            industry verticals. We undertake complete management of e-commerce
            projects for these organizations, create the online stores' roadmap
            and implement it using the best tactics and technologies. We help
            industries modernize their sales process, operations, systems,
            e-payment, data warehouses, and other e-commerce infrastructure
            components. We are an expert in all e-commerce technologies, be it
            AI, ML implementation and planning, applications and platform
            management and modernization, etc.
          </p>
        </div>
      </div>
      <div className="business_type_tabs">
        <Link to="/services/business-type/retail-e-commerce">
        <div className={location.pathname ==="/services/business-type/retail-e-commerce" ? "activeTab" : "inactiveTab"} >
            <img src={Retail} alt="retail" />
            <p>Retail</p>
          </div>
        </Link>
        <Link to="/services/business-type/fmcg-and-restaurats-e-commerce">
        <div className={location.pathname ==="/services/business-type/fmcg-and-restaurats-e-commerce" ? "activeTab" : "inactiveTab"} >
            <img src={Restaurants} alt="Restaurants" />
            <p>Restaurants</p>
          </div>
        </Link>
        <Link to="/services/business-type/healthcare-e-commerce">
        <div className={location.pathname ==="/services/business-type/healthcare-e-commerce" ? "activeTab" : "inactiveTab"} >
            <img src={Healthcare} alt="Healthcare" />
            <p>Healthcare</p>
          </div>
        </Link>
        <Link to="/services/business-type/education-e-commerce">
        <div className={location.pathname ==="/services/business-type/education-e-commerce" ? "activeTab" : "inactiveTab"} >
            <img src={Education} alt="Education" />
            <p>Education</p>
          </div>
        </Link>
        <Link to="/services/business-type/e-commerce-for-special-projects">
          <div className={location.pathname ==="/services/business-type/e-commerce-for-special-projects" ? "activeTab" : "inactiveTab"} >
            <img src={SpecialProjects} alt="SpecialProjects" />
            <p>Special Projects</p>
          </div>
        </Link>
      </div>
    </Motion>
  );
}

export default BusinessTypePage
