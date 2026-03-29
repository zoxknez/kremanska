import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>

      {/* Decorative watermark */}
      <div className={styles.watermark} aria-hidden="true">KREMANSKA</div>

      <div className={styles.inner}>

        {/* ── CTA BAND ── */}
        <div className={styles.ctaBand}>
          <div className={styles.ctaLeft}>
            <span className={styles.ctaLabel}>
              <span className={styles.ctaLabelLine} />
              Naruči odmah
            </span>
            <h2 className={styles.ctaTitle}>
              Oseti razliku<br />
              prve gutljaje.
            </h2>
          </div>

          <div className={styles.ctaRight}>
            <p className={styles.ctaDesc}>
              Kremanska voda — premium izvorna voda sa srca Nacionalnog parka Tara. 
              Visokoalkalna, bogata mineralima, direktno sa izvora do vaše kuće.
            </p>
            <a
              href="https://kremanska.rs/online-prodaja/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Kupovina online
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M0 7h18M12 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="tel:+38163494238" className={styles.ctaPhone}>
              +381 63 494 238
            </a>
          </div>
        </div>

        {/* ── INFO GRID ── */}
        <div className={styles.infoGrid}>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Lokacija izvora</span>
            <p className={styles.infoValue}>
              Kremna bb, 31242<br />
              Kremna, Srbija
            </p>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Email kontakt</span>
            <a href="mailto:info@kremanska.rs" className={styles.infoLink}>
              info@kremanska.rs
            </a>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Stranice</span>
            <nav className={styles.navList}>
              <a href="#hero">Početna</a>
              <a href="#characteristics">Karakteristike</a>
              <a href="#products">Ponuda</a>
              <a href="https://kremanska.rs/" target="_blank" rel="noopener noreferrer">
                Zvanični sajt
              </a>
            </nav>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Pratite nas</span>
            <div className={styles.socialList}>
              <a
                href="https://www.instagram.com/kremanskavoda/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/KremanskaVoda/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Kremanska Voda. Sva prava zadržana.
          </p>
          <p className={styles.copyRight}>
            Voda sa srca Nacionalnog parka Tara.
          </p>
        </div>

      </div>
    </footer>
  );
}
