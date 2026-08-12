"use client";

import { useEffect, useRef, useState } from "react";

export default function ExperienceCounter({ target = 5 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const counter = counterRef.current;
    let animationFrame;

    if (!counter) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        const duration = 1500;
        const startTime = window.performance.now();

        const animateCount = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);

          setCount(Math.min(target, Math.floor(progress * (target + 1))));

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(animateCount);
          } else {
            setCount(target);
          }
        };

        animationFrame = window.requestAnimationFrame(animateCount);
      },
      { threshold: 0.45 },
    );

    observer.observe(counter);

    return () => {
      observer.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return <strong ref={counterRef}>{count}</strong>;
}
