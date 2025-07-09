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
        const features2Section = scrollContainer.querySelector("#features2");
        const contactSection = scrollContainer.querySelector("#contact");

        // Try to find camera and lighting objects for additional effects
        const camera =
          splineApp.findObjectByName("Web Camera") ||
          splineApp.findObjectByName("Camera") ||
          allObjects.find((obj) => obj.type === "Camera");

        const pinkLight =
          splineApp.findObjectByName("Directional Light 2") ||
          splineApp.findObjectByName("Pink Light") ||
          allObjects.find((obj) => obj.name && obj.name.includes("Light"));

        // Debug: Check what properties are available
        console.log("Model properties:", Object.keys(mainModel));
        console.log("Model position:", mainModel.position);
        console.log("Model scale:", mainModel.scale);

        // Get Features1 section for more precise timing
        const features1Section = scrollContainer.querySelector("#features1");

        // Create one comprehensive timeline from start to Features2
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: firstSection || scrollContainer,
            scroller: scrollContainer,
            start: "top top",
            end: () =>
              features2Section
                ? `${features2Section.offsetTop}px`
                : "50% bottom",
            scrub: 1,
          },
        });

        // Create a more aggressive rotation timeline with keyframes
        tl1
          .to(mainModel.rotation, {
            y: Math.PI * 2 * (320 / 360), // 320 degrees at 60% progress
            ease: "none",
            duration: 0.6,
          })
          .to(mainModel.rotation, {
            y: Math.PI * 2, // Full 360 degrees by end
            ease: "none",
            duration: 0.4,
          });

        // Move model backward
        if (mainModel.position) {
          tl1.to(
            mainModel.position,
            {
              z: mainModel.position.z - 2, // Move model backward
              ease: "none",
              duration: 1,
            },
            0
          );
        } else if (mainModel.scale) {
          // Fallback to scaling if position doesn't work
          tl1.to(
            mainModel.scale,
            {
              x: 0.8,
              y: 0.8,
              z: 0.8,
              ease: "none",
              duration: 1,
            },
            0
          );
        }

        // Phase 2: Features2 to Contact - Complete rotation and zoom in
        if (contactSection) {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: features2Section || scrollContainer,
              scroller: scrollContainer,
              start: "top top",
              end: () => `${contactSection.offsetTop}px`,
              scrub: 1,
            },
          });

          // Continue rotation from 360° + extra, then back to ~0°
          tl2
            .to(
              mainModel.rotation,
              {
                y: Math.PI * 2 + Math.PI * 0.5, // 360° + 90° extra
                ease: "none",
                duration: 0.6,
              },
              0
            )
            .to(
              mainModel.rotation,
              {
                y: Math.PI * 0.1, // Close to 0° (18°)
                ease: "power2.inOut",
                duration: 0.4,
              },
              0.6
            );

          // Move model forward (zoom in effect) - try different approaches
          if (mainModel.position) {
            tl2.to(
              mainModel.position,
              {
                z: mainModel.position.z + 3, // Move model forward for zoom effect
                ease: "power2.inOut",
                duration: 1,
              },
              0
            );
          } else if (mainModel.scale) {
            // Fallback to scaling for zoom effect
            tl2.to(
              mainModel.scale,
              {
                x: 1.2,
                y: 1.2,
                z: 1.2,
                ease: "power2.inOut",
                duration: 1,
              },
              0
            );
          }

          // Camera zoom in effect
          if (camera && camera.position) {
            tl2.to(
              camera.position,
              {
                z: camera.position.z - 3, // Move camera closer
                ease: "power2.inOut",
                duration: 1,
              },
              0
            );
          }

          // Enhance pink lighting for dramatic effect
          if (pinkLight && pinkLight.intensity !== undefined) {
            tl2.to(
              pinkLight,
              {
                intensity: (pinkLight.intensity || 1) * 1.5,
                ease: "power2.inOut",
                duration: 1,
              },
              0
            );
          }
        }

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
