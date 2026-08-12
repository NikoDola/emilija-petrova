"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;

    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      setProgress(Math.min(1, Math.max(0, nextProgress)));
      frame = undefined;
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const percent = Math.round(progress * 100);

  return (
    <button
      className={styles.scrollTopButton}
      style={{ "--scroll-progress": `${progress * 360}deg` }}
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={`Back to top. ${percent}% of page viewed.`}
      title="Back to top"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
