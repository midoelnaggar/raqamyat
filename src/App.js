import "./App.css"
import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Profile from "./components/Profile";
import Scope from "./components/Scope";
import Subscribe from "./components/Subscribe";

function App() {
  return (

    <div className="app">
      <div className="gred">
        <Header />
        <Hero />
        <Partners />
      </div>
      <About />
      <Profile />
      <Scope />
      <Articles />
      <Subscribe />
      <Footer />
    </div>

  );
}

export default App;
