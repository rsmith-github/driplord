import { Fade, Slide } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import StarBorder from "./reactbits/StarBorder";

const featuresData = [
  {
    id: "voice-based-trading",
    icon: "https://d17r7llinqok54.cloudfront.net/voice.svg",
    title: "VOICE-BASED TRADING",
    description:
      "Buy, sell, stake, or swap with natural voice or text commands—no dashboards, no complexity.",
  },
  {
    id: "auto-defi-strategies",
    icon: "https://d17r7llinqok54.cloudfront.net/solutions.svg",
    title: "AUTO-DEFI STRATEGIES",
    description:
      "Access curated yield modules with returns up to 240% APY—automated, diversified, and beginner-friendly.",
  },
  {
    id: "portfolio-management",
    icon: "https://d17r7llinqok54.cloudfront.net/portfolio.svg",
    title: "PORTFOLIO MANAGEMENT",
    description:
      "Maximize performance with real-time AI signals powered by GT-Protocol and live sentiment analysis.",
  },
  {
    id: "onboarding-education",
    icon: "https://d17r7llinqok54.cloudfront.net/education.svg",
    title: "ONBOARDING & EDUCATION",
    description:
      "Master the basics of Web3 and trading with built-in tutorials, walkthroughs, and contextual guidance.",
  },
];

const Features2 = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const renderFeature = (feature, index, isExiting = false) => (
    <div
      key={`${feature.id}-${isExiting ? "exit" : "enter"}`}
      className={`group text-left absolute top-0 left-0 w-full ${
        isExiting
          ? slideDirection === "left"
            ? "animate-slideOutLeft"
            : "animate-slideOutRight"
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
          className="text-[clamp(0.9rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1"
          style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
        >
          {feature.title}
        </h3>
      </div>
      <p
        className="text-[clamp(1rem,1vw,1.2rem)] text-white/70"
        style={{
          fontFamily: "Helvetica Neue",
          fontWeight: "300",
          color: "#6D6C68",
          lineHeight: "1.5",
        }}
      >
        {feature.description}
      </p>
    </div>
  );

  return (
    <section
      id="features2"
      className="min-h-screen bg-transparent flex flex-col items-start justify-start sm:justify-center px-0 sm:px-8 relative overflow-hidden"
    >
      <div className="mx-auto w-full h-auto flex flex-col justify-center px-4 sm:px-[5%]">
        <div className="w-full relative z-10 flex-1 flex flex-col gap-[5.781vw]">
          <div className="ml-0 text-left">
            <Slide direction="up">
              <h2
                className="text-[clamp(2.25rem,4vw,4rem)] sm:text-[clamp(1rem,1.875vw,1.875vw)] font-bold text-white mb-2 uppercase tracking-wider bold w-[18rem] sm:w-[55%]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "750",
                  lineHeight: "100%",
                  letterSpacing: "-5%",
                }}
              >
                Meet the Drip Lord
                <br className="hidden sm:visible" />
                Ultimate AI Trading Agent
              </h2>
            </Slide>
            <Fade delay={300}>
              <p
                className="text-[clamp(1rem,1vw,1.2rem)] sm:text-[clamp(0.5rem,1.25vw,1.25vw)] text-white tracking-widest font-medium capitalize w-[18rem] sm:w-[55%]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "300",
                }}
              >
                AI-Powered Automation for Smarter, Simpler Web3 Trading
              </p>
            </Fade>
          </div>

          {/* Mobile Layout - Single feature with carousel */}
          <div className="block lg:hidden w-[18rem]">
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
            <div className="flex justify-start items-center gap-4 mt-8">
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
            <div className="col-start-1 col-end-2 h-full flex flex-col justify-center gap-[6rem] w-[21rem]">
              {/* Voice-Based Trading - Top Left */}
              <Fade delay={300}>
                <div className="group">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={featuresData[0].icon}
                        alt={featuresData[0].title}
                        className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                      />
                    </div>
                    <h3
                      className="text-[clamp(0.75rem,0.833vw,0.833vw)] text-white uppercase tracking-wide  whitespace-nowrap pt-1"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[0].title}
                    </h3>
                  </div>
                  <p
                    className="text-[clamp(0.8rem,1.125rem,2rem)] leading-relaxed mt-2"
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: "300",
                      color: "#6D6C68",
                    }}
                  >
                    {featuresData[0].description}
                  </p>
                </div>
              </Fade>

              {/* Portfolio Management - Bottom Left */}
              <Fade delay={500}>
                <div className="group">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={featuresData[2].icon}
                        alt={featuresData[2].title}
                        className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                      />
                    </div>
                    <h3
                      className="text-[clamp(0.75rem,0.833vw,0.833vw)] text-white uppercase tracking-wide  whitespace-nowrap pt-1"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[2].title}
                    </h3>
                  </div>
                  <p
                    className="text-[clamp(0.8rem,1.125rem,2rem)] leading-relaxed mt-2"
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: "300",
                      color: "#6D6C68",
                    }}
                  >
                    {featuresData[2].description}
                  </p>
                </div>
              </Fade>
            </div>

            {/* Right Side Features */}
            <div className="col-start-3 col-end-4 h-full flex flex-col justify-center gap-[6rem] w-[21rem]">
              {/* Auto-DeFi Strategies - Top Right */}
              <Fade delay={400}>
                <div className="group">
                  <div className="flex flex-row-reverse items-center gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={featuresData[1].icon}
                        alt={featuresData[1].title}
                        className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                      />
                    </div>
                    <h3
                      className="text-[clamp(0.75rem,0.833vw,0.833vw)] text-white uppercase tracking-wide whitespace-nowrap pt-1"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[1].title}
                    </h3>
                  </div>
                  <p
                    className="text-[clamp(0.8rem,1.125rem,2rem)] leading-relaxed mt-2 text-right"
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: "300",
                      color: "#6D6C68",
                    }}
                  >
                    {featuresData[1].description}
                  </p>
                </div>
              </Fade>

              {/* Onboarding & Education - Bottom Right */}
              <Fade delay={600}>
                <div className="group">
                  <div className="flex flex-row-reverse items-center gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={featuresData[3].icon}
                        alt={featuresData[3].title}
                        className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                      />
                    </div>
                    <h3
                      className="text-[clamp(0.75rem,0.833vw,0.833vw)] text-white uppercase tracking-wide  whitespace-nowrap pt-1"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[3].title}
                    </h3>
                  </div>
                  <p
                    className="text-[clamp(0.8rem,1.125rem,2rem)] leading-relaxed mt-2 text-right"
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: "300",
                      color: "#6D6C68",
                    }}
                  >
                    {featuresData[3].description}
                  </p>
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
