import { Fade, Slide } from "react-awesome-reveal";
import StarBorder from "./reactbits/StarBorder";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden flex items-center justify-center text-center bg-transparent pointer-events-none"
    >
      <div className="relative z-50 flex flex-col items-center justify-end h-full max-w-7xl mx-auto px-8 pointer-events-none">
        <div className="text-center mb-10 pointer-events-auto">
          <Fade delay={600} triggerOnce>
            <div className="mb-8">
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
            </div>
          </Fade>
        </div>
      </div>
      <div className="absolute bottom-4 right-10 flex flex-col items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-widest pointer-events-auto">
        <span>SCROLL TO EXPLORE</span>
        <div className="animate-bounce text-md">↓</div>
      </div>
    </section>
  );
};

export default Hero;
