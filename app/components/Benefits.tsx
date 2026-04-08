"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Benefits.module.css";

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
    <path
      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BalanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <path
      d="M12 2v20M2 12h20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const EnergyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
    <path
      d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
    <path
      d="M17 3a3 3 0 013 3v0a3 3 0 01-3 3h-1l-5 5-1 1a3 3 0 01-3 3v0a3 3 0 01-3-3v0a3 3 0 013-3h1l5-5 1-1a3 3 0 013-3v0z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DetoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
    <path
      d="M12 2v20M17 7l-5 5-5-5M7 17l5-5 5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const benefits = [
  {
    icon: BalanceIcon,
    title: "pH Balans",
    description: "Visokoalkalna voda (pH 9.2+) pomaže u neutralizaciji kiselosti u organizmu i održavanju optimalnog pH balansa.",
    color: "primary",
  },
  {
    icon: EnergyIcon,
    title: "Povećana energija",
    description: "Bogata mineralima, posebno magnezijumom, koji podržava proizvodnju energije i smanjuje umor.",
    color: "accent",
  },
  {
    icon: HeartIcon,
    title: "Kardiovaskularno zdravlje",
    description: "Nizak sadržaj natrijuma i prirodni minerali podržavaju zdravlje srca i krvnih sudova.",
    color: "primary",
  },
  {
    icon: ShieldIcon,
    title: "Antioksidativna zaštita",
    description: "Alkalna voda deluje kao prirodni antioksidans, pomažući u borbi protiv slobodnih radikala.",
    color: "accent",
  },
  {
    icon: BoneIcon,
    title: "Zdravlje kostiju",
    description: "Magnezijum i kalcijum iz prirodnih izvora podržavaju gustinu i snagu kostiju.",
    color: "primary",
  },
  {
    icon: DetoxIcon,
    title: "Detoksikacija",
    description: "Pomaže u eliminaciji toksina iz organizma i podržava prirodne procese čišćenja.",
    color: "accent",
  },
];

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className={styles.section} ref={sectionRef}>
      <div className={styles.ambientGlow1} aria-hidden="true" />
      <div className={styles.ambientGlow2} aria-hidden="true" />

      <div className={`${styles.container} container-custom`}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Zdravstvene prednosti
          </span>
          <h2 className={styles.title}>
            Prirodna snaga <span className={styles.titleAccent}>alkalne vode</span>
          </h2>
          <p className={styles.lead}>
            Kremanska voda nije samo osveženje - to je prirodni izvor zdravlja. 
            Visokoalkalna pH vrednost i bogat mineralni sastav donose brojne 
            koristi za vaše telo i opšte blagostanje.
          </p>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ""}`}>
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`${styles.card} ${styles[benefit.color]}`}
              style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <div className={styles.cardGlow} aria-hidden="true" />
              <div className={styles.iconWrapper}>
                <benefit.icon />
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDesc}>{benefit.description}</p>
              <div className={styles.cardShimmer} aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className={`${styles.cta} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Počnite svoju wellness rutinu danas</h3>
            <p className={styles.ctaText}>
              Uključite Kremansku vodu u svoju svakodnevnu rutinu i osetite razliku 
              koju prirodna alkalna voda može napraviti.
            </p>
          </div>
          <a
            href="https://kremanska.rs/online-prodaja/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Naručite sada</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 17L17 7M7 7h10v10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Made with Bob
