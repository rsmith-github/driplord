import { Fade } from "react-awesome-reveal";

const VideoSection = () => {
  return (
    <section
      id="video"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ zIndex: 60 }}
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://d17r7llinqok54.cloudfront.net/video-bg-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>

      <img
        src="https://d17r7llinqok54.cloudfront.net/play-button.svg"
        alt="video-bg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(1rem,5vw,4rem)] h-[clamp(1rem,5vw,4rem)] hover:scale-110 transition-all duration-300 z-20 cursor-pointer"
      />

      {/* Optional overlay for better mobile visibility */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/10"></div>
    </section>
  );
};

export default VideoSection;
