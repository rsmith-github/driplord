import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Features1 from "./components/Features1";
import Features2 from "./components/Features2";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector(".snap-y");
      if (!scrollContainer) return;
    };

    const scrollContainer = document.querySelector(".snap-y");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-full min-h-screen relative">
      {/* Fixed Spline Background */}
      <div
        className={`fixed inset-0 transition-opacity duration-500`}
        style={{ zIndex: 1 }}
      >
        <Spline
          scene="https://prod.spline.design/Z0fl2oJrlLoLQ4A4/scene.splinecode"
          className="w-full h-full pointer-events-auto"
        />
      </div>

      <div className="snap-y snap-mandatory overflow-y-scroll h-screen relative z-10">
        <div className="snap-always snap-start">
          <Navbar />
          <Hero />
        </div>
        <div className="snap-always snap-start">
          <VideoSection />
        </div>
        <div className="snap-always snap-start">
          <Features1 />
        </div>
        <div className="snap-always snap-start">
          <Features2 />
        </div>
        <div className="snap-always snap-start">
          <Roadmap />
        </div>
        <div className="snap-always snap-end">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
