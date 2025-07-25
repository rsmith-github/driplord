import { Fade } from "react-awesome-reveal";

const Footer = ({ scrollProgress }) => {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 w-full py-2"
      style={{ zIndex: 999 }}
    >
      <div
        className="px-[3.125vw] text-[clamp(0.521vw,0.521vw,0.521vw)] py-4 2xl:py-6 flex justify-between items-end text-[0.7rem] font-helvetica pointer-events-auto"
        style={{
          fontFamily: "Helvetica Neue",
          fontWeight: "300",
        }}
      >
        <div className="flex flex-col sm:flex-row gap-1">
          <span>2025 © Copyright Drip Prime. All Rights Reserved.</span>
          <a
            href="#"
            className="hover:text-[rgb(238,63,154)] text-white font-bold"
          >
            Terms and Conditions
          </a>
          <span className="hidden sm:inline text-white">|</span>
          <a
            href="#"
            className="hover:text-[rgb(238,63,154)] text-white font-bold"
          >
            Privacy Policy
          </a>
        </div>

        <div className="flex gap-[1.719vw]">
          <div
            className={`flex items-center gap-[0.938vw] transition-all duration-300 ${
              scrollProgress < 100 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="https://d17r7llinqok54.cloudfront.net/scroll.svg"
              alt="Scroll Down"
              className="w-[1vw] h-[1vw]"
            />
            <p className="text-[rgb(238,63,154)] font-bold pt-[0.125vw]">
              Scroll Down to Continue
            </p>
          </div>
          <div className="flex items-center gap-[1.256vw]">
            <div className="flex items-center justify-center">
              <svg
                className="w-[1vw] h-[1vw] text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-[1vw] h-[1vw] text-white"
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
