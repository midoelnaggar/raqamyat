import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingContext from "./context/LoadingContext";
import Loading from "./Loading";
import Footer from "./components/headerAndFooter/Footer";
import Header from "./components/headerAndFooter/Header";
import HomePage from "./components/homePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import { AnimatePresence } from "framer-motion";
import StakeholdersPage from "./components/StakeholdersPage";
import OurPartnersPage from "./components/OurPartnersPage";
import JobsPage from "./components/JobsPage";

function App() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bgColor, SetBgColor] = useState("homebg");
  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    const routing = () => {
      if (location.pathname === "/") {
        setLoading(true);
        setApiUrl("https://newraq.raqamyat.com/public/api/home");
        SetBgColor("homebg");
        document.title = "Raqamyat";
      } else if (location.pathname === "/about-us") {
        setLoading(true);
        setApiUrl("https://newraq.raqamyat.com/public/api/about");
        SetBgColor("aboutbg");
        document.title = "About Us";
      }
      if (location.pathname === "/contact-us") {
        setLoading(true);
        setApiUrl("https://newraq.raqamyat.com/public/api/contact");
        SetBgColor("contactbg");
        document.title = "Contact Us";
      }
      if (location.pathname === "/about-us/our-company/stakeholders") {
        setLoading(true);
        setApiUrl("https://newraq.raqamyat.com/public/api/stakeholders");
        SetBgColor("contactbg");
        document.title = "Stakeholders";
      }
      if (location.pathname === "/about-us/our-company/our-partners") {
        setLoading(true);
        setApiUrl("https://newraq.raqamyat.com/public/api/partners");
        SetBgColor("contactbg");
        document.title = "Our Partners";
      }
      if (location.pathname === "/about-us/careers/jobs") {
        setLoading(true);
        setApiUrl("https://newraq.raqamyat.com/public/api/jobs");
        SetBgColor("contactbg");
        document.title = "Jobs";
      }
    };
    routing();
  }, [location.pathname]);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get(apiUrl);
        if (res.status === 200) {
          setData(res.data.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [apiUrl]);
  useEffect(() => {
    setLoading(false);
  }, [data]);
  return (
    <div className="app">
      <div className={bgColor}></div>
      <Header />
      <LoadingContext.Provider value={setLoading}>
        <AnimatePresence>
          <div className="outlet">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={loading ? <Loading /> : <HomePage data={data} />}
              />
              <Route
                path="/contact-us"
                element={loading ? <Loading /> : <ContactUsPage data={data} />}
              />
              <Route
                path="/about-us"
                element={loading ? <Loading /> : <AboutUsPage data={data} />}
              />
              <Route
                path="/about-us/our-company/stakeholders"
                element={
                  loading ? <Loading /> : <StakeholdersPage data={data} />
                }
              />
              <Route
                path="/about-us/our-company/our-partners"
                element={
                  loading ? <Loading /> : <OurPartnersPage data={data} />
                }
              />
              <Route
                path="/about-us/careers/jobs"
                element={
                  loading ? <Loading /> : <JobsPage data={data} />
                }
              />
            </Routes>
          </div>
        </AnimatePresence>
      </LoadingContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
