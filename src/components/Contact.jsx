import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const content = contentRef.current;
    const cta = ctaRef.current;
    const footer = footerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      content,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        cta,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        footer,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      );
  }, []);

  return (
    <section
      id="contact"
      className="h-screen bg-bg-primary flex flex-col justify-between items-center text-center px-8 pt-16 scroll-snap-start"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto flex-grow flex flex-col justify-center">
        <div className="mb-12" ref={contentRef}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-wide">
            PARTNER WITH DRIPLORD
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto uppercase tracking-wide font-medium">
            UPGRADE YOUR FIRM WITH AI-DRIVEN WEB3 TOOLS. BOOST GROWTH,
            EFFICIENCY, AND INNOVATION IN DECENTRALIZED TECH.
          </p>
        </div>

        <div className="mb-16" ref={ctaRef}>
          <a
            href="mailto:hello@driplord.ai"
            className="inline-block px-12 py-6 text-xl font-bold bg-accent border-2 border-accent text-text-primary rounded-lg transition-all duration-300 hover:bg-transparent hover:text-accent uppercase tracking-widest"
          >
            BOOK A CALL
          </a>
        </div>
      </div>

      <footer
        className="w-full border-t border-white/10 py-8 mt-auto"
        ref={footerRef}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <nav className="flex flex-wrap justify-center md:justify-start gap-8 items-center">
              <a
                href="#hero"
                className="text-text-secondary text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-accent"
              >
                LEGEND
              </a>
              <a
                href="#features2"
                className="text-text-secondary text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-accent"
              >
                DRIPLORD TRADING AGENT
              </a>
              <a
                href="#features1"
                className="text-text-secondary text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-accent"
              >
                AI FUTURE
              </a>
              <a
                href="#roadmap"
                className="text-text-secondary text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-accent"
              >
                ROADMAP
              </a>
              <a
                href="#contact"
                className="text-text-secondary text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-accent"
              >
                GET STARTED
              </a>
            </nav>
            <div className="flex gap-4 items-center">
              <span className="text-text-secondary text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-accent uppercase">
                TG
              </span>
              <span className="text-text-secondary text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-accent uppercase">
                X
              </span>
              <span className="text-text-secondary text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-accent uppercase">
                DS
              </span>
              <span className="text-text-secondary text-sm font-semibold cursor-pointer transition-colors duration-300 hover:text-accent uppercase">
                LI
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
