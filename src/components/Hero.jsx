import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden flex items-center justify-center text-center bg-transparent pointer-events-none"
    >
      <div className="relative z-50 flex flex-col items-center justify-end h-full max-w-7xl mx-auto px-8 pointer-events-none">
        <div className="text-center mb-26 pointer-events-auto">
          <Fade delay={600} triggerOnce>
            <div className="mb-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-md font-bold bg-[rgb(238,63,154)] border-2 border-[rgb(238,63,154)] text-white rounded-lg transition-all duration-300 hover:bg-transparent hover:text-[rgb(238,63,154)] uppercase tracking-widest"
              >
                Get Started
              </a>
            </div>
          </Fade>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-sm font-medium uppercase tracking-widest pointer-events-auto">
          <span>SCROLL TO EXPLORE</span>
          <div className="text-2xl animate-bounce">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
