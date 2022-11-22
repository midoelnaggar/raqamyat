import "./App.css";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
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
import usePathname from "./hooks/usePathname";
import JobPage from "./components/about/JobPage";

function App() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [webinar, setWebinar] = useState({});
const [job, setJob] = useState({});
  const { isFetching, loading, apiUrl, bgColor, setIsFetching, setLoading,setApiUrl } =
    usePathname({ location: location.pathname });

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
  }, [location.pathname, setIsFetching, setLoading, apiUrl, loading]);

  useEffect(() => {
    if (isFetching === false) {
      setLoading(false);
    }
  }, [isFetching, setLoading]);

  return (
    <div className="app">
      <div className={bgColor} />
      <Header />
      <AnimatePresence>
        <SnackbarProvider>
          {loading ? (
            <Loading />
          ) : (
            <div className="outlet">
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route location={location} key={location.pathname}>
                    <Route index element={<HomePage data={data}></HomePage>} />
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
                      element={
                        <WebinarsPage data={data} setWebinar={setWebinar} />
                      }
                    />
                    <Route
                      path="webinars/:webinarName"
                      element={<WebinarPage data={webinar} />}
                    />
                    <Route path="news/e-book" element={<EBookPage />} />
                    <Route path="careers/jobs">
                      <Route
                        index
                        element={<JobsPage data={data} setJob={setJob} />}
                      >
                      </Route>
                      <Route path=":slug" element={<JobPage data={job} />} />
                    </Route>
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
                          element={<OnlineStoresDevelopmentPage data={data} />}
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
                        <Route index element={<OperationPage data={data} />} />
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
      <Footer />
    </div>
  );
}

export default App;
