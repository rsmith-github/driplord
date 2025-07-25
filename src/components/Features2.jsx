import { Fade, Slide } from "react-awesome-reveal";
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
  return (
    <section
      id="features2"
      className="h-screen bg-transparent flex flex-col items-center justify-center px-4 sm:px-8 py-20 sm:py-24 relative overflow-hidden"
    >
      <Slide direction="up">
        <h2
          className="text-[clamp(1.2rem,4vw,4rem)] sm:text-[clamp(1rem,2.5vw,4rem)] text-white text-center uppercase tracking-wider mt-8 sm:mt-16"
          style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
        >
          DRIPLORD TRADING AGENT
        </h2>
      </Slide>

      <div className="mx-auto w-full relative z-10 px-4 sm:px-[5%] flex-1 flex items-center">
        {/* Mobile Layout - Stack vertically */}
        <div className="block lg:hidden w-full">
          <div className="space-y-8 sm:space-y-12">
            {featuresData.map((feature, index) => (
              <Fade key={feature.id} delay={300 + index * 100}>
                <div className="group text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] "
                    />
                  </div>
                  <h3
                    className="text-[clamp(0.9rem,3vw,1.5rem)] text-white mb-3 uppercase tracking-wide"
                    style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[clamp(1rem,2.5vw,1.2rem)] text-white/70 leading-relaxed max-w-sm mx-auto"
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontWeight: "300",
                      color: "#6D6C68",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Original complex layout */}
        <div className="hidden lg:block relative h-96 w-full">
          {/* Left Side Features */}
          <div className="absolute left-0 top-0 w-96 2xl:w-[28rem] h-full flex flex-col justify-center gap-[6rem] 2xl:gap-[15rem]">
            {/* Voice-Based Trading - Top Left */}
            <Fade delay={300}>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <img
                      src={featuresData[0].icon}
                      alt={featuresData[0].title}
                      className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[clamp(0.8rem,1.1vw,2.5rem)] text-white mb-3 uppercase tracking-wide  whitespace-nowrap"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[0].title}
                    </h3>
                    <p
                      className="text-[clamp(0.8rem,1.1vw,2rem)] text-white/70 leading-relaxed"
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
              </div>
            </Fade>

            {/* Portfolio Management - Bottom Left */}
            <Fade delay={500}>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <img
                      src={featuresData[2].icon}
                      alt={featuresData[2].title}
                      className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[clamp(0.8rem,1.1vw,2.5rem)] text-white mb-3 uppercase tracking-wide  whitespace-nowrap"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[2].title}
                    </h3>
                    <p
                      className="text-[clamp(0.8rem,1.1vw,2rem)] text-white/70 leading-relaxed"
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
              </div>
            </Fade>
          </div>

          {/* Right Side Features */}
          <div className="absolute right-0 top-0 w-96 2xl:w-[28rem] h-full flex flex-col justify-center gap-[6rem] 2xl:gap-[15rem]">
            {/* Auto-DeFi Strategies - Top Right */}
            <Fade delay={400}>
              <div className="group text-right">
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex-shrink-0 mt-1">
                    <img
                      src={featuresData[1].icon}
                      alt={featuresData[1].title}
                      className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[clamp(0.8rem,1.1vw,2.5rem)] text-white mb-3 uppercase tracking-wide  whitespace-nowrap"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[1].title}
                    </h3>
                    <p
                      className="text-[clamp(0.8rem,1.1vw,2rem)] text-white/70 leading-relaxed"
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
              </div>
            </Fade>

            {/* Onboarding & Education - Bottom Right */}
            <Fade delay={600}>
              <div className="group text-right">
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex-shrink-0 mt-1">
                    <img
                      src={featuresData[3].icon}
                      alt={featuresData[3].title}
                      className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[clamp(0.8rem,1.1vw,2.5rem)] text-white mb-3 uppercase tracking-wide  whitespace-nowrap"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[3].title}
                    </h3>
                    <p
                      className="text-[clamp(0.8rem,1.1vw,2rem)] text-white/70 leading-relaxed"
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
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
