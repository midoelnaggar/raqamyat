import "./App.css";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import WebinarContext from "./context/WebinarContext";
import Loading from "./Loading";
import Footer from "./components/headerAndFooter/Footer";
import Header from "./components/headerAndFooter/Header";
import HomePage from "./components/homePage";
import AboutUsPage from "./components/about/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import { AnimatePresence } from "framer-motion";
import StakeholdersPage from "./components/about/StakeholdersPage";
import OurPartnersPage from "./components/about/OurPartnersPage";
import JobsPage from "./components/about/JobsPage";
import EBookPage from "./components/about/EBookPage";
import BlogPage from "./components/BlogPage";
import PressPage from "./components/about/PressPage";
import SuccessfulCasesPage from "./components/about/SuccessfulCasesPage";
import { SnackbarProvider } from "notistack";
import WebinarsPage from "./components/about/WebinarsPage";
import WebinarPage from "./components/about/WebinarPage";
import NoPage from "./components/NoPage";
import DevelopmentPage from "./components/services/solutions/development/DevelopmentPage";
import OperationPage from "./components/services/solutions/operation/OperationPage";
import OnlineStoresDevelopmentPage from "./components/services/solutions/development/OnlineStoresDevelopmentPage";
import ConsultationAndMaintenancePage from "./components/services/solutions/development/ConsultationAndMaintenancePage";
import OutsourcingPage from "./components/services/solutions/development/OutsourcingPage";
import EPaymentIntegrationsPage from "./components/services/solutions/development/EPaymentIntegrationsPage";
import OperationsSolutionsPage from "./components/services/solutions/operation/OperationsSolutionsPage";

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
    } else if (location.pathname === "/about/news/e-book") {
      SetBgColor("contactbg");
      document.title = "E-Book";
    }
    //services
    ////development
    else if (location.pathname === "/services/solutions/development") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=development"
      );
      setIsFetching(true);
      SetBgColor("insidebg");
    } else if (
      location.pathname ===
      "/services/solutions/development/online-stores-development"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=online-stores-development"
      );
      setIsFetching(true);
      SetBgColor("contactbg");
    } else if (
      location.pathname ===
      "/services/solutions/development/consultation-and-maintenance"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=consultation-and-maintenance"
      );
      setIsFetching(true);
      SetBgColor("contactbg");
    } else if (
      location.pathname === "/services/solutions/development/outsourcing"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=outsourcing"
      );
      setIsFetching(true);
      SetBgColor("contactbg");
    } else if (
      location.pathname ===
      "/services/solutions/development/e-payment-integrations"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=e-payment-integrations"
      );
      setIsFetching(true);
      SetBgColor("contactbg");
    }
    ////operation
    else if (location.pathname === "/services/solutions/operations") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=operation"
      );
      setIsFetching(true);
      SetBgColor("insidebg");
    } else if (
      location.pathname ===
      "/services/solutions/operations/operations-solutions"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=operations-solutions"
      );
      setIsFetching(true);
      SetBgColor("contactbg");
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
      <div className={bgColor} />
      <Header />
      <WebinarContext.Provider value={{ setWebinar }}>
        <AnimatePresence>
          <SnackbarProvider>
            {loading ? (
              <Loading />
            ) : (
              <div className="outlet">
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route location={location} key={location.pathname}>
                      <Route
                        index
                        element={<HomePage data={data}></HomePage>}
                      />
                      <Route path="*" element={<NoPage />} />
                      <Route
                        path="contact-us"
                        element={<ContactUsPage data={data} />}
                      />
                      <Route path="blog" element={<BlogPage data={data} />} />
                    </Route>
                    <Route path="about">
                      <Route index element={<AboutUsPage data={data} />} />
                      <Route
                        path="our-company/stakeholders"
                        element={<StakeholdersPage data={data} />}
                      />
                      <Route
                        path="our-company/our-partners"
                        element={<OurPartnersPage data={data} />}
                      />
                      <Route
                        path="our-company/successful-cases"
                        element={<SuccessfulCasesPage data={data} />}
                      />
                      <Route
                        path="news/press"
                        element={<PressPage data={data} />}
                      />
                      <Route
                        path="webinars"
                        element={<WebinarsPage data={data} />}
                      />
                      <Route
                        path="webinars/:webinarName"
                        element={<WebinarPage data={webinar} />}
                      />
                      <Route path="news/e-book" element={<EBookPage />} />
                      <Route
                        path="careers/jobs"
                        element={<JobsPage data={data} />}
                      />
                    </Route>
                    <Route path="services">
                      <Route path="development"></Route>
                    </Route>
                    <Route path="services">
                      <Route path="solutions">
                        <Route path="development">
                          <Route
                            index
                            element={<DevelopmentPage data={data} />}
                          />
                          <Route
                            path="online-stores-development"
                            element={
                              <OnlineStoresDevelopmentPage data={data} />
                            }
                          />
                          <Route
                            path="consultation-and-maintenance"
                            element={
                              <ConsultationAndMaintenancePage data={data} />
                            }
                          />
                          <Route
                            path="outsourcing"
                            element={<OutsourcingPage data={data} />}
                          />
                          <Route
                            path="e-payment-integrations"
                            element={<EPaymentIntegrationsPage data={data} />}
                          />
                        </Route>
                        <Route path="operations">
                          <Route
                            index
                            element={<OperationPage data={data} />}
                          />
                          <Route
                            path="operations-solutions"
                            element={<OperationsSolutionsPage data={data} />}
                          />
                          <Route path="technical-support-agents" />
                          <Route path="projects-operations-bot" />
                          <Route path="logistics-management" />
                        </Route>
                        <Route path="marketing">
                          <Route path="content-marketing" />
                          <Route path="marketing-strategy" />
                          <Route path="market-analysis" />
                          <Route path="video-production" />
                          <Route path="integrated-marketing">
                            <Route path="integrated-marketing" />
                            <Route path="outsourcing" />
                          </Route>
                        </Route>
                      </Route>
                    </Route>
                  </Routes>
                </Suspense>
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
