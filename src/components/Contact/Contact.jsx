import { useContext } from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { LanguageContext } from "../../LanguageContext.jsx";

export const Contact = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className={styles.container} id="contact">
      <div className={styles.inner}>
        <p className="sectionKicker">05 — contact.sh</p>
        <div className={styles.row}>
          <div className={styles.text}>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.description}</p>
          </div>

          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:www.ngendahermann14@gmail.com">www.ngendahermann14@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href="https://github.com/Hermann1412" target="_blank" rel="noopener noreferrer">
                github.com/Hermann1412
              </a>
            </li>
            <li className={styles.link}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
              </svg>
              <a href="tel:+243976994131">+243 976 994 131</a>
            </li>
          </ul>
        </div>

        <div className={styles.divider} />
        <p className={styles.copyright}>
          <span className={styles.prompt}>$</span> echo "© {new Date().getFullYear()} Hermann — {t.contact.copyright}"
        </p>
      </div>
    </footer>
  );
};
