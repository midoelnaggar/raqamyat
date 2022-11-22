import { useEffect, useState } from "react";

function usePathname({ location }) {
  const [isFetching, setIsFetching] = useState(null);
  const [loading, setLoading] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
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
    } else if (location === "/blog") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/blogs");
      setIsFetching(true);
      setBgColor("insidebg");
      document.title = "Blog";
    } else if (location === "/about/news/e-book") {
      setBgColor("contactbg");
      document.title = "E-Book";
    } else if (location === "/about/news/press") {
      setLoading(true);
      setApiUrl("https://newraq.raqamyat.com/public/api/blogs");
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
    } else if (
      location === "/services/solutions/development/online-stores-development"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=online-stores-development"
      );
      setIsFetching(true);
      setBgColor("contactbg");
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
    } else if (location === "/services/solutions/development/outsourcing") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=outsourcing"
      );
      setIsFetching(true);
      setBgColor("contactbg");
    } else if (
      location === "/services/solutions/development/e-payment-integrations"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=e-payment-integrations"
      );
      setIsFetching(true);
      setBgColor("contactbg");
    }
    ////operation
    else if (location === "/services/solutions/operations") {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=operation"
      );
      setIsFetching(true);
      setBgColor("insidebg");
    } else if (
      location === "/services/solutions/operations/operations-solutions"
    ) {
      setLoading(true);
      setApiUrl(
        "https://newraq.raqamyat.com/public/api/services?slug=operations-solutions"
      );
      setIsFetching(true);
      setBgColor("contactbg");
    }
  }, [location, setApiUrl, setIsFetching, setLoading, setBgColor]);

  return {
    isFetching,
    loading,
    apiUrl,
    bgColor,
    setApiUrl,
    setIsFetching,
    setLoading,
    setBgColor,
  };
}

export default usePathname;
