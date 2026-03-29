"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Naslovna", href: "#hero" },
  { label: "O Vodi", href: "#about" },
  { label: "Karakteristike", href: "#features" },
  { label: "Proizvodi", href: "#products" },
  { label: "Benefiti", href: "#benefits" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleLinkClick(e, "#hero")}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4C20 4 8 18 8 26C8 32.627 13.373 38 20 38C26.627 38 32 32.627 32 26C32 18 20 4 20 4Z" fill="url(#dropGrad)" />
              <defs>
                <linearGradient id="dropGrad" x1="20" y1="4" x2="20" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1a9ec2" />
                  <stop offset="1" stopColor="#054d62" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.logoText}>Kremanska</span>
        </a>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href="https://kremanska.rs/online-prodaja/" className={styles.ctaBtn} target="_blank" rel="noopener">
            Poruči Online
          </a>
        </div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
