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
  ListItemIcon,
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
    setDrawer(false)
  }, [location.pathname]);

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

            <CloseSharp
              onClick={() => toggleDrawer(false)}
              htmlColor="#027AB7"
            />
          </div>
          <List className="sideMenuList">
            <ListItemButton>
              <ListItemText classname="ListItemTextBold">
                <Link className="side_menu_item_main" to="/">
                  Home
                </Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() => setOurCompanyOpen(!ourCompanyOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
                classname="ListItemTextBold"
              >
                <Link className="side_menu_item_main" to="">
                  Our Company
                </Link>{" "}
              </ListItemText>
              {ourCompanyOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={ourCompanyOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link className="side_menu_item_link" to="/about">
                      Who we are?
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/about/our-company/stakeholders"
                    >
                      Stakeholders
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/about/our-company/our-partners"
                    >
                      Our Partners
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/about/our-company/successful-cases"
                    >
                      Successful Cases
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link className="side_menu_item_link" to="/contact-us">
                      Contact Us
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setNewsOpen(!newsOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
                classname="ListItemTextBold"
              >
                <Link className="side_menu_item_main" to="">
                  News
                </Link>{" "}
              </ListItemText>
              {newsOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={newsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/about/news/press"
                    >
                      Press
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link className="side_menu_item_link" to="/about/webinars">
                      Webinars
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/about/news/projects"
                    >
                      Projects
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/about/news/e-book"
                    >
                      E-Book
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            <Collapse textAlign="center">
              <div className="menti mentis">Our Company</div>
            </Collapse>
            <Collapse textAlign="center">
              <div className="menti mentis">News</div>
            </Collapse>
            <Collapse textAlign="center">
              <div className="menti mentis">Careers</div>
            </Collapse>
            <ListItemButton onClick={() => setCareersOpen(!careersOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
                classname="ListItemTextBold"
              >
                <Link className="side_menu_item_main" to="">
                  Careers
                </Link>
              </ListItemText>
              {careersOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={careersOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/about/careers/jobs"
                    >
                      Jobs
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/about/careers/internships"
                    >
                      Internships
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setDevOpen(!devOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
                classname="ListItemTextBold"
              >
                <Link className="side_menu_item_main" to="">
                  Development
                </Link>{" "}
              </ListItemText>
              {devOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={devOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/development/"
                    >
                      Development
                    </Link>
                  </ListItemText>
                </ListItemButton>{" "}
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/development/online-stores-development"
                    >
                      Online Stores Development
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/development/consultation-and-maintenance"
                    >
                      Consultation & Maintenance
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/development/outsourcing"
                    >
                      Outsourcing
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/development/e-payment-integrations"
                    >
                      E-Payment Integrations
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setOpOpen(!opOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
                classname="ListItemTextBold"
              >
                <Link className="side_menu_item_main" to="">
                  Operations
                </Link>{" "}
              </ListItemText>
              {opOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={opOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/operations/"
                    >
                      Operations
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/operations/operations-solutions"
                    >
                      Operations Solutions
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/operations/technical-support-agents"
                    >
                      Technical Support Agents
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/operations/projects-operations-bot"
                    >
                      Projects Operations (BOT)
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/operations/logistics-management"
                    >
                      Logistics Management
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => setMarkOpen(!markOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
                classname="ListItemTextBold"
              >
                <Link className="side_menu_item_main" to="">
                  Marketing
                </Link>{" "}
              </ListItemText>
              {markOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={markOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/marketing/"
                    >
                      Marketing
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/marketing/content-marketing"
                    >
                      Content Marketing
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/marketing/marketing-strategy"
                    >
                      Marketing Strategy
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/marketing/market-analysis"
                    >
                      Market Analysis
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/marketing/video-production-services"
                    >
                      Video Production
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/marketing/product-development"
                    >
                      Product Development
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/marketing/integrated-marketing-solutions"
                    >
                      Integrated Marketing
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/solutions/marketing/outsourcing"
                    >
                      Outsourcing
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setBtOpen(!btOpen)}>
              <ListItemText
                color="#027AB7"
                style={{ fontWeight: "600 !important" }}
                classname="ListItemTextBold"
              >
                <Link className="side_menu_item_main" to="">
                  Business Type
                </Link>{" "}
              </ListItemText>
              {btOpen ? (
                <ExpandLess htmlColor="#027AB7" />
              ) : (
                <ExpandMore htmlColor="#027AB7" />
              )}
            </ListItemButton>
            <Collapse in={btOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/business-type/retail-e-commerce"
                    >
                      Retail E-Commerce
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/business-type/fmcg-and-restaurats-e-commerce"
                    >
                      FMCG & Restaurants E-Commerce
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/business-type/healthcare-e-commerce"
                    >
                      Healthcare E-Commerce
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/business-type/education-e-commerce"
                    >
                      Education E-Commerce
                    </Link>
                  </ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText>
                    <Link
                      className="side_menu_item_link"
                      to="/services/business-type/e-commerce-for-special-projects"
                    >
                      E-Commerce for Special Projects
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemText classname="ListItemTextBold">
                <Link className="side_menu_item_main" to="/blog">
                  Blog
                </Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText classname="ListItemTextBold">
                <Link className="side_menu_item_main" to="/media">
                  Media
                </Link>
              </ListItemText>
            </ListItemButton>
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
                  <Link to="/services/solutions/marketing/video-production-services">
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
