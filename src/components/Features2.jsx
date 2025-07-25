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
      className="h-screen bg-transparent flex flex-col items-start justify-center px-4 sm:px-8 py-20 sm:pt-[10%] relative overflow-hidden"
    >
      <div className="mx-auto w-full h-full flex flex-col justify-center px-4 sm:px-[5%] pt-4 sm:pt-[2%]">
        <div className="ml-0 text-center sm:text-left">
          <Slide direction="up">
            <h2
              className="text-[clamp(1.2rem,4vw,4rem)] sm:text-[clamp(1rem,2.25rem,4rem)] font-bold text-white mb-2 uppercase tracking-wider bold"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "750",
                lineHeight: "100%",
                letterSpacing: "-5%",
              }}
            >
              Meet the Drip Lord
              <br />
              Ultimate AI Trading Agent
            </h2>
          </Slide>
          <Fade delay={300}>
            <p
              className="text-[clamp(1rem,1vw,1.2rem)] sm:text-[clamp(0.5rem,1vw,1.5rem)] text-white tracking-widest font-medium capitalize"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "300",
              }}
            >
              AI-Powered Automation for Smarter, Simpler Web3 Trading
            </p>
          </Fade>
        </div>
        <div className="w-full relative z-10 flex-1 flex items-center">
          {/* Mobile Layout - Stack vertically */}
          <div className="block lg:hidden w-full">
            <div className="space-y-8 sm:space-y-12">
              {featuresData.map((feature, index) => (
                <Fade key={feature.id} delay={300 + index * 100}>
                  <div className="group text-left">
                    <div className="flex items-center mb-2">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] mr-4"
                      />
                      <h3
                        className="text-[clamp(0.9rem,3vw,1.5rem)] text-white uppercase tracking-wide"
                        style={{
                          fontFamily: "Helvetica Neue",
                          fontWeight: "750",
                        }}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p
                      className="text-[clamp(1rem,2.5vw,1.2rem)] text-white/70 leading-relaxed max-w-sm"
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
                        className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)]"
                      />
                    </div>
                    <h3
                      className="text-[clamp(0.8rem,1.1vw,2.5rem)] text-white uppercase tracking-wide  whitespace-nowrap pt-1.5"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[0].title}
                    </h3>
                  </div>
                  <p
                    className="text-[clamp(0.8rem,1.125rem,2rem)] text-white/70 leading-relaxed mt-2"
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
                        className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)]"
                      />
                    </div>
                    <h3
                      className="text-[clamp(0.8rem,1.1vw,2.5rem)] text-white uppercase tracking-wide  whitespace-nowrap pt-1.5"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[2].title}
                    </h3>
                  </div>
                  <p
                    className="text-[clamp(0.8rem,1.125rem,2rem)] text-white/70 leading-relaxed mt-2"
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
                        className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)]"
                      />
                    </div>
                    <h3
                      className="text-[clamp(0.8rem,1.1vw,2.5rem)] text-white uppercase tracking-wide whitespace-nowrap pt-1.5"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[1].title}
                    </h3>
                  </div>
                  <p
                    className="text-[clamp(0.8rem,1.125rem,2rem)] text-white/70 leading-relaxed mt-2 text-right"
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
                        className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)]"
                      />
                    </div>
                    <h3
                      className="text-[clamp(0.8rem,1.1vw,2.5rem)] text-white uppercase tracking-wide  whitespace-nowrap pt-1.5"
                      style={{
                        fontFamily: "Helvetica Neue",
                        fontWeight: "750",
                      }}
                    >
                      {featuresData[3].title}
                    </h3>
                  </div>
                  <p
                    className="text-[clamp(0.8rem,1.125rem,2rem)] text-white/70 leading-relaxed mt-2 text-right"
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
