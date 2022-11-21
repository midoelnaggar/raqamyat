import "./../../styles/AboutUsPage.css";
import About from "../homePage/About";
import Profile from "../homePage/Profile";
import Motion from "../Motion";
import PageHeader from "../PageHeader";

function AboutUsPage({ data }) {
  return (
    <Motion>
      <div className="aboutUsPage">
        <div className="abh">
          <PageHeader title="About Us" breadcrumbs="Home / About Us" />
        </div>
        <About data={data?.about_us} />
        <Profile data={data?.what_makes_us_different} />
      </div>
    </Motion>
  );
}

export default AboutUsPage;
