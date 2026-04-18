"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Šta znači visokoalkalna voda?",
    answer:
      "Visokoalkalna voda ima pH vrednost iznad 8.5. Kremanska voda ima pH 9.2+, što znači da je prirodno alkalna i pomaže u neutralizaciji kiselosti u organizmu. Ova alkalna priroda dolazi od prirodnih minerala kroz koje voda prolazi tokom svog putovanja kroz stene planine Tare.",
  },
  {
    question: "Odakle potiče Kremanska voda?",
    answer:
      "Kremanska voda izvire na 822 metara nadmorske visine u neposrednoj blizini Nacionalnog parka Tara, u selu Kremna. Ovo jedinstveno izvorište garantuje potpuno čistu i nezagađenu prirodu, daleko od industrijskih zona i zagađenja.",
  },
  {
    question: "Koje su zdravstvene prednosti alkalne vode?",
    answer:
      "Alkalna voda pomaže u održavanju pH balansa u organizmu, podržava detoksikaciju, poboljšava hidrataciju, pomaže u neutralizaciji slobodnih radikala, podržava zdravlje kostiju i zglobova, i može pomoći u smanjenju kiselosti u želucu. Kremanska voda je takođe bogata magnezijumom koji podržava energiju i smanjuje umor.",
  },
  {
    question: "Koliko magnezijuma sadrži Kremanska voda?",
    answer:
      "Kremanska voda sadrži 126mg magnezijuma na 1.5L bocu, što je značajan prirodni izvor ovog esencijalnog minerala. Magnezijum podržava proizvodnju energije, funkciju mišića i nervnog sistema, kao i zdravlje kostiju.",
  },
  {
    question: "Da li je Kremanska voda hemijski tretirana?",
    answer:
      "Ne. Kremanska voda se puni direktno sa izvora bez ikakve hemijske obrade. Ne dodajemo ništa, ne oduzimamo ništa. Voda zadržava svoj prirodni mineralni sastav i pH vrednost kakvu ima na izvoru. Ovo je priroda u svom najčistijem obliku.",
  },
  {
    question: "Koji su dostupni formati pakovanja?",
    answer:
      "Kremanska voda je dostupna u tri formata: 0.5L (idealna za pokret i trening), 1.5L (glavni format za dom i posao), i 6L (veliki format za porodicu i kontinuitet). Svi formati zadržavaju isti premium kvalitet i mineralni profil.",
  },
  {
    question: "Kako mogu naručiti Kremansku vodu?",
    answer:
      "Kremansku vodu možete naručiti online putem našeg zvaničnog sajta kremanska.rs/online-prodaja/. Takođe nas možete kontaktirati telefonom na +381 63 494 238. Dostavljamo širom Srbije.",
  },
  {
    question: "Koliko dugo mogu čuvati otvorenu bocu?",
    answer:
      "Nakon otvaranja, preporučujemo da bocu čuvate u frižideru i konzumirate u roku od 2-3 dana za optimalan ukus i kvalitet. Neotvorene boce imaju rok trajanja naveden na ambalaži i mogu se čuvati na sobnoj temperaturi.",
  },
];

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section} ref={sectionRef}>
      <div className={styles.ambientBlob1} aria-hidden="true" />
      <div className={styles.ambientBlob2} aria-hidden="true" />

      <div className={`${styles.container} container-custom`}>
        <div className={styles.layout}>
          {/* ── Left: sticky header ── */}
          <div className={`${styles.sidebar} ${isVisible ? styles.visible : ""}`}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Često postavljana pitanja
            </span>
            <h2 className={styles.title}>
              Sve što treba da znate o{" "}
              <span className={styles.titleAccent}>Kremanskoj vodi</span>
            </h2>
            <p className={styles.lead}>
              Odgovori na najčešća pitanja o našoj prirodnoj alkalnoj vodi,
              izvoru, prednostima i naručivanju.
            </p>

            {/* Quick contact card (New Part the User Liked) */}
            <div className={styles.contact}>
              <span className={styles.contactLabel}>Imate dodatno pitanje?</span>
              <a href="tel:+381634942380" className={styles.contactLink}>
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                +381 63 494 238
              </a>
              <a
                href="https://kremanska.rs/online-prodaja/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactBtn}
              >
                <span>Naručite online</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: accordion (Restored to "Perfect" Original State) ── */}
          <div className={`${styles.accordion} ${isVisible ? styles.visible : ""}`}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.item} ${openIndex === index ? styles.open : ""}`}
                style={{ "--item-delay": `${index * 60}ms` } as CSSProperties}
              >
                <button
                  className={styles.itemBtn}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.itemNum}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.itemQuestion}>{faq.question}</span>
                  <span className={styles.itemToggle} aria-hidden="true">
                    <span className={styles.toggleBar} />
                    <span className={`${styles.toggleBar} ${styles.toggleBarV}`} />
                  </span>
                </button>
                <div className={styles.itemAnswer}>
                  <div className={styles.answerInner}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
