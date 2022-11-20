import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import WebinarContext from "./context/WebinarContext";
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
import SuccessfulCasesPage from "./components/SuccessfulCasesPage";
import { SnackbarProvider } from "notistack";
import WebinarsPage from "./components/WebinarsPage";
import WebinarPage from "./components/WebinarPage";
import NoPage from "./components/NoPage";

function App() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [webinar, setWebinar] = useState({});
  const [isFetching, setIsFetching] = useState(null);
  const [loading, setLoading] = useState(null);
  const [bgColor, SetBgColor] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/home");
      setIsFetching(true);
      SetBgColor("homebg");
      document.title = "Raqamyat";
    } else if (location.pathname === "/about") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/about");
      setIsFetching(true);
      SetBgColor("aboutbg");
      document.title = "About Us";
    } else if (location.pathname === "/contact-us") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/contact");
      setIsFetching(true);
      SetBgColor("contactbg");
      document.title = "Contact Us";
    } else if (location.pathname === "/about/our-company/stakeholders") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/stakeholders");
      setIsFetching(true);
      SetBgColor("contactbg");
      document.title = "Stakeholders";
    } else if (location.pathname === "/about/our-company/our-partners") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/partners");
      setIsFetching(true);
      SetBgColor("contactbg");
      document.title = "Our Partners";
    } else if (location.pathname === "/about/careers/jobs") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs");
      setIsFetching(true);
      SetBgColor("contactbg");
      document.title = "Jobs";
    } else if (location.pathname === "/blog") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/blogs");
      setIsFetching(true);
      SetBgColor("insidebg");
      document.title = "Blog";
    } else if (location.pathname === "/about/news/e-book") {
      SetBgColor("contactbg");
      document.title = "E-Book";
    } else if (location.pathname === "/about/news/press") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/blogs");
      setIsFetching(true);
      SetBgColor("insidebg");
      document.title = "Press";
    } else if (location.pathname === "/about/our-company/successful-cases") {
      SetBgColor("insidebg");
      document.title = "Successful Cases";
    } else if (location.pathname === "/about/webinars") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/webinars");
      setIsFetching(true);
      SetBgColor("insidebg");
      document.title = "Webinars";
    }
    else if (location.pathname === "/about/news/e-book") {
      SetBgColor("contactbg");
      document.title = "E-Book";
    }
  }, [location.pathname]);

  useEffect(() => {
    if (apiUrl != null) {
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
    } else {
    }
  }, [apiUrl, loading]);

  useEffect(() => {
    if (isFetching === false) {
      setLoading(false);
    }
  }, [isFetching]);

  return (
    <div className="app">
      <div className={bgColor}></div>
      <Header />
      <WebinarContext.Provider value={{setWebinar}}>
        <AnimatePresence>
          <SnackbarProvider>
            {loading ? (
              <Loading />
            ) : (
              <div className="outlet">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<HomePage data={data}></HomePage>} />
                  <Route path="*" element={<NoPage />} />
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
                    path="/about/our-company/successful-cases"
                    element={<SuccessfulCasesPage data={data} />}
                  />
                  <Route
                    path="/about/news/press"
                    element={<PressPage data={data} />}
                  />
                  <Route
                    path="/about/webinars"
                    element={<WebinarsPage data={data} />}
                  />
                  <Route
                    path="/about/webinars/:webinarName"
                    element={<WebinarPage data={webinar} />}
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
          </SnackbarProvider>
        </AnimatePresence>
      </WebinarContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
