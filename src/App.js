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
import EBookPage from "./components/EBookPage";
import BlogPage from "./components/BlogPage";
import PressPage from "./components/PressPage";

function App() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(null);
  const [loading, setLoading] = useState(null);
  const [bgColor, SetBgColor] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {}, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setApiUrl("https://newraq.raqamyat.com/public/api/home");
      setLoading(true);
      setIsFetching(true);
      SetBgColor("homebg");
      document.title = "Raqamyat";
    } else if (location.pathname === "/about") {
      setApiUrl("https://newraq.raqamyat.com/public/api/about");
      setLoading(true);
      setIsFetching(true);
      SetBgColor("aboutbg");
      document.title = "About Us";
    }
    if (location.pathname === "/contact-us") {
      setApiUrl("https://newraq.raqamyat.com/public/api/contact");
      setLoading(true);
      setIsFetching(true);
      SetBgColor("contactbg");
      document.title = "Contact Us";
    }
    if (location.pathname === "/about/our-company/stakeholders") {
      setApiUrl("https://newraq.raqamyat.com/public/api/stakeholders");
      setLoading(true);
      setIsFetching(true);
      SetBgColor("contactbg");
      document.title = "Stakeholders";
    }
    if (location.pathname === "/about/our-company/our-partners") {
      setApiUrl("https://newraq.raqamyat.com/public/api/partners");
      setLoading(true);
      setIsFetching(true);
      SetBgColor("contactbg");
      document.title = "Our Partners";
    }
    if (location.pathname === "/about/careers/jobs") {
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs");
      setIsFetching(true);
      setLoading(true);
      SetBgColor("contactbg");
      document.title = "Jobs";
    }
    if (location.pathname === "/blog") {
      setApiUrl("https://newraq.raqamyat.com/public/api/blogs");
      setIsFetching(true);
      setLoading(true);
      SetBgColor("insidebg");
      document.title = "Blog";
    }
    if (location.pathname === "/about/news/e-book") {
      SetBgColor("contactbg");
      document.title = "E-Book";
    }
    if (location.pathname === "/about/news/press") {
      setApiUrl("https://newraq.raqamyat.com/public/api/blogs");
      setIsFetching(true);
      setLoading(true);
      SetBgColor("insidebg");
      document.title = "Press";
    }
    return function () {
      setData(null);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (apiUrl !== null) {
      try {
        axios.get(apiUrl, { timeout: 500000 }).then((res) => {
          if (res.data.data) {
            setData(res.data.data);
            setIsFetching(false);
          }
        });
      } catch (err) {
        console.error(err);
      }
    }
  }, [apiUrl]);

  useEffect(() => {
    if (isFetching === false) {
      setLoading(false);
    }
  }, [isFetching]);

  return (
    <div className="app">
      <div className={bgColor}></div>
      <Header />
      <LoadingContext.Provider value={setLoading}>
        <AnimatePresence>
          {loading ? (
            <Loading />
          ) : (
            <div className="outlet">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage data={data}></HomePage>} />
                <Route path="*" element={<h1>404</h1>} />
                <Route
                  path="/contact-us"
                  element={<ContactUsPage data={data} />}
                />
                <Route path="/about" element={<AboutUsPage data={data} />} />
                <Route
                  path="/about/our-company/stakeholders"
                  element={<StakeholdersPage data={data} />}
                />
                <Route
                  path="/about/our-company/our-partners"
                  element={<OurPartnersPage data={data} />}
                />
                <Route
                  path="/about/news/press"
                  element={<PressPage data={data} />}
                />
                <Route path="/about/news/e-book" element={<EBookPage />} />
                <Route
                  path="/about/careers/jobs"
                  element={<JobsPage data={data} />}
                />
                <Route path="/blog" element={<BlogPage data={data} />} />
              </Routes>
            </div>
          )}
        </AnimatePresence>
      </LoadingContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
