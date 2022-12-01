import { useEffect, useState } from "react";

function usePathname({ location, setData, slug }) {
  const [isFetching, setIsFetching] = useState(null);
  const [loading, setLoading] = useState(null);
  const [btLoading, setBtLoading] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);


  useEffect(() => {
    if(location.startsWith("/services/business-type/")) {
      document.querySelector(".singleBT").scrollIntoView({behavior:"smooth",block:"start"})
    }else{
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    console.log("slug: "+ slug)
    console.log(apiUrl)
    if (location === "/") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/home");
      setIsFetching(true);
      setBgColor("homebg");
      document.title = "Raqamyat";
    } else if (location === "/about") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/about");
      setIsFetching(true);
      setBgColor("aboutbg");
      document.title = "About Us";
    } else if (location === "/contact-us") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/contact");
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Contact Us";
    } else if (location === "/about/our-company/stakeholders") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/stakeholders");
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Stakeholders";
    } else if (location === "/about/our-company/our-partners") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/partners");
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Our Partners";
    } else if (location === "/about/careers/jobs") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs");
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Jobs";
    } else if (location === "/about/careers/jobs/:slug") {
      setLoading(true);
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Jobs";
    } else if (location === "/about/careers/internships") {
      setBgColor("contactbg");
      document.title = "Internships";
    } else if (location === "/blog") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs?type=blog");
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Blog";
    } 
    else if (location === `/blog/${slug}`) {
      setLoading(true);
      setApiUrl(`https://newraq.raqamyat.com/public/api/jobs/show?slug=${slug}`);
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Blog";
    } else if (location === "/about/news/e-book") {
      setBgColor("contactbg");
      document.title = "E-Book";
    } else if (location === "/about/news/press") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/jobs?type=press");
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Press";
    } else if (location === "/about/our-company/successful-cases") {
      setBgColor("insidebg");
      document.title = "Successful Cases";
    } else if (location === "/about/webinars") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/webinars");
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Webinars";
    } else if (location === "/about/webinars/:webinarName") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/webinars");
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Webinars";
    } else if (location === "/about/news/e-book") {
      setBgColor("contactbg");
      document.title = "E-Book";
    }

    //services

    ////development
    else if (location === "/services/solutions/development") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=development"
      );
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Development";
    } else if (
      location === "/services/solutions/development/online-stores-development"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=online-stores-development"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Online Stores Development";
    } else if (
      location ===
      "/services/solutions/development/consultation-and-maintenance"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=consultation-and-maintenance"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Consultation & Support";
    } else if (location === "/services/solutions/development/outsourcing") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=outsourcing"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Outsourcing";
    } else if (
      location === "/services/solutions/development/e-payment-integrations"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=e-payment-integrations"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "E-Payment Integrations";
    }

    ////operations
    else if (location === "/services/solutions/operations") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=operation"
      );
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Operations";
    } else if (
      location === "/services/solutions/operations/operations-solutions"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=operations-solutions"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Operations Solutions";
    } else if (
      location === "/services/solutions/operations/technical-support-agents"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=technical-support-agents"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Operations Solutions";
    } else if (
      location === "/services/solutions/operations/projects-operations-bot"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=projects-operations-bot"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Projects Operations (BOT)";
    } else if (
      location === "/services/solutions/operations/logistics-management"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=logistics-management"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Projects Operations (BOT)";
    }

    ////marketing
    else if (location === "/services/solutions/marketing") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=marketing"
      );
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Marketing";
    } else if (location === "/services/solutions/marketing/content-marketing") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=content-marketing"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Content Marketing";
    } else if (
      location === "/services/solutions/marketing/marketing-strategy"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=marketing-strategy"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Marketing Strategy";
    } else if (location === "/services/solutions/marketing/market-analysis") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=market-analysis"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Market Analysis";
    } else if (
      location === "/services/solutions/marketing/video-production-services"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=video-production-services"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Video Production Services";
    } else if (
      location === "/services/solutions/marketing/product-development"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=product-development"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Product Development";
    } else if (
      location ===
      "/services/solutions/marketing/integrated-marketing-solutions"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=integrated-marketing-solutions"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Integrated Marketing Solutions";
    } else if (location === "/services/solutions/marketing/outsourcing") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=outsourcing-marketing"
      );
      setIsFetching(true);
      setBgColor("contactbg");
      document.title = "Outsourcing";
    } else if (location === "/services/business-type/retail-e-commerce") {
      /* Business Type */
      setBtLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=retail-e-commerce"
      );
      setIsFetching(true);
      setBgColor("insidebg");

      document.title = "Retail";
    } else if (
      location === "/services/business-type/fmcg-and-restaurats-e-commerce"
    ) {
      setBtLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=fmcg-and-restaurats-e-commerce"
      );
      setIsFetching(true);
      setBgColor("insidebg");

      document.title = "Restaurants";
    } else if (location === "/services/business-type/healthcare-e-commerce") {
      setBtLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=healthcare-e-commerce"
      );
      setIsFetching(true);
      setBgColor("insidebg");

      document.title = "Healthcare";
    } else if (location === "/services/business-type/education-e-commerce") {
      setBtLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=education-e-commerce"
      );
      setIsFetching(true);
      setBgColor("insidebg");

      document.title = "Education";
    } else if (
      location === "/services/business-type/e-commerce-for-special-projects"
    ) {
      setBtLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=e-commerce-for-special-projects"
      );
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Special Projects";
    }

    /* Media */
    else if (
      location === "/media"
    ) {
      setBtLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=media"
      );
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Media";
    }

    /* Terms & Privacy */

    else if (
      location === "/terms-and-privacy"
    ) {
      setBtLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=terms-and-privacy"
      );
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Retail";
    }


  }, [location, setData, slug, apiUrl]);

  return {
    isFetching,
    loading,
    apiUrl,
    bgColor,
    btLoading,
    setApiUrl,
    setIsFetching,
    setLoading,
    setBgColor,
    setBtLoading,
  };
}

export default usePathname;
