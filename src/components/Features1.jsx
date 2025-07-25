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
            <h2
              className="text-[clamp(1.2rem,4vw,4rem)] sm:text-[clamp(1rem,2.5vw,4rem)] font-bold text-white mb-2 uppercase tracking-wider bold"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "750",
                lineHeight: "100%",
              }}
            >
              UNLOCKING WEB3 FOR
              <br />
              EVERYONE WITH AI AGENTS
            </h2>
          </Slide>
          <Fade delay={300}>
            <p
              className="text-[clamp(1rem,2.5vw,1.2rem)] sm:text-[clamp(0.5rem,1vw,1.5rem)] text-white tracking-widest font-medium uppercase"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "300",
              }}
            >
              Seamless B2B2C Solutions That Bridge Traditional and Decentralized
              Worlds
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 2xl:gap-12 w-full">
          {/* AI Agents */}
          <Fade delay={400}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-start items-center gap-4">
                <img
                  src={"public/images/feature-icons/agents.svg"}
                  alt="AI Agent"
                  className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] sm:w-[clamp(1.5rem,2vw,4rem)] sm:h-[clamp(1.5rem,2vw,4rem)]"
                />
                <h3
                  className="text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(0.75rem,1.2vw,2rem)] font-bold text-white uppercase tracking-wide"
                  style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
                >
                  AI AGENTS
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
                Deploy autonomous tools to streamline Web3 tasks like trading
                and payments with voice commands
              </p>
            </div>
          </Fade>

          {/* B2B2C Growth */}
          <Fade delay={500}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-start items-center gap-4">
                <img
                  src={"public/images/feature-icons/solutions.svg"}
                  alt="AI Agent"
                  className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] sm:w-[clamp(1.5rem,2vw,4rem)] sm:h-[clamp(1.5rem,2vw,4rem)]"
                />
                <h3
                  className="text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(0.75rem,1.2vw,2rem)] font-bold text-white uppercase tracking-wide"
                  style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
                >
                  B2B2C SOLUTIONS
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
                Scale your business with integrated AI solutions that bridge
                traditional and decentralized systems
              </p>
            </div>
          </Fade>

          {/* Cross-Chain Links */}
          <Fade delay={600}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-start items-center gap-4">
                <img
                  src={"public/images/feature-icons/chain.svg"}
                  alt="AI Agent"
                  className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] sm:w-[clamp(1.5rem,2vw,4rem)] sm:h-[clamp(1.5rem,2vw,4rem)]"
                />
                <h3
                  className="text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(0.75rem,1.2vw,2rem)] font-bold text-white uppercase tracking-wide"
                  style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
                >
                  CROSS-CHAIN COMPATIBILITY
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
                Seamless integration across multiple blockchain networks for
                maximum compatibility
              </p>
            </div>
          </Fade>

          {/* Tokenized System */}
          <Fade delay={700}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-start items-center gap-4">
                <img
                  src={"public/images/feature-icons/token.svg"}
                  alt="AI Agent"
                  className="w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] sm:w-[clamp(1.5rem,2vw,4rem)] sm:h-[clamp(1.5rem,2vw,4rem)]"
                />
                <h3
                  className="text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(0.75rem,1.2vw,2rem)] font-bold text-white uppercase tracking-wide"
                  style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
                >
                  TOKENIZED INFRASTRUCTURE
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
