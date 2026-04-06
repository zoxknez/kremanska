"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./BrandBridge.module.css";

export default function BrandBridge() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.bridge} ref={sectionRef}>
      <div className={styles.mistBackground}>
        <div className={styles.mistLayer1} />
        <div className={styles.mistLayer2} />
      </div>

      <div className="container-custom relative z-10">
        <div className={`${styles.content} ${isVisible ? styles.reveal : ""}`}>
          <span className={styles.preTitle}>Iskonsko nasleđe</span>
          <h2 className={styles.quote}>
            "Tamo gde se nebo spaja sa zemljom, <br />
            izvire <span className={styles.italic}>bistrina</span> koja pamti vekove."
          </h2>
          <div className={styles.divider}>
            <div className={styles.line} />
            <div className={styles.dot} />
            <div className={styles.line} />
          </div>
          <p className={styles.subtext}>Kremanska - harmonija planine Tare u svakoj kapi.</p>
        </div>
      </div>

      <div className={styles.bottomTransition} />
    </section>
  );
}
