import "./App.css";
import Footer from "./components/headerAndFooter/Footer";
import Header from "./components/headerAndFooter/Header";
import MobileHeader from "./components/headerAndFooter/MobileHeader";
import HomePage from "./components/homePage";

function App() {
  return (
    <div className="app">
      <Header />
      <MobileHeader />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
