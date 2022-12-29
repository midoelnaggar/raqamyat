import { useEffect, useState } from "react";

function usePathname({ location, slug }) {
  const [bgColor, setBgColor] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
    if (location.startsWith("/services/business-type/")) {
      document
        .querySelector(".singleBT")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (location === "/") {
      setApiUrl("https://newraq.raqamyat.com/public/api/home");
      setBgColor("homebg");
      document.title = "Raqamyat";
    } else if (location === "/about") {
      setApiUrl("https://newraq.raqamyat.com/public/api/about");
      setBgColor("aboutbg");
      document.title = "About Us";
    } else if (location === "/contact-us") {
      setApiUrl("https://newraq.raqamyat.com/public/api/contact");
      setBgColor("contactbg");
      document.title = "Contact Us";
    } else if (location === "/about/our-company/stakeholders") {
      setApiUrl("https://newraq.raqamyat.com/public/api/stakeholders");
      setBgColor("contactbg");
      document.title = "Stakeholders";
    } else if (location === "/about/news/projects") {
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs?type=project");
      setBgColor("contactbg");
      document.title = "Our Partners";
    } else if (location === "/about/our-company/our-partners") {
      setApiUrl("https://newraq.raqamyat.com/public/api/partners");
      setBgColor("contactbg");
      document.title = "Our Partners";
    } else if (location === "/about/careers/jobs") {
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs?type=job");
      setBgColor("contactbg");
      document.title = "Jobs";
    } else if (location === "/about/careers/jobs/:slug") {
      setBgColor("contactbg");
      document.title = "Jobs";
    } else if (location === "/about/careers/internships") {
      setBgColor("contactbg");
      document.title = "Internships";
    } else if (location === "/blog") {
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs?type=blog");
      setBgColor("insidebg");
      document.title = "Blog";
    } else if (location === `/blog/${slug}`) {
      setApiUrl(
        `https://newraq.raqamyat.com/public/api/jobs/show?slug=${slug}`
      );
      setBgColor("insidebg");
      document.title = "Blog";
    } else if (location === "/about/news/e-book") {
      setBgColor("contactbg");
      document.title = "E-Book";
    } else if (location === "/about/news/press") {
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs?type=press");
      setBgColor("insidebg");
      document.title = "Press";
    } else if (location === `/about/news/press/${slug}`) {
      setApiUrl(
        `https://newraq.raqamyat.com/public/api/jobs/show?slug=${slug}`
      );
      setBgColor("insidebg");
      document.title = "Press";
    } else if (location === "/about/our-company/successful-cases") {
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs?type=project");
      setBgColor("insidebg");
      document.title = "Successful Cases";
    } /*else if (location === "/about/webinars") {
      setApiUrl("https://newraq.raqamyat.com/public/api/webinars");
      setBgColor("insidebg");
      document.title = "Webinars";
    } else if (location.startsWith("/about/webinars/")) {
      setApiUrl("");
      setBgColor("insidebg");
      document.title = "Webinars";
    }*/ else if (location === "/about/news/e-book") {
      setBgColor("contactbg");
      document.title = "E-Book";
    }

    //services

    ////development
    else if (location === "/services/solutions/development") {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=development"
      );
      setBgColor("insidebg");
      document.title = "Development";
    } else if (
      location === "/services/solutions/development/online-stores-development"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=online-stores-development"
      );
      setBgColor("contactbg");
      document.title = "Online Stores Development";
    } else if (
      location ===
      "/services/solutions/development/consultation-and-maintenance"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=consultation-and-maintenance"
      );
      setBgColor("contactbg");
      document.title = "Consultation & Support";
    } else if (location === "/services/solutions/development/outsourcing") {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=outsourcing"
      );
      setBgColor("contactbg");
      document.title = "Outsourcing";
    } else if (
      location === "/services/solutions/development/e-payment-integrations"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=e-payment-integrations"
      );
      setBgColor("contactbg");
      document.title = "E-Payment Integrations";
    }

    ////operations
    else if (location === "/services/solutions/operations") {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=operation"
      );
      setBgColor("insidebg");
      document.title = "Operations";
    } else if (
      location === "/services/solutions/operations/operations-solutions"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=operations-solutions"
      );
      setBgColor("contactbg");
      document.title = "Operations Solutions";
    } else if (
      location === "/services/solutions/operations/technical-support-agents"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=technical-support-agents"
      );
      setBgColor("contactbg");
      document.title = "Operations Solutions";
    } else if (
      location === "/services/solutions/operations/projects-operations-bot"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=projects-operations-bot"
      );
      setBgColor("contactbg");
      document.title = "Projects Operations (BOT)";
    } else if (
      location === "/services/solutions/operations/logistics-management"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=logistics-management"
      );
      setBgColor("contactbg");
      document.title = "Projects Operations (BOT)";
    }

    ////marketing
    else if (location === "/services/solutions/marketing") {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=marketing"
      );
      setBgColor("insidebg");
      document.title = "Marketing";
    } else if (location === "/services/solutions/marketing/content-marketing") {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=content-marketing"
      );
      setBgColor("contactbg");
      document.title = "Content Marketing";
    } else if (
      location === "/services/solutions/marketing/marketing-strategy"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=marketing-strategy"
      );
      setBgColor("contactbg");
      document.title = "Marketing Strategy";
    } else if (location === "/services/solutions/marketing/market-analysis") {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=market-analysis"
      );
      setBgColor("contactbg");
      document.title = "Market Analysis";
    } else if (
      location === "/services/solutions/marketing/promotional-video-production"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=video-production-services"
      );
      setBgColor("contactbg");
      document.title = "Video Production Services";
    } else if (
      location === "/services/solutions/marketing/product-development"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=product-development"
      );
      setBgColor("contactbg");
      document.title = "Product Development";
    } else if (
      location ===
      "/services/solutions/marketing/integrated-marketing-solutions"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=integrated-marketing-solutions"
      );
      setBgColor("contactbg");
      document.title = "Integrated Marketing Solutions";
    } else if (location === "/services/solutions/marketing/outsourcing") {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=outsourcing-marketing"
      );
      setBgColor("contactbg");
      document.title = "Outsourcing";
    } else if (location === "/services/business-type/retail-e-commerce") {
      /* Business Type */
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=retail-e-commerce"
      );
      setBgColor("insidebg");

      document.title = "Retail";
    } else if (
      location === "/services/business-type/fmcg-and-restaurats-e-commerce"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=fmcg-and-restaurats-e-commerce"
      );
      setBgColor("insidebg");

      document.title = "Restaurants";
    } else if (location === "/services/business-type/healthcare-e-commerce") {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=healthcare-e-commerce"
      );
      setBgColor("insidebg");

      document.title = "Healthcare";
    } else if (location === "/services/business-type/education-e-commerce") {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=education-e-commerce"
      );
      setBgColor("insidebg");

      document.title = "Education";
    } else if (
      location === "/services/business-type/e-commerce-for-special-projects"
    ) {
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=e-commerce-for-special-projects"
      );
      setBgColor("insidebg");
      document.title = "Special Projects";
    } else if (location === "/media") {
      /* Media */
      setApiUrl("https://newraq.raqamyat.com/public/api/services?slug=media");
      setBgColor("insidebg");
      document.title = "Media";
    } else if (location === "/terms-and-privacy") {
      /* Terms & Privacy */
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=terms-and-privacy"
      );
      setBgColor("insidebg");
      document.title = "Retail";
    }
    if (
      (document.getElementsByClassName("aboutmenu").length > 0) &
      (document.getElementsByClassName("servicesmenu").length > 0)
    ) {
      document.getElementsByClassName("aboutmenu")[0].style.visibility =
        "hidden";
      document.getElementsByClassName("servicesmenu")[0].style.visibility =
        "hidden";
      setTimeout(() => {
        document.getElementsByClassName("aboutmenu")[0].style.visibility =
          "visible";
        document.getElementsByClassName("servicesmenu")[0].style.visibility =
          "visible";
      }, 100);
    }
    return () => {
      setApiUrl("");
    };
  }, [location, apiUrl, slug]);

  return {
    apiUrl,
    bgColor,
    setApiUrl,
    setBgColor,
  };
}

export default usePathname;
