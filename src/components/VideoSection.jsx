import { Fade } from "react-awesome-reveal";

const VideoSection = () => {
  return (
    <section
      id="video"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ zIndex: 60 }}
    >
      {/* Responsive background image using <picture> */}
      <picture className="absolute inset-0 w-full h-full z-0">
        <source
          media="(min-width: 680px)"
          srcSet="https://d17r7llinqok54.cloudfront.net/video-bg-2.png"
        />
        <img
          src="https://d17r7llinqok54.cloudfront.net/video-bg.png"
          alt="video background"
          className="w-full h-full object-cover scale-[1.58] sm:scale-100 transition-transform duration-700"
        />
      </picture>

      <img
        src="https://d17r7llinqok54.cloudfront.net/play-button.svg"
        alt="Play video"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] hover:scale-110 transition-all duration-300 z-20 cursor-pointer"
      />

      {/* Optional overlay for better mobile visibility */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/10 z-10"></div>
    </section>
  );
};

export default VideoSection;
