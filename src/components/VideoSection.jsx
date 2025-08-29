import { Fade } from "react-awesome-reveal";
import { useState, useRef, useEffect } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePlayClick = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Video play failed:", error);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const videoSrc = isMobile
    ? "https://d17r7llinqok54.cloudfront.net/DriplordVideoMobile.mp4"
    : "https://d17r7llinqok54.cloudfront.net/DriplordVideo.mp4";

  return (
    <section
      id="video"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ zIndex: 60 }}
    >
      {/* Video element - always present but hidden when not playing */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${
          isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onEnded={handleVideoEnd}
        controls
        preload="metadata"
        key={videoSrc} // Force re-render when source changes
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Responsive background image using <picture> - hidden when video is playing */}
      {!isPlaying && (
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
      )}

      {/* Play button - hidden when video is playing */}
      {!isPlaying && (
        <img
          src="https://d17r7llinqok54.cloudfront.net/play-button.svg"
          alt="Play video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(7rem,5vw,4rem)] h-[clamp(7rem,5vw,4rem)] hover:scale-110 transition-all duration-300 z-20 cursor-pointer"
          onClick={handlePlayClick}
        />
      )}

      {/* Optional overlay for better mobile visibility - hidden when video is playing */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/20 sm:bg-black/10 z-10"></div>
      )}
    </section>
  );
};

export default VideoSection;
