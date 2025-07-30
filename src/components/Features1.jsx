import { Fade, Slide } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const Features1 = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const features = [
    {
      id: 1,
      icon: "https://d17r7llinqok54.cloudfront.net/agents.svg",
      title: "AI AGENTS",
      description:
        "Autonomous tools that handle trading, payments, and on-chain tasks using simple voice commands or prompts—no technical expertise required.",
      delay: 400,
    },
    {
      id: 2,
      icon: "https://d17r7llinqok54.cloudfront.net/solutions.svg",
      title: "B2B2C SOLUTIONS",
      description:
        "Boost adoption with AI-powered workflows that connect Web2 familiarity to Web3 functionality, helping your business onboard users at scale.",
      delay: 500,
    },
    {
      id: 3,
      icon: "https://d17r7llinqok54.cloudfront.net/chain.svg",
      title: "CROSS-CHAIN COMPATIBILITY",
      description:
        "Operate seamlessly across major blockchain networks with plug-and-play cross-chain integration.",
      delay: 600,
    },
    {
      id: 4,
      icon: "https://d17r7llinqok54.cloudfront.net/token.svg",
      title: "TOKENIZED INFRASTRUCTURE",
      description:
        "Power your business with secure, transparent, and auditable systems built on blockchain technology—ideal for identity, access, and transactions.",
      delay: 700,
    },
  ];

  const nextFeature = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection("left");
    const nextIndex = (currentFeatureIndex + 1) % features.length;
    setCurrentFeatureIndex(nextIndex);
  };

  const prevFeature = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection("right");
    const prevIndex =
      (currentFeatureIndex - 1 + features.length) % features.length;
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
      id="features1"
      className="h-screen bg-transparent flex items-start sm:items-center justify-start sm:justify-centerunlo px-0 sm:px-8 pt-24 pb-42 sm:pt-0 sm:pb-0 mb-[100%] sm:mb-0"
    >
      <div className="mx-auto w-full h-full flex flex-col justify-start sm:justify-center gap-4 sm:gap-[3rem] px-4 sm:px-[5%] pt-4 sm:pt-[2%] z-10">
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
              Unlock Web3 for <br className="hidden sm:visible" />
              Everyone with AI Agents
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
              Seamless B2B2C Solutions That Bridge Traditional and Decentralized
              Worlds
            </p>
          </Fade>
          <Fade delay={400}>
            <div className="flex justify-start mt-4 mb-14 sm:mb-0">
              <p
                className="text-[clamp(1rem,1vw,1.2rem)] sm:text-[clamp(1rem,1vw,1.2rem)] text-white tracking-widest font-medium normal-case w-[18rem] sm:w-[55%]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "300",
                  color: "#6D6C68",
                }}
              >
                AI doesn't just simplify Web3—it makes it accessible. Drip
                empowers businesses and users alike with intelligent agents that
                automate trading, payments, and blockchain interactions. Whether
                you're integrating into existing systems or building something
                entirely new, our cross-chain, tokenized infrastructure is ready
                to scale with you.
              </p>
            </div>
          </Fade>
        </div>

        {/* Mobile: Single feature with navigation */}
        <div className="block sm:hidden w-[18rem]">
          <div className="w-full h-[120px] relative overflow-hidden">
            {/* Current feature */}
            {renderFeature(features[currentFeatureIndex], currentFeatureIndex)}

            {/* Exiting feature (shown during transition) */}
            {isTransitioning &&
              renderFeature(
                features[
                  slideDirection === "left"
                    ? (currentFeatureIndex - 1 + features.length) %
                      features.length
                    : (currentFeatureIndex + 1) % features.length
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

        {/* Desktop: Grid layout (unchanged) */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-6 sm:gap-8 2xl:gap-12 w-[58%]">
          {features.map((feature, index) => (
            <Fade key={feature.id} delay={feature.delay}>
              <div className="group text-left">
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
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features1;
