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
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center bg-transparent pointer-events-none"
    >
      <div className="relative z-50 flex flex-col items-center justify-between w-full h-full px-8 pointer-events-none">
        <img src="/images/driplord-bg.png" alt="logo" className="w-full h-auto mt-24" />
        <div className="text-center mb-10 pointer-events-auto">
          <Fade delay={600} triggerOnce>
            <div className="mb-8">
              <StarBorder
                as="button"
                onClick={handleScrollToVideo}
                speed="3s"
                color="magenta"
                thickness={2}
                className="inline-block text-md font-bold text-white uppercase tracking-widest font-helvetica cursor-pointer"
              >
                Get Started
              </StarBorder>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
