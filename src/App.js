import "./App.css"
import "./styles"
import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import { Route, Routes, useLocation, Outlet, useNavigationType } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useWindowSize from "./hooks/useWindowSize";
import usePathname from "./hooks/usePathname";
import Seo from "./components/Seo";
const Loading = lazy(() => import("./Loading"));
const Footer = lazy(() => import("./components/headerAndFooter/Footer"));
const Header = lazy(() => import("./components/headerAndFooter/Header"));
const HomePage = lazy(() => import("./components/homePage"));
const AboutUsPage = lazy(() => import("./components/about/AboutUsPage"));
const ContactUsPage = lazy(() => import("./components/ContactUsPage"));
const StakeholdersPage = lazy(() =>
  import("./components/about/StakeholdersPage")
);
const OurPartnersPage = lazy(() =>
  import("./components/about/OurPartnersPage")
);
const JobsPage = lazy(() => import("./components/about/JobsPage"));
const InternshipsPage = lazy(() =>
  import("./components/about/InternshipsPage")
);
const EBookPage = lazy(() => import("./components/about/EBookPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const PressPage = lazy(() => import("./components/about/PressPage"));
const SuccessfulCasesPage = lazy(() =>
  import("./components/about/SuccessfulCasesPage")
);
const ProjectsPage = lazy(() => import("./components/about/ProjectsPage"));
const WebinarsPage = lazy(() => import("./components/about/WebinarsPage"));
const WebinarPage = lazy(() => import("./components/about/WebinarPage"));
const NoPage = lazy(() => import("./components/NoPage"));
const DevelopmentPage = lazy(() =>
  import("./components/services/solutions/development/DevelopmentPage")
);
const OperationsPage = lazy(() =>
  import("./components/services/solutions/operations/OperationsPage")
);
const OnlineStoresDevelopmentPage = lazy(() =>
  import(
    "./components/services/solutions/development/OnlineStoresDevelopmentPage"
  )
);
const ConsultationAndMaintenancePage = lazy(() =>
  import(
    "./components/services/solutions/development/ConsultationAndMaintenancePage"
  )
);
const EPaymentIntegrationsPage = lazy(() =>
  import("./components/services/solutions/development/EPaymentIntegrationsPage")
);
const OperationsSolutionsPage = lazy(() =>
  import("./components/services/solutions/operations/OperationsSolutionsPage")
);
const JobPage = lazy(() => import("./components/about/JobPage"));
const TechnicalSupportAgentsPage = lazy(() =>
  import(
    "./components/services/solutions/operations/TechnicalSupportAgentsPage"
  )
);
const ProjectsOperationsPage = lazy(() =>
  import("./components/services/solutions/operations/ProjectsOperationsPage")
);
const LogisticsManagementPage = lazy(() =>
  import("./components/services/solutions/operations/LogisticsManagementPage")
);
const MarketingPage = lazy(() =>
  import("./components/services/solutions/marketing/MarketingPage")
);
const ContentMarketingPage = lazy(() =>
  import("./components/services/solutions/marketing/ContentMarketingPage")
);
const MarketingStrategyPage = lazy(() =>
  import("./components/services/solutions/marketing/MarketingStrategyPage")
);
const MarketAnalysisPage = lazy(() =>
  import("./components/services/solutions/marketing/MarketAnalysisPage")
);
const VideoProductionServicesPage = lazy(() =>
  import(
    "./components/services/solutions/marketing/VideoProductionServicesPage"
  )
);
const ProductDevelopmentPage = lazy(() =>
  import("./components/services/solutions/marketing/ProductDevelopmentPage")
);
const IntegratedMarketingSolutionsPage = lazy(() =>
  import(
    "./components/services/solutions/marketing/IntegratedMarketingSolutionsPage"
  )
);
const OutsourcingDevelopmentPage = lazy(() =>
  import(
    "./components/services/solutions/development/OutsourcingDevelopmentPage"
  )
);
const OutsourcingMarketingPage = lazy(() =>
  import("./components/services/solutions/marketing/OutsourcingMarketingPage")
);
const BusinessTypePage = lazy(() =>
  import("./components/services/BusinessType/BusinessTypePage")
);
const SingleBusinessType = lazy(() =>
  import("./components/services/BusinessType/SingleBusinessType")
);
const TermsAndPrivacyPage = lazy(() =>
  import("./components/TermsAndPrivacyPage")
);
const MediaPage = lazy(() => import("./components/MediaPage"));
const SingleBlog = lazy(() => import("./components/services/SingleBlog"));

function App() {
  const navigationType = useNavigationType();
  const location = useLocation();
  const [data, setData] = useState(null);
  const {
    loading,
    apiUrl,
    setApiUrl,
    bgColor,
    setLoading,
  } = usePathname({ location: location.pathname, setData });

  const width = useWindowSize();

  useEffect(() => {
    const  getData = async () =>{
      try {
       const res = await axios.get(apiUrl)
       if ( await res.data.data) {
            setData( await res.data.data);
            setLoading(false);
          }
          else if ( await res.data.item.data) {
            setData(await res.data);
            setLoading(false);
          }
        
      } catch (err) {
        console.error(err);
    }
  }
  getData();
  }, [apiUrl,setLoading]);

  useEffect(() => {
    if (navigationType === "POP") {
      setLoading(false)
    }
    }, [navigationType,setLoading]);


  return (
    <div
      className="app"
      style={{
        scale: (width >= 1200
          ? width / 1920
          : (width <= 1199) & (width > 768)
          ? width / 820
          : (width <= 767) & (width > 320)
          ? width / 375
          : width / 320
        ).toString(),
      }}
    >
      <Seo description={data?.seo_description} />
      <div className={bgColor} />
      <Header />
      <AnimatePresence>
        {loading && <Loading />}
          <div style={{display:`${loading ? "none" : "block"}`}} className="outlet">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route location={location} key={location.pathname}>
                  <Route index element={<HomePage data={data} setLoading={setLoading}></HomePage>} />
                  <Route path="*" element={<NoPage />} />
                  <Route
                    path="contact-us"
                    element={<ContactUsPage data={data} />}
                  />
                  <Route path="blog">
                    <Route
                      index
                      element={<BlogPage data={data} setLoading={setLoading} />}
                    />
                    <Route path=":slug" element={<SingleBlog setLoading={setLoading} />} />
                  </Route>
                  <Route path="media" element={<MediaPage data={data} />} />
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
                    element={<PressPage data={data} setLoading={setLoading} />}
                  />
                  <Route
                    path="webinars"
                    element={
                      <WebinarsPage data={data}  />
                    }
                  />
                  <Route
                    path="webinars/:id"
                    element={<WebinarPage  setLoading={setLoading} />}
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
                      <Route index element={<DevelopmentPage data={data} />} />
                      <Route
                        path="online-stores-development"
                        element={<OnlineStoresDevelopmentPage data={data} />}
                      />
                      <Route
                        path="consultation-and-maintenance"
                        element={<ConsultationAndMaintenancePage data={data} />}
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
                        {loading ? <Loading /> : <Outlet />}{" "}
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
        
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
