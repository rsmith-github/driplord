import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Fade delay={500} triggerOnce>
      <footer className="absolute bottom-0 w-full border-t border-white/10 py-8 backdrop-blur-sm bg-black/30 relative z-10">
        <div className="px-8">
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
  );
};

export default Footer;
