import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Roadmap = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const timelineItems = timelineRef.current.children;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      title,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      timelineItems,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.2 },
      "-=0.4"
    );
  }, []);

  return (
    <section
      id="roadmap"
      className="h-screen bg-gradient-to-br from-bg-primary to-bg-secondary px-8 py-16 scroll-snap-start"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16 uppercase tracking-wide"
          >
            ROADMAP
          </h2>

          <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/30 transform -translate-x-1/2 hidden md:block"></div>

            {/* Timeline items */}
            <div className="relative mb-16 flex items-center md:justify-start justify-center">
              <div className="absolute left-1/2 w-5 h-5 bg-accent rounded-full border-4 border-bg-primary transform -translate-x-1/2 z-10 shadow-[0_0_20px_rgb(238,63,154)] hidden md:block"></div>
              <div className="bg-gradient-to-br from-bg-secondary to-gray-900/80 border border-white/10 rounded-2xl p-8 w-full md:w-[calc(50%-40px)] transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] md:mr-auto md:text-left text-center">
                <h3 className="text-2xl mb-2 text-text-primary uppercase tracking-wide font-bold">
                  NOW DONE
                </h3>
                <h4 className="text-xl mb-4 text-accent uppercase tracking-wide font-semibold">
                  Q3 2025
                </h4>
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                    60K+ USERS, LINKS WITH FETCH.AI, ASI, GT-PROTOCOL; TRADING
                    AGENT ON MAINNET
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                    ROLL OUT 1K MCP INTEGRATIONS TO ENHANCE UX FOR PARTNER
                    AUDIENCES
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mb-16 flex items-center md:justify-end justify-center">
              <div className="absolute left-1/2 w-5 h-5 bg-accent rounded-full border-4 border-bg-primary transform -translate-x-1/2 z-10 animate-pulse-glow hidden md:block"></div>
              <div className="bg-gradient-to-br from-bg-secondary to-gray-900/80 border border-white/10 rounded-2xl p-8 w-full md:w-[calc(50%-40px)] transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] md:ml-auto md:text-right text-center">
                <h3 className="text-2xl mb-2 text-text-primary uppercase tracking-wide font-bold">
                  Q4 2025
                </h3>
                <h4 className="text-xl mb-4 text-accent uppercase tracking-wide font-semibold">
                  2026
                </h4>
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                    ADD CROSS-CHAIN SUPPORT AND API SDK FOR 5K PARTNER LINKS
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                    LAUNCH MODULES FOR NEW FIELDS LIKE ROBOTICS AND HEALTHCARE
                    TASKS
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center md:justify-start justify-center">
              <div className="absolute left-1/2 w-5 h-5 bg-bg-secondary border-4 border-text-secondary rounded-full transform -translate-x-1/2 z-10 hidden md:block"></div>
              <div className="bg-gradient-to-br from-bg-secondary to-gray-900/80 border border-white/10 rounded-2xl p-8 w-full md:w-[calc(50%-40px)] transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] md:mr-auto md:text-left text-center">
                <h3 className="text-2xl mb-4 text-text-primary uppercase tracking-wide font-bold">
                  2027
                </h3>
                <div>
                  <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                    HIT 10M USERS VIA 10K+ GLOBAL PARTNER NETWORKS
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/30 md:hidden"></div>
            {/* Mobile timeline markers */}
            <div className="absolute left-5 top-8 w-5 h-5 bg-accent rounded-full border-4 border-bg-primary transform -translate-x-1/2 z-10 shadow-[0_0_20px_rgb(238,63,154)] md:hidden"></div>
            <div className="absolute left-5 top-1/2 w-5 h-5 bg-accent rounded-full border-4 border-bg-primary transform -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse-glow md:hidden"></div>
            <div className="absolute left-5 bottom-8 w-5 h-5 bg-bg-secondary border-4 border-text-secondary rounded-full transform -translate-x-1/2 z-10 md:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
