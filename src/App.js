import "./App.css";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
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
import InternshipsPage from "./components/about/InternshipsPage";
import EBookPage from "./components/about/EBookPage";
import BlogPage from "./components/BlogPage";
import PressPage from "./components/about/PressPage";
import SuccessfulCasesPage from "./components/about/SuccessfulCasesPage";
import ProjectsPage from "./components/about/ProjectsPage";
import WebinarsPage from "./components/about/WebinarsPage";
import WebinarPage from "./components/about/WebinarPage";
import NoPage from "./components/NoPage";
import DevelopmentPage from "./components/services/solutions/development/DevelopmentPage";
import OperationsPage from "./components/services/solutions/operations/OperationsPage";
import OnlineStoresDevelopmentPage from "./components/services/solutions/development/OnlineStoresDevelopmentPage";
import ConsultationAndMaintenancePage from "./components/services/solutions/development/ConsultationAndMaintenancePage";
import EPaymentIntegrationsPage from "./components/services/solutions/development/EPaymentIntegrationsPage";
import OperationsSolutionsPage from "./components/services/solutions/operations/OperationsSolutionsPage";
import usePathname from "./hooks/usePathname";
import JobPage from "./components/about/JobPage";
import useWindowSize from "./hooks/useWindowSize";
import TechnicalSupportAgentsPage from "./components/services/solutions/operations/TechnicalSupportAgentsPage";
import ProjectsOperationsPage from "./components/services/solutions/operations/ProjectsOperationsPage";
import LogisticsManagementPage from "./components/services/solutions/operations/LogisticsManagementPage";
import MarketingPage from "./components/services/solutions/marketing/MarketingPage";
import ContentMarketingPage from "./components/services/solutions/marketing/ContentMarketingPage";
import MarketingStrategyPage from "./components/services/solutions/marketing/MarketingStrategyPage";
import MarketAnalysisPage from "./components/services/solutions/marketing/MarketAnalysisPage";
import VideoProductionServicesPage from "./components/services/solutions/marketing/VideoProductionServicesPage";
import ProductDevelopmentPage from "./components/services/solutions/marketing/ProductDevelopmentPage";
import IntegratedMarketingSolutionsPage from "./components/services/solutions/marketing/IntegratedMarketingSolutionsPage";
import OutsourcingDevelopmentPage from "./components/services/solutions/development/OutsourcingDevelopmentPage";
import OutsourcingMarketingPage from "./components/services/solutions/marketing/OutsourcingMarketingPage";
import BusinessTypePage from "./components/services/BusinessType/BusinessTypePage";
import SingleBusinessType from "./components/services/BusinessType/SingleBusinessType";
import TermsAndPrivacyPage from "./components/TermsAndPrivacyPage";
import MediaPage from "./components/MediaPage";

function App() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [webinar, setWebinar] = useState({});
  const {
    btLoading,
    setBtLoading,
    isFetching,
    loading,
    apiUrl,
    setApiUrl,
    bgColor,
    setIsFetching,
    setLoading,
  } = usePathname({ location: location.pathname, setData });

  const width = useWindowSize();

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
    }
  }, [location.pathname, setIsFetching, setLoading, apiUrl, loading]);

  useEffect(() => {
    if (isFetching === false) {
      setLoading(false);
      setBtLoading(false);
    }
  }, [isFetching, setLoading, setBtLoading]);

  return (
    <div
      className="app"
      style={{
        scale: (width >= 1200
          ? width / 1920
          : (width <= 1199) & (width > 768)
          ? width / 820
          : (width <= 767) & (width > 320)
          ? width / 820
          : width / 320
        ).toString(),
      }}
    >
      <div className={bgColor} />
      <Header />
      <AnimatePresence>
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
                    <Route path="media" element={<MediaPage data={data} />} />

                    <Route
                      path="terms-and-privacy"
                      element={<TermsAndPrivacyPage data={data} />}
                    />
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
                      path="news/projects"
                      element={<ProjectsPage data={data} />}
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
                      <Route index element={<JobsPage data={data} />}></Route>
                      <Route
                        path=":slug"
                        element={<JobPage data={data} setApiUrl={setApiUrl} />}
                      />
                    </Route>
                    <Route
                      path="careers/internships"
                      element={<InternshipsPage />}
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
                          element={<OutsourcingDevelopmentPage data={data} />}
                        />
                        <Route
                          path="e-payment-integrations"
                          element={<EPaymentIntegrationsPage data={data} />}
                        />
                      </Route>
                      <Route path="operations">
                        <Route index element={<OperationsPage data={data} />} />
                        <Route
                          path="operations-solutions"
                          element={<OperationsSolutionsPage data={data} />}
                        />
                        <Route
                          path="technical-support-agents"
                          element={<TechnicalSupportAgentsPage data={data} />}
                        />
                        <Route
                          path="projects-operations-bot"
                          element={<ProjectsOperationsPage data={data} />}
                        />
                        <Route
                          path="logistics-management"
                          element={<LogisticsManagementPage data={data} />}
                        />
                      </Route>
                      <Route path="marketing">
                        <Route index element={<MarketingPage data={data} />} />
                        <Route
                          path="content-marketing"
                          element={<ContentMarketingPage data={data} />}
                        />
                        <Route
                          path="marketing-strategy"
                          element={<MarketingStrategyPage data={data} />}
                        />
                        <Route
                          path="market-analysis"
                          element={<MarketAnalysisPage data={data} />}
                        />
                        <Route
                          path="video-production-services"
                          element={<VideoProductionServicesPage data={data} />}
                        />
                        <Route
                          path="product-development"
                          element={<ProductDevelopmentPage data={data} />}
                        />
                        <Route
                          path="integrated-marketing-solutions"
                          element={
                            <IntegratedMarketingSolutionsPage data={data} />
                          }
                        />
                        <Route
                          path="outsourcing"
                          element={<OutsourcingMarketingPage data={data} />}
                        />
                      </Route>
                    </Route>
                    <Route
                      path="business-type"
                      element={
                        <>
                          <BusinessTypePage />{" "}
                          {btLoading ? <Loading /> : <Outlet />}{" "}
                        </>
                      }
                    >
                      <Route
                        path="retail-e-commerce"
                        element={<SingleBusinessType data={data} />}
                      />
                      <Route
                        path="fmcg-and-restaurats-e-commerce"
                        element={<SingleBusinessType data={data} />}
                      />
                      <Route
                        path="healthcare-e-commerce"
                        element={<SingleBusinessType data={data} />}
                      />
                      <Route
                        path="education-e-commerce"
                        element={<SingleBusinessType data={data} />}
                      />
                      <Route
                        path="e-commerce-for-special-projects"
                        element={<SingleBusinessType data={data} />}
                      />
                    </Route>
                  </Route>
                </Routes>
            </Suspense>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
