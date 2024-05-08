import { useState, useEffect } from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 1;
    const intervalTime = 50;
    const totalSteps = (totalDuration * 1000) / intervalTime;
    let steps = 0;
    const timer = setInterval(() => {
      steps += 1;
      const rawProgress = (steps / totalSteps) * 100;
      const progress = Math.min(100, Math.log10(rawProgress + 1) * 50);
      setProgress(progress);
      if (steps >= totalSteps) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsTransitioning(false);
        }, 500);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return { isLoading, isTransitioning, progress };
}
