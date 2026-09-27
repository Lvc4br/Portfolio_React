import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const value = Math.min(100, Math.round(((now - start) / 850) * 100));
      setProgress(value);
      if (value < 100) frame = requestAnimationFrame(tick);
      else setTimeout(onComplete, 180);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <div className="loader" aria-label="Loading portfolio">
      <div className="loader__top">
        <span>LT / 2026</span>
        <span>{progress}%</span>
      </div>
      <div className="loader__mark">
        3D<span>×</span>CODE
      </div>
      <div className="loader__bar">
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
