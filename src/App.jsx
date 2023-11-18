//import Test from "./Test";
import { useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
//import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Hero2 from "./components/hero2/Hero2";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`app ${open ? "open" : ""}`}>
      <section id="Homepage">
        <Navbar open={open} setOpen={setOpen} />
        <Hero open={open} />
        <Hero2 open={open} />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
