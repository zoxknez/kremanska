"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./Products.module.css";

const products = [
  {
    id: "05",
    name: "Kremanska 0.5L",
    size: "500 ml",
    label: "Za pokret i trening",
    desc: "Kompaktan format za aktivan dan. Lagana, uvek pri ruci — idealna za trening, putovanje i pokret.",
    image: "https://kremanska.rs/wp-content/uploads/2021/10/051.png",
  },
  {
    id: "2L",
    name: "Kremanska 2L",
    size: "1.5L / 2L",
    label: "Za svakodnevnu ravnotežu",
    desc: "Glavni format za dom i posao. Optimalan odnos između praktičnosti, količine i premium osećaja.",
    image: "https://kremanska.rs/wp-content/uploads/2021/10/2l1.png",
  },
  {
    id: "6L",
    name: "Kremanska 6L",
    size: "6 L",
    label: "Za porodicu i dom",
    desc: "Veliki format za kontinuitet i ozbiljnu kućnu rezervu prirodne alkalne vode sa Tare.",
    image: "https://kremanska.rs/wp-content/uploads/2021/10/6l1.png",
  },
] as const;

const specs = [
  { label: "pH vrednost", value: "9.2+", note: "Visokoalkalna" },
  { label: "Magnezijum", value: "126 mg", note: "na 2L" },
  { label: "Natrijum", value: "17.8 mg/L", note: "Nizak" },
  { label: "Nadmorska visina", value: "822 m", note: "Izvorište" },
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setImgLoaded(false);
    const t = setTimeout(() => setImgLoaded(true), 60);
    return () => clearTimeout(t);
  }, [activeIndex]);

  const active = products[activeIndex];

  return (
    <section id="products" className={styles.section} ref={sectionRef}>

      {/* ── SECTION LABEL ── */}
      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ""}`}>
        <div className="container-custom">
          <span className={styles.sectionLabelLine} />
          <span className={styles.sectionLabelText}>Ambalaža &amp; Karakteristike</span>
        </div>
      </div>

      <div className={`${styles.layout} container-custom`}>

        {/* ══ LEFT — BOTTLE STAGE ══ */}
        <div className={`${styles.stage} ${isVisible ? styles.visible : ""}`}>

          {/* Background orb */}
          <div className={styles.stageOrb} />

          {/* Bottle */}
          <div className={styles.bottleWrap}>
            {products.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.name}
                className={`${styles.bottle} ${i === activeIndex ? styles.bottleActive : ""}`}
                style={{
                  opacity: i === activeIndex ? (imgLoaded ? 1 : 0) : 0,
                  transform: i === activeIndex
                    ? `translateY(${imgLoaded ? "0" : "20px"})`
                    : "translateY(30px)",
                } as CSSProperties}
              />
            ))}
          </div>

          {/* Size selector tabs — pill style */}
          <div className={styles.sizeTabs}>
            {products.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`${styles.sizeTab} ${i === activeIndex ? styles.sizeTabActive : ""}`}
                aria-pressed={i === activeIndex}
              >
                {p.size}
              </button>
            ))}
          </div>

        </div>

        {/* ══ RIGHT — INFO PANEL ══ */}
        <div className={`${styles.infoPanel} ${isVisible ? styles.visibleRight : ""}`}>

          {/* Product identity */}
          <div className={styles.productIdentity}>
            <span className={styles.productEyebrow}>Kremanska voda</span>
            <h2 className={styles.productName}>{active.name}</h2>
            <p className={styles.productTagline}>{active.label}</p>
            <p className={styles.productDesc}>{active.desc}</p>
          </div>

          {/* Divider */}
          <div className={styles.panelDivider} />

          {/* Mineral specs grid */}
          <div className={styles.specsGrid}>
            <p className={styles.specsHeading}>Mineralni profil</p>
            <div className={styles.specsList}>
              {specs.map((s) => (
                <div className={styles.specItem} key={s.label}>
                  <span className={styles.specValue}>{s.value}</span>
                  <span className={styles.specLabel}>{s.label}</span>
                  <span className={styles.specNote}>{s.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className={styles.panelDivider} />

          {/* Feature tags */}
          <div className={styles.featureTags}>
            {["Prirodna", "Visokoalkalna", "Bez obrade", "Nac. park Tara", "Nizak Natrijum"].map((tag) => (
              <span key={tag} className={styles.featureTag}>{tag}</span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://kremanska.rs/online-prodaja/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Naruči online
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}
