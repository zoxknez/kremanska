"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      {/* Pristine Boutique Footer Grid */}
      <div className={`container-custom ${styles.grid}`}>
        
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.logoFrame}>
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
              <path d="M20 4C20 4 8 18 8 26C8 32.627 13.373 38 20 38C26.627 38 32 32.627 32 26C32 18 20 4 20 4Z" fill="url(#footerDrop)"/>
              <defs>
                <linearGradient id="footerDrop" x1="20" y1="4" x2="20" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0ea5e9"/>
                  <stop offset="1" stopColor="#10b981"/>
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.logoText}>Kremanska</span>
          </div>
          <p className={styles.brandVision}>
            Harmonija prirode sačuvana u svakoj kapi. Iskusite čistoću planine Tare u njenom najuzvišenijem obliku.
          </p>
          <div className={styles.socialRow}>
             <a href="https://www.facebook.com/KremanskaVoda/" target="_blank" rel="noopener" className={styles.socialCircle}>FB</a>
             <a href="https://www.instagram.com/kremanskavoda/" target="_blank" rel="noopener" className={styles.socialCircle}>IG</a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className={styles.navCol}>
           <h5 className={styles.colTitle}>Istražite</h5>
           <ul className={styles.linkList}>
              <li><a href="https://kremanska.rs/">Naslovna</a></li>
              <li><a href="https://kremanska.rs/kremanska-za-sportiste/">Performanse</a></li>
              <li><a href="https://kremanska.rs/kremanska-za-lepotu/">Vitalnost</a></li>
              <li><a href="https://kremanska.rs/kremanska-za-zdravlje/">Zdravlje</a></li>
           </ul>
        </div>

        {/* Contact/Shop Column */}
        <div className={styles.contactCol}>
           <h5 className={styles.colTitle}>Kontakt & Prodaja</h5>
           <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                 <span className={styles.itemLabel}>Porudžbine</span>
                 <a href="tel:+38163494238" className={styles.itemValue}>+381 63 494 238</a>
              </div>
              <div className={styles.contactItem}>
                 <span className={styles.itemLabel}>Email portal</span>
                 <a href="mailto:info@kremanska.rs" className={styles.itemValue}>info@kremanska.rs</a>
              </div>
              <div className={styles.contactItem}>
                 <span className={styles.itemLabel}>Adresa</span>
                 <p className={styles.itemValue}>Kremna bb, 31242 Kremna</p>
              </div>
           </div>
        </div>

      </div>

      {/* Boutique Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container-custom ${styles.bottomContent}`}>
          <div className={styles.legalLinks}>
             <a href="#">Privatnost</a>
             <a href="#">Uslovi korišćenja</a>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Kremanska Voda. Iskonska Snaga Tare.
          </p>
        </div>
      </div>
      
      {/* Interactive Water Particles */}
      <div className={styles.footerAtmosphere}>
         <div className={styles.glow1} />
      </div>
    </footer>
  );
}
