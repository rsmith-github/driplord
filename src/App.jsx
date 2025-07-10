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

        console.log("Camera found:", camera);
        if (camera) {
          console.log("Camera name:", camera.name);
          console.log("Camera type:", camera.type);
          console.log("Camera position available:", !!camera.position);
          if (camera.position) {
            console.log(
              "Camera position properties:",
              Object.keys(camera.position)
            );
          }
        }

        const pinkLight =
          splineApp.findObjectByName("Directional Light 2") ||
          splineApp.findObjectByName("Pink Light") ||
          allObjects.find((obj) => obj.name && obj.name.includes("Light"));

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

        // Use dramatic model scaling since position/camera approaches aren't working
        console.log("Using model scaling approach");

        // Store initial scale values
        const initialScaleX = mainModel.scale.x;
        const initialScaleY = mainModel.scale.y;
        const initialScaleZ = mainModel.scale.z;

        console.log(
          "Initial scale:",
          initialScaleX,
          initialScaleY,
          initialScaleZ
        );

        // Try moving the model instead of the camera for more predictable results
        console.log(
          "Original model position:",
          mainModel.position.x,
          mainModel.position.y,
          mainModel.position.z
        );

        // Store original model position
        const originalModelX = mainModel.position.x;
        const originalModelY = mainModel.position.y;
        const originalModelZ = mainModel.position.z;

        // Move model and scale it for visual variety
        tl1
          .to(
            mainModel.position,
            {
              x: originalModelX + 30, // Move model right (appears to move right)
              y: originalModelY + 15, // Move model up slightly
              z: originalModelZ - 40, // Move model back (zoom out effect)
              ease: "power2.out",
              duration: 0.6,
            },
            0
          )
          .to(
            mainModel.position,
            {
              x: originalModelX + 1, // Return to center
              y: originalModelY + 40, // Return to original height
              z: originalModelZ - 150, // Much more zoomed out for Features2
              ease: "power2.inOut",
              duration: 0.4,
            },
            0.6
          );

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

          // Continue rotation from 360° with full extra rotation then settle
          tl2.to(
            mainModel.rotation,
            {
              y: Math.PI * 4.5, // 765° (360° + 360° + 45°) - full extra rotation then settle
              ease: "power2.inOut",
              duration: 0.6,
            },
            0
          );

          // Model zoom in effect for Contact section
          tl2.to(
            mainModel.position,
            {
              x: originalModelX, // Keep centered
              y: originalModelY - 80, // Return to original height
              z: originalModelZ + 400, // Move model forward (zoom in effect)
              ease: "power2.inOut",
              duration: 1,
            },
            0
          );

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
