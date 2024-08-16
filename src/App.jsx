import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import MySkill from "./components/Skills/index";
import Service from "./components/Services/index";
import ContactSection from "./components/contact/contactSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <MySkill />
        <Service />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
