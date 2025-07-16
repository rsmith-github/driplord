import { Fade, Slide } from "react-awesome-reveal";

const Features1 = () => {
  return (
    <section
      id="features1"
      className="h-screen bg-transparent flex items-center justify-center px-4 sm:px-8 pt-24 pb-24 sm:pt-0 sm:pb-0"
    >
      <div className="mx-auto w-full h-full flex flex-col justify-center gap-4 sm:gap-[3rem] 2xl:gap-[10rem] px-4 sm:px-[5%] pt-4 sm:pt-[2%]">
        <div className="ml-0 text-center sm:text-left">
          <Slide direction="up">
            <h2 className="text-[clamp(1.2rem,4vw,4rem)] sm:text-[clamp(1rem,2.5vw,4rem)] font-bold text-white mb-4 sm:mb-6 uppercase tracking-wider font-menda">
              SIMPLIFYING WEB3 <br />
              WITH AI AGENTS
            </h2>
          </Slide>
          <Fade delay={300}>
            <p className="text-[clamp(1rem,2.5vw,1.2rem)] sm:text-[clamp(0.5rem,1vw,1.5rem)] text-white/70 tracking-widest font-medium font-helvetica uppercase">
              B2B2C Integrations For Mass Adoption.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 2xl:gap-12 w-full">
          {/* AI Agents */}
          <Fade delay={400}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                <svg
                  className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] sm:w-[clamp(1.5rem,2vw,4rem)] sm:h-[clamp(1.5rem,2vw,4rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(0.75rem,1.2vw,2rem)] font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide font-menda">
                AI AGENTS
              </h3>
              <p className="text-[clamp(1rem,2.5vw,1.2rem)] sm:text-[clamp(0.6rem,1vw,1.5rem)] text-white/60 leading-relaxed font-helvetica">
                Deploy autonomous tools to streamline Web3 tasks like trading
                and payments with voice commands
              </p>
            </div>
          </Fade>

          {/* B2B2C Growth */}
          <Fade delay={500}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                <svg
                  className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] sm:w-[clamp(1.5rem,2vw,4rem)] sm:h-[clamp(1.5rem,2vw,4rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(0.75rem,1.2vw,2rem)] font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide font-menda">
                B2B2C GROWTH
              </h3>
              <p className="text-[clamp(1rem,2.5vw,1.2rem)] sm:text-[clamp(0.6rem,1vw,1.5rem)] text-white/60 leading-relaxed font-helvetica">
                Scale your business with integrated AI solutions that bridge
                traditional and decentralized systems
              </p>
            </div>
          </Fade>

          {/* Cross-Chain Links */}
          <Fade delay={600}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                <svg
                  className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] sm:w-[clamp(1.5rem,2vw,4rem)] sm:h-[clamp(1.5rem,2vw,4rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(0.75rem,1.2vw,2rem)] font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide font-menda">
                CROSS-CHAIN LINKS
              </h3>
              <p className="text-[clamp(1rem,2.5vw,1.2rem)] sm:text-[clamp(0.6rem,1vw,1.5rem)] text-white/60 leading-relaxed font-helvetica">
                Seamless integration across multiple blockchain networks for
                maximum compatibility
              </p>
            </div>
          </Fade>

          {/* Tokenized System */}
          <Fade delay={700}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                <svg
                  className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] sm:w-[clamp(1.5rem,2vw,4rem)] sm:h-[clamp(1.5rem,2vw,4rem)] text-[rgb(238,63,154)] group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(0.75rem,1.2vw,2rem)] font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide font-menda">
                TOKENIZED SYSTEM
              </h3>
              <p className="text-[clamp(1rem,2.5vw,1.2rem)] sm:text-[clamp(0.6rem,1vw,1.5rem)] text-white/60 leading-relaxed font-helvetica">
                Leverage blockchain technology for transparent and secure
                business operations
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Features1;
