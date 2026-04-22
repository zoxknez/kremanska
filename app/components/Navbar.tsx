"use client";

import { useEffect, useState, type CSSProperties } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Naslovna", href: "#hero" },
  { label: "O vodi", href: "#about" },
  { label: "Ponuda", href: "#products" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#hero");
  const navStyle: CSSProperties = {
    "--nav-bg-opacity": scrollProgress * 0.82,
    "--nav-blur": `${scrollProgress * 24}px`,
    "--nav-border-opacity": scrollProgress * 0.12,
  } as CSSProperties;

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / 180, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks
      .map((link) => link.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the most visible intersecting section.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target) return;
        setActiveHref(`#${(visible.target as HTMLElement).id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.1, 0.2, 0.35, 0.5] }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${scrollProgress > 0.1 ? styles.scrolled : ""}`}
      style={navStyle}
      role="navigation"
      aria-label="Glavna navigacija"
    >
      <div className={styles.inner}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => handleLinkClick(e, "#hero")}
          data-magnetic
          aria-label="Kremanska voda - Početna stranica"
        >
          <div className={styles.logoIcon} aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kremanska voda logo">
              <path
                d="M20 4.5C20 4.5 8.5 18 8.5 25.5C8.5 31.85 13.65 37 20 37C26.35 37 31.5 31.85 31.5 25.5C31.5 18 20 4.5 20 4.5Z"
                fill="url(#logoDropGrad)"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              />
              <path
                d="M17 12c0 0-4 6-4 10s3 7 7 7"
                stroke="white"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeOpacity="0.3"
              />
              <defs>
                <linearGradient id="logoDropGrad" x1="20" y1="4" x2="20" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#e26a75" />
                  <stop offset="0.5" stopColor="#b3212d" />
                  <stop offset="1" stopColor="#7a1019" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.logoText}>Kremanska</span>
        </a>

        <div
          className={`${styles.links} ${menuOpen ? styles.open : ""}`}
          id="mobile-navigation"
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        >
          <div className={styles.mobilePanel} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mobileEyebrow}>Navigacija</div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${activeHref === link.href ? styles.linkActive : ""}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                data-magnetic
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://kremanska.rs/online-prodaja/"
              className={styles.ctaBtn}
              target="_blank"
              rel="noopener"
              onClick={() => setMenuOpen(false)}
              data-magnetic
            >
              Naručite online
            </a>
          </div>
        </div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Zatvorite meni" : "Otvorite meni"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
