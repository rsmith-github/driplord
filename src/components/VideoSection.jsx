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
            "url('https://d17r7llinqok54.cloudfront.net/video-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>

      {/* Optional overlay for better mobile visibility */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/10"></div>
    </section>
  );
};

export default VideoSection;
