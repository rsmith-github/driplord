import { useState, useEffect } from "react";

const Navbar = () => {
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
  };

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="navbar-brand">
          <h3 className="text-2xl font-bold tracking-widest text-white">
            DRIPLORD
          </h3>
        </div>

        <ul className="hidden lg:flex gap-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white/80 text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider"
            >
              LEGEND
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("features2")}
              className="text-white/80 text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider"
            >
              DRIPLORD TRADING AGENT
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("features1")}
              className="text-white/80 text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider"
            >
              AI FUTURE
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-white/80 text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase tracking-wider"
            >
              ROADMAP
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 border border-[rgb(238,63,154)] bg-[rgb(238,63,154)] text-white text-sm font-semibold rounded-md transition-all duration-300 hover:bg-transparent hover:text-[rgb(238,63,154)] uppercase tracking-wide"
            >
              GET STARTED
            </button>
          </li>
        </ul>

        <div className="flex gap-6 items-center">
          <span className="text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase text-white/80">
            TG
          </span>
          <span className="text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase text-white/80">
            X
          </span>
          <span className="text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase text-white/80">
            DS
          </span>
          <span className="text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-[rgb(238,63,154)] uppercase text-white/80">
            LI
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
