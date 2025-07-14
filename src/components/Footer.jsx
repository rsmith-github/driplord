import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Fade delay={500} triggerOnce style={{ zIndex: 50 }}>
      <footer
        className="fixed bottom-0 w-full py-2 pointer-events-none"
        style={{ zIndex: 50 }}
      >
        <div className="px-4 sm:px-8 w-full pointer-events-auto">
          <div className="flex justify-between items-center gap-4 w-full">
            <nav className="flex justify-between items-center w-full">
              <a
                href="#hero"
                className="text-white/60 text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-[rgb(238,63,154)] font-helvetica pointer-events-auto"
              >
                <img
                  src="/images/footerlogo.svg"
                  alt="logo"
                  className="w-20 sm:w-30 h-6 sm:h-10"
                />
              </a>
              <p className="text-white text-[clamp(0.7rem,2vw,1rem)] sm:text-[clamp(0.4rem,0.8vw,1rem)] uppercase tracking-wide transition-colors duration-300 hover:text-[rgb(238,63,154)] font-helvetica text-right max-w-[60%] sm:max-w-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </nav>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
