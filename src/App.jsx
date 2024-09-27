import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Projects from "./components/3-projects/Projects";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container mx-auto bg-secondary border border-border lg:px-16 px-4">
        <Header />

        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
