import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import About from "./About";
import Articles from "./Articles";
import Hero from "./Hero";
import Partners from "./Partners";
import Profile from "./Profile";
import Scope from "./Scope";
import Subscribe from "./Subscribe";
import Ecommerce from "./Ecommerce";
import Epayment from "./Epayment";


const HomePage = () => {
  const homeData = useContext(HomeContext);
  return (
    <>
      <Hero data={homeData.hero} />
      <Partners />
      <About data={homeData.about_us} />
      <Profile data={homeData.what_makes_us_different} />
      <Scope data={homeData.our_scope} />
      <Ecommerce data={homeData.ecommerce_solutions} />
      <Epayment data={homeData.epayment_services} />
      {/*<Articles data={homeData?.top_articles} />*/}
      <Articles />
      <Subscribe />
    </>
  );
};

export default HomePage