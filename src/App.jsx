import { useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Features1 from "./components/Features1";
import Features2 from "./components/Features2";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const splineRef = useRef(null);
  const [splineApp, setSplineApp] = useState(null);

  // Handle Spline load
  const onLoad = (spline) => {
    setSplineApp(spline);
  };

  useEffect(() => {
    if (!splineApp) return;

    let animationContext = null;
    let retryCount = 0;
    const maxRetries = 10;

    // Polling function to wait for objects to load
    const waitForObjects = () => {
      const allObjects = splineApp.getAllObjects();

      if (allObjects.length === 0 && retryCount < maxRetries) {
        retryCount++;
        setTimeout(waitForObjects, 500); // Check every 500ms
        return;
      }

      if (allObjects.length === 0) {
        console.warn("No Spline objects found after maximum retries");
        return;
      }

      // Try to find the main model object
      let mainModel = splineApp.findObjectByName("Hape_AI_Agent_Cyberpunk");

      if (!mainModel) {
        // Try alternative names
        const possibleNames = [
          "Hape_AI_Agent_Cyberpunk",
          "Hape AI Agent Cyberpunk",
          "HapeAIAgentCyberpunk",
          "Character",
          "Model",
          "Root",
        ];

        for (const name of possibleNames) {
          mainModel = splineApp.findObjectByName(name);
          if (mainModel) break;
        }

        // If still not found, try to use the first object that has rotation
        if (!mainModel) {
          mainModel = allObjects.find((obj) => obj.rotation);
        }
      }

      if (!mainModel) {
        console.warn("Could not find any suitable object to animate");
        return;
      }

      // Get the custom scroll container
      const scrollContainer = document.querySelector(".snap-y");
      if (!scrollContainer) {
        console.warn("Scroll container not found");
        return;
      }

      // Create GSAP context scoped to the scroll container
      animationContext = gsap.context(() => {
        const firstSection = scrollContainer.querySelector(".snap-start");
        const lastSection = scrollContainer.querySelector(".snap-end");

        // Create timeline for the entire scroll journey
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: firstSection || scrollContainer,
            scroller: scrollContainer,
            start: "top top",
            end: () =>
              lastSection
                ? `+=${scrollContainer.scrollHeight - window.innerHeight}`
                : "bottom bottom",
            scrub: 1,
          },
        });

        // Add rotation animation to the timeline
        tl.to(mainModel.rotation, {
          y: Math.PI * 2, // Full 360 degree rotation
          ease: "none",
          duration: 1,
        });

        // Refresh ScrollTrigger to ensure it detects the custom scroller
        ScrollTrigger.refresh();
      }, scrollContainer);
    };

    // Start polling for objects
    waitForObjects();

    // Cleanup function for the effect
    return () => {
      if (animationContext) {
        animationContext.revert();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [splineApp]);

  return (
    <div className="w-full min-h-screen relative">
      {/* Fixed Spline Background */}
      <div
        className={`fixed inset-0 transition-opacity duration-500`}
        style={{ zIndex: 1 }}
      >
        <Spline
          ref={splineRef}
          scene="https://prod.spline.design/Z0fl2oJrlLoLQ4A4/scene.splinecode"
          className="w-full h-full pointer-events-auto"
          onLoad={onLoad}
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
