import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Features1 = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cards = cardsRef.current.children;

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
    )
      .fromTo(
        subtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        cards,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.2 },
        "-=0.2"
      );
  }, []);

  return (
    <section
      id="features1"
      className="h-screen bg-bg-primary px-8 py-16 scroll-snap-start"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 uppercase tracking-wide"
          >
            SIMPLIFYING WEB3 WITH AI AGENTS
          </h2>
          <p
            ref={subtitleRef}
            className="text-center mb-16 text-lg md:text-xl font-semibold text-text-secondary uppercase tracking-widest"
          >
            B2B2C INTEGRATIONS FOR MASS ADOPTION.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
            ref={cardsRef}
          >
            <div className="bg-gradient-to-br from-bg-secondary to-gray-900/80 border border-white/10 rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-4 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                🤖
              </div>
              <h3 className="text-xl mb-4 text-text-primary uppercase tracking-wide font-bold">
                AI AGENTS
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                DEPLOY AUTONOMOUS TOOLS TO STREAMLINE WEB3 TASKS LIKE TRADING
                AND PAYMENTS WITH VOICE COMMANDS
              </p>
            </div>

            <div className="bg-gradient-to-br from-bg-secondary to-gray-900/80 border border-white/10 rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-4 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                📈
              </div>
              <h3 className="text-xl mb-4 text-text-primary uppercase tracking-wide font-bold">
                B2B2C GROWTH
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                SCALE YOUR BUSINESS WITH INTEGRATED AI SOLUTIONS THAT BRIDGE
                TRADITIONAL AND DECENTRALIZED SYSTEMS
              </p>
            </div>

            <div className="bg-gradient-to-br from-bg-secondary to-gray-900/80 border border-white/10 rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-4 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                🔗
              </div>
              <h3 className="text-xl mb-4 text-text-primary uppercase tracking-wide font-bold">
                CROSS-CHAIN LINKS
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                SEAMLESS INTEGRATION ACROSS MULTIPLE BLOCKCHAIN NETWORKS FOR
                MAXIMUM COMPATIBILITY
              </p>
            </div>

            <div className="bg-gradient-to-br from-bg-secondary to-gray-900/80 border border-white/10 rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-4 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                🏛️
              </div>
              <h3 className="text-xl mb-4 text-text-primary uppercase tracking-wide font-bold">
                TOKENIZED SYSTEM
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                LEVERAGE BLOCKCHAIN TECHNOLOGY FOR TRANSPARENT AND SECURE
                BUSINESS OPERATIONS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features1;
