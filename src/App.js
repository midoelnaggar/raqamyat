import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomeContext } from "./context/HomeContext";
import { LoadingContext } from "./context/LoadingContext";
import Loading from "./Loading";
import Footer from "./components/headerAndFooter/Footer";
import Header from "./components/headerAndFooter/Header";
import MobileHeader from "./components/headerAndFooter/MobileHeader";
import HomePage from "./components/homePage";
import AboutUsPage from "./components/AboutUsPage";


function App() {
  let location = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bgColor, SetBgColor] = useState("homebg");
  useEffect(() => {
    axios
      .get("https://newraq.raqamyat.com/public/api/home")
      .then(async (response) => {
        setData(await response.data.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        SetBgColor("homebg");
        break;
      case "/about-us":
        SetBgColor("aboutbg");
        break;
      default:
        SetBgColor("");
    }
  }, [location]);

  return (
    <div className="app">
      <div className={bgColor}>
        <Header />
        <MobileHeader />
        <LoadingContext.Provider value={{ loading, setLoading }} />
        <HomeContext.Provider value={data}>
          <Routes>
        <Route  path="/"  element={loading ? <Loading /> : <HomePage />} />
        <Route  path="/about-us"  element={loading ? <Loading /> : <AboutUsPage />} />
        </Routes>
        </HomeContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
