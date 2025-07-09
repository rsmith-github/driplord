import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VideoSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const video = videoRef.current;

    gsap.fromTo(
      video,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="video"
      className="h-screen bg-bg-secondary flex items-center justify-center scroll-snap-start"
      ref={sectionRef}
    >
      <div
        className="w-full max-w-4xl aspect-video relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
        ref={videoRef}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative border border-white/10">
          <div className="w-30 h-30 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center transition-all duration-300 hover:bg-accent/30 hover:scale-110 z-10">
            <div className="text-3xl text-accent ml-2">▶</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-12 pt-16 text-center">
            <h3 className="text-3xl mb-2 text-text-primary font-semibold">
              Experience the Future
            </h3>
            <p className="text-lg text-text-secondary">
              Watch how AI transforms your business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
