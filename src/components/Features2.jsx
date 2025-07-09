import { Fade, Slide } from "react-awesome-reveal";
import StarBorder from "./reactbits/StarBorder";

const Features2 = () => {
  return (
    <section
      id="features2"
      className="h-screen bg-transparent flex items-center justify-center px-8 py-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <Slide direction="up" triggerOnce>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-wider">
              DRIPLORD TRADING AGENT
            </h2>
          </Slide>
        </div>

        <div className="relative max-w-6xl mx-auto h-96 flex items-center justify-center">
          {/* Left Side HUD Element */}
          <div className="absolute left-0 top-0 h-full flex items-center">
            <svg
              width="6"
              height="384"
              viewBox="0 0 6 384"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <path
                d="M0 0H6V60L3 80V120L1 140V244L3 264V304L6 324V384H0V0Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Left Side Features */}
          <div className="absolute left-16 top-0 w-80 h-full flex flex-col justify-center gap-12">
            {/* Voice-Based Trading - Top Left */}
            <Fade delay={300} triggerOnce>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-8 h-8 text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 715 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                      VOICE-BASED TRADING
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Execute buy, sell, and stake commands using simple voice
                      or text interactions
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Portfolio Management - Bottom Left */}
            <Fade delay={500} triggerOnce>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-8 h-8 text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                      PORTFOLIO MANAGEMENT
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Optimize holdings with AI signals powered by GT-Protocol
                      and sentiment data
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Central Area - Reserved for potential figure/illustration */}
          <div className="w-64 h-64 flex items-center justify-center">
            {/* This space is reserved for a central figure/illustration if needed */}
          </div>

          {/* Right Side Features */}
          <div className="absolute right-16 top-0 w-80 h-full flex flex-col justify-center gap-12">
            {/* Auto-DeFi Strategies - Top Right */}
            <Fade delay={400} triggerOnce>
              <div className="group text-right">
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-8 h-8 text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                      AUTO-DEFI STRATEGIES
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Earn up to 240% APY with prebuilt, low-risk yield modules
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Onboarding & Education - Bottom Right */}
            <Fade delay={600} triggerOnce>
              <div className="group text-right">
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-8 h-8 text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                      ONBOARDING & EDUCATION
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Learn trading and Web3 basics with built-in tutorials and
                      step-by-step guidance
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Right Side HUD Element */}
          <div className="absolute right-0 top-0 h-full flex items-center">
            <svg
              width="6"
              height="384"
              viewBox="0 0 6 384"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <path
                d="M6 0H0V60L3 80V120L5 140V244L3 264V304L0 324V384H6V0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <Fade delay={700} triggerOnce>
          <div className="text-center mt-12">
            <button className="px-10 py-4 text-white font-bold uppercase tracking-wide text-lg">
              <StarBorder
                as="a"
                href="#contact"
                speed="3s"
                color="magenta"
                thickness={2}
                className="inline-block text-md font-bold text-white uppercase tracking-widest"
              >
                Get Started
              </StarBorder>
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Features2;
