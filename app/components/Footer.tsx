"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Footer.module.css";

const locationQuery = "Kremanska voda, MVP Group d.o.o., Kremna bb, 31242 Kremna, Srbija";
const locationEmbedSrc =
  `https://maps.google.com/maps?q=${encodeURIComponent(locationQuery)}&hl=sr&z=17&iwloc=B&output=embed`;
const locationViewHref =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationQuery)}`;
const locationDirectionsHref =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationQuery)}&travelmode=driving`;

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" className={styles.footer} ref={footerRef}>
      <div className={styles.topGlow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ════════════ CTA + MAP BAND ════════════ */}
        <div className={styles.ctaBand}>
          {/* Left — Map */}
          <div className={styles.mapCol}>
            <div className={styles.mapHeader}>
              <span className={styles.mapEyebrow}>
                <span className={styles.mapDot} />
                Lokacija izvora
              </span>
              <span className={styles.mapChip}>Kremna, Tara</span>
            </div>

            <div className={styles.mapFrame}>
              <iframe
                src={locationEmbedSrc}
                title="Google mapa lokacije Kremanske vode"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              />
              <div className={styles.mapVignette} />
            </div>

            <div className={styles.mapActions}>
              <a
                href={locationViewHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapBtn}
              >
                <svg viewBox="0 0 24 24" fill="none" width="15" height="15" aria-hidden="true">
                  <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6zM9 3v15M15 6v15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Otvorite mapu
              </a>
              <a
                href={locationDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapBtnPrimary}
              >
                <svg viewBox="0 0 24 24" fill="none" width="15" height="15" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                  <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
                Navigacija
              </a>
            </div>
          </div>

          {/* Right — CTA content */}
          <div className={styles.ctaCol}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>
                Probajte <span className={styles.ctaTitleAccent}>Kremansku</span>
              </h3>
              <p className={styles.ctaDesc}>
                Premium izvorna voda sa srca Nacionalnog parka Tara. Visokoalkalna,
                bogata mineralima — direktno sa izvora do vaše kuće.
              </p>
            </div>

            <a
              href="https://kremanska.rs/online-prodaja/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <span>Naručite online</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
              <span className={styles.ctaBtnShimmer} />
            </a>

            <a href="tel:+38163494238" className={styles.phoneCard}>
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className={styles.phoneText}>
                <span className={styles.phoneLabel}>Kontakt telefon</span>
                <span className={styles.phoneNumber}>+381 63 494 238</span>
              </div>
            </a>
          </div>
        </div>

        {/* ════════════ INFO GRID ════════════ */}
        <div className={styles.infoGrid}>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Lokacija</span>
            <p className={styles.infoValue}>
              Kremna bb, 31242<br />Kremna, Srbija
            </p>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Email</span>
            <a href="mailto:info@kremanska.rs" className={styles.infoLink}>
              info@kremanska.rs
            </a>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Stranice</span>
            <nav className={styles.footerStack} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: "Početna", href: "#hero", external: false },
                { name: "Ponuda", href: "#products", external: false },
                { name: "Kontakt", href: "#contact", external: false },
                { name: "Zvanični sajt", href: "https://kremanska.rs/", external: true },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={styles.navLink}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Pratite nas</span>
            <div className={styles.socialStack} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://www.instagram.com/kremanskavoda/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true">
                  <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="14.5" cy="5.5" r="0.8" fill="currentColor" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/KremanskaVoda/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true">
                  <path d="M13 3h-2a4 4 0 0 0-4 4v2H5v3h2v7h3v-7h2.5l0.5-3H10V7a1 1 0 0 1 1-1h2V3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* ════════════ BOTTOM ════════════ */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Kremanska Voda. Sva prava zadržana.
          </p>
          <span className={styles.bottomSep} />
          <p className={styles.tagline}>Voda sa srca Nacionalnog parka Tara.</p>
        </div>
      </div>

      {/* Watermark */}
      <div className={`${styles.watermark} ${isVisible ? styles.watermarkVisible : ""}`} aria-hidden="true">
        KREMANSKA
      </div>
    </footer>
  );
}
