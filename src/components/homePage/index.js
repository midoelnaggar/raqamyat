import About from "./About";
import Articles from "./Articles";
import Hero from "./Hero";
import Partners from "./Partners";
import Profile from "./Profile";
import Scope from "./Scope";
import Ecommerce from "./Ecommerce";
import Epayment from "./Epayment";
import Motion from "../Motion";

const HomePage = ({ data, setData,setLoading }) => {
  
  return (
    <Motion>
      <Hero data={data?.hero} />
      <Partners />
      <About data={data?.about_us} />
      <Profile data={data?.what_makes_us_different} />
      <Scope data={data?.our_scope} />
      <Ecommerce data={data?.ecommerce_solutions} />
      <Epayment data={data?.epayment_services} />
      {/*<Articles data={data?.top_articles} />*/}
      <Articles />
    </Motion>
  );
};

export default HomePage;
