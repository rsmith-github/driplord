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
            <h2 className="text-[clamp(1.2rem,4vw,6rem)] sm:text-[clamp(1.5rem,4vw,6rem)] font-bold text-white mb-6 sm:mb-8 uppercase tracking-wider font-menda">
              PARTNER WITH DRIPLORD
            </h2>
            <p className="text-[clamp(1rem,2.5vw,1.2rem)] sm:text-[clamp(0.8rem,1.5vw,2.5rem)] text-white/70 mx-auto leading-relaxed font-helvetica max-w-4xl px-4">
              Upgrade your firm with AI-driven Web3 tools. Boost growth,
              efficiency, and innovation in decentralized tech.
            </p>
          </div>
        </Slide>

        <Fade delay={300}>
          <div className="inline-block px-6 sm:px-12 text-xl font-bold text-white uppercase tracking-wide font-helvetica">
            <StarBorder
              as="a"
              href="mailto:hello@driplord.ai"
              speed="3s"
              color="magenta"
              thickness={2}
              className="inline-block text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(1rem,1.1vw,4vw)] font-bold text-white uppercase tracking-widest font-helvetica cursor-pointer px-6 py-3 sm:px-8 sm:py-4"
            >
              BOOK A CALL
            </StarBorder>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
