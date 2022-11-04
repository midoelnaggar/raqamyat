import "./App.css"
import About from "./components/About";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Profile from "./components/Profile";
import Scope from "./components/Scope";

function App() {
  return (

    <div className="app">
      <Header />
      <Hero />
      <Partners />
      <About />
      <Profile />
      <Scope />
      <Articles />
    </div>

  );
}

export default App;
