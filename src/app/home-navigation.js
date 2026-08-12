"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function HomeNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);
  const scrollFrameRef = useRef(null);
  const restoreScrollBehaviorRef = useRef(null);

  useEffect(() => {
    let frame;

    const updateActiveSection = () => {
      const pageBottom = window.scrollY + window.innerHeight;
      const scrollPoint = window.scrollY + window.innerHeight * 0.36;
      let current = "home";

      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPoint) {
          current = link.id;
        }
      }

      if (pageBottom >= document.documentElement.scrollHeight - 4) {
        current = "contact";
      }

      setActiveSection(current);
      frame = undefined;
    };

    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const cancelSmoothScroll = () => {
      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }

      restoreScrollBehaviorRef.current?.();
    };

    const handleScrollKey = (event) => {
      const scrollKeys = [
        "ArrowDown",
        "ArrowUp",
        "End",
        "Home",
        "PageDown",
        "PageUp",
        " ",
      ];

      if (scrollKeys.includes(event.key)) cancelSmoothScroll();
    };

    window.addEventListener("wheel", cancelSmoothScroll, { passive: true });
    window.addEventListener("touchstart", cancelSmoothScroll, { passive: true });
    window.addEventListener("keydown", handleScrollKey);

    return () => {
      cancelSmoothScroll();
      window.removeEventListener("wheel", cancelSmoothScroll);
      window.removeEventListener("touchstart", cancelSmoothScroll);
      window.removeEventListener("keydown", handleScrollKey);
    };
  }, []);

  const handleNavigation = (event, id) => {
    const section = document.getElementById(id);

    setMenuOpen(false);
    if (!section) return;

    event.preventDefault();
    const scrollPadding =
      Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop,
      ) || 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetPosition = Math.min(
      maxScroll,
      Math.max(0, section.getBoundingClientRect().top + window.scrollY - scrollPadding),
    );

    if (scrollFrameRef.current) {
      window.cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = null;
    }
    restoreScrollBehaviorRef.current?.();

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    restoreScrollBehaviorRef.current = () => {
      root.style.scrollBehavior = previousScrollBehavior;
      restoreScrollBehaviorRef.current = null;
    };

    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = Math.min(1400, Math.max(850, Math.abs(distance) * 0.4));
    const startTime = window.performance.now();

    const animateScroll = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress =
        progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        scrollFrameRef.current = window.requestAnimationFrame(animateScroll);
      } else {
        scrollFrameRef.current = null;
        restoreScrollBehaviorRef.current?.();
      }
    };

    scrollFrameRef.current = window.requestAnimationFrame(animateScroll);

    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <nav className={styles.nav} aria-label="Main navigation" ref={navRef}>
      <a
        className={styles.logoLink}
        href="#home"
        aria-label="Emilija Petrova, home"
        onClick={(event) => handleNavigation(event, "home")}
      >
        <Image
          src="/images/personal/logo.svg"
          alt=""
          width={52}
          height={51}
          loading="eager"
        />
      </a>

      <button
        className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
        type="button"
        aria-label={menuOpen ? "Close main menu" : "Open main menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        ref={menuButtonRef}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div
        className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
        id="primary-navigation"
      >
        {links.map((link) => (
          <a
            className={activeSection === link.id ? styles.activeNav : undefined}
            href={`#${link.id}`}
            aria-current={activeSection === link.id ? "location" : undefined}
            onClick={(event) => handleNavigation(event, link.id)}
            key={link.id}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
