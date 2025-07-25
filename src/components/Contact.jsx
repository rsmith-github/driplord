import { Fade, Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-transparent relative overflow-hidden py-20 sm:py-24 flex items-center"
    >
      <div className="w-full mx-auto px-4 sm:px-[5%] relative z-10 sm:grid sm:grid-cols-[1fr_45.26vw]">
        <div className="w-full flex flex-col items-start sm:col-start-2 sm:col-end-3 gap-16">
          <Slide direction="up">
            <div>
              <h2
                className="text-[clamp(1.2rem,4vw,6rem)] sm:text-[clamp(1.5rem,1.875vw,1.875vw)] font-bold text-white uppercase tracking-wider"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "750",
                  lineHeight: "100%",
                  letterSpacing: "-5%",
                }}
              >
                PARTNER WITH DRIP LORD
              </h2>
              <p
                className="text-[clamp(1rem,1.25vw,1.25vw)] sm:text-[clamp(0.5rem,1.25vw,1.25vw)] text-white tracking-widest font-medium capitalize"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "300",
                }}
              >
                Supercharge Your Business with AI-Powered Web3 Infrastructure
              </p>
              <p
                className="text-[clamp(1rem,1.25vw,1.25vw)] sm:text-[clamp(0.8rem,0.938vw,0.938vw)] leading-relaxed font-helvetica max-w-[35.885vw] mt-4"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: "300",
                  color: "#6D6C68",
                }}
              >
                Collaborate with DripLord to integrate cutting-edge AI agents
                into your platform or product. From automating DeFi operations
                to streamlining onboarding, our tools help you drive growth,
                reduce overhead, and unlock innovation at the edge of
                decentralized technology.
              </p>
            </div>
          </Slide>
          <Fade delay={600}>
            <div className="pointer-events-auto">
              <div className="bg-white rounded-full h-[3.125vw]">
                <button className="inline-block text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(1rem,0.833vw,0.833vw)] font-bold uppercase tracking-widest font-helvetica cursor-pointer px-6 sm:px-8 text-black h-full">
                  Book a Call
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
