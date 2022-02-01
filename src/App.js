import "./css/App.css";
import About from "./page/About";
import Contact from "./page/Contact";
import Footer from "./page/Footer";
import Home from "./page/Home";
import Portofolio from "./page/Portofolio";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
