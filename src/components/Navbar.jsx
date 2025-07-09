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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 py-2" : "bg-black/80 py-4"
      } backdrop-blur-lg`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="navbar-brand">
          <h3 className="text-2xl font-bold tracking-widest">DRIPLORD</h3>
        </div>
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-text-primary text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-accent uppercase tracking-wider"
            >
              LEGEND
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("features1")}
              className="text-text-primary text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-accent uppercase tracking-wider"
            >
              TRADING AGENT
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("features2")}
              className="text-text-primary text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-accent uppercase tracking-wider"
            >
              AI FUTURE
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-text-primary text-sm font-medium cursor-pointer transition-colors duration-300 hover:text-accent uppercase tracking-wider"
            >
              ROADMAP
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-accent bg-accent text-text-primary text-base font-semibold rounded-lg transition-all duration-300 hover:bg-transparent hover:text-accent uppercase tracking-wide"
            >
              GET STARTED
            </button>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <span className="text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-accent uppercase">
            TG
          </span>
          <span className="text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-accent uppercase">
            X
          </span>
          <span className="text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-accent uppercase">
            DS
          </span>
          <span className="text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-accent uppercase">
            LI
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
