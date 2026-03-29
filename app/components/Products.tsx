"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Products.module.css";

const productTrinity = [
  {
    name: "Kremanska 0.5L",
    label: "Pocket Luxury",
    desc: "Savršena za aktivan život i kretanje.",
    size: "500ml",
    image: "https://kremanska.rs/wp-content/uploads/2021/10/051.png",
    color: "#0ea5e9"
  },
  {
    name: "Kremanska 2L",
    label: "Daily Purity",
    desc: "Naš flagship format za svakodnevnu hidrataciju.",
    size: "1500ml / 2000ml",
    image: "https://kremanska.rs/wp-content/uploads/2021/10/2l1.png",
    color: "#10b981"
  },
  {
    name: "Kremanska 6L",
    label: "Family Reserve",
    desc: "Najekonomičnije pakovanje za vaš dom.",
    size: "6000ml",
    image: "https://kremanska.rs/wp-content/uploads/2021/10/6l1.png",
    color: "#f59e0b"
  }
];

const leftBenefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C7.03 2 3 6.03 3 11c0 3.91 2.5 7.24 6 8.48V22h6v-2.52c3.5-1.24 6-4.57 6-8.48 0-4.97-4.03-9-9-9z"/><path d="M9 10h6"/>
      </svg>
    ),
    label: "Izvorište",
    title: "Nac. park Tara",
    text: "Izvorište u srcu nacionalnog parka, zaštićeno od svake urbanizacije.",
    color: "#0ea5e9"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    label: "Prirodna",
    title: "100% Iskonska",
    text: "Voda koja zadržava svoj izvorni sastav direktno sa izvora.",
    color: "#10b981"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18z"/><path d="M10 14.5a3.5 3.5 0 105.1-4.1"/>
      </svg>
    ),
    label: "Čista",
    title: "Bez obrade",
    text: "Bez ikakve hemijske obrade. Priroda je jedini laboratorijum.",
    color: "#0d9488"
  }
];

const rightBenefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
    ),
    label: "PH 9.2+",
    title: "Alkalna Moć",
    text: "Ekstremno visoka alkalnost za neutralizaciju kiselosti organizma.",
    color: "#38bdf8"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    label: "Bogata Mg++",
    title: "Magnezijum",
    text: "Optimalan sastav minerala koji podržava srce i nervni sistem.",
    color: "#f59e0b"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="9" r="3"/>
      </svg>
    ),
    label: "Srce",
    title: "Nizak Natrijum",
    text: "Bezbedna za svakodnevnu upotrebu, čak i za osetljive grupe.",
    color: "#ef4444"
  }
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1); // Default is 2L (index 1)
  const containerRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.01 });
    if (containerRef.current) observer.observe(containerRef.current);
    
    // Auto-cycle rotation
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productTrinity.length);
    }, 6000);

    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  const handleStageMove = (e: React.MouseEvent) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    stageRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
    stageRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  return (
    <section id="products" className={styles.section} ref={containerRef} onMouseMove={handleStageMove}>
      {/* Dynamic Water Caustics */}
      <div className={styles.causticsBackground}>
         <div className={styles.causticsOverlay} />
      </div>
      
      <div className="container-custom relative z-10">
        <header className={styles.header}>
          <div className={styles.narrative}>
            <span className={styles.preTitle}>Iskonsko Nasleđe</span>
            <h2 className={styles.quote}>
              "Tamo gde se nebo spaja sa zemljom, <br />
              izvire <span className={styles.italic}>bistrina</span> koja pamti vekove."
            </h2>
            <div className={styles.bridgeFooter}>
               <p className={styles.subtext}>Kremanska — Harmonija planine Tare u svakoj kapi.</p>
               <div className={styles.divider}>
                  <div className={styles.line} />
                  <div className={styles.dot} />
                  <div className={styles.line} />
               </div>
            </div>
          </div>

          <div className={styles.trinityHeader}>
             <span className={styles.badge}>Trinity Selection</span>
             <h2 className={styles.title}>Osnovne <span className={styles.accent}>karakteristike</span></h2>
          </div>
        </header>

        <div className={styles.trinityShowcase}>
          
          {/* Left Column: Pebble Benefits */}
          <div className={`${styles.benefitColumn} ${isVisible ? styles.revealLeft : ""}`}>
            {leftBenefits.map((b, i) => (
              <div 
                key={b.title} 
                className={styles.pebbleCard} 
                style={{ "--accent": b.color, transitionDelay: `${0.2 + i * 0.1}s` } as any}
              >
                <div className={styles.pebbleGlass} />
                <div className={styles.cardContent}>
                   <div className={styles.iconBox}>{b.icon}</div>
                   <div className={styles.cardInfo}>
                      <span className={styles.itemLabel}>{b.label}</span>
                      <h4 className={styles.itemTitle}>{b.title}</h4>
                      <p className={styles.itemText}>{b.text}</p>
                   </div>
                </div>
                <div className={styles.pebbleGlow} />
              </div>
            ))}
          </div>

          {/* Central Trinity Stage */}
          <div className={`${styles.trinityStage} ${isVisible ? styles.revealStage : ""}`} ref={stageRef}>
            <div className={styles.pedestalGlow} />
            <div className={styles.pedestalCaustics} />
            
            <div className={styles.productCarousel}>
               {productTrinity.map((p, i) => (
                 <div 
                   key={p.name} 
                   className={`${styles.bottleFrame} ${i === activeIndex ? styles.active : styles.inactive}`}
                   style={{ 
                     "--offset": `${(i - activeIndex)}`,
                     transform: `translate3d(${(i - activeIndex) * 100}%, 0, ${i === activeIndex ? 0 : -200}px) rotateY(${(i - activeIndex) * 15}deg)`,
                     opacity: i === activeIndex ? 1 : 0,
                     pointerEvents: i === activeIndex ? "auto" : "none"
                   } as any}
                 >
                    <img src={p.image} alt={p.name} className={styles.bottleImg} />
                    {i === activeIndex && (
                       <div className={styles.activeLabel}>
                         <div className={styles.sizeTag}>{p.size}</div>
                         <h5 className={styles.productName}>{p.name}</h5>
                       </div>
                    )}
                 </div>
               ))}
            </div>

            {/* Navigation Dots */}
            <div className={styles.stageNav}>
               {productTrinity.map((_, i) => (
                 <button 
                   key={i} 
                   className={`${styles.navDot} ${i === activeIndex ? styles.dotActive : ""}`} 
                   onClick={() => setActiveIndex(i)}
                 />
               ))}
            </div>
          </div>

          {/* Right Column: Pebble Benefits */}
          <div className={`${styles.benefitColumn} ${isVisible ? styles.revealRight : ""}`}>
            {rightBenefits.map((b, i) => (
              <div 
                key={b.title} 
                className={styles.pebbleCard} 
                style={{ "--accent": b.color, transitionDelay: `${0.2 + i * 0.1}s` } as any}
              >
                <div className={styles.pebbleGlass} />
                <div className={styles.cardContent}>
                   <div className={styles.iconBox}>{b.icon}</div>
                   <div className={styles.cardInfo}>
                      <span className={styles.itemLabel}>{b.label}</span>
                      <h4 className={styles.itemTitle}>{b.title}</h4>
                      <p className={styles.itemText}>{b.text}</p>
                   </div>
                </div>
                <div className={styles.pebbleGlow} />
              </div>
            ))}
          </div>

        </div>

        <div className={styles.footerCTA}>
           <a href="https://kremanska.rs/online-prodaja/" target="_blank" rel="noopener" className={styles.boutiqueBtn}>
              <span className={styles.btnText}>Naručite odmah</span>
              <div className={styles.btnIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
           </a>
        </div>
      </div>

      <div className={styles.mistOverlay} />
    </section>
  );
}
