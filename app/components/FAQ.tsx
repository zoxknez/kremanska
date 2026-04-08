"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FAQ.module.css";

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section} ref={sectionRef}>
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={`${styles.container} container-custom`}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Često postavljana pitanja
          </span>
          <h2 className={styles.title}>
            Sve što treba da znate o <span className={styles.titleAccent}>Kremanskoj vodi</span>
          </h2>
          <p className={styles.lead}>
            Odgovori na najčešća pitanja o našoj prirodnoj alkalnoj vodi, 
            izvoru, zdravstvenim prednostima i načinu naručivanja.
          </p>
        </div>

        <div className={`${styles.faqList} ${isVisible ? styles.visible : ""}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
              style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}
            >
              <button
                className={styles.faqButton}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={styles.faqQuestion}>{faq.question}</span>
                <span className={styles.faqIcon} aria-hidden="true">
                  {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={styles.faqAnswer}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Made with Bob
