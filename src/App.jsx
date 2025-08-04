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
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      let mainModel = splineApp.findObjectByName("Drip_Animated");
      console.log("🚀 ~ waitForObjects ~ mainModel:", mainModel);

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
        console.log("🚀🚀🚀🚀🚀 ~ waitForObjects ~ mainModel:", mainModel);

        // If still not found, try to use the first object that has rotation
        if (!mainModel) {
          mainModel = allObjects.find((obj) => obj.rotation);
        }
        console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ waitForObjects ~ mainModel:", mainModel);
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
        const firstSection =
          scrollContainer.querySelector("div:first-child").nextElementSibling; // Skip navbar, get first section
        const features2Section = scrollContainer.querySelector("#features2");
        const contactSection = scrollContainer.querySelector("#contact");
        const features1Section = scrollContainer.querySelector("#features1");

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

        // Move model and scale it for visual variety - responsive to screen size
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

        // Adjust movement based on screen size
        const rightMovement = isMobile ? 5 : isTablet ? 20 : 33;
        const upMovement = isMobile ? 0 : 15;
        const backMovement = isMobile ? -80 : -120;
        const finalBackMovement = isMobile ? -50 : -100;

        tl1
          .to(
            mainModel.position,
            {
              x: originalModelX + rightMovement, // Less movement on mobile
              y: originalModelY + upMovement, // Less movement on mobile
              z: originalModelZ + backMovement, // Less zoom out on mobile
              ease: "power2.out",
              duration: 0.6,
            },
            0
          )
          .to(
            mainModel.position,
            {
              x: originalModelX - (isMobile ? 0 : 4), // Return to center
              y: originalModelY + (isMobile ? 5 : 0), // Return to original height
              z: originalModelZ + finalBackMovement, // Less zoom out for Features2 on mobile
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
              y: Math.PI * (isMobile ? 3.5 : 4.5), // 765° (360° + 360° + 45°) - full extra rotation then settle
              ease: "power2.inOut",
              // Since roadmap is hidden, we need to complete the full rotation to Contact
              duration: 1.0, // SHOULD BE 0.6 WHEN ROADMAP IS VISIBLE
            },
            0
          );

          // Model zoom in effect for Contact section - responsive to screen size
          const contactZoomAmount = isMobile ? 50 : isTablet ? 200 : 400;
          const contactLeftAmount = isMobile ? 0 : 100;

          tl2.to(
            mainModel.position,
            {
              x: originalModelX - contactLeftAmount, // Keep centered
              y: originalModelY - (isMobile ? 10 : 0), // (should be -40 with roadmap)
              z: originalModelZ + contactZoomAmount, // Less zoom on mobile to prevent model going too close
              ease: "power2.inOut",
              duration: 0.7, // should be 1 when roadmap is visible
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

          let resetTimeout;

          // Check if we're in Features2 section
          const isInFeatures2 = () => {
            const scrollContainer =
              document.querySelector(".snap-y");
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
            const orbitStrength = 2; // Reduced from 6 to 2
            const verticalStrength = 2; // Reduced from 4 to 2

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

  useEffect(() => {
    const scrollContainer = document.querySelector(".snap-y");
    if (!scrollContainer) return;

    const updateScrollProgress = () => {
      const totalHeight = scrollContainer.scrollHeight;
      const viewportHeight = scrollContainer.clientHeight;
      const scrollTop = scrollContainer.scrollTop;

      const scrollableHeight = totalHeight - viewportHeight;
      let progress = 0;

      if (scrollableHeight > 0) {
        progress = (scrollTop / scrollableHeight) * 100;
      } else {
        // If content is not scrollable, consider it fully scrolled
        progress = 100;
      }
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateScrollProgress(); // Set initial progress
    scrollContainer.addEventListener("scroll", updateScrollProgress);

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="w-full min-h-screen relative">
      {/* HUD Elements - Behind Spline Model */}
      {/* <HUD /> */}

      <div className="overflow-y-scroll h-screen relative z-10 snap-y md:snap-y md:snap-mandatory">
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <div className="md:snap-always md:snap-start">
          <Hero splineRef={splineRef} onLoad={onLoad} />
        </div>
        <div className="md:snap-always md:snap-start">
          <VideoSection />
        </div>
        <div className="md:snap-always md:snap-start">
          <Features1 />
        </div>
        <div className="md:snap-always md:snap-start">
          <Features2 />
        </div>
        <div className="md:snap-always md:snap-start">{/* <Roadmap /> */}</div>
        <div className="md:snap-always md:snap-end">
          <Contact />
        </div>
        <Footer scrollProgress={scrollProgress} />
      </div>

      {/* Loading Screen */}
      <LoadingScreen
        isLoading={isLoading}
        onLoadingComplete={handleLoadingComplete}
      />

      {/* Scroll Progress Bar */}
      <div
        className="fixed right-[3.5%] top-1/2 -translate-y-1/2 h-[40%] w-1 z-50"
        style={{
          display: isMobileMenuOpen ? "none" : "block",
        }}
      >
        {/* Top Dot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>

        {/* The Track (gray part) */}
        <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[1px] bg-white/20 rounded-full">
          {/* Scroll Progress Indicator (white part) */}
          <div
            className="absolute top-0 left-0 w-full bg-white rounded-full origin-top"
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Bottom Dot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  );
}

export default App;
