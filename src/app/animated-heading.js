"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function AnimatedHeading({ children }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    if (!heading) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        heading.classList.add(styles.headingVisible);
        observer.disconnect();
      },
      { threshold: 0.55 },
    );

    observer.observe(heading);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.animatedHeading} ref={headingRef}>
      <h2>{children}</h2>
      <span className={styles.headingLine} aria-hidden="true" />
    </div>
  );
}
