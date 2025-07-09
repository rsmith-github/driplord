import { Fade } from "react-awesome-reveal";

const VideoSection = () => {
  return (
    <Fade triggerOnce>
      <section
        id="video"
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/video-bg.png')",
          }}
        ></div>
      </section>
    </Fade>
  );
};

export default VideoSection;
