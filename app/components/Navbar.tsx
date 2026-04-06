"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Naslovna", href: "#hero" },
  { label: "Ponuda", href: "#products" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleLinkClick(e, "#hero")} data-magnetic>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`} id="mobile-navigation">
          <div className={styles.mobilePanel}>
            <div className={styles.mobileEyebrow}>Navigacija</div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.link}
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
