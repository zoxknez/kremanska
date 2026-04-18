"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./Features.module.css";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C7.03 2 3 6.03 3 11c0 3.91 2.5 7.24 6 8.48V22h6v-2.52c3.5-1.24 6-4.57 6-8.48 0-4.97-4.03-9-9-9z" />
        <path d="M9 10h6" />
      </svg>
    ),
    label: "Izvorište",
    title: "Nac. park Tara",
    text: "Minimalni uticaj civilizacije u srcu netaknute prirode nacionalnog parka.",
    color: "#0ea5e9",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: "Prirodna",
    title: "100% Čista",
    text: "Zadržava svoj izvorni sastav direktno sa izvora bez hemijske obrade.",
    color: "#10b981",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: "PH 9.2+",
    title: "Visokoalkalna",
    text: "Pomaže u neutralizaciji kiselosti organizma i jačanju imuniteta.",
    color: "#8b5cf6",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 7l-5 5 5 5M17 7l-5 5 5 5" />
      </svg>
    ),
    label: "MG++",
    title: "126mg / 1.5L",
    text: "Bogat sadržaj magnezijuma za mišićni i nervni sistem.",
    color: "#f59e0b",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.2 7.8l-2.6 2.6c1.1 2.3.9 5.1-.7 6.7-1.7 1.7-4.4 1.8-6.7.7l-2.6 2.6c-1.1 1.1-2.9 1.1-4 0-1.1-1.1-1.1-2.9 0-4l2.6-2.6c-1.1-2.3-.9-5.1.7-6.7 1.7-1.7 4.4-1.8 6.7-.7l2.6-2.6c1.1-1.1 2.9-1.1 4 0 1.1 1.1 1.1 2.9 0 4z" />
      </svg>
    ),
    label: "Nizak NA",
    title: "17.8 mg/l",
    text: "Maksimalna briga za vaše srce uz minimalan sadržaj natrijuma.",
    color: "#ef4444",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="9" r="3" />
      </svg>
    ),
    label: "Visina",
    title: "822m n.v.",
    text: "Izvire na idealnoj nadmorskoj visini nacionalnog parka Tara.",
    color: "#0d9488",
  },
] as const;

type FeatureCardStyle = CSSProperties & {
  "--feature-color": string;
};

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="characteristics" className={styles.section} ref={containerRef}>
      <div className={styles.backgroundMesh}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      <div className="container-custom relative z-10">
        <header className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.badge}>Karakteristike</span>
          <h2 className={styles.title}>
            Zašto je Kremanska <span className={styles.accent}>posebna</span>
          </h2>
          <div className={styles.quoteWrapper}>
            <p className={styles.quote}>
              &ldquo;Voda je jedna od najistraženijih supstanci, ali još uvek je
              najmanje shvaćena... Ništa nije kompleksno kao njeno ponašanje.&rdquo;
            </p>
          </div>
        </header>

        <div className={styles.constellationGrid}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`${styles.glassCard} ${isVisible ? styles.visible : ""}`}
              style={
                {
                  transitionDelay: `${idx * 0.1}s`,
                  "--feature-color": feature.color,
                } as FeatureCardStyle
              }
              onMouseMove={handleMouseMove}
            >
              <div className={styles.cardIridescent} />
              <div className={styles.cardGlow} />

              <div className={styles.iconContainer}>
                <div className={styles.iconBg} />
                <div className={styles.iconReveal} />
                <div className={styles.iconContent}>{feature.icon}</div>
              </div>

              <div className={styles.cardContent}>
                <span className={styles.itemLabel}>{feature.label}</span>
                <h3 className={styles.itemTitle}>{feature.title}</h3>
                <p className={styles.itemText}>{feature.text}</p>
              </div>

              <div className={styles.shimmerLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
