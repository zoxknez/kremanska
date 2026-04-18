"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { usePreferLightMedia } from "./usePreferLightMedia";

const heroPoster =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920";

export default function Hero() {
  const preferLightMedia = usePreferLightMedia();
  const [scrollY, setScrollY] = useState(0);
  const [enableParallax, setEnableParallax] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 960px)");

    const syncHeroMode = () => {
      const shouldEnableParallax = desktopQuery.matches && !preferLightMedia;
      setEnableParallax(shouldEnableParallax);
      if (!shouldEnableParallax) setScrollY(0);
    };

    syncHeroMode();

    const handleScroll = () => {
      if (desktopQuery.matches && !preferLightMedia) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    desktopQuery.addEventListener("change", syncHeroMode);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      desktopQuery.removeEventListener("change", syncHeroMode);
    };
  }, [preferLightMedia]);
  const contentFade = enableParallax ? Math.max(0, 1 - scrollY / 700) : 1;

  return (
    <section id="hero" className={styles.hero}>
      {/* ── Video background ── */}
      <div className={styles.videoCapture}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.video}
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src="/video/5139026-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      {/* ── Content ── */}
      <div
        className={styles.container}
        style={enableParallax ? { opacity: contentFade, transform: `translateY(${scrollY * 0.15}px)` } : undefined}
      >
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Nacionalni park Tara · 822 m</span>
          </div>

          {/* Title */}
          <h1 className={styles.title}>
            <span className={styles.titleMain} style={{ animationDelay: "0.2s" }}>Kremanska</span>
            <span className={styles.titleSub} style={{ animationDelay: "0.4s" }}>Voda</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle} style={{ animationDelay: "0.6s" }}>
            Čista esencija prirode u svakoj kapi. Iz srca netaknute planine,
            direktno do vaše svakodnevne ravnoteže.
          </p>

          {/* Stats strip */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>9.2+</span>
              <span className={styles.statLabel}>pH vrednost</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Prirodna</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statValue}>Mg++</span>
              <span className={styles.statLabel}>Bogata mineralima</span>
            </div>
            <span className={styles.statsShimmer} />
          </div>

          {/* CTA */}
          <div className={styles.ctas} style={{ animationDelay: "1s" }}>
            <a
              className={styles.ctaPrimary}
              href="https://kremanska.rs/online-prodaja/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Naručite online</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
            <a className={styles.ctaSecondary} href="#products">
              Pogledajte ponudu
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll prompt ── */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Otkrijte više</span>
      </div>
    </section>
  );
}
