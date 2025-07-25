import { Fade, Slide } from "react-awesome-reveal";

const Features1 = () => {
  return (
    <section
      id="features1"
      className="h-screen bg-transparent flex items-center justify-center px-4 sm:px-8 pt-24 pb-24 sm:pt-0 sm:pb-0"
    >
      <div className="mx-auto w-full h-full flex flex-col justify-center gap-4 sm:gap-[3rem] px-4 sm:px-[5%] pt-4 sm:pt-[2%]">
        <div className="ml-0 text-center sm:text-left">
          <Slide direction="up">
            <h2
              className="text-[clamp(1.2rem,4vw,4rem)] sm:text-[clamp(1rem,1.875vw,1.875vw)] font-bold text-white mb-2 uppercase tracking-wider bold"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "750",
                lineHeight: "100%",
                letterSpacing: "-5%",
              }}
            >
              Unlock Web3 for
              <br />
              Everyone with AI Agents
            </h2>
          </Slide>
          <Fade delay={300}>
            <p
              className="text-[clamp(1rem,1vw,1.2rem)] sm:text-[clamp(0.5rem,1.25vw,1.25vw)] text-white tracking-widest font-medium capitalize"
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
            <div className="flex justify-start mt-4">
              <p
                className="text-[clamp(1rem,1vw,1.2rem)] sm:text-[clamp(0.5rem,0.938vw,0.938vw)] text-white tracking-widest font-medium normal-case w-[55%]"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 2xl:gap-12 w-[58%]">
          {/* AI Agents */}
          <Fade delay={400}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-start items-center gap-4">
                <img
                  src={"https://d17r7llinqok54.cloudfront.net/agents.svg"}
                  alt="AI Agent"
                  className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                />
                <h3
                  className="text-[clamp(0.9rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1"
                  style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
                >
                  AI AGENTS
                </h3>
              </div>
              <p
                className="text-[clamp(0.5rem,0.938vw,0.938vw)] text-white/70"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "300",
                  color: "#6D6C68",
                  lineHeight: "1.5",
                }}
              >
                Autonomous tools that handle trading, payments, and on-chain
                tasks using simple voice commands or prompts—no technical
                expertise required.
              </p>
            </div>
          </Fade>

          {/* B2B2C Growth */}
          <Fade delay={500}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-start items-center gap-4">
                <img
                  src={"https://d17r7llinqok54.cloudfront.net/solutions.svg"}
                  alt="AI Agent"
                  className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                />
                <h3
                  className="text-[clamp(0.9rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1"
                  style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
                >
                  B2B2C SOLUTIONS
                </h3>
              </div>
              <p
                className="text-[clamp(0.5rem,0.938vw,0.938vw)] text-white/70"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "300",
                  color: "#6D6C68",
                  lineHeight: "1.5",
                }}
              >
                Boost adoption with AI-powered workflows that connect Web2
                familiarity to Web3 functionality, helping your business onboard
                users at scale.
              </p>
            </div>
          </Fade>

          {/* Cross-Chain Links */}
          <Fade delay={600}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-start items-center gap-4">
                <img
                  src={"https://d17r7llinqok54.cloudfront.net/chain.svg"}
                  alt="AI Agent"
                  className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                />
                <h3
                  className="text-[clamp(0.9rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1"
                  style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
                >
                  CROSS-CHAIN COMPATIBILITY
                </h3>
              </div>
              <p
                className="text-[clamp(0.5rem,0.938vw,0.938vw)] text-white/70"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "300",
                  color: "#6D6C68",
                  lineHeight: "1.5",
                }}
              >
                Operate seamlessly across major blockchain networks with
                plug-and-play cross-chain integration.
              </p>
            </div>
          </Fade>

          {/* Tokenized System */}
          <Fade delay={700}>
            <div className="group text-center sm:text-left">
              <div className="mb-4 sm:mb-6 flex justify-start items-center gap-4">
                <img
                  src={"https://d17r7llinqok54.cloudfront.net/token.svg"}
                  alt="AI Agent"
                  className="w-[clamp(1.5rem,1.25vw,1.25vw)] h-[clamp(1.5rem,1.25vw,1.25vw)]"
                />
                <h3
                  className="text-[clamp(0.9rem,1rem,1.5rem)] sm:text-[clamp(0.75rem,0.833vw,2rem)] font-bold text-white uppercase tracking-wide pt-1"
                  style={{ fontFamily: "Helvetica Neue", fontWeight: "750" }}
                >
                  TOKENIZED INFRASTRUCTURE
                </h3>
              </div>
              <p
                className="text-[clamp(0.5rem,0.938vw,0.938vw)] text-white/70"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "300",
                  color: "#6D6C68",
                  lineHeight: "1.5",
                }}
              >
                Power your business with secure, transparent, and auditable
                systems built on blockchain technology—ideal for identity,
                access, and transactions.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Features1;
