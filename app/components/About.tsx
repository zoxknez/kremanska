"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const MountainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
    <path
      d="M3 20l5-10 4 6 4-8 5 12H3z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      opacity="0.3"
    />
    <path
      d="M5 20l4-8 3.5 5 3.5-7 4 10"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
  </svg>
);

const WaterDropIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
    <path
      d="M12 3s-6.5 7-6.5 11a6.5 6.5 0 0013 0c0-4-6.5-11-6.5-11z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      opacity="0.3"
    />
    <path
      d="M9 14c0-2 3-5 3-5s3 3 3 5a3 3 0 11-6 0z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
    <path
      d="M11 20A7 7 0 019.8 6.1C15.5 5 20 5.8 20 5.8s.8 4.5-.3 10.2A7 7 0 0111 20z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      opacity="0.3"
    />
    <path
      d="M10.2 11.2L20 5.8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const features = [
  {
    icon: MountainIcon,
    title: "Nacionalni park Tara",
    description: "Izvorište na 822m nadmorske visine, u srcu zaštićene prirode",
  },
  {
    icon: WaterDropIcon,
    title: "Prirodno filtrirana",
    description: "Voda prolazi kroz stene Tare, prirodno se obogaćujući mineralima",
  },
  {
    icon: LeafIcon,
    title: "Bez hemijske obrade",
    description: "Punimo direktno sa izvora, čuvajući prirodni mineralni sastav",
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className={styles.ambientGlow} aria-hidden="true" />
      
      <div className={`${styles.container} container-custom`}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Naša priča
          </span>
          <h2 className={styles.title}>
            Voda iz srca <span className={styles.titleAccent}>Nacionalnog parka Tara</span>
          </h2>
          <p className={styles.lead}>
            Kremanska voda izvire na 822 metara nadmorske visine, u neposrednoj blizini 
            Nacionalnog parka Tara. Ovo jedinstveno izvorište garantuje potpuno čistu i 
            nezagađenu prirodu, daleko od industrijskih zona i zagađenja.
          </p>
        </div>

        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.storyPanel}>
            <div className={styles.storyImage}>
              <div className={styles.imageOverlay} />
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className={styles.video}
                poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200"
              >
                <source src="/video/tara/tara_video.mp4" type="video/mp4" />
              </video>
            </div>
            
            <div className={styles.storyContent}>
              <h3 className={styles.storyTitle}>Prirodno alkalna voda</h3>
              <p className={styles.storyText}>
                Tokom svog putovanja kroz geološke slojeve planine Tare, voda prirodno 
                postaje alkalna sa pH vrednošću od 9.2+. Ovaj proces obogaćuje vodu 
                esencijalnim mineralima, posebno magnezijumom, čineći je idealnom za 
                svakodnevnu upotrebu.
              </p>
              <p className={styles.storyText}>
                Ne dodajemo ništa, ne oduzimamo ništa. Kremanska voda je priroda u 
                svom najčistijem obliku - direktno sa izvora do vaše kuće.
              </p>
            </div>
          </div>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={styles.featureCard}
                style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
              >
                <div className={styles.featureIcon}>
                  <feature.icon />
                </div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Made with Bob
