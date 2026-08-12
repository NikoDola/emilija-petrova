"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <a className={styles.logoLink} href="#home" aria-label="Emilija Petrova, home">
        <Image
          src="/images/personal/logo.svg"
          alt=""
          width={52}
          height={51}
          loading="eager"
        />
      </a>
      <div className={styles.navLinks}>
        {links.map((link) => (
          <a
            className={activeSection === link.id ? styles.activeNav : undefined}
            href={`#${link.id}`}
            aria-current={activeSection === link.id ? "location" : undefined}
            key={link.id}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
