"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./Products.module.css";

const products = [
  {
    id: "05",
    name: "Kremanska 0.5L",
    size: "500 ml",
    label: "Za pokret i trening",
    desc: "Kompaktan format za aktivan dan. Lagan, uvek pri ruci i idealan za trening, putovanje i pokret.",
    image: "https://kremanska.rs/wp-content/uploads/2021/10/051.png",
    imageWidth: "248px",
    imageMaxHeight: "620px",
    imageOffsetX: "-8px",
    intrinsicWidth: 496,
    intrinsicHeight: 1240,
  },
  {
    id: "2L",
    name: "Kremanska 2L",
    size: "1.5L / 2L",
    label: "Za svakodnevnu ravnotezu",
    desc: "Glavni format za dom i posao. Optimalan odnos izmedju prakticnosti, kolicine i premium osecaja.",
    image: "https://kremanska.rs/wp-content/uploads/2021/10/2l1.png",
    imageWidth: "372px",
    imageMaxHeight: "760px",
    imageOffsetX: "-4px",
    intrinsicWidth: 744,
    intrinsicHeight: 1520,
  },
  {
    id: "6L",
    name: "Kremanska 6L",
    size: "6 L",
    label: "Za porodicu i dom",
    desc: "Veliki format za kontinuitet i ozbiljnu kucnu rezervu prirodne alkalne vode sa Tare.",
    image: "https://kremanska.rs/wp-content/uploads/2021/10/6l1.png",
    imageWidth: "432px",
    imageMaxHeight: "700px",
    imageOffsetX: "6px",
    intrinsicWidth: 864,
    intrinsicHeight: 1400,
  },
] as const;

const specs = [
  { label: "pH vrednost", value: "9.2+", note: "Visokoalkalna" },
  { label: "Magnezijum", value: "126 mg", note: "na 2L" },
  { label: "Natrijum", value: "17.8 mg/L", note: "Nizak" },
  { label: "Nadmorska visina", value: "822 m", note: "Izvoriste" },
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);
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

  useEffect(() => {
    setImgLoaded(false);
    const timeoutId = window.setTimeout(() => setImgLoaded(true), 60);
    return () => window.clearTimeout(timeoutId);
  }, [activeIndex]);

  const active = products[activeIndex];

  return (
    <section id="products" className={styles.section} ref={sectionRef}>
      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ""}`}>
        <div className="container-custom">
          <span className={styles.sectionLabelLine} />
          <span className={styles.sectionLabelText}>Ambalaza &amp; Karakteristike</span>
        </div>
      </div>

      <div className={`${styles.layout} container-custom`}>
        <div className={`${styles.stage} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.stageOrb} aria-hidden="true" />

          <div className={styles.bottleWrap}>
            {products.map((product, index) => (
              <Image
                key={product.id}
                src={product.image}
                alt={product.name}
                width={product.intrinsicWidth}
                height={product.intrinsicHeight}
                sizes="(max-width: 480px) 210px, (max-width: 768px) 240px, (max-width: 1100px) 320px, 432px"
                priority={product.id === "2L"}
                className={`${styles.bottle} ${index === activeIndex ? styles.bottleActive : ""}`}
                style={
                  {
                    "--bottle-width": product.imageWidth,
                    "--bottle-max-height": product.imageMaxHeight,
                    "--bottle-shift-x": product.imageOffsetX,
                    opacity: index === activeIndex ? (imgLoaded ? 1 : 0) : 0,
                    transform:
                      index === activeIndex
                        ? `translate3d(calc(-50% + var(--bottle-shift-x, 0px)), ${imgLoaded ? "0" : "20px"}, 0)`
                        : "translate3d(calc(-50% + var(--bottle-shift-x, 0px)), 30px, 0)",
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div className={styles.sizeTabs}>
            {products.map((product, index) => (
              <button
                key={product.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`${styles.sizeTab} ${index === activeIndex ? styles.sizeTabActive : ""}`}
                aria-pressed={index === activeIndex}
              >
                {product.size}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.infoPanel} ${isVisible ? styles.visibleRight : ""}`}>
          <div className={styles.productIdentity}>
            <span className={styles.productEyebrow}>Kremanska voda</span>
            <h2 className={styles.productName}>{active.name}</h2>
            <p className={styles.productTagline}>{active.label}</p>
            <p className={styles.productDesc}>{active.desc}</p>
          </div>

          <div className={styles.panelDivider} />

          <div className={styles.specsGrid}>
            <p className={styles.specsHeading}>Mineralni profil</p>

            <div className={styles.specsList}>
              {specs.map((spec) => (
                <div className={styles.specItem} key={spec.label}>
                  <span className={styles.specValue}>{spec.value}</span>
                  <span className={styles.specLabel}>{spec.label}</span>
                  <span className={styles.specNote}>{spec.note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.panelDivider} />

          <div className={styles.featureTags}>
            {["Prirodna", "Visokoalkalna", "Bez obrade", "Nac. park Tara", "Nizak natrijum"].map((tag) => (
              <span key={tag} className={styles.featureTag}>
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://kremanska.rs/online-prodaja/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Narucite online
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
              <path
                d="M0 5h14M10 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
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
