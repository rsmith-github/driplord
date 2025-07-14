import { Fade, Slide } from "react-awesome-reveal";

const Roadmap = () => {
  const roadmapItems = [
    {
      title: "NOW DONE",
      description:
        "60K+ USERS, LINKS WITH FETCH.AI, ASI, GT-PROTOCOL; TRADING AGENT ON MAINNET",
    },
    {
      title: "Q3 2025",
      description:
        "ROLL OUT 1K MCP INTEGRATIONS TO ENHANCE UX FOR PARTNER AUDIENCES",
    },
    {
      title: "Q4 2025",
      description: "ADD CROSS-CHAIN SUPPORT AND API SDK FOR 5K PARTNER LINKS",
    },
    {
      title: "2026",
      description:
        "LAUNCH MODULES FOR NEW FIELDS LIKE ROBOTICS AND HEALTHCARE TASKS",
    },
    {
      title: "2027",
      description: "HIT 10M USERS VIA 10K+ GLOBAL PARTNER NETWORKS",
    },
  ];

  return (
    <section
      id="roadmap"
      className="h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-8 py-20 sm:py-24 relative overflow-hidden"
      style={{ zIndex: 60 }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <Slide direction="up">
        <h1 className="absolute left-1/2 -translate-x-1/2 -translate-y-[25vh] sm:-translate-y-[30vh] text-[clamp(1.2rem,4vw,5rem)] sm:text-[clamp(1rem,3vw,5rem)] font-bold text-white text-center uppercase tracking-wider font-menda">
          ROADMAP
        </h1>
      </Slide>

      <div className="w-full max-w-[95%] sm:w-[85%]">
        <div className="relative">
          {/* Mobile Layout - Vertical Timeline */}
          <div className="block md:hidden">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20"></div>

              <div className="space-y-8">
                {roadmapItems.map((item, index) => (
                  <Fade key={index} delay={300 + index * 200}>
                    <div className="relative flex items-start">
                      {/* Timeline dot */}
                      <div className="absolute left-0 w-8 h-8 bg-[rgb(238,63,154)] rounded-full flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>

                      {/* Content */}
                      <div className="ml-12 pb-8">
                        <h2 className="text-[clamp(0.9rem,3vw,1.5rem)] font-bold text-white uppercase tracking-wide font-menda mb-3">
                          {item.title}
                        </h2>
                        <p className="text-[clamp(0.8rem,2.5vw,1.2rem)] text-white/70 leading-relaxed uppercase tracking-wide font-helvetica">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout - Horizontal Timeline */}
          <div className="hidden md:block">
            {/* Invisible center line for reference */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20 z-0"></div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-[clamp(2rem,4vw,8rem)] relative">
              {roadmapItems.map((item, index) => {
                const isTop = index % 2 === 0; // Even indices go on top, odd on bottom

                return (
                  <Fade key={index} delay={300 + index * 200}>
                    <div className="relative flex-1 max-w-xs">
                      {/* Roadmap Item */}
                      <div
                        className={`flex flex-col items-center text-center ${
                          isTop
                            ? "md:-translate-y-[clamp(10vh,11vh,11vh)]"
                            : "md:translate-y-[clamp(10vh,12vh,12vh)]"
                        }`}
                      >
                        <div className="mb-4">
                          <h2 className="text-[clamp(0.8rem,1.3vw,2rem)] font-bold text-white uppercase tracking-wide font-menda">
                            {item.title}
                          </h2>
                        </div>

                        <div className="text-center mb-4">
                          <p className="text-[clamp(0.6rem,1vw,1.5rem)] text-white/70 leading-relaxed uppercase tracking-wide font-helvetica">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Center Dot */}
                      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[rgb(238,63,154)] rounded-full z-10"></div>

                      {/* Horizontal Connecting Line (except for last item) */}
                      {index < roadmapItems.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 left-[calc(50%+6px)] w-[clamp(calc(100%+2rem),calc(100%+4vw),calc(100%+8rem))] h-px bg-white/30 z-5"></div>
                      )}
                    </div>
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
