import { Fade, Slide } from "react-awesome-reveal";
import StarBorder from "./reactbits/StarBorder";
import Spline from "@splinetool/react-spline";

const Hero = ({ splineRef, onLoad }) => {
  const handleScrollToVideo = () => {
    const scrollContainer = document.querySelector(".snap-y");
    const videoSection = document.querySelector("#video");
    if (scrollContainer && videoSection) {
      scrollContainer.scrollTo({
        top: videoSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="h-screen bg-transparent flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-5 sm:pt-16 2xl:pt-24"
    >
      {/* Hero background image - behind Spline scene */}
      <div
        className="absolute inset-0 top-[55%] translate-y-[-55%] opacity-40"
        style={{ zIndex: 5 }}
      >
        <img
          src="https://d17r7llinqok54.cloudfront.net/driplord-bg.png"
          alt="logo"
          className="w-[95%] max-w-[90vw] sm:max-w-[100vw] h-auto mt-16 sm:mt-0 mx-auto"
        />
      </div>

      {/* Fixed Spline Background */}
      <div
        className="fixed inset-0"
        style={{ zIndex: 10, height: "110vh", top: "-3vh" }}
      >
        <Spline
          ref={splineRef}
          scene="https://prod.spline.design/giOldpZA9M8l0dFa/scene.splinecode"
          className="w-full h-full pointer-events-none"
          onLoad={onLoad}
        />
      </div>

      <div className="relative z-50 flex flex-col items-center justify-between w-full h-full px-4 sm:px-0 pointer-events-none">
        {/* Empty space where the image was - now the image is positioned separately */}
        <div></div>

        <div className="text-center mb-42 sm:mb-10 md:mb-12 pointer-events-auto">
          <Fade delay={600} triggerOnce>
            <div className="mb-[20%] sm:mb-[30%] bg-white rounded-full">
              <button className="inline-block text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(1rem,1.1vw,4vw)] font-bold uppercase tracking-widest font-helvetica cursor-pointer px-6 py-3 sm:px-8 sm:py-4 text-black">
                Get Started
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
