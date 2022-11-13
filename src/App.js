import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { HomeContext } from "./context/HomeContext";
import { LoadingContext } from "./context/LoadingContext";
import Loading from "./Loading";
import Footer from "./components/headerAndFooter/Footer";
import Header from "./components/headerAndFooter/Header";
import MobileHeader from "./components/headerAndFooter/MobileHeader";
import HomePage from "./components/homePage";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://newraq.raqamyat.com/public/api/home")
      .then((response) => {
        setData(response.data.data);
      });
    setLoading(false);
  }, []);

  return (
    <div className="app">
      <Header />
      <MobileHeader />
      <LoadingContext.Provider value={{ loading, setLoading }} />
      <HomeContext.Provider value={data}>
        {loading ? <Loading /> : <HomePage />}
      </HomeContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
