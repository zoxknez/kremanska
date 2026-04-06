"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const videoPath = "/video/tara/tara_video.mp4";
const forestImg = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200";
const riverImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200";
const canyonImg = "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className="container-custom relative z-10">
        <header className={`${styles.header} ${isVisible ? styles.reveal : ""}`}>
          <span className={styles.label}>Otkrijte ishodište</span>
          <h2 className={styles.title}>
            Prirodna <span className={styles.serif}>Sinergija</span> Tare
            <br />i Kremanskog nasleđa
          </h2>
        </header>

        <div className={styles.bentoMosaic}>
          {/* Main Video Stage (Large) */}
          <div className={`${styles.bentoItem} ${styles.videoSlot} ${isVisible ? styles.revealItem : ""}`}>
            <div className={styles.mediaContainer}>
              <video
                src={videoPath}
                autoPlay
                loop
                muted
                playsInline
                className={styles.purityVideo}
              />
              <div className={styles.videoOverlay} />
            </div>
            <div className={styles.slotTag}>Nacionalni park Tara</div>
          </div>

          {/* Narrative Pillar: Nasleđe (Tall) */}
          <div
            className={`${styles.bentoItem} ${styles.textSlot} ${isVisible ? styles.revealItem : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className={styles.pillarContent}>
              <span className={styles.pillarBadge}>Nasleđe</span>
              <h3>
                Proročanstvo <br />
                Tarabića
              </h3>
              <p>
                Kremna su mesto gde se dodiruju vidovita prošlost i čista budućnost.
                Predskazanje da će "biseri iz dubina" donositi snagu, ovde se pije sa svakim gutljajem.
              </p>
              <div className={styles.pillarAccent} />
            </div>
            <img src={forestImg} alt="Tara Forest" className={styles.slotImage} />
          </div>

          {/* Geological Pillar (Compact) */}
          <div
            className={`${styles.bentoItem} ${styles.factSlot} ${isVisible ? styles.revealItem : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className={styles.glassCard}>
              <span className={styles.factNum}>7000Y</span>
              <h4>Geološki filter</h4>
              <p>Sedam milenijuma putovanja kroz karst planine Tare do savršene pH 9.2+ ravnoteže.</p>
            </div>
            <img src={canyonImg} alt="Canyon" className={styles.slotImage} />
          </div>

          {/* Ecosystem Pillar (Compact) */}
          <div
            className={`${styles.bentoItem} ${styles.ecoSlot} ${isVisible ? styles.revealItem : ""}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className={styles.mediaContainer}>
              <img src={riverImg} alt="Mountain River" className={styles.purityImage} />
              <div className={styles.imageGlass} />
            </div>
            <div className={styles.ecoOverlay}>
              <h4>Refugijum prirode</h4>
              <p>Poslednje utočište tercijarne flore i Pančićeve omorike.</p>
            </div>
          </div>
        </div>

        <footer className={`${styles.footer} ${isVisible ? styles.reveal : ""}`}>
          <p className={styles.closingText}>
            Kremanska nije samo voda. To je čista esencija vremena,
            sačuvana u srcu najlepše srpske planine.
          </p>
          <div className={styles.signature}>Kremanska voda - iskrena priroda</div>
        </footer>
      </div>

      {/* Atmospheric Background Layers */}
      <div className={styles.bgLayers}>
        <div className={styles.softGlow1} />
        <div className={styles.softGlow2} />
      </div>
    </section>
  );
}
