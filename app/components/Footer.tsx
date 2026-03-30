import styles from "./Footer.module.css";

const locationQuery = "Kremna bb, 31242 Kremna, Srbija";
const locationGoogleHref =
  "https://www.google.com/maps?cid=6254896962477670200&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=sr-RS&source=embed";
const locationEmbedSrc = locationGoogleHref;
const locationViewHref = locationGoogleHref;
const locationDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationQuery)}&travelmode=driving`;

const LocationIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
    <path
      d="M10 2a6.5 6.5 0 0 0-6.5 6.5c0 4.8 6.5 9.5 6.5 9.5s6.5-4.7 6.5-9.5A6.5 6.5 0 0 0 10 2z"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinejoin="round"
      opacity="0.3"
    />
    <circle cx="10" cy="8.5" r="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <path
      d="M10 6.5v2l1.2 0.8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
    <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    <path
      d="M3 6.5L10 11l7-4.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const MapViewIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">
    <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6zM9 3v15M15 6v15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
    <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="14.5" cy="5.5" r="0.8" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
    <path
      d="M13 3h-2a4 4 0 0 0-4 4v2H5v3h2v7h3v-7h2.5l0.5-3H10V7a1 1 0 0 1 1-1h2V3z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.ambientBlob} aria-hidden="true" />
      <div className={styles.watermark} aria-hidden="true">
        KREMANSKA
      </div>

      <div className={styles.inner}>
        <div className={styles.ctaBand}>
          <div className={styles.ctaLeft}>
            <div className={styles.mapShell}>
              <div className={styles.mapHeader}>
                <span className={styles.ctaLabel}>
                  <span className={styles.ctaLabelLine} />
                  Lokacija izvora
                </span>
                <span className={styles.mapMeta}>Kremna, Tara</span>
              </div>

              <div className={styles.mapFrame}>
                <iframe
                  src={locationEmbedSrc}
                  title="Google mapa lokacije Kremanske vode"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapIframe}
                />

                <div className={styles.mapAtmosphere} />

                <a
                  href={locationDirectionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapOverlayLink}
                  aria-label="Pokreni navigaciju do lokacije Kremanske vode"
                >
                  <span className={styles.mapOverlayBadge}>
                    <span className={styles.badgeIcon}><CompassIcon /></span>
                    Pokreni navigaciju
                    <span className={styles.badgeShimmer} />
                  </span>
                </a>
              </div>

              <div className={styles.mapLinkRow}>
                <a
                  href={locationViewHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                  data-magnetic
                >
                  <span className={styles.mapLinkIcon}><MapViewIcon /></span>
                  Otvori mapu
                </a>
                <a
                  href={locationDirectionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLinkPrimary}
                  data-magnetic
                >
                  <span className={styles.mapLinkIcon}><CompassIcon /></span>
                  Google navigacija
                </a>
              </div>
            </div>
          </div>

          <div className={styles.ctaRight}>
            <p className={styles.ctaDesc}>
              Kremanska voda - premium izvorna voda sa srca Nacionalnog parka Tara.
              Visokoalkalna, bogata mineralima, direktno sa izvora do vase kuce.
            </p>
            <div className={styles.ctaActions}>
              <a
                href="https://kremanska.rs/online-prodaja/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                <span className={styles.ctaBtnText}>Narucite online</span>
                <span className={styles.ctaBtnArrow}>
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                    <path
                      d="M0 7h18M12 1l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className={styles.ctaShimmer} transform-origin="center" />
              </a>
              <a href="tel:+38163494238" className={styles.ctaPhone}>
                <span className={styles.phoneLabel}>Kontakt telefon</span>
                <span className={styles.phoneNumber}>+381 63 494 238</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoBlock}>
            <div className={styles.infoLabelWrap}>
              <span className={styles.infoIcon}>
                <LocationIcon />
              </span>
              <span className={styles.infoLabel}>Lokacija izvora</span>
            </div>
            <p className={styles.infoValue}>
              Kremna bb, 31242
              <br />
              Kremna, Srbija
            </p>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoLabelWrap}>
              <span className={styles.infoIcon}>
                <EmailIcon />
              </span>
              <span className={styles.infoLabel}>Email kontakt</span>
            </div>
            <a href="mailto:info@kremanska.rs" className={styles.infoLink}>
              info@kremanska.rs
            </a>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoLabelWrap}>
              <span className={styles.infoLabel}>Stranice</span>
            </div>
            <nav className={styles.navList}>
              {[
                { name: "Pocetna", href: "#hero" },
                { name: "Ponuda", href: "#products" },
                { name: "Kontakt", href: "#contact" },
                { name: "Zvanicni sajt", href: "https://kremanska.rs/", external: true },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoLabelWrap}>
              <span className={styles.infoLabel}>Pratite nas</span>
            </div>
            <div className={styles.socialList}>
              <a
                href="https://www.instagram.com/kremanskavoda/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                data-magnetic
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/KremanskaVoda/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                data-magnetic
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <p className={styles.copy}>
              &copy; {new Date().getFullYear()} Kremanska Voda. Sva prava zadrzana.
            </p>
          </div>
          <div className={styles.bottomRight}>
            <span className={styles.separator} />
            <p className={styles.copyRight}>Voda sa srca Nacionalnog parka Tara.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
