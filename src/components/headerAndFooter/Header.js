import { useLocation, Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  let location = useLocation();
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  useEffect(() => {
    if(document.querySelectorAll(`a[href='${location.pathname}']`).length >0){
    document.querySelectorAll(`a[href='${location.pathname}']`)[0].style.fontWeight = 600
    }
    return()=> {
      if(document.querySelectorAll(`a[href='${location.pathname}']`).length >0){
      document.querySelectorAll(`a[href='${location.pathname}']`)[0].style.fontWeight = 400
      }

    }
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="sideMenuBtn">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon
            htmlColor="#027ab7"
            edge="start"
            fontSize="x-large"
            sx={{ fontSize: "50px" }}
          />
        </IconButton>
      </div>
      <SwipeableDrawer
        anchor={"top"}
        color="danger"
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="drawer"
        >
          <Link  to="/">
            <div className="sideMenuLogo">
              <img src={logo} alt={"logo"} />
            </div>
          </Link>
          <List className="sideMenuList">
            <Divider textAlign="center">
              <div className="menti mentis">Our Company</div>
            </Divider>
            <div className="sideMenuSection">
              <Link  className="side_menu_item_link" to="/about">
                Who we are?
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/about/our-company/stakeholders"
              >
                Stakeholders
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/about/our-company/our-partners"
              >
                Our Partners
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/about/our-company/successful-cases"
              >
                Successful Cases
              </Link>

              <Link  className="side_menu_item_link" to="/contact-us">
                Contact Us
              </Link>
            </div>
            <Divider textAlign="center">
              <div className="menti mentis">News</div>
            </Divider>
            <div className="sideMenuSection">
              <Link  className="side_menu_item_link" to="/about/news/press">
                Press
              </Link>

              <Link  className="side_menu_item_link" to="/about/webinars">
                Webinars
              </Link>

              <Link  className="side_menu_item_link" to="/about/news/projects">
                Projects
              </Link>

              <Link  className="side_menu_item_link" to="/about/news/e-book">
                E-Book
              </Link>
            </div>
            <Divider textAlign="center">
              <div className="menti mentis">Careers</div>
            </Divider>
            <div className="sideMenuSection">
              <Link  className="side_menu_item_link" to="/about/careers/jobs">
                Jobs
              </Link>
              <Link 
                className="side_menu_item_link"
                to="/about/careers/internships"
              >
                Internships
              </Link>
            </div>
          </List>
          <Divider />
          <div className="sideMenutitle">Services</div>
          <List className="sideMenuList">
            <Divider textAlign="center">
              <div className="menti mentis">
                {" "}
                <Link  to="/services/solutions/development" className="mentihe">
                  Development
                </Link>
              </div>
            </Divider>
            <div className="sideMenuSection">
              <Link 
                className="side_menu_item_link"
                to="/services/solutions/development/online-stores-development"
              >
                Online Stores Development
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/development/consultation-and-maintenance"
              >
                Consultation & Maintenance
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/development/outsourcing"
              >
                Outsourcing
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/development/e-payment-integrations"
              >
                E-Payment Integrations
              </Link>
            </div>
            <Divider textAlign="center">
              <div className="menti mentis">
                {" "}
                <Link  to="/services/solutions/operations" className="mentihe">
                  Operations
                </Link>
              </div>
            </Divider>
            <div className="sideMenuSection">
              <Link 
                className="side_menu_item_link"
                to="/services/solutions/operations/operations-solutions"
              >
                Operations Solutions
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/operations/technical-support-agents"
              >
                Technical Support Agents
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/operations/projects-operations-bot"
              >
                Projects Operations (BOT)
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/operations/logistics-management"
              >
                Logistics Management
              </Link>
            </div>
            <Divider textAlign="center">
              <div className="menti mentis">
                <Link  to="/services/solutions/marketing" className="mentihe">
                  Marketing
                </Link>
              </div>
            </Divider>

            <div className="sideMenuSection">
              <Link 
                className="side_menu_item_link"
                to="/services/solutions/marketing/content-marketing"
              >
                Content Marketing
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/marketing/marketing-strategy"
              >
                Marketing Strategy
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/marketing/market-analysis"
              >
                Market Analysis
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/marketing/video-production-services"
              >
                Video Production
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/marketing/product-development"
              >
                Product Development
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/marketing/integrated-marketing-solutions"
              >
                Integrated Marketing
              </Link>

              <Link 
                className="side_menu_item_link"
                to="/services/solutions/marketing/outsourcing"
              >
                Outsourcing
              </Link>
            </div>
          </List>
            <Divider textAlign="center">
              <div className="menti mentis">
                <Link 
                  to="/services/solutions/business-type/retail-e-commerce"
                  className="mentihe"
                >
                  Business Type
                </Link>
              </div>
            </Divider>
            <div className="sideMenuSection">
            <Link   className="side_menu_item_link" to="/services/business-type/retail-e-commerce">
              Retail E-Commerce
            </Link>

            <Link   className="side_menu_item_link" to="/services/business-type/fmcg-and-restaurats-e-commerce">
              FMCG & Restaurants E-Commerce
            </Link>

            <Link   className="side_menu_item_link" to="/services/business-type/healthcare-e-commerce">
              Healthcare E-Commerce
            </Link>

            <Link   className="side_menu_item_link" to="/services/business-type/education-e-commerce">
              Education E-Commerce
            </Link>

            <Link   className="side_menu_item_link" to="/services/business-type/e-commerce-for-special-projects">
              E-Commerce for Special Projects
            </Link>
            </div>
            <Divider />

          <div className="sideMenuSection">
            <div style={{ padding: "15px" }} className="menti mentis">
              {" "}
              <Link  to="/blog" className="mentihe">
                Blog
              </Link>
            </div>
            <div style={{ padding: "15px" }} className="menti mentis">
              {" "}
              <Link  className="mentihe">-</Link>
            </div>
            <div style={{ padding: "15px" }} className="menti mentis">
              {" "}
              <Link  to="/media" className="mentihe">
                Media
              </Link>
            </div>
          </div>
        </Box>
      </SwipeableDrawer>
      <div className="navList">
        <div>
          <Link 
            className={`${
              location?.pathname === "/"
                ? "activeLink menu_btn"
                : "inactiveLink menu_btn"
            } `}
            to="/"
          >
            Home
          </Link>
        </div>
        <span className="dot"></span>

        <div className="aboutcontainer">
          <div
            style={{ cursor: "default" }}
            className={`${
              location?.pathname.startsWith("/about")
                ? "activeLink"
                : "inactiveLink"
            }  aboutbtn menu_btn`}
          >
            About
          </div>
          <div className="aboutmenu">
            <div className="smcontent">
              <div className="mencol">
                <div className="menti">Our Company</div>
                <div>
                  <Link  to="/about">Who we are?</Link>
                </div>
                <div>
                  <Link  to="/about/our-company/stakeholders">Stakeholders</Link>
                </div>
                <div>
                  <Link  to="/about/our-company/our-partners">Our Partners</Link>
                </div>
                <div>
                  <Link  to="/about/our-company/successful-cases">
                    Successful Cases
                  </Link>
                </div>
                <div>
                  <Link  to="/contact-us">Contact Us </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">News</div>
                <div>
                  <Link  to="/about/news/press">Press </Link>
                </div>
                <div>
                  <Link  to="/about/webinars">Webinars </Link>
                </div>
                <div>
                  <Link  to="/about/news/projects">Projects </Link>
                </div>
                <div>
                  <Link  to="/about/news/e-book">E-Book </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">Careers</div>
                <div>
                  <Link  to="/about/careers/jobs">Jobs </Link>
                </div>
                <div>
                  <Link  to="/about/careers/internships">Internships </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="dot"></span>
        <div className="servicescontainer">
          <div
            style={{ cursor: "default" }}
            className={`${
              location?.pathname.startsWith("/services")
                ? "activeLink"
                : "inactiveLink"
            }  servicesbtn menu_btn`}
          >
            Services
          </div>
          <div className="servicesmenu">
            <div className="smcontent">
              <div className="mencol">
                <div className="menmti">Solutions</div>
              </div>
              <div className="mencol">
                <div className="menti">
                  <Link 
                    to="/services/solutions/development"
                    className="mentihe"
                  >
                    Development
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/development/online-stores-development">
                    Online Stores Development
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/development/consultation-and-maintenance">
                    Consultation & Maintenance
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/development/outsourcing">
                    Outsourcing
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/development/e-payment-integrations">
                    E-Payment Integrations
                  </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">
                  <Link  to="/services/solutions/operations" className="mentihe">
                    Operations
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/operations/operations-solutions">
                    Operations Solutions
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/operations/technical-support-agents">
                    Technical Support Agents
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/operations/projects-operations-bot">
                    Projects Operations (BOT)
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/operations/logistics-management">
                    Logistics Management
                  </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">
                  <Link  to="/services/solutions/marketing" className="mentihe">
                    Marketing
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/marketing/content-marketing">
                    Content Marketing
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/marketing/marketing-strategy">
                    Marketing Strategy
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/marketing/market-analysis">
                    Market Analysis
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/marketing/video-production-services">
                    Video Production
                  </Link>
                </div>
              </div>
              <div className="mencol">
                <div className="menti"></div>
                <div>
                  <Link  to="/services/solutions/marketing/product-development">
                    Product Development
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/marketing/integrated-marketing-solutions">
                    Integrated Marketing
                  </Link>
                </div>
                <div>
                  <Link  to="/services/solutions/marketing/outsourcing">
                    Outsourcing
                  </Link>
                </div>
              </div>
            </div>
            <div className="smcontent">
              <div className="mencol">
                <div className="menmti">Business Type</div>
              </div>
              <div className="menlcol">
                <div>
                  <Link  to="/services/business-type/retail-e-commerce">
                    Retail E-Commerce
                  </Link>
                </div>
                <div>
                  <Link  to="/services/business-type/fmcg-and-restaurats-e-commerce">
                    FMCG & Restaurants E-Commerce
                  </Link>
                </div>
                <div>
                  <Link  to="/services/business-type/healthcare-e-commerce">
                    Healthcare E-Commerce
                  </Link>
                </div>
                <div>
                  <Link  to="/services/business-type/education-e-commerce">
                    Education E-Commerce
                  </Link>
                </div>
                <div>
                  <Link  to="/services/business-type/e-commerce-for-special-projects">
                    E-Commerce for Special Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="dot"></span>
        <div>
          <Link 
            className={`${
              location?.pathname === "/blog"
                ? "activeLink menu_btn"
                : "inactiveLink menu_btn"
            } `}
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <span className="dot"></span>
        <div>
          <Link 
            className={`${
              location?.pathname === "/media"
                ? "activeLink menu_btn"
                : "inactiveLink menu_btn"
            } `}
            to="/media"
          >
            Media
          </Link>
        </div>
      </div>
      <div className="logo">
        <Link  to="/">
          <img alt="logo" className="logo-img" src={logo} />
        </Link>
      </div>
      <div className="contact-us">
        <button className="cubtn">
          <Link  to="/contact-us">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
