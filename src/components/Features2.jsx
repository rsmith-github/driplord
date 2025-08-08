import { Fade, Slide } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const featuresData = [
  {
    id: "voice-based-trading",
    icon: "https://d17r7llinqok54.cloudfront.net/voice.svg",
    title: "CUSTOM AI ROLES",
    description:
      "Design agents with distinct personas—creator, trader, moderator, and more.",
  },
  {
    id: "auto-defi-strategies",
    icon: "https://d17r7llinqok54.cloudfront.net/solutions.svg",
    title: "FLEXIBLE API INTEGRATION",
    description:
      "Embed Drip agents into Web3 products and platforms with minimal development.",
  },
  {
    id: "portfolio-management",
    icon: "https://d17r7llinqok54.cloudfront.net/portfolio.svg",
    title: "AI-POWERED MARKET INTELLIGENCE",
    description:
      "Get real-time crypto forecasts and investment suggestions with machine learning precision.",
  },
  {
    id: "onboarding-education",
    icon: "https://d17r7llinqok54.cloudfront.net/education.svg",
    title: "SMART COMMUNITY MANAGEMENT",
    description:
      "Automate moderation and engagement with AI-driven tools that boost loyalty and interaction.",
  },
];

const Features2 = ({ globalIsMobile }) => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [hasInitialAnimated, setHasInitialAnimated] = useState(false);

  const nextFeature = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection("left");
    const nextIndex = (currentFeatureIndex + 1) % featuresData.length;
    setCurrentFeatureIndex(nextIndex);
  };

  const prevFeature = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection("right");
    const prevIndex =
      (currentFeatureIndex - 1 + featuresData.length) % featuresData.length;
    setCurrentFeatureIndex(prevIndex);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Intersection Observer to trigger initial animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasInitialAnimated) {
            setHasInitialAnimated(true);
            setIsTransitioning(false);
          } else if (!entry.isIntersecting && hasInitialAnimated) {
            // Reset when section goes out of view
            setHasInitialAnimated(false);
            setIsTransitioning(true);
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    const section = document.getElementById("features2");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasInitialAnimated]);

  const renderFeature = (feature, index, isExiting = false) => (
    <div
      key={`${feature.id}-${isExiting ? "exit" : "enter"}`}
      className={`group text-left absolute top-0 left-0 w-full ${
        isExiting
          ? slideDirection === "left"
            ? "animate-slideOutLeft"
            : "animate-slideOutRight"
          : !hasInitialAnimated
          ? "opacity-0"
          : slideDirection === "left"
          ? "animate-slideInLeft"
          : "animate-slideInRight"
      }`}
    >
      <div className="mb-4 sm:mb-6 flex justify-start items-center gap-4">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
        />
        <h3
          className="text-[clamp(1rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1"
          style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
        >
          {feature.title}
        </h3>
      </div>
      <p
        className="text-[clamp(1.3rem,1vw,1.2rem)] sm:text-[clamp(1rem,1vw,1.2rem)] text-white/70 line-height-[125%] sm:line-height-[1.5]"
        style={{
          fontFamily: "Helvetica Neue",
          fontWeight: "300",
          color: "#6D6C68",
        }}
      >
        {feature.description}
      </p>
    </div>
  );

  return (
    <section
      id="features2"
      className="min-h-screen bg-transparent flex flex-col items-start justify-start sm:justify-center px-0 sm:px-8 relative overflow-hidden pt-24 sm:pt-0"
    >
      <div className="mx-auto w-full h-auto flex flex-col justify-center px-4 sm:px-[5%]">
        <div className="w-full relative z-10 flex-1 flex flex-col gap-[clamp(2rem,3vw,5.781vw)] pt-[clamp(2rem,3vw,1vw)]">
          <div className="ml-0 text-left max-w-full overflow-hidden">
            <Slide direction={globalIsMobile ? "left" : "up"}>
              <h2
                className="text-[clamp(3rem,4vw,4rem)] sm:text-[clamp(1rem,1.875vw,1.875vw)] font-bold text-white mb-2 uppercase tracking-wider bold w-[25rem] sm:w-[55%]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "750",
                  lineHeight: "100%",
                  letterSpacing: "-5%",
                }}
              >
                UNLOCK YOUR DIGITAL STYLE WITH AI AGENTS
                {/* <br className="hidden sm:visible" />
                Ultimate AI Trading Agent */}
              </h2>
            </Slide>
            <Slide direction={globalIsMobile ? "right" : "up"}>
              <p
                className="text-[clamp(1.6rem,1vw,1.2rem)] sm:text-[clamp(0.5rem,1.25vw,1.25vw)] text-white tracking-widest font-medium capitalize w-[22.6rem] sm:w-[55%] mb-6 line-height-[125%]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "300",
                }}
              >
                Custom AI agents for your brand, Community, or Product
              </p>
            </Slide>
          </div>

          {/* Mobile Layout - Single feature with carousel */}
          <div className="block sm:hidden w-[22rem]">
            <div className="w-full h-[120px] relative overflow-hidden">
              {/* Current feature */}
              {renderFeature(
                featuresData[currentFeatureIndex],
                currentFeatureIndex
              )}

              {/* Exiting feature (shown during transition) */}
              {isTransitioning &&
                renderFeature(
                  featuresData[
                    slideDirection === "left"
                      ? (currentFeatureIndex - 1 + featuresData.length) %
                        featuresData.length
                      : (currentFeatureIndex + 1) % featuresData.length
                  ],
                  currentFeatureIndex,
                  true
                )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-start items-center gap-4">
              <button
                onClick={prevFeature}
                disabled={isTransitioning}
                className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous feature"
              >
                <span className="text-black text-lg font-bold">←</span>
              </button>
              <button
                onClick={nextFeature}
                disabled={isTransitioning}
                className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next feature"
              >
                <span className="text-black text-lg font-bold">→</span>
              </button>
            </div>
          </div>

          {/* Desktop Layout - Original complex layout */}
          <div className="hidden lg:grid grid-cols-[minmax(0,24rem)_1fr_minmax(0,24rem)] 2xl:grid-cols-[minmax(0,28rem)_1fr_minmax(0,28rem)] h-96 w-full">
            {/* Left Side Features */}
            <div className="col-start-1 col-end-2 h-full flex flex-col w-[21rem] gap-[clamp(2.813rem,2.344vw,2.344vw)]">
              {/* Voice-Based Trading - Top Left */}
              <Fade delay={300}>
                <div className="group flex flex-col justify-end items-start">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <img
                      src={featuresData[0].icon}
                      alt={featuresData[0].title}
                      className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                    />
                    <h3
                      className="text-[clamp(0.9rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[0].title}
                    </h3>
                  </div>
                  <div className="w-[clamp(260px,13.542vw,13.542vw)]">
                    <p
                      className="text-[clamp(1rem,1vw,1.2rem)] text-white/70"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "300",
                        color: "#6D6C68",
                      }}
                    >
                      {featuresData[0].description}
                    </p>
                  </div>
                </div>
              </Fade>

              {/* Portfolio Management - Bottom Left */}
              <Fade delay={500}>
                <div className="group flex flex-col justify-end items-start">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <img
                      src={featuresData[2].icon}
                      alt={featuresData[2].title}
                      className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                    />
                    <h3
                      className="text-[clamp(0.9rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[2].title}
                    </h3>
                  </div>
                  <div className="w-[clamp(260px,13.542vw,13.542vw)]">
                    <p
                      className="text-[clamp(1rem,1vw,1.2rem)] text-white/70"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "300",
                        color: "#6D6C68",
                      }}
                    >
                      {featuresData[2].description}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            {/* Right Side Features */}
            <div className="col-start-3 col-end-4 h-full flex flex-col w-[21rem] gap-[clamp(2.813rem,2.344vw,2.344vw)]">
              {/* Auto-DeFi Strategies - Top Right */}
              <Fade delay={400}>
                <div className="group flex flex-col justify-end items-end">
                  <div className="flex flex-row-reverse items-center gap-4 mb-4 sm:mb-6">
                    <img
                      src={featuresData[1].icon}
                      alt={featuresData[1].title}
                      className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                    />
                    <h3
                      className="text-[clamp(0.9rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1 text-right"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[1].title}
                    </h3>
                  </div>
                  <div className="w-[clamp(260px,13.542vw,13.542vw)]">
                    <p
                      className="text-[clamp(1rem,1vw,1.2rem)] text-white/70 text-right"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "300",
                        color: "#6D6C68",
                      }}
                    >
                      {featuresData[1].description}
                    </p>
                  </div>
                </div>
              </Fade>

              {/* Onboarding & Education - Bottom Right */}
              <Fade delay={600}>
                <div className="group flex flex-col justify-end items-end">
                  <div className="flex flex-row-reverse items-center gap-4 mb-4 sm:mb-6">
                    <img
                      src={featuresData[3].icon}
                      alt={featuresData[3].title}
                      className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                    />
                    <h3
                      className="text-[clamp(0.9rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1 text-right"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[3].title}
                    </h3>
                  </div>
                  <div className="w-[clamp(260px,13.542vw,13.542vw)]">
                    <p
                      className="text-[clamp(1rem,1vw,1.2rem)] text-white/70 text-right"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "300",
                        color: "#6D6C68",
                      }}
                    >
                      {featuresData[3].description}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
