"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./Story.module.css";

const storyPoster =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200";

/* ── Icons ───────────────────────────────────────────────── */

const MountainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 20l4-8 3.5 5 3.5-7 4 10" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
  </svg>
);

const WaterDropIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3s-6.5 7-6.5 11a6.5 6.5 0 0013 0c0-4-6.5-11-6.5-11z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.3" />
    <path d="M9 14c0-2 3-5 3-5s3 3 3 5a3 3 0 11-6 0z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M11 20A7 7 0 019.8 6.1C15.5 5 20 5.8 20 5.8s.8 4.5-.3 10.2A7 7 0 0111 20z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.3" />
    <path d="M10.2 11.2L20 5.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const BalanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.4" opacity="0.25" />
    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const EnergyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M17 3a3 3 0 013 3v0a3 3 0 01-3 3h-1l-5 5-1 1a3 3 0 01-3 3v0a3 3 0 01-3-3v0a3 3 0 013-3h1l5-5 1-1a3 3 0 013-3v0z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DetoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2v20M17 7l-5 5-5-5M7 17l5-5 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

/* ── Data ─────────────────────────────────────────────────── */

const originPills = [
  { Icon: MountainIcon, label: "Nac. park Tara · 822 m" },
  { Icon: WaterDropIcon, label: "Prirodno filtrirana" },
  { Icon: LeafIcon, label: "Bez hemijske obrade" },
];

const benefits = [
  { Icon: BalanceIcon, title: "pH Balans", desc: "Visokoalkalna voda (pH 9.2+) neutrališe kiselost i održava optimalan pH.", color: "primary" as const },
  { Icon: EnergyIcon, title: "Energija", desc: "Bogata magnezijumom koji podržava proizvodnju energije i smanjuje umor.", color: "accent" as const },
  { Icon: HeartIcon, title: "Srce i krvni sudovi", desc: "Nizak natrijum i prirodni minerali podržavaju kardiovaskularno zdravlje.", color: "primary" as const },
  { Icon: ShieldIcon, title: "Antioksidans", desc: "Alkalna voda deluje kao prirodni antioksidans protiv slobodnih radikala.", color: "accent" as const },
  { Icon: BoneIcon, title: "Kosti", desc: "Magnezijum i kalcijum iz prirodnih izvora jačaju gustinu kostiju.", color: "primary" as const },
  { Icon: DetoxIcon, title: "Detoks", desc: "Pomaže eliminaciji toksina i podržava prirodne procese čišćenja.", color: "accent" as const },
];

/* ── Component ───────────────────────────────────────────── */

export default function Story() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCardsVisible(true); },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className={styles.ambientBlob1} aria-hidden="true" />
      <div className={styles.ambientBlob2} aria-hidden="true" />

      <div className={`${styles.container} container-custom`}>
        {/* ─── Header ─── */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Kremanska voda
          </span>
          <h2 className={styles.title}>
            Poreklo i snaga{" "}
            <span className={styles.titleAccent}>prirodne alkalne vode</span>
          </h2>
          <p className={styles.lead}>
            Sa izvora na planini Tara, prirodno alkalna sa pH 9.2+ - voda koja
            obogaćuje vaše telo esencijalnim mineralima bez ikakve obrade.
          </p>
        </div>

        {/* ─── Hero row: Video + Story ─── */}
        <div className={`${styles.heroRow} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.videoCard}>
            <div className={styles.imageOverlay} />
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className={styles.video}
              poster={storyPoster}
              aria-hidden="true"
            >
              <source src="/video/tara/tara_video.mp4" type="video/mp4" />
            </video>
            {/* Origin pills overlay */}
            <div className={styles.originPills}>
              {originPills.map(({ Icon, label }) => (
                <span key={label} className={styles.originPill}>
                  <span className={styles.originPillIcon}><Icon /></span>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.storyContent}>
            <h3 className={styles.storyTitle}>Prirodno alkalna voda</h3>
            <p className={styles.storyText}>
              Tokom svog putovanja kroz geološke slojeve planine Tare, voda
              prirodno postaje alkalna sa pH vrednošću od 9.2+. Ovaj proces
              obogaćuje vodu esencijalnim mineralima, posebno magnezijumom.
            </p>
            <p className={styles.storyText}>
              Ne dodajemo ništa, ne oduzimamo ništa. Kremanska je priroda u
              svom najčistijem obliku - direktno sa izvora do vaše kuće.
            </p>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statValue}>822<span className={styles.statUnit}>m</span></span>
                <span className={styles.statLabel}>Nadmorska visina</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>9.2<span className={styles.statUnit}>+ pH</span></span>
                <span className={styles.statLabel}>Visokoalkalna</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>126<span className={styles.statUnit}>mg</span></span>
                <span className={styles.statLabel}>Magnezijum</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Benefits grid ─── */}
        <div className={styles.benefitsLabel}>
          <span className={styles.benefitsLabelLine} />
          <span>Zdravstvene prednosti</span>
          <span className={styles.benefitsLabelLine} />
        </div>

        <div
          className={`${styles.grid} ${cardsVisible ? styles.gridVisible : ""}`}
          ref={gridRef}
        >
          {benefits.map(({ Icon, title, desc, color }, i) => (
            <div
              key={title}
              className={`${styles.card} ${styles[color]}`}
              style={{ "--card-delay": `${i * 70}ms` } as CSSProperties}
            >
              <div className={styles.cardIcon}>
                <Icon />
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{title}</h4>
                <p className={styles.cardDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── CTA ─── */}
        <div className={`${styles.cta} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.ctaCopy}>
            <h3 className={styles.ctaTitle}>Počnite svoju wellness rutinu</h3>
            <p className={styles.ctaText}>
              Uključite Kremansku vodu u svakodnevnu rutinu i osetite razliku.
            </p>
          </div>
          <a
            href="https://kremanska.rs/online-prodaja/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <span>Naručite sada</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
