import "./AboutUsPage.css";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { Link } from "react-router-dom";
import About from "./homePage/About";
import Profile from "./homePage/Profile";
 



function AboutUsPage() {
  const homeData = useContext(HomeContext)
  return (
    <div className="about_us_page">
      <div className="page_header">
      <div className="page_title">About Us</div>
      <div className="breadcrumbs">
        <Link to="/" >Home</Link>
        <div>/</div>
        <Link to="/about-us" >About Us</Link>
      </div>
      </div>
      <About data={homeData.about_us} />
      <Profile data={homeData.what_makes_us_different} />
    </div>
  );
}

export default AboutUsPage;
