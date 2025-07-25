import { Fade, Slide } from "react-awesome-reveal";
import StarBorder from "./reactbits/StarBorder";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-transparent flex flex-col justify-center items-center text-center px-4 sm:px-8 py-20 sm:py-24 relative overflow-hidden"
    >
      <div className="w-full mx-auto flex flex-col justify-center relative z-10">
        <Slide direction="up">
          <div className="mb-30 sm:mb-16">
            <h2 className="text-[clamp(1.2rem,4vw,6rem)] sm:text-[clamp(1.5rem,4vw,6rem)] font-bold text-white mb-6 sm:mb-8 uppercase tracking-wider ">
              PARTNER WITH DRIPLORD
            </h2>
            <p className="text-[clamp(1rem,2.5vw,1.2rem)] sm:text-[clamp(0.8rem,1.5vw,2.5rem)] text-white/70 mx-auto leading-relaxed font-helvetica max-w-4xl px-4">
              Upgrade your firm with AI-driven Web3 tools. Boost growth,
              efficiency, and innovation in decentralized tech.
            </p>
          </div>
        </Slide>

        <div className="relative z-50 flex flex-col items-center justify-between w-full h-full px-4 sm:px-0 pointer-events-none">

          <div className="text-center mb-42 sm:mb-10 md:mb-12 pointer-events-auto">
            <Fade delay={600} triggerOnce>
              <div className="mb-[20%] sm:mb-[30%] bg-white rounded-full">
                <button className="inline-block text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(1rem,1.1vw,4vw)] font-bold uppercase tracking-widest font-helvetica cursor-pointer px-6 py-3 sm:px-8 sm:py-4 text-black">
                  Book a Call
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
