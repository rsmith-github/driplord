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
          backgroundImage: "url('/images/video-bg.png')",
        }}
      ></div>
    </section>
  );
};

export default VideoSection;
