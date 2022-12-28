import { useLocation, Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import {
  CloseSharp,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import {
  Collapse,
  IconButton,
  SwipeableDrawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  let location = useLocation();
  const [drawer, setDrawer] = useState(false);
  const [ourCompanyOpen, setOurCompanyOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [opOpen, setOpOpen] = useState(false);
  const [markOpen, setMarkOpen] = useState(false);
  const [btOpen, setBtOpen] = useState(false);

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
    setDrawer(false);
    setOurCompanyOpen(false);
    setNewsOpen(false);
    setCareersOpen(false);
    setDevOpen(false);
    setOpOpen(false);
    setBtOpen(false);
  }, [location]);

  useEffect(() => {
    if (
      document.querySelectorAll(`a[href='${location.pathname}']`).length > 0
    ) {
      document.querySelectorAll(
        `a[href='${location.pathname}']`
      )[0].style.fontWeight = 600;
    }
    return () => {
      if (
        document.querySelectorAll(`a[href='${location.pathname}']`).length > 0
      ) {
        document.querySelectorAll(
          `a[href='${location.pathname}']`
        )[0].style.fontWeight = 400;
      }
      if (
        document.querySelectorAll(`.mentihe[href='${location.pathname}']`)
          .length > 0
      ) {
        document.querySelectorAll(
          `.mentihe[href='${location.pathname}']`
        )[0].style.fontWeight = 600;
      }

      if (
        document.querySelectorAll(`.menu_btn[href='${location.pathname}']`)
          .length > 0
      ) {
        document.querySelectorAll(
          `.menu_btn[href='${location.pathname}']`
        )[0].style.fontWeight = "300";
      }
    };

    

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
        anchor={"left"}
        color="danger"
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box role="presentation" className="drawer">
          <div className="sideMenuLogo">
            <Link to="/">
              <img src={logo} alt={"logo"} />
            </Link>

            <CloseSharp onClick={toggleDrawer(false)} htmlColor="#027AB7" />
          </div>
          <List className="sideMenuList">
            <Link className="side_menu_item_main" to="/">
              <ListItemButton>
                <ListItemText>
                  <div className="side_menu_item_main">Home</div>
                </ListItemText>
              </ListItemButton>
            </Link>
            <ListItemButton onClick={() => setOurCompanyOpen(!ourCompanyOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
              
              >
                <div className="side_menu_item_main">Our Company</div>{" "}
              </ListItemText>
              {ourCompanyOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={ourCompanyOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link className="side_menu_item_link" to="/about">
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Who we are?</ListItemText>
                  </ListItemButton>
                </Link>

                <Link
                  className="side_menu_item_link"
                  to="/about/our-company/stakeholders"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Stakeholders</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/about/our-company/our-partners"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Our Partners</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/about/our-company/successful-cases"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Successful Cases</ListItemText>
                  </ListItemButton>
                </Link>
                <Link className="side_menu_item_link" to="/contact-us">
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Contact Us</ListItemText>
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setNewsOpen(!newsOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
              
              >
                <div className="side_menu_item_main">News</div>{" "}
              </ListItemText>
              {newsOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={newsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link className="side_menu_item_link" to="/about/news/press">
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Press</ListItemText>
                  </ListItemButton>
                </Link>
                <Link className="side_menu_item_link" to="/about/webinars">
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Webinars</ListItemText>
                  </ListItemButton>
                </Link>
                <Link className="side_menu_item_link" to="/about/news/projects">
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Projects</ListItemText>
                  </ListItemButton>
                </Link>
                <Link className="side_menu_item_link" to="/about/news/e-book">
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>E-Book</ListItemText>
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <Collapse>
              <div className="menti mentis">Our Company</div>
            </Collapse>
            <Collapse>
              <div className="menti mentis">News</div>
            </Collapse>
            <Collapse>
              <div className="menti mentis">Careers</div>
            </Collapse>
            <ListItemButton onClick={() => setCareersOpen(!careersOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
              
              >
                <div className="side_menu_item_main">Careers</div>
              </ListItemText>
              {careersOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={careersOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link className="side_menu_item_link" to="/about/careers/jobs">
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Jobs</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/about/careers/internships"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Internships</ListItemText>
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setDevOpen(!devOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
              
              >
                <div className="side_menu_item_main">Development</div>{" "}
              </ListItemText>
              {devOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={devOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/development"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Development</ListItemText>
                  </ListItemButton>{" "}
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/development/online-stores-development"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Online Stores Development</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/development/consultation-and-maintenance"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Consultation & Maintenance</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/development/outsourcing"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Outsourcing</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/development/e-payment-integrations"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>E-Payment Integrations</ListItemText>
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setOpOpen(!opOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
              
              >
                <div className="side_menu_item_main">Operations</div>{" "}
              </ListItemText>
              {opOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={opOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/operations"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Operations</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/operations/operations-solutions"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Operations Solutions</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/operations/technical-support-agents"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Technical Support Agents</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/operations/projects-operations-bot"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Projects Operations (BOT)</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/operations/logistics-management"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Logistics Management</ListItemText>
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>

            <ListItemButton onClick={() => setMarkOpen(!markOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
              
              >
                <div className="side_menu_item_main">Marketing</div>{" "}
              </ListItemText>
              {markOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={markOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/marketing"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Marketing</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/marketing/content-marketing"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Content Marketing</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/marketing/marketing-strategy"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Marketing Strategy</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/marketing/market-analysis"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Market Analysis</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/marketing/promotional-video-production"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Video Production</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/marketing/product-development"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Product Development</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/marketing/integrated-marketing-solutions"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Integrated Marketing</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/solutions/marketing/outsourcing"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Outsourcing</ListItemText>
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setBtOpen(!btOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
              
              >
                <div className="side_menu_item_main">Business Type</div>{" "}
              </ListItemText>
              {btOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={btOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  className="side_menu_item_link"
                  to="/services/business-type/retail-e-commerce"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Retail E-Commerce</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/business-type/fmcg-and-restaurats-e-commerce"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>FMCG & Restaurants E-Commerce</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/business-type/healthcare-e-commerce"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Healthcare E-Commerce</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/business-type/education-e-commerce"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>Education E-Commerce</ListItemText>
                  </ListItemButton>
                </Link>
                <Link
                  className="side_menu_item_link"
                  to="/services/business-type/e-commerce-for-special-projects"
                >
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemText>E-Commerce for Special Projects</ListItemText>
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            <Link className="side_menu_item_main" to="/blog">
              <ListItemButton>
                <ListItemText>
                  <div className="side_menu_item_main">Blog</div>
                </ListItemText>
              </ListItemButton>
            </Link>
            <Link className="side_menu_item_main" to="/media">
              <ListItemButton>
                <ListItemText>
                  <div className="side_menu_item_main">Media</div>
                </ListItemText>
              </ListItemButton>
            </Link>
          </List>
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
                  <Link to="/about">Who we are?</Link>
                </div>
                <div>
                  <Link to="/about/our-company/stakeholders">Stakeholders</Link>
                </div>
                <div>
                  <Link to="/about/our-company/our-partners">Our Partners</Link>
                </div>
                <div>
                  <Link to="/about/our-company/successful-cases">
                    Successful Cases
                  </Link>
                </div>
                <div>
                  <Link to="/contact-us">Contact Us </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">News</div>
                <div>
                  <Link to="/about/news/press">Press </Link>
                </div>
                <div>
                  <Link to="/about/webinars">Webinars </Link>
                </div>
                <div>
                  <Link to="/about/news/projects">Projects </Link>
                </div>
                <div>
                  <Link to="/about/news/e-book">E-Book </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">Careers</div>
                <div>
                  <Link to="/about/careers/jobs">Jobs </Link>
                </div>
                <div>
                  <Link to="/about/careers/internships">Internships </Link>
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
                  <Link to="/services/solutions/development/online-stores-development">
                    Online Stores Development
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/development/consultation-and-maintenance">
                    Consultation & Maintenance
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/development/outsourcing">
                    Outsourcing
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/development/e-payment-integrations">
                    E-Payment Integrations
                  </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">
                  <Link to="/services/solutions/operations" className="mentihe">
                    Operations
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/operations/operations-solutions">
                    Operations Solutions
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/operations/technical-support-agents">
                    Technical Support Agents
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/operations/projects-operations-bot">
                    Projects Operations (BOT)
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/operations/logistics-management">
                    Logistics Management
                  </Link>
                </div>
              </div>
              <span className="seperator" />
              <div className="mencol">
                <div className="menti">
                  <Link to="/services/solutions/marketing" className="mentihe">
                    Marketing
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/marketing/content-marketing">
                    Content Marketing
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/marketing/marketing-strategy">
                    Marketing Strategy
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/marketing/market-analysis">
                    Market Analysis
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/marketing/promotional-video-production">
                    Video Production
                  </Link>
                </div>
              </div>
              <div className="mencol">
                <div className="menti"></div>
                <div>
                  <Link to="/services/solutions/marketing/product-development">
                    Product Development
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/marketing/integrated-marketing-solutions">
                    Integrated Marketing
                  </Link>
                </div>
                <div>
                  <Link to="/services/solutions/marketing/outsourcing">
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
                  <Link to="/services/business-type/retail-e-commerce">
                    Retail E-Commerce
                  </Link>
                </div>
                <div>
                  <Link to="/services/business-type/fmcg-and-restaurats-e-commerce">
                    FMCG & Restaurants E-Commerce
                  </Link>
                </div>
                <div>
                  <Link to="/services/business-type/healthcare-e-commerce">
                    Healthcare E-Commerce
                  </Link>
                </div>
                <div>
                  <Link to="/services/business-type/education-e-commerce">
                    Education E-Commerce
                  </Link>
                </div>
                <div>
                  <Link to="/services/business-type/e-commerce-for-special-projects">
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
        <Link to="/">
          <img alt="logo" className="logo-img" src={logo} />
        </Link>
      </div>
      <div className="contact-us">
        <button className="cubtn">
          <Link to="/contact-us">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
