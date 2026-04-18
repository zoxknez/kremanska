"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./Products.module.css";

const products = [
  {
    id: "0.5L",
    name: "Kremanska 0.5L",
    size: "500 ml",
    label: "Za pokret i trening",
    desc: "Kompaktan format za aktivan dan. Lagan, uvek pri ruci i idealan za trening, putovanje i pokret.",
    showcase: "Aktivni format",
    context: "Pokret i trening",
    profile: "Kompaktan premium format",
    image: "/proizvodi/voda-kremanska-0,5l-transparent.png",
    imageWidth: "180px",
    imageMaxHeight: "480px",
    imageOffsetX: "0px",
    intrinsicWidth: 177,
    intrinsicHeight: 641,
  },
  {
    id: "1.5L",
    name: "Kremanska 1.5L",
    size: "1.5L",
    label: "Za svakodnevnu ravnotezu",
    desc: "Glavni format za dom i posao. Optimalan odnos između praktičnosti, količine i premium osećaja.",
    showcase: "Glavni format",
    context: "Dom i kancelarija",
    profile: "Potpisni dnevni balans",
    image: "/proizvodi/Kremanska 1.5L front.jpg",
    imageWidth: "320px",
    imageMaxHeight: "520px",
    imageOffsetX: "0px",
    intrinsicWidth: 3648,
    intrinsicHeight: 5472,
  },
  {
    id: "6L",
    name: "Kremanska 6L",
    size: "6 L",
    label: "Za porodicu i dom",
    desc: "Veliki format za kontinuitet i ozbiljnu kućnu rezervu prirodne alkalne vode sa Tare.",
    showcase: "Porodična rezerva",
    context: "Porodica i dom",
    profile: "Veliki format za kontinuitet",
    image: "/proizvodi/voda-kremanska-6l-transparent.png",
    imageWidth: "270px",
    imageMaxHeight: "480px",
    imageOffsetX: "0px",
    intrinsicWidth: 279,
    intrinsicHeight: 708,
  },
] as const;

const PhIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="20" height="20">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
    <path
      d="M7.5 13.5V6.5h2.2c1.4 0 2.4.9 2.4 2.2 0 1.3-1 2.2-2.4 2.2H7.5"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 13.5V6.5h1.2c1.6 0 2.6 1.1 2.6 2.6 0 1.5-1 2.6-2.6 2.6h-.6"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.45"
    />
  </svg>
);

const MgIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="20" height="20">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.8" opacity="0.12" />
    <circle cx="10" cy="10" r="4.2" stroke="currentColor" strokeWidth="1" opacity="0.35" />
    <circle cx="10" cy="10" r="1.4" fill="currentColor" opacity="0.6" />
    <path
      d="M10 2.5v2.5M10 15v2.5M2.5 10h2.5M15 10h2.5"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      opacity="0.25"
    />
    <path
      d="M5 5l1.5 1.5M13.5 13.5l1.5 1.5M5 15l1.5-1.5M13.5 5l1.5-1.5"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.15"
    />
  </svg>
);

const NaIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="20" height="20">
    <path
      d="M10 3c-3 0-5.5 2.5-5.5 5.5 0 3.6 5.5 8.5 5.5 8.5s5.5-4.9 5.5-8.5c0-3-2.5-5.5-5.5-5.5z"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="round"
      opacity="0.2"
    />
    <circle cx="10" cy="8.5" r="2.2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path
      d="M10 6.5v2l1.2 1"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AltIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="20" height="20">
    <path
      d="M2.5 16l5-9 4 5 3-4 3 8H2.5z"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="round"
      opacity="0.25"
    />
    <path
      d="M4.5 16l4-7 3.5 4.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
      opacity="0.45"
    />
    <circle cx="16" cy="4.5" r="2.2" stroke="currentColor" strokeWidth="0.9" />
    <path
      d="M16 2.5V1M16 8v1.5M14 4.5h-1.5M19.5 4.5H18"
      stroke="currentColor"
      strokeWidth="0.85"
      strokeLinecap="round"
      opacity="0.35"
    />
  </svg>
);

const specs = [
  { label: "Izvorište", value: "822", unit: "m", note: "Planina Tara", Icon: AltIcon },
  { label: "pH vrednost", value: "9.2+", unit: "", note: "Visokoalkalna", Icon: PhIcon },
  { label: "Magnezijum", value: "126", unit: "mg", note: "Na 1.5L", Icon: MgIcon },
  { label: "Natrijum", value: "17.8", unit: "mg/L", note: "Nizak", Icon: NaIcon },
];

const NaturalIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2c-3.5 0-6.5 3-6.5 7s3 7 6.5 10c3.5-3 6.5-6 6.5-10s-3-7-6.5-7z" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
    <path d="M10 5c-2 0-3.5 1.5-3.5 3.5s3.5 5.5 3.5 8c0-2.5 3.5-6 3.5-8S12 5 10 5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <circle cx="10" cy="8.5" r="1" fill="currentColor" opacity="0.6" />
  </svg>
);

const AlkalineIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2.5l2 4.5 5 .5-3.5 3.5 1 5-4.5-2.5-4.5 2.5 1-5-3.5-3.5 5-.5 2-4.5z" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
    <path d="M10 5l1.2 2.8 3.1.3-2.2 2.2.5 3.1-2.6-1.4-2.6 1.4.5-3.1-2.2-2.2 3.1-.3L10 5z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
  </svg>
);

const PureIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
    <path d="M7 10.5l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 2" opacity="0.4" />
  </svg>
);

const MountainIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M2 16l4-8 3 4 3-5 6 9H2z" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
    <path d="M4 16l3.5-7 3 4.5 2.5-4.5 3.5 7" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    <circle cx="15.5" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
  </svg>
);

const SaltIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 3.5v13M5.5 8l4.5-4.5L14.5 8M5.5 12l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 10h4" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
  </svg>
);

const featureTags = [
  { label: "Prirodna", Icon: NaturalIcon },
  { label: "Visokoalkalna", Icon: AlkalineIcon },
  { label: "Bez obrade", Icon: PureIcon },
  { label: "Nac. park Tara", Icon: MountainIcon },
  { label: "Nizak natrijum", Icon: SaltIcon },
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [specsVisible, setSpecsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stageMotionEnabled, setStageMotionEnabled] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const syncStageMotion = () => {
      setStageMotionEnabled(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setMousePos({ x: 0, y: 0 });
      }
    };

    syncStageMotion();
    mediaQuery.addEventListener("change", syncStageMotion);

    return () => mediaQuery.removeEventListener("change", syncStageMotion);
  }, []);

  useEffect(() => {
    if (!stageMotionEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [stageMotionEnabled]);

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSpecsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (specsRef.current) {
      observer.observe(specsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const active = products[activeIndex];

  return (
    <section id="products" className={styles.section} ref={sectionRef}>
      <div className={styles.ambientBlob1} aria-hidden="true" />
      <div className={styles.ambientBlob2} aria-hidden="true" />

      {/* Premium Water Droplet Filter */}
      <svg
        style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <filter id="waterDrops">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        </filter>
        <filter id="caustics">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="2"
            result="turbulence"
          >
            <animate
              attributeName="baseFrequency"
              values="0.015;0.02;0.015"
              dur="20s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feColorMatrix
            in="turbulence"
            type="luminanceToAlpha"
            result="lum"
          />
          <feDiffuseLighting
            in="lum"
            lightingColor="white"
            surfaceScale="2"
            result="diffuse"
          >
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
        </filter>
      </svg>

      <div className={styles.waterDropsLayer} aria-hidden="true" />

      <div className={`${styles.sectionLabel} ${isVisible ? styles.visible : ""}`}>
        <div className={`container-custom ${styles.sectionLabelShell}`}>
          <span className={styles.sectionLabelBadge}>
            <span className={styles.sectionLabelLine} />
            Kremanska kolekcija
          </span>

          <div className={styles.sectionLabelGroup}>
            <span className={styles.sectionLabelText}>Formati i mineralni karakter</span>
            <span className={styles.sectionLabelNote}>Tri formata. Isti izvorni premium profil.</span>
          </div>
        </div>
      </div>

      <div className={`${styles.layout} container-custom`}>
        <div className={`${styles.stage} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.stageOrb} aria-hidden="true" />
          <div className={styles.stageOrbInner} aria-hidden="true" />

          <div
            className={styles.stagePanel}
            style={
              {
                "--rotate-x": `${mousePos.y * -4}deg`,
                "--rotate-y": `${mousePos.x * 4}deg`,
              } as CSSProperties
            }
          >
            <div className={styles.causticsLayer} aria-hidden="true" />
            <div className={styles.ringAccent} aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none">
                <circle
                  cx="60"
                  cy="60"
                  r="56"
                  stroke="rgba(179,33,45,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="42"
                  stroke="rgba(179,33,45,0.06)"
                  strokeWidth="1"
                  strokeDasharray="2 8"
                />
              </svg>
            </div>

            <div className={styles.stageHeader}>
              <div className={styles.stageHeaderCopy}>
                <span className={styles.stageEyebrow}>Odabrani format</span>
                <span className={styles.stageTitle}>{active.id}</span>
              </div>

              <span className={styles.stageChip}>
                <span className={styles.stageChipDot} aria-hidden="true" />
                {active.showcase}
              </span>
            </div>

            <div className={styles.bottleWrap}>
              <div className={styles.stageSheen} aria-hidden="true" />
              <div className={styles.bottleGlowRing} aria-hidden="true" />

              {products.map((product, index) => (
                <Image
                  key={product.id}
                  src={product.image}
                  alt={product.name}
                  width={product.intrinsicWidth}
                  height={product.intrinsicHeight}
                  sizes="(max-width: 480px) 210px, (max-width: 768px) 240px, (max-width: 1100px) 320px, 432px"
                  priority={product.id === "1.5L"}
                  className={`${styles.bottle} ${index === activeIndex ? styles.bottleActive : ""}`}
                  style={
                    {
                      "--bottle-width": product.imageWidth,
                      "--bottle-max-height": product.imageMaxHeight,
                      "--bottle-shift-x": product.imageOffsetX,
                      opacity: index === activeIndex ? 1 : 0,
                      transform:
                        index === activeIndex
                          ? "translate3d(calc(-50% + var(--bottle-shift-x, 0px)), 0, 0)"
                          : "translate3d(calc(-50% + var(--bottle-shift-x, 0px)), 30px, 0)",
                      "--parallax-x": `${mousePos.x * 15}px`,
                      "--parallax-y": `${mousePos.y * 15}px`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>

            <div className={styles.stageFooter}>
              <div className={styles.sizeTabsWrap}>
                <span className={styles.sizeTabsLabel}>Odaberite ambalažu</span>
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

              <div className={styles.stageSignature}>
                <span className={styles.stageSignatureLabel}>Premium izbor</span>
                <span className={styles.stageSignatureValue}>Prirodna alkalna voda sa izvora na Tari</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.infoPanel} ${isVisible ? styles.visibleRight : ""}`}>
          <div className={styles.productIdentity}>
            <div className={styles.productHeadRow}>
              <span className={styles.productEyebrow}>
                <span className={styles.eyebrowPulse} aria-hidden="true" />
                Kremanska voda
              </span>
              <span className={styles.volumeBadge}>{active.id}</span>
            </div>

            <h2 className={styles.productName}>{active.name}</h2>

            <p className={styles.productTagline}>
              <span className={styles.taglineLine} aria-hidden="true" />
              {active.label}
            </p>

            <p className={styles.productDesc}>{active.desc}</p>
          </div>

          <div className={styles.panelDivider} />

          <div className={styles.specsGrid} ref={specsRef}>
            <div className={styles.specsHeadRow}>
              <div className={styles.specsHeadingGroup}>
                <p className={styles.specsHeading}>
                  <span className={styles.specsHeadingLine} aria-hidden="true" />
                  Mineralni profil
                </p>
                <span className={styles.specsLead}>Karakteristične vrednosti prirodno alkalne vode</span>
              </div>

              <span className={styles.specsBadge}>
                <span className={styles.specsBadgeDot} aria-hidden="true" />
                Verifikovano
              </span>
            </div>

            <div className={styles.specsList}>
              {specs.map(({ label, value, unit, note, Icon }, index) => (
                <div
                  key={label}
                  className={`${styles.specItem} ${specsVisible ? styles.specItemVisible : ""}`}
                  style={{ "--spec-delay": `${index * 90}ms` } as CSSProperties}
                >
                  <div className={styles.specLiquid} aria-hidden="true" />
                  <span className={styles.specIconWrap} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className={styles.specValue}>
                    <span className={styles.specValueMain}>{value}</span>
                    {unit ? <span className={styles.specValueUnit}>{unit}</span> : null}
                  </span>
                  <span className={styles.specLabel}>{label}</span>
                  <span className={styles.specNote}>{note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.panelDivider} />

          <div className={styles.featureBlock}>
            <div className={styles.featureHead}>
              <span className={styles.featureHeadTitle}>Ključne odlike</span>
              <span className={styles.featureHeadMeta}>Uravnotežen premium profil</span>
            </div>

            <div className={styles.featureTags}>
              {featureTags.map(({ label, Icon }, index) => (
                <span
                  key={label}
                  className={styles.featureTag}
                  style={{ "--tag-delay": `${index * 60}ms` } as CSSProperties}
                >
                  <span className={styles.featureTagIconWrap} aria-hidden="true">
                    <Icon />
                  </span>
                  {label}
                </span>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <a
                href="https://kremanska.rs/online-prodaja/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
                data-magnetic
              >
                <span className={styles.ctaShimmer} aria-hidden="true" />
                <span className={styles.ctaText}>Naručite online</span>
                <span className={styles.ctaArrowWrap} aria-hidden="true">
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path d="M0 5h13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <path
                      d="M9 1l5 4-5 4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              <div className={styles.originChip}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path
                    d="M5 1C3.3 1 2 2.3 2 4c0 2.2 3 5.5 3 5.5S8 6.2 8 4c0-1.7-1.3-3-3-3z"
                    fill="currentColor"
                    opacity="0.65"
                  />
                  <circle cx="5" cy="4" r="1.1" fill="white" />
                </svg>
                <span>Planina Tara · 822 m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
