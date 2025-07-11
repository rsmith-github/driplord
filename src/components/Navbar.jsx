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
    <nav className="fixed top-0 left-0 right-0 w-full" style={{ zIndex: 50 }}>
      <div className="mx-auto px-6 2xl:px-8 py-4 2xl:py-6 flex justify-between items-center">
        <div className="flex gap-16 2xl:gap-20 items-center">
          <div className="navbar-brand">
            <h3 className="text-[clamp(1rem,1.1vw,3rem)] font-bold tracking-widest text-white font-menda">
              DRIPLORD
            </h3>
          </div>

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

        <div className="flex gap-6 2xl:gap-8 items-center">
          <div className="flex items-center justify-center">
            <img
              src="/images/twitter-x.svg"
              alt="Twitter"
              className="w-[1.2rem] h-[1.5rem]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/discord.svg"
              alt="Discord"
              className="w-[1.8rem] h-[1.8rem]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/insta-logo.svg"
              alt="Instagram"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
