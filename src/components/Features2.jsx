import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Features2 = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current.children;
    const cta = ctaRef.current;

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
        cards,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.15 },
        "-=0.4"
      )
      .fromTo(
        cta,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );
  }, []);

  return (
    <section
      id="features2"
      className="h-screen bg-bg-secondary px-8 py-16 scroll-snap-start"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12 uppercase tracking-wide"
          >
            DRIPLORD TRADING AGENT
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
            ref={cardsRef}
          >
            <div className="bg-gradient-to-br from-bg-primary to-black/80 border border-white/10 rounded-2xl p-8 text-left transition-all duration-300 hover:translate-x-4 hover:border-accent/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="text-4xl mb-4 block">🎤</div>
              <h3 className="text-xl mb-4 text-text-primary uppercase tracking-wide font-bold">
                VOICE-BASED TRADING
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                EXECUTE BUY, SELL, AND STAKE COMMANDS USING SIMPLE VOICE OR TEXT
                INTERACTIONS
              </p>
            </div>

            <div className="bg-gradient-to-br from-bg-primary to-black/80 border border-white/10 rounded-2xl p-8 text-left transition-all duration-300 hover:translate-x-4 hover:border-accent/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="text-4xl mb-4 block">📊</div>
              <h3 className="text-xl mb-4 text-text-primary uppercase tracking-wide font-bold">
                AUTO-DEFI STRATEGIES
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                EARN UP TO 240% APY WITH PREBUILT, LOW-RISK YIELD MODULES
              </p>
            </div>

            <div className="bg-gradient-to-br from-bg-primary to-black/80 border border-white/10 rounded-2xl p-8 text-left transition-all duration-300 hover:translate-x-4 hover:border-accent/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="text-4xl mb-4 block">📈</div>
              <h3 className="text-xl mb-4 text-text-primary uppercase tracking-wide font-bold">
                PORTFOLIO MANAGEMENT
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                OPTIMIZE HOLDINGS WITH AI SIGNALS POWERED BY GT-PROTOCOL AND
                SENTIMENT DATA
              </p>
            </div>

            <div className="bg-gradient-to-br from-bg-primary to-black/80 border border-white/10 rounded-2xl p-8 text-left transition-all duration-300 hover:translate-x-4 hover:border-accent/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="text-4xl mb-4 block">🎓</div>
              <h3 className="text-xl mb-4 text-text-primary uppercase tracking-wide font-bold">
                ONBOARDING & EDUCATION
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary uppercase tracking-wide font-medium">
                LEARN TRADING AND WEB3 BASICS WITH BUILT-IN TUTORIALS AND
                STEP-BY-STEP GUIDANCE
              </p>
            </div>
          </div>

          <div ref={ctaRef} className="text-center mt-8">
            <a
              href="#contact"
              className="inline-block px-10 py-5 text-lg font-bold bg-accent border-2 border-accent text-text-primary rounded-lg transition-all duration-300 hover:bg-transparent hover:text-accent uppercase tracking-widest"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
