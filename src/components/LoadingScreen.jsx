import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const LoadingScreen = ({ isLoading, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      // Show logo after brief delay
      setTimeout(() => setShowLogo(true), 200);

      return () => clearInterval(interval);
    }
  }, [isLoading, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgb(238,63,154)] to-transparent animate-pulse"></div>
      </div>

      {/* Logo */}
      {showLogo && (
        <Fade>
          <div className="mb-12">
            <img
              src="/images/driplord-bg.png"
              alt="DRIPLORD"
              className="w-64 h-auto opacity-90"
            />
          </div>
        </Fade>
      )}

      {/* Loading bar */}
      <div className="w-80 h-1 bg-white/20 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-[rgb(238,63,154)] to-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <div className="text-center">
        <p className="text-white/70 text-sm font-helvetica tracking-wider">
          INITIALIZING
        </p>
        <p className="text-white/50 text-xs font-helvetica mt-2">
          {Math.round(progress)}%
        </p>
      </div>

      {/* Animated dots */}
      <div className="flex space-x-2 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-[rgb(238,63,154)] rounded-full animate-pulse"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: "1s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
