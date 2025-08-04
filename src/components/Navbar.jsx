import { useState, useEffect } from "react";

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full" style={{ zIndex: 999 }}>
      <div className="mx-auto px-4 sm:px-6 2xl:px-8 py-4 2xl:py-6 flex justify-between items-center relative">
        <div className="flex gap-8 sm:gap-16 2xl:gap-20 items-center">
          <div className="navbar-brand">
            <img
              src="https://d17r7llinqok54.cloudfront.net/drip-navbar-logo.svg"
              alt="Driplord Logo"
              className="w-[clamp(5.6rem,2.5vw,2.5vw)] h-[clamp(0.781rem,0.781vw,0.781vw)]"
            />
          </div>
        </div>

        {/* Mobile Menu Button - Always visible burger icon */}
        <button
          className="flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen
                ? "rotate-45 translate-y-0.5"
                : "translate-y-[-4px]"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen
                ? "-rotate-45 -translate-y-0.5"
                : "translate-y-[4px]"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu - Fullscreen overlay */}
      <div
        className={`fixed top-0 left-0 right-0 h-screen bg-[#0E0E0E] backdrop-blur-md transition-opacity duration-300 flex flex-col justify-between ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Mobile Menu Header - Logo and Close Button */}
        <div className="sm:px-6 2xl:px-8 py-4 px-4 2xl:py-6  flex justify-between items-center">
          <div className="navbar-brand">
            <img
              src="/images/drip-navbar-logo.svg"
              alt="Driplord Logo"
              className="w-[clamp(5.6rem,2.5vw,2.5vw)] h-[clamp(0.5rem,0.781vw,0.781vw)]"
            />
          </div>
          <button
            className="relative flex justify-center items-center w-8 h-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="absolute block w-6 h-0.5 bg-white transition-all duration-300 rotate-45"></span>
            <span className="absolute block w-6 h-0.5 bg-white transition-all duration-300 -rotate-45"></span>
          </button>
        </div>

        {/* Mobile Navigation Items */}
        <div className="flex-grow flex flex-col justify-center items-center gap-8 sm:pb-30 pb-58">
          <button
            onClick={() => scrollToSection("hero")}
            className="block text-white/80 text-[clamp(3rem,2.5vw,2.5vw)] font-thin cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica py-2"
          >
            LEGEND
          </button>
          <button
            onClick={() => scrollToSection("features2")}
            className="block text-white/80 text-[clamp(3rem,2.5vw,2.5vw)] font-thin cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica py-2"
          >
            TRADING AGENT
          </button>
          <button
            onClick={() => scrollToSection("features1")}
            className="block text-white/80 text-[clamp(3rem,2.5vw,2.5vw)] font-thin cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica py-2"
          >
            AI FUTURE
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block text-white/80 text-[clamp(3rem,2.5vw,2.5vw)] font-thin cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica py-2"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
