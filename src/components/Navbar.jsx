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
            <li>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="text-white/80 text-[clamp(0.6rem,0.9vw,0.9vw)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica"
              >
                ROADMAP
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden sm:flex gap-4 sm:gap-6 2xl:gap-8 items-center">
          <div className="flex items-center justify-center">
            <img
              src="https://d17r7llinqok54.cloudfront.net/twitter-x.svg"
              alt="Twitter"
              className="w-[1.2rem] h-[1.5rem]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://d17r7llinqok54.cloudfront.net/discord.svg"
              alt="Discord"
              className="w-[1.8rem] h-[1.8rem]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://d17r7llinqok54.cloudfront.net/insta-logo.svg"
              alt="Instagram"
              className="w-[1.5rem] h-[1.5rem]"
            />
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
          <button
            onClick={() => scrollToSection("roadmap")}
            className="block w-full text-left text-white/80 text-[clamp(1rem,4vw,1.5rem)] font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider font-helvetica py-2"
          >
            ROADMAP
          </button>

          {/* Mobile Social Icons */}
          <div className="flex gap-6 items-center pt-4 border-t border-white/20">
            <div className="flex items-center justify-center">
              <img
                src="https://d17r7llinqok54.cloudfront.net/twitter-x.svg"
                alt="Twitter"
                className="w-[1.2rem] h-[1.5rem]"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://d17r7llinqok54.cloudfront.net/discord.svg"
                alt="Discord"
                className="w-[1.8rem] h-[1.8rem]"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://d17r7llinqok54.cloudfront.net/insta-logo.svg"
                alt="Instagram"
                className="w-[1.5rem] h-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
