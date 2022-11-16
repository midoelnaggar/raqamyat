import About from "./homePage/About";
import Profile from "./homePage/Profile";
import Motion from "./Motion";
import PageHeader from "./PageHeader";


function AboutUsPage({data}) {

  return (
    <Motion>
      <PageHeader
        title="About Us"
        breadcrumbs="Home / About Us"
      />
      <About data={data?.about_us} />
      <Profile data={data?.what_makes_us_different} />
    </Motion>
  );
}

export default AboutUsPage;
