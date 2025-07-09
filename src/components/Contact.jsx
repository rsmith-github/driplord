import { Fade, Slide } from "react-awesome-reveal";
import StarBorder from "./reactbits/StarBorder";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-[calc(100vh-100px)] bg-transparent flex flex-col justify-center items-center text-center px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center relative z-10">
        <Slide direction="up" triggerOnce>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-wider">
              PARTNER WITH DRIPLORD
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Upgrade your firm with AI-driven Web3 tools. Boost growth,
              efficiency, and innovation in decentralized tech.
            </p>
          </div>
        </Slide>

        <Fade delay={300} triggerOnce>
          <div>
            <a
              href="mailto:hello@driplord.ai"
              className="inline-block px-12 py-6 text-xl font-bold text-white uppercase tracking-wide"
            >
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
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
