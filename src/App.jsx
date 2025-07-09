import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Features1 from "./components/Features1";
import Features2 from "./components/Features2";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="w-full">
        <Hero />
        <VideoSection />
        <Features1 />
        <Features2 />
        <Roadmap />
        <Contact />
      </main>
    </div>
  );
}

export default App;
