import { Fade, Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-transparent flex flex-col justify-between items-center text-center px-8 pt-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex-grow flex flex-col justify-center relative z-10">
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
          <div className="mb-16">
            <a
              href="mailto:hello@driplord.ai"
              className="inline-block px-12 py-6 text-xl font-bold bg-[rgb(238,63,154)] border-2 border-[rgb(238,63,154)] text-white rounded-lg transition-all duration-300 hover:bg-transparent hover:text-[rgb(238,63,154)] uppercase tracking-wide shadow-lg hover:shadow-[0_0_30px_rgba(238,63,154,0.3)]"
            >
              BOOK A CALL
            </a>
          </div>
        </Fade>
      </div>

      <Fade delay={500} triggerOnce>
        <footer className="w-full border-t border-white/10 py-8 mt-auto backdrop-blur-sm bg-black/30 relative z-10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <nav className="flex flex-wrap justify-center md:justify-start gap-8 items-center">
                <a
                  href="#hero"
                  className="text-white/60 text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-[rgb(238,63,154)]"
                >
                  LEGEND
                </a>
                <a
                  href="#features2"
                  className="text-white/60 text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-[rgb(238,63,154)]"
                >
                  DRIPLORD TRADING AGENT
                </a>
                <a
                  href="#features1"
                  className="text-white/60 text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-[rgb(238,63,154)]"
                >
                  AI FUTURE
                </a>
                <a
                  href="#roadmap"
                  className="text-white/60 text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-[rgb(238,63,154)]"
                >
                  ROADMAP
                </a>
                <a
                  href="#contact"
                  className="text-white/60 text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-[rgb(238,63,154)]"
                >
                  GET STARTED
                </a>
              </nav>
              <div className="flex gap-6 items-center">
                <a
                  href="#"
                  className="text-white/60 text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase"
                >
                  TG
                </a>
                <a
                  href="#"
                  className="text-white/60 text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase"
                >
                  X
                </a>
                <a
                  href="#"
                  className="text-white/60 text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase"
                >
                  DS
                </a>
                <a
                  href="#"
                  className="text-white/60 text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase"
                >
                  LI
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Fade>
    </section>
  );
};

export default Contact;
