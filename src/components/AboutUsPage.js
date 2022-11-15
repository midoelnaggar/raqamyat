import "../styles/AboutUsPage.css";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { Link } from "react-router-dom";
import About from "./homePage/About";
import Profile from "./homePage/Profile";
import Subscribe from "./homePage/Subscribe";
import {motion} from 'framer-motion';

 



function AboutUsPage() {
  const homeData = useContext(HomeContext)
  return (
    <motion.div className="about_us_page"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth,transition:{duration:0.18} }}
    >
      <div className="page_header">
      <div className="page_title"><h1>About Us</h1></div>
      <div className="breadcrumbs">
        <Link to="/" >Home</Link>
        <div>/</div>
        <Link to="/about-us" >About Us</Link>
      </div>
      </div>
      <About data={homeData.about_us} />
      <Profile data={homeData.what_makes_us_different} />
      <Subscribe />
    </motion.div>
  );
}

export default AboutUsPage;
