"use client";
import { useEffect, useRef } from "react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    title: "Kremanska za sportiste",
    desc: "Fizička aktivnost zahteva unos mnogo veće količine vode u odnosu na uobičajenu dnevnu potrebu.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    link: "https://kremanska.rs/kremanska-za-sportiste/",
    tag: "Sport",
  },
  {
    title: "Kremanska za lepotu",
    desc: "Osim za opšte zdravlje, Kremanska voda donosi blagodeti i za našu kožu i kosu.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
    link: "https://kremanska.rs/kremanska-za-lepotu/",
    tag: "Lepota",
  },
  {
    title: "Kremanska za zdravlje",
    desc: "Česta konzumacija prerađene hrane i napitaka zakiseljava organizam. Kremanska pomaže u uspostavljanju ravnoteže.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    link: "https://kremanska.rs/kremanska-za-zdravlje/",
    tag: "Zdravlje",
  },
];

export default function Benefits() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(`.${styles.card}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className={styles.section} ref={ref}>
      <div className="container-custom">
        <div className={styles.header}>
          <span className={styles.label}>Benefiti</span>
          <h2 className={styles.title}>
            Zašto birati <span className={styles.accent}>Kremansku</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <a
              key={b.title}
              href={b.link}
              target="_blank"
              rel="noopener"
              className={styles.card}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={styles.imgWrap}>
                <img src={b.image} alt={b.title} className={styles.img} />
                <div className={styles.overlay} />
                <span className={styles.tag}>{b.tag}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardDesc}>{b.desc}</p>
                <span className={styles.readMore}>
                  Pročitaj više
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
