import { useEffect, useState, useMemo } from "react";

const HUD = () => {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(true);

  // Pre-generate random states for data grid to avoid re-rendering
  const dataGridStates = useMemo(
    () =>
      Array.from({ length: 64 }).map((_, i) => ({
        id: i,
        isActive: Math.random() > 0.5,
        animationDelay: 2 + i * 0.05,
      })),
    []
  );

  // Update time every second for dynamic readouts
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Check scroll position to determine visibility
  useEffect(() => {
    let scrollContainer;

    const checkScroll = () => {
      if (!scrollContainer) return;

      const heroSection = document.querySelector("#hero");
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const isHeroVisible = heroRect.bottom > 100;

      setIsVisible(isHeroVisible);
    };

    // Use RAF to throttle scroll events
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollContainer = document.querySelector(".snap-y");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      checkScroll(); // Initial check
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Don't render anything if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Top Left - Animated Element */}
      <div className="absolute top-16 left-16 w-24 h-24 opacity-60">
        <div
          className="w-full h-full border border-white/30 rounded-full animate-spin"
          style={{ animationDuration: "8s" }}
        >
          <div className="w-full h-full border-2 border-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Top Right - System Status */}
      <div className="absolute top-20 right-20 text-white/80 font-mono text-xs">
        <div className="bg-black/10 backdrop-blur-sm border border-white/20 p-3 rounded-sm">
          <div className="text-[10px] uppercase tracking-wider mb-2 text-white/60">
            SYSTEM STATUS
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>PWR:</span>
              <span className="text-white">98.7%</span>
            </div>
            <div className="flex justify-between">
              <span>CPU:</span>
              <span className="text-white">67.3%</span>
            </div>
            <div className="flex justify-between">
              <span>NET:</span>
              <span className="text-white">ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span>TIME:</span>
              <span className="text-white">{time.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center - Data Grid */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
        <div className="grid grid-cols-8 gap-1">
          {dataGridStates.map((item) => (
            <div
              key={item.id}
              className={`w-12 h-12 border border-white/30 ${
                item.isActive ? "bg-white/20" : "bg-transparent"
              }`}
              style={{
                animation: `pulse ${item.animationDelay}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-16 left-16">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          className="text-white/30"
        >
          <path
            d="M0,8 L0,0 L8,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M22,0 L30,0 L30,8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M30,22 L30,30 L22,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M8,30 L0,30 L0,22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="absolute top-16 right-16">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          className="text-white/30"
        >
          <path
            d="M0,8 L0,0 L8,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M22,0 L30,0 L30,8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M30,22 L30,30 L22,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M8,30 L0,30 L0,22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Status Indicators */}
      <div className="absolute bottom-1/6 left-1/8 flex space-x-2">
        {["ONLINE", "SECURE", "ACTIVE"].map((status, i) => (
          <div
            key={status}
            className="flex items-center space-x-1 text-white/60 text-xs font-mono"
          >
            <div
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-white" : i === 1 ? "bg-white/70" : "bg-white/40"
              } animate-pulse`}
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: "2s",
              }}
            />
            <span>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HUD;
