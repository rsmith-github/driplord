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
import HUD from "./components/HUD";
import LoadingScreen from "./components/LoadingScreen";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const splineRef = useRef(null);
  const [splineApp, setSplineApp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  // Handle Spline load
  const onLoad = (spline) => {
    setSplineApp(spline);
    setIsSplineLoaded(true);

    // Wait a bit for objects to initialize before hiding loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Disable scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
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
      let mainModel = splineApp.findObjectByName("DripAnimated");

      if (!mainModel) {
        // Try alternative names
        const possibleNames = [
          "DripAnimated",
          "Drip_Animated",
          "Drip Animated",
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

      console.log("Main model:", mainModel);

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
        const features1Section = scrollContainer.querySelector("#features1");
        const gradientImg = document.querySelector(".gradient-img");

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

        console.log("Pink light found:", pinkLight);
        if (pinkLight) {
          console.log("Light name:", pinkLight.name);
          console.log("Light position:", pinkLight.position);
          console.log("Light intensity:", pinkLight.intensity);
        }

        // Add gradient animation
        if (gradientImg && features1Section) {
          ScrollTrigger.create({
            trigger: features1Section,
            scroller: scrollContainer,
            start: "top bottom",
            end: "bottom top",
            onEnter: () => {
              gsap.to(gradientImg, {
                x: "30vw",
                duration: 0.8,
                ease: "power2.inOut",
              });
            },
            onLeave: () => {
              gsap.to(gradientImg, {
                x: "0",
                duration: 0.8,
                ease: "power2.inOut",
              });
            },
            onEnterBack: () => {
              gsap.to(gradientImg, {
                x: "30vw",
                duration: 0.8,
                ease: "power2.inOut",
              });
            },
            onLeaveBack: () => {
              gsap.to(gradientImg, {
                x: "0",
                duration: 0.8,
                ease: "power2.inOut",
              });
            },
          });
        }

        // Fade out gradient on Hero section
        if (gradientImg && firstSection) {
          ScrollTrigger.create({
            trigger: firstSection,
            scroller: scrollContainer,
            start: "top top",
            end: "bottom top",
            onEnter: () => {
              gsap.to(gradientImg, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
            onLeave: () => {
              gsap.to(gradientImg, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
            onEnterBack: () => {
              gsap.to(gradientImg, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
          });
        }

        // Fade out gradient on Features2
        if (gradientImg && features2Section) {
          ScrollTrigger.create({
            trigger: features2Section,
            scroller: scrollContainer,
            start: "top center",
            end: "bottom top",
            onEnter: () => {
              gsap.to(gradientImg, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
            onLeave: () => {
              gsap.to(gradientImg, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
            onEnterBack: () => {
              gsap.to(gradientImg, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
            onLeaveBack: () => {
              gsap.to(gradientImg, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
          });
        }

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

        // Store original light properties if available
        let originalLightX,
          originalLightY,
          originalLightZ,
          originalLightIntensity;
        if (pinkLight && pinkLight.position) {
          originalLightX = pinkLight.position.x;
          originalLightY = pinkLight.position.y;
          originalLightZ = pinkLight.position.z;
          originalLightIntensity = pinkLight.intensity || 1;
        }

        // Move model and scale it for visual variety
        tl1
          .to(
            mainModel.position,
            {
              x: originalModelX + 30, // Move model right (appears to move right)
              y: originalModelY + 15, // Move model up slightly
              z: originalModelZ - 120, // Move model back (zoom out effect)
              ease: "power2.out",
              duration: 0.6,
            },
            0
          )
          .to(
            mainModel.position,
            {
              x: originalModelX - 2, // Return to center
              y: originalModelY + 20, // Return to original height
              z: originalModelZ - 500, // Much more zoomed out for Features2
              ease: "power2.inOut",
              duration: 0.4,
            },
            0.6
          );

        // Simple alternating light position using your exact Spline coordinates
        if (pinkLight && pinkLight.position) {
          console.log(
            "Original light position:",
            originalLightX,
            originalLightY,
            originalLightZ
          );

          // Features1: Move light to -120 (left side)
          tl1
            .to(
              pinkLight.position,
              {
                x: -120, // Move to left side
                y: -15.27, // Keep your original y
                z: -31.73, // Keep your original z
                ease: "power2.out",
                duration: 0.6,
              },
              0
            )
            // Features2: Move light back to original position (120.08)
            .to(
              pinkLight.position,
              {
                x: 120.08, // Back to original right side
                y: -15.27, // Keep your original y
                z: -31.73, // Keep your original z
                ease: "power2.inOut",
                duration: 0.4,
              },
              0.6
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
              y: originalModelY - 40, // Return to original height
              z: originalModelZ + 1200, // Move model forward (zoom in effect)
              ease: "power2.inOut",
              duration: 1,
            },
            0
          );

          // Contact: Move light back to left side (-120)
          if (pinkLight && pinkLight.position) {
            tl2.to(
              pinkLight.position,
              {
                x: -120, // Back to left side for Contact
                y: -15.27, // Keep your original y
                z: -10.73, // Make it closer
                ease: "power2.inOut",
                duration: 0.5,
              },
              0
            );
          }
        }

        // Add subtle mouse-based camera orbit without breathing effect
        if (camera && camera.position) {
          // Store the original camera position as the center point
          const originalCameraX = camera.position.x;
          const originalCameraY = camera.position.y;
          const originalCameraZ = camera.position.z;

          let lastMouseTime = Date.now();
          let resetTimeout;

          // Check if we're in Features2 section
          const isInFeatures2 = () => {
            const scrollContainer = document.querySelector(".snap-y");
            const features2Section = document.querySelector("#features2");

            if (!scrollContainer || !features2Section) return false;

            // Get scroll position and section position
            const scrollTop = scrollContainer.scrollTop;
            const features2Top = features2Section.offsetTop;
            const viewportHeight = scrollContainer.clientHeight;

            // More aggressive detection - if we're anywhere near Features2
            const isNearFeatures2 =
              Math.abs(scrollTop - features2Top) < viewportHeight * 0.5;

            return isNearFeatures2;
          };

          // Reset camera to original position
          const resetCameraPosition = () => {
            if (isInFeatures2()) return; // Don't reset in Features2

            gsap.to(camera.position, {
              x: originalCameraX,
              y: originalCameraY,
              z: originalCameraZ,
              duration: 1.2,
              ease: "power2.out",
            });
          };

          // Mouse tracking for subtle camera orbit
          const handleMouseMove = (event) => {
            // Skip orbit in Features2 section
            if (isInFeatures2()) return;

            lastMouseTime = Date.now();

            // Clear any pending reset timeout
            if (resetTimeout) {
              clearTimeout(resetTimeout);
              resetTimeout = null;
            }

            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            // Convert mouse position to -1 to 1 range
            const mouseX = (clientX / innerWidth) * 2 - 1;
            const mouseY = -((clientY / innerHeight) * 2 - 1);

            // Define orbit sensitivity (much more subtle)
            const orbitStrength = 3; // Reduced from 6 to 3
            const verticalStrength = 3; // Reduced from 4 to 2

            // INVERTED: Make model appear to follow mouse direction
            const targetX = originalCameraX - mouseX * orbitStrength; // Inverted
            const targetY = originalCameraY - mouseY * verticalStrength; // Inverted
            const targetZ = originalCameraZ - mouseX * orbitStrength * 0.2; // Reduced from 0.3 to 0.2

            // Smoothly animate to new position
            gsap.to(camera.position, {
              x: targetX,
              y: targetY,
              z: targetZ,
              duration: 0.8, // Slightly slower for smoother movement
              ease: "power2.out",
            });

            // Set a timeout to reset if mouse stops moving
            resetTimeout = setTimeout(() => {
              resetCameraPosition();
            }, 1000); // Reset after 2 seconds of no mouse movement
          };

          // Handle mouse leave to reset camera position
          const handleMouseLeave = () => {
            if (isInFeatures2()) return;

            // Clear any pending reset timeout
            if (resetTimeout) {
              clearTimeout(resetTimeout);
              resetTimeout = null;
            }

            resetCameraPosition();
          };

          // Add mouse move and mouse leave listeners
          document.addEventListener("mousemove", handleMouseMove);
          document.addEventListener("mouseleave", handleMouseLeave);

          // Store cleanup function
          const cleanup = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);

            // Clear any pending reset timeout
            if (resetTimeout) {
              clearTimeout(resetTimeout);
              resetTimeout = null;
            }
          };

          // Add to cleanup array
          if (!window.splineCleanupFunctions) {
            window.splineCleanupFunctions = [];
          }
          window.splineCleanupFunctions.push(cleanup);
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

      // Cleanup mouse event listeners
      if (window.splineCleanupFunctions) {
        window.splineCleanupFunctions.forEach((cleanup) => cleanup());
        window.splineCleanupFunctions = [];
      }
    };
  }, [splineApp]);

  return (
    <div className="w-full min-h-screen relative">
      {/* HUD Elements - Behind Spline Model */}
      {/* <HUD /> */}

      {/* Gradient Image */}
      <img
        src="/images/gradient.svg"
        alt=""
        className="gradient-img fixed inset-0 w-full h-full object-cover"
        style={{ zIndex: -10, opacity: 0 }}
      />

      {/* Fixed Spline Background */}
      <div className="fixed inset-0" style={{ zIndex: -1 }}>
        <Spline
          ref={splineRef}
          scene="https://prod.spline.design/KoGDuI4YV2TSHmSW/scene.splinecode"
          className="w-full h-full pointer-events-auto"
          onLoad={onLoad}
        />
      </div>

      <div className="snap-y snap-mandatory overflow-y-scroll h-screen relative z-10">
        <Navbar />
        <div className="snap-always snap-start">
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
        </div>
      </div>
      <Footer />
      
      {/* Loading Screen */}
      <LoadingScreen
        isLoading={isLoading}
        onLoadingComplete={handleLoadingComplete}
      />
    </div>
  );
}

export default App;
