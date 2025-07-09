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
      className="h-screen bg-black flex flex-col justify-center items-center px-8 py-16 relative overflow-hidden"
    >
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <Slide direction="up" triggerOnce>
        <h1 className="absolute left-1/2 -translate-x-1/2 -translate-y-[200px] text-3xl font-bold text-white text-center uppercase tracking-wider">
          ROADMAP
        </h1>
      </Slide>

      <div className="max-w-7xl mx-auto w-full">
        <div className="relative">
          {/* Invisible center line for reference */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/20 z-0"></div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-8 relative">
            {roadmapItems.map((item, index) => {
              const isTop = index % 2 === 0; // Even indices go on top, odd on bottom

              return (
                <Fade key={index} delay={300 + index * 200} triggerOnce>
                  <div className="relative flex-1 max-w-xs">
                    {/* Roadmap Item */}
                    <div
                      className={`flex flex-col items-center text-center ${
                        isTop ? "md:-translate-y-20" : "md:translate-y-26"
                      }`}
                    >
                      <div className="mb-4">
                        <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">
                          {item.title}
                        </h2>
                      </div>

                      <div className="text-center mb-4">
                        <p className="text-sm text-white/70 leading-relaxed uppercase tracking-wide">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[rgb(238,63,154)] rounded-full z-10"></div>

                    {/* Horizontal Connecting Line (except for last item) */}
                    {index < roadmapItems.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-[calc(50%+6px)] w-[calc(100%+2rem)] h-px bg-white/30 z-5"></div>
                    )}
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
