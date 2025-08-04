import { Fade } from "react-awesome-reveal";

const Footer = ({ scrollProgress }) => {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 w-full py-2 bg-gradient-to-t from-[#0E0E0E] to-black sm:bg-transparent sm:bg-gradient-to-t sm:from-transparent sm:to-transparent"
      style={{ zIndex: 999 }}
    >
      <div
        className="px-[3.125vw] text-[clamp(0.625rem,0.521vw,0.521vw)] py-4 2xl:py-6 flex justify-between items-start sm:items-end font-helvetica pointer-events-auto"
        style={{
          fontFamily: "Helvetica Neue",
          fontWeight: "300",
        }}
      >
        <div className="flex flex-col sm:flex-row gap-1 text-[clamp(0.625rem,0.521vw,0.521vw)] text-left">
          {/* Mobile: Multi-line layout */}
          <div className="block sm:hidden">
            <div className="flex flex-col gap-1 items-start sm:items-center text-white/80">
              <span>2025 © Copyright Drip Prime.</span>
              <span>All Rights Reserved.</span>
              <div className="flex items-center gap-1">
                <a href="#" className="hover:text-[rgb(238,63,154)] text-white">
                  Terms and Conditions
                </a>
                <span className="text-white">|</span>
                <a href="#" className="hover:text-[rgb(238,63,154)] text-white">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Original single-line layout */}
          <div className="hidden sm:flex sm:flex-row gap-2 items-center text-white/80">
            <span className="font-light">
              2025 © Copyright Drip Prime. All Rights Reserved.
            </span>
            <a
              href="#"
              className="hover:text-[rgb(238,63,154)] text-white font-light"
            >
              Terms and Conditions
            </a>
            <span className="text-white font-light">|</span>
            <a
              href="#"
              className="hover:text-[rgb(238,63,154)] text-white font-light"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex gap-[1.719vw]">
          <div
            className={`hidden sm:flex items-center gap-[0.938vw] transition-all duration-300 ${
              scrollProgress < 100 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="https://d17r7llinqok54.cloudfront.net/scroll.svg"
              alt="Scroll Down"
              className="w-[clamp(0.625rem,1.25vw,1.25vw)] h-[clamp(0.625rem,1.25vw,1.25vw)]"
            />
            <p className="text-[rgb(238,63,154)] font-bold pt-[0.125vw] text-[clamp(0.625rem,0.521vw,0.521vw)">
              Scroll Down to Continue
            </p>
          </div>
          <div className="flex items-center gap-[clamp(1.563rem,1.256vw,1.256vw)]">
            <div className="flex items-center justify-center">
              <svg
                className="w-[clamp(0.875rem,1.25vw,1.25vw)] h-[clamp(0.875rem,1.25vw,1.25vw)] text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-[clamp(0.875rem,1.25vw,1.25vw)] h-[clamp(0.875rem,1.25vw,1.25vw)] text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7.93a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.36z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
