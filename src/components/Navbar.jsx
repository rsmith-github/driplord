import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 w-full navbar-z-index">
      <div className="mx-auto px-4 sm:px-6 2xl:px-8 py-4 2xl:py-6 flex justify-between items-center">
        <div className="flex gap-8 sm:gap-16 2xl:gap-20 items-center">
          <div className="navbar-brand">
            <h3 className="text-[clamp(1rem,4vw,3rem)] sm:text-[clamp(1rem,1.1vw,3rem)] font-bold tracking-widest text-white font-menda">
              DRIPLORD
            </h3>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8 2xl:gap-10 items-center">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white/80 text-[clamp(0.6rem,0.9vw,0.9vw)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica"
              >
                LEGEND
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features2")}
                className="text-white/80 text-[clamp(0.6rem,0.9vw,0.9vw)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica"
              >
                DRIPLORD TRADING AGENT
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features1")}
                className="text-white/80 text-[clamp(0.6rem,0.9vw,0.9vw)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica"
              >
                AI FUTURE
              </button>
            </li>
            {/* <li>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="text-white/80 text-[clamp(0.6rem,0.9vw,0.9vw)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica"
              >
                ROADMAP
              </button>
            </li> */}
          </ul>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden sm:flex gap-4 sm:gap-6 2xl:gap-8 items-center">
          <div className="flex items-center justify-center">
            <svg
              className="w-[1.5rem] h-[1.5rem] text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div className="flex items-center justify-center">
            <svg
              className="w-[1.5rem] h-[1.5rem] text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.93a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.36z" />
            </svg>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="block w-full text-left text-white/80 text-[clamp(1rem,4vw,1.5rem)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica py-2"
          >
            LEGEND
          </button>
          <button
            onClick={() => scrollToSection("features2")}
            className="block w-full text-left text-white/80 text-[clamp(1rem,4vw,1.5rem)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica py-2"
          >
            DRIPLORD TRADING AGENT
          </button>
          <button
            onClick={() => scrollToSection("features1")}
            className="block w-full text-left text-white/80 text-[clamp(1rem,4vw,1.5rem)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica py-2"
          >
            AI FUTURE
          </button>
          {/* <button
            onClick={() => scrollToSection("roadmap")}
            className="block w-full text-left text-white/80 text-[clamp(1rem,4vw,1.5rem)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica py-2"
          >
            ROADMAP
          </button> */}

          {/* Mobile Social Icons */}
          <div className="flex gap-6 items-center pt-4 border-t border-white/20">
            <div className="flex items-center justify-center">
              <svg
                className="w-[1.5rem] h-[1.5rem] text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-[1.5rem] h-[1.5rem] text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.93a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.36z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
