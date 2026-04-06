"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const heroPoster =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920";

const PhIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="16" height="16">
    <path
      d="M10 3v14M6 7l8 6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.8"
    />
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
  </svg>
);

const NatureIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="16" height="16">
    <path
      d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinejoin="round"
      opacity="0.3"
    />
    <path
      d="M7 13s1-2 3-2 3 2 3 2m-6-4.5c0-1.5 1-2.5 3-2.5s3 1 3 2.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MgIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="16" height="16">
    <path
      d="M4 16V4l6 8 6-8v12"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
    <path d="M10 10l2 2 4-4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [showPosterHero, setShowPosterHero] = useState(false);
  const [enableParallax, setEnableParallax] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const syncHeroMode = () => {
      const shouldShowPoster = reducedMotionQuery.matches;
      const shouldEnableParallax = desktopQuery.matches && !shouldShowPoster;

      setShowPosterHero(shouldShowPoster);
      setEnableParallax(shouldEnableParallax);

      if (!shouldEnableParallax) {
        setScrollY(0);
      }
    };

    syncHeroMode();

    const handleScroll = () => {
      if (desktopQuery.matches && !reducedMotionQuery.matches) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    reducedMotionQuery.addEventListener("change", syncHeroMode);
    desktopQuery.addEventListener("change", syncHeroMode);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      reducedMotionQuery.removeEventListener("change", syncHeroMode);
      desktopQuery.removeEventListener("change", syncHeroMode);
    };
  }, []);

  const parallax = enableParallax ? scrollY * 0.5 : 0;

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      <div className={styles.videoCapture}>
        {showPosterHero ? (
          <div className={styles.posterFrame} style={{ backgroundImage: `url(${heroPoster})` }} />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={styles.video}
            poster={heroPoster}
            style={{ transform: `translateY(${parallax}px) scale(1.15)` }}
          >
            <source src="/video/5139026-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
        )}
        <div className={styles.videoOverlay} />
      </div>

      <div className={styles.mistLayer} style={{ opacity: showPosterHero ? 0.45 : Math.max(0, 1 - scrollY / 600) }}>
        <div className={styles.mistCloud1} />
        <div className={styles.mistCloud2} />
      </div>

      <div className={styles.lightLeak} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topBadge}>
            <div className={styles.pulseDot} />
            <span>NP Tara | 822m n.v.</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleSerif} data-reveal="1">Kremanska</span>
            <span className={styles.titleLight} data-reveal="2">Voda</span>
          </h1>

          <div className={styles.descriptionWrapper}>
            <p className={styles.mainDescription}>
              Čista esencija prirode u svakoj kapi. Iz srca netaknute planine, direktno
              do vaše svakodnevne ravnoteže.
            </p>
          </div>

          <div className={styles.originNote}>
            <span className={styles.originNoteLine} />
            <p className={styles.originNoteText}>
              Prirodno filtrirana kroz stene Tare, punjena uz očuvanje izvornog mineralnog profila.
            </p>
          </div>

          <div className={styles.glassStats}>
            <div className={styles.statBox}>
              <div className={styles.statIcon}><PhIcon /></div>
              <span className={styles.statVal}>pH 9.2+</span>
              <span className={styles.statLab}>Visokoalkalna</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.statBox}>
              <div className={styles.statIcon}><NatureIcon /></div>
              <span className={styles.statVal}>100%</span>
              <span className={styles.statLab}>Prirodna</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.statBox}>
              <div className={styles.statIcon}><MgIcon /></div>
              <span className={styles.statVal}>Mg++</span>
              <span className={styles.statLab}>Bogata mineralima</span>
            </div>
            <div className={styles.statsShimmer} />
          </div>

          <div className={styles.ctaGroup}>
            <button
              className="btn-primary"
              onClick={() =>
                window.open("https://kremanska.rs/online-prodaja/", "_blank", "noopener,noreferrer")
              }
              data-magnetic
            >
              <span className={styles.ctaBtnContent}>
                Naručite online
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
              <span className={styles.ctaShimmer} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              data-magnetic
            >
              Pogledajte ponudu
            </button>
          </div>
        </div>
      </div>

      <div className={styles.scrollPrompt}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span>Otkrijte više</span>
      </div>
    </section>
  );
}
