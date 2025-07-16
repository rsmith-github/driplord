import { Fade, Slide } from "react-awesome-reveal";
import StarBorder from "./reactbits/StarBorder";

const Features2 = () => {
  return (
    <section
      id="features2"
      className="h-screen bg-transparent flex flex-col items-center justify-center px-4 sm:px-8 py-20 sm:py-24 relative overflow-hidden"
    >
      <Slide direction="up">
        <h2 className="text-[clamp(1.2rem,4vw,4rem)] sm:text-[clamp(1rem,2.5vw,4rem)] font-bold text-white text-center uppercase tracking-wider font-menda mt-8 sm:mt-16">
          DRIPLORD TRADING AGENT
        </h2>
      </Slide>

      <div className="mx-auto w-full relative z-10 px-4 sm:px-[5vw] flex-1 flex items-center">
        {/* Mobile Layout - Stack vertically */}
        <div className="block lg:hidden w-full">
          <div className="space-y-8 sm:space-y-12">
            {/* Voice-Based Trading */}
            <Fade delay={300}>
              <div className="group text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 01 5 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-[clamp(0.9rem,3vw,1.5rem)] font-bold text-white mb-3 uppercase tracking-wide font-menda">
                  VOICE-BASED TRADING
                </h3>
                <p className="text-[clamp(1rem,2.5vw,1.2rem)] text-white/70 leading-relaxed font-helvetica max-w-sm mx-auto">
                  Execute buy, sell, and stake commands using simple voice or
                  text interactions
                </p>
              </div>
            </Fade>

            {/* Auto-DeFi Strategies */}
            <Fade delay={400}>
              <div className="group text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-[clamp(0.9rem,3vw,1.5rem)] font-bold text-white mb-3 uppercase tracking-wide font-menda">
                  AUTO-DEFI STRATEGIES
                </h3>
                <p className="text-[clamp(1rem,2.5vw,1.2rem)] text-white/70 leading-relaxed font-helvetica max-w-sm mx-auto">
                  Earn up to 240% APY with prebuilt, low-risk yield modules
                </p>
              </div>
            </Fade>

            {/* Portfolio Management */}
            <Fade delay={500}>
              <div className="group text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[clamp(0.9rem,3vw,1.5rem)] font-bold text-white mb-3 uppercase tracking-wide font-menda">
                  PORTFOLIO MANAGEMENT
                </h3>
                <p className="text-[clamp(1rem,2.5vw,1.2rem)] text-white/70 leading-relaxed font-helvetica max-w-sm mx-auto">
                  Optimize holdings with AI signals powered by GT-Protocol and
                  sentiment data
                </p>
              </div>
            </Fade>

            {/* Onboarding & Education */}
            <Fade delay={600}>
              <div className="group text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-[clamp(0.9rem,3vw,1.5rem)] font-bold text-white mb-3 uppercase tracking-wide font-menda">
                  ONBOARDING & EDUCATION
                </h3>
                <p className="text-[clamp(1rem,2.5vw,1.2rem)] text-white/70 leading-relaxed font-helvetica max-w-sm mx-auto">
                  Learn trading and Web3 basics with built-in tutorials and
                  step-by-step guidance
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* Desktop Layout - Original complex layout */}
        <div className="hidden lg:block relative h-96 w-full">
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
          <div className="absolute left-16 top-0 w-96 2xl:w-[28rem] h-full flex flex-col justify-center gap-[6rem] 2xl:gap-[15rem]">
            {/* Voice-Based Trading - Top Left */}
            <Fade delay={300}>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 01 5 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[clamp(0.8rem,1.1vw,2.5rem)] font-bold text-white mb-3 uppercase tracking-wide font-menda whitespace-nowrap">
                      VOICE-BASED TRADING
                    </h3>
                    <p className="text-[clamp(0.8rem,1.1vw,2rem)] text-white/70 leading-relaxed font-helvetica">
                      Execute buy, sell, and stake commands using simple voice
                      or text interactions
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
                    <svg
                      className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[clamp(0.8rem,1.1vw,2.5rem)] font-bold text-white mb-3 uppercase tracking-wide font-menda whitespace-nowrap">
                      PORTFOLIO MANAGEMENT
                    </h3>
                    <p className="text-[clamp(0.8rem,1.1vw,2rem)] text-white/70 leading-relaxed font-helvetica">
                      Optimize holdings with AI signals powered by GT-Protocol
                      and sentiment data
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Central Area - Reserved for potential figure/illustration */}
          <div className="w-64 2xl:w-80 h-64 2xl:h-80 flex items-center justify-center mx-auto">
            {/* This space is reserved for a central figure/illustration if needed */}
          </div>

          {/* Right Side Features */}
          <div className="absolute right-16 top-0 w-96 2xl:w-[28rem] h-full flex flex-col justify-center gap-[6rem] 2xl:gap-[15rem]">
            {/* Auto-DeFi Strategies - Top Right */}
            <Fade delay={400}>
              <div className="group text-right">
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[clamp(0.8rem,1.1vw,2.5rem)] font-bold text-white mb-3 uppercase tracking-wide font-menda whitespace-nowrap">
                      AUTO-DEFI STRATEGIES
                    </h3>
                    <p className="text-[clamp(0.8rem,1.1vw,2rem)] text-white/70 leading-relaxed font-helvetica">
                      Earn up to 240% APY with prebuilt, low-risk yield modules
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
                    <svg
                      className="w-[clamp(1.5rem,2vw,3rem)] h-[clamp(1.5rem,2vw,3rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[clamp(0.8rem,1.1vw,2.5rem)] font-bold text-white mb-3 uppercase tracking-wide font-menda whitespace-nowrap">
                      ONBOARDING & EDUCATION
                    </h3>
                    <p className="text-[clamp(0.8rem,1.1vw,2rem)] text-white/70 leading-relaxed font-helvetica">
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
      </div>
    </section>
  );
};

export default Features2;
