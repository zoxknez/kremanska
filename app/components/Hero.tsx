"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = scrollY * 0.5;

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      {/* Background Layer 1: The Mountain Stream Video */}
      <div className={styles.videoCapture}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
          poster="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920"
          style={{ transform: `translateY(${parallax}px) scale(1.15)` }}
        >
          <source src="/video/5139026-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      {/* Background Layer 2: Moving Mist (Depth Effect) */}
      <div className={styles.mistLayer} style={{ opacity: Math.max(0, 1 - scrollY / 600) }}>
        <div className={styles.mistCloud1} />
        <div className={styles.mistCloud2} />
      </div>

      {/* Background Layer 3: Interactive Light Leak (Glimmer) */}
      <div className={styles.lightLeak} />

      {/* Foreground: Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topBadge}>
            <div className={styles.pulseDot} />
            <span>NP Tara · 822m n.v.</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleSerif}>Kremanska</span>
            <span className={styles.titleLight}>Voda</span>
          </h1>

          <div className={styles.descriptionWrapper}>
            <p className={styles.mainDescription}>
              Čista esencija prirode u svakoj kapi. Iz samog srca netaknute divljine,
              direktno do vašeg zdravlja.
            </p>
          </div>

          {/* Premium Stats Bar */}
          <div className={styles.glassStats}>
            <div className={styles.statBox}>
              <span className={styles.statVal}>pH 9.2+</span>
              <span className={styles.statLab}>Visokoalkalna</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.statBox}>
              <span className={styles.statVal}>100%</span>
              <span className={styles.statLab}>Prirodna</span>
            </div>
            <div className={styles.statSep} />
            <div className={styles.statBox}>
              <span className={styles.statVal}>Mg++</span>
              <span className={styles.statLab}>Bogata mineralima</span>
            </div>
          </div>

          <div className={styles.ctaGroup}>
            <button 
              className="btn-primary" 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Naruči Online
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
              </svg>
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Istraži poreklo
            </button>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Transition - Organic Wave */}
      <div className={styles.bottomWave}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            className={styles.wavePath}
            d="M0,120 C240,100 480,20 720,60 C960,100 1200,20 1440,60 V120 H0Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Floating Scroll Prompt */}
      <div className={styles.scrollPrompt}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span>Otkrijte više</span>
      </div>
    </section>
  );
}
