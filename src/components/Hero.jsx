import { Fade, Slide } from "react-awesome-reveal";
import StarBorder from "./reactbits/StarBorder";

const Hero = () => {
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
      <div className="relative z-50 flex flex-col items-center justify-between w-full h-full px-4 sm:px-0 pointer-events-none">
        {/* <img
          src="https://d17r7llinqok54.cloudfront.net/driplord-bg.png"
          alt="logo"
          className="w-full max-w-[90vw] sm:max-w-[100vw] h-auto mt-16 sm:mt-0"
        /> */}
        {/* <div className="text-center mb-42 sm:mb-10 md:mb-12 pointer-events-auto">
          <Fade delay={600} triggerOnce>
            <div className="mb-[20%] sm:mb-[30%] md:mb-[40%]">
              <StarBorder
                as="button"
                onClick={handleScrollToVideo}
                speed="3s"
                color="magenta"
                thickness={2}
                className="inline-block text-[clamp(0.9rem,3vw,1.5rem)] sm:text-[clamp(1rem,1.1vw,4vw)] font-bold text-white uppercase tracking-widest font-helvetica cursor-pointer px-6 py-3 sm:px-8 sm:py-4"
              >
                Get Started
              </StarBorder>
            </div>
          </Fade>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
